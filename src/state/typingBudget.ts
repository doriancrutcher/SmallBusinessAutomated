let current = 0;
const max = 4; // Increased from 2 to 4 to allow more cards to animate

export function requestTyping(): boolean { 
  if (current < max) { 
    current++; 
    return true; 
  } 
  return false; 
}

export function releaseTyping() { 
  current = Math.max(0, current - 1); 
} 