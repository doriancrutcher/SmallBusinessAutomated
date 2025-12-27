import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, headerAction }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Store the currently focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Focus the first focusable element in the modal
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Check if content is scrollable and handle scroll events
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const content = contentRef.current;
    
    const checkScrollable = () => {
      if (content) {
        const hasScroll = content.scrollHeight > content.clientHeight;
        setShowScrollIndicator(hasScroll);
      }
    };

    const handleScroll = () => {
      if (content) {
        const { scrollTop, scrollHeight, clientHeight } = content;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 5; // 5px threshold
        setIsAtBottom(atBottom);
        setShowScrollIndicator(!atBottom && content.scrollHeight > content.clientHeight);
      }
    };

    checkScrollable();
    content.addEventListener('scroll', handleScroll);
    
    // Re-check on window resize
    window.addEventListener('resize', checkScrollable);
    
    return () => {
      content.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleScrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: contentRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleClose = () => {
    onClose();
    // Restore focus to the previously focused element
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  if (!isOpen) return null;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="min-h-screen flex items-start justify-center p-4 pt-8 pb-8">
        <div
          ref={modalRef}
          className={`w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl my-8 ${
            prefersReducedMotion ? '' : 'animate-in fade-in-0 slide-in-from-bottom-2 duration-180'
          }`}
          style={{
            animation: prefersReducedMotion ? 'none' : undefined,
            transform: prefersReducedMotion ? 'none' : 'translateY(0)',
            opacity: prefersReducedMotion ? 1 : undefined,
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div className="flex-1">
              <h2 id="modal-title" className="text-xl font-semibold text-foreground">
                {title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {headerAction}
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-zinc-900"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            <div 
              ref={contentRef}
              className="p-6 max-h-[70vh] overflow-y-auto"
            >
              {children}
            </div>
            
            {/* Scroll Indicator */}
            {showScrollIndicator && !isAtBottom && (
              <div 
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
                onClick={handleScrollToBottom}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleScrollToBottom();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Scroll to bottom of content"
              >
                <div className="w-8 h-8 bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-zinc-700 transition-all duration-200 group-hover:bg-zinc-700/80 group-hover:scale-110 group-hover:border-zinc-600">
                  <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">Click to scroll down</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
} 