import { useEffect } from 'react';

// Function to initialize scroll animation observers
export const initScrollAnimations = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust based on when you want the animation to trigger
      }
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
    
    // Cleanup observer on component unmount
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
};

// Add entry animation delay based on index (for staggered animations)
export const getAnimationDelay = (index: number, baseDelay = 100): string => {
  return `${index * baseDelay}ms`;
};