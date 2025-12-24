import React, { useRef, useState, useEffect } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY;

        // If it's the first section (offsetTop = 0), just apply a small parallax
        const elementTop = ref.current.offsetTop;
        let relativeOffset = 0;

        if (elementTop === 0) {
          relativeOffset = scrollTop * speed; // subtle parallax for Hero
        } else {
          relativeOffset = (scrollTop - elementTop) * speed; // normal parallax for others
        }

        setOffset(relativeOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
      className={`${className}`}
    >
      {children}
    </div>
  );
};
