import { useEffect, useRef, useState } from "react";
import { typeText } from "@/utils/typingEngine";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { requestTyping, releaseTyping } from "@/state/typingBudget";

// Global state for sequential flash effect
let allTypingComplete = false;
let flashCallbacks: (() => void)[] = [];
let flashIndex = 0;

export function triggerSequentialFlash() {
  if (flashCallbacks.length > 0) {
    flashIndex = 0;
    const flashNext = () => {
      if (flashIndex < flashCallbacks.length) {
        flashCallbacks[flashIndex]();
        flashIndex++;
        setTimeout(flashNext, 300); // 300ms delay between each flash
      }
    };
    flashNext();
  }
}

type Props = {
  title: string;
  valueText: string;
  childrenAfter?: React.ReactNode; // chips and metrics
  className?: string;
};

export default function TypingRevealer({ title, valueText, childrenAfter, className }: Props) {
  const { ref, seen } = useInViewOnce<HTMLDivElement>();
  const titleEl = useRef<HTMLDivElement>(null);
  const valueEl = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  // Debug logging
  console.log(`TypingRevealer: ${title} - ${valueText}`, { seen, done });

  // Register flash callback
  useEffect(() => {
    const flashCallback = () => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 600); // Flash for 600ms
    };
    
    flashCallbacks.push(flashCallback);
    
    return () => {
      const index = flashCallbacks.indexOf(flashCallback);
      if (index > -1) {
        flashCallbacks.splice(index, 1);
      }
    };
  }, []);

  useEffect(() => {
    if (!seen) return;
    
    // Check if we can get typing budget
    if (!requestTyping()) {
      // If no typing budget, still show typing effect but faster
      if (titleEl.current && valueEl.current) {
        // Fast typing fallback when budget is exhausted
        setTimeout(() => {
          typeText(titleEl.current!, title, { 
            cps: 80, // Much faster typing
            jitter: 0.1, 
            onDone: () => {
              typeText(valueEl.current!, valueText, { 
                cps: 100, 
                jitter: 0.1, 
                onDone: () => {
                  setDone(true);
                  // Check if this was the last typing animation
                  if (flashCallbacks.length > 0 && !allTypingComplete) {
                    allTypingComplete = true;
                    setTimeout(() => {
                      triggerSequentialFlash();
                    }, 500); // Wait 500ms after last typing completes
                  }
                }
              });
            }
          });
        }, 100);
      } else {
        // Fallback: show text immediately if elements not found
        if (titleEl.current) titleEl.current.textContent = title;
        if (valueEl.current) valueEl.current.textContent = valueText;
        setDone(true);
      }
      return;
    }

    const t1 = titleEl.current;
    const t2 = valueEl.current;
    if (!t1 || !t2) {
      releaseTyping();
      // Fallback: show text immediately if elements not found
      if (t1) t1.textContent = title;
      if (t2) t2.textContent = valueText;
      setDone(true);
      return;
    }

    // clear any server or placeholder text
    t1.textContent = "";
    t2.textContent = "";

          // Add a small delay to ensure elements are ready
      setTimeout(() => {
        const cleanup1 = typeText(t1, title, { 
          cps: 45, 
          jitter: 0.15, 
          onDone: () => {
            typeText(t2, valueText, { 
              cps: 55, 
              jitter: 0.18, 
              onDone: () => {
                setDone(true);
                releaseTyping();
                // Check if this was the last typing animation
                if (flashCallbacks.length > 0 && !allTypingComplete) {
                  allTypingComplete = true;
                  setTimeout(() => {
                    triggerSequentialFlash();
                  }, 500); // Wait 500ms after last typing completes
                }
              }
            });
          }
        });

      // Fallback timeout to ensure text is always shown
      setTimeout(() => {
        if (t1 && !t1.textContent) {
          console.log(`Fallback: showing title for ${title}`);
          t1.textContent = title;
        }
        if (t2 && !t2.textContent) {
          console.log(`Fallback: showing value for ${valueText}`);
          t2.textContent = valueText;
        }
        setDone(true);
        releaseTyping();
      }, 5000); // 5 second fallback

    }, 100);

  }, [seen, title, valueText]);

  return (
    <div ref={ref} className={className}>
      {/* Title placeholder to lock layout */}
      <div className="sr-only" aria-hidden="true">{title}</div>
      <div className={`type-line type-title ${done ? 'typing-complete' : ''}`} ref={titleEl} aria-label={title} />
      <div className="sr-only" aria-hidden="true">{valueText}</div>
      <div className={`type-line type-sub ${done ? 'typing-complete' : ''}`} ref={valueEl} />
      <div className={`after-block ${done ? "after-in" : ""}`} aria-hidden={!done}>
        {childrenAfter}
      </div>
      
      {/* Flash effect indicator */}
      {isFlashing && (
        <div className="absolute bottom-2 right-2 bg-secondary/20 rounded-lg px-3 py-1 animate-pulse">
          <span className="text-secondary text-sm font-medium">Ready!</span>
        </div>
      )}
    </div>
  );
} 