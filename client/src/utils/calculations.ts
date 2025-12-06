export const calculateWPM = (text: string, timeInSeconds: number): number => {
  const words = text.trim().split(/\s+/).length;
  const minutes = timeInSeconds / 60;
  return Math.round(words / minutes);
};

export const calculateAccuracy = (original: string, typed: string): number => {
  let correct = 0;
  const minLength = Math.min(original.length, typed.length);
  
  for (let i = 0; i < minLength; i++) {
    if (original[i] === typed[i]) correct++;
  }
  
  return Math.round((correct / original.length) * 100);
};
