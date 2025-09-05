"use client";

import { useState, useEffect, createContext, useContext, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Global Transition Context
interface GlobalTransitionContextType {
  triggerTransition: (color?: string) => Promise<void>;
  isTransitioning: boolean;
}

const GlobalTransitionContext = createContext<GlobalTransitionContextType | undefined>(undefined);

export const useGlobalTransition = () => {
  const context = useContext(GlobalTransitionContext);
  if (!context) {
    throw new Error("useGlobalTransition must be used within GlobalTransitionProvider");
  }
  return context;
};

// Provider Component
export const GlobalTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState({
    isActive: false,
    color: "#ffffff"
  });

  const triggerTransition = (color: string = "#ffffff") => {
    return new Promise<void>((resolve) => {
      setIsTransitioning(true);
      setTransitionState({
        isActive: true,
        color
      });
      
      // Transition will resolve when animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionState(prev => ({ ...prev, isActive: false }));
        resolve();
      }, 3000);
    });
  };

  return (
    <GlobalTransitionContext.Provider value={{ triggerTransition, isTransitioning }}>
      {children}
      <TransitionReveal 
        isActive={transitionState.isActive}
        color={transitionState.color}
      />
    </GlobalTransitionContext.Provider>
  );
};

interface TransitionRevealProps {
  isActive?: boolean;
  color?: string;
}

export default function TransitionReveal({ 
  isActive = false, 
  color = "#ffffff"
}: TransitionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
    }
  }, [isActive]);

  const handleAnimationComplete = () => {
    // Hide after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9990] rounded-full pointer-events-none"
          initial={{ 
            scale: 0,
            x: "-50%",
            y: "-50%"
          }}
          animate={{ 
            scale: [0, 0.1, 0.6, 0.8, 1],
            x: "-50%",
            y: "-50%"
          }}
          exit={{ 
            scale: 0,
            x: "-50%",
            y: "-50%"
          }}
          transition={{ 
            duration: 3, 
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
          style={{
            top: "50%",
            left: "50%",
            width: "200vmax",
            height: "200vmax",
            transform: "translate(-50%, -50%)",
            backgroundColor: color,
            filter: "blur(100px)",
          }}
        />
      )}
    </AnimatePresence>
  );
}

// Section-scoped circular overlay (not global)
export function SectionCircularOverlay({
  isActive = false,
  color = "#ffffff",
  duration = 3
}: {
  isActive?: boolean;
  color?: string;
  duration?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isActive) setIsVisible(true);
  }, [isActive]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-0 z-[9990] rounded-full pointer-events-none"
          initial={{ 
            scale: 0,
            x: "-50%",
            y: "-50%"
          }}
          animate={{ 
            scale: [0, 0.1, 0.6, 0.8, 1],
            x: "-50%",
            y: "-50%"
          }}
          exit={{ 
            scale: 0,
            x: "-50%",
            y: "-50%"
          }}
          transition={{ 
            duration, 
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.2, 0.5, 0.8, 1]
          }}
          style={{
            top: "50%",
            left: "50%",
            width: "200vmax",
            height: "200vmax",
            transform: "translate(-50%, -50%)",
            backgroundColor: color,
            filter: "blur(100px)",
          }}
        />
      )}
    </AnimatePresence>
  );
}

// Section Transition Component
interface SectionTransitionProps {
  children: ReactNode;
  transitionColor?: string;
  className?: string;
}

export function SectionTransition({ 
  children, 
  transitionColor = "#ffffff",
  className = ""
}: SectionTransitionProps) {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { triggerTransition } = useGlobalTransition();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger when section completely exits viewport
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0 && !hasTriggered) {
            setHasTriggered(true);
            
            // Trigger single circular transition
            triggerTransition(transitionColor);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px" // Trigger when bottom is 100px below viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered, transitionColor, triggerTransition]);

  return (
    <motion.div
      ref={sectionRef}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

// Scroll-based Animation Components
export function ScrollReveal({ 
  children, 
  className = "",
  delay = 0,
  direction = "up" as "up" | "down" | "left" | "right"
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 50, opacity: 0 };
      case "down": return { y: -50, opacity: 0 };
      case "left": return { x: 50, opacity: 0 };
      case "right": return { x: -50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up": return { y: 0, opacity: 1 };
      case "down": return { y: 0, opacity: 1 };
      case "left": return { x: 0, opacity: 1 };
      case "right": return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.2,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}

// Parallax Component
export function ParallaxScroll({ 
  children, 
  className = "",
  speed = 0.5 
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{ y: offset }}
    >
      {children}
    </motion.div>
  );
}
