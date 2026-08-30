"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./FadeIn.module.css";

interface FadeInProps {
  children: React.ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  className?: string;
  as?: React.ElementType;
}

export function FadeIn({ children, delay = 0, className = "", as: Component = "div" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If element is in view, add the visible class and unobserve
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before it comes fully into view
        threshold: 0.1,
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const delayClass = delay > 0 ? styles[`delay-${delay}`] : "";

  return (
    <Component
      ref={domRef}
      className={`${styles.hidden} ${isVisible ? styles.visible : ""} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}
