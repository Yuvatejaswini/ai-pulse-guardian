import { useEffect, useState } from "react";

export const useCounterAnimation = (end: number, duration: number = 2000, start: number = 0, isVisible: boolean = true) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const startValue = start;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  return count;
};
