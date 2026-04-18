import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = { threshold: 0.1, retrigger: false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (!options.retrigger) {
          observer.unobserve(entry.target);
        }
      } else if (options.retrigger) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold,
      rootMargin: "0px 0px -50px 0px"
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.retrigger]);

  return [elementRef, isVisible];
};

export default useScrollReveal;
