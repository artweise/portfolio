import { useState, useRef, useEffect, useCallback } from 'react';
import { RoundButton, ButtonText } from './stickyButtonStyle';

const StickyButton = ({ onClick }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastMouseTime = useRef(0);

  useEffect(() => {
    const animate = () => {
      setOffset((current) => {
        // Smooth animation to target, gentle return when "detaching"
        const lerpFactor = isHovering ? 0.15 : 0.12; // Reduced speed for smoothness

        const newX = current.x + (targetOffset.x - current.x) * lerpFactor;
        const newY = current.y + (targetOffset.y - current.y) * lerpFactor;

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetOffset, isHovering]);

  // Mouse move only for button (when cursor is ON the button)
  const handleMouseMove = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastMouseTime.current < 16) return; // ~60fps throttling
      lastMouseTime.current = now;

      if (!buttonRef.current || !isHovering) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      // Attraction works only when cursor is on the button
      if (distance > 0) {
        const maxPull = 80; // Maximum displacement
        const pullStrength = Math.min(distance / 100, 1); // Strength depends on distance from center

        setTargetOffset({
          x: (dx / distance) * maxPull * pullStrength,
          y: (dy / distance) * maxPull * pullStrength,
        });
      }
    },
    [isHovering]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);

    // "Detaching" effect with smooth oscillations
    const currentOffset = offset;
    const pushBackStrength = 0.4; // Reduced strength for gentleness

    // Sequence of smooth oscillations with damping
    const oscillations = [
      { delay: 0, strength: -pushBackStrength }, // Push back
      { delay: 220, strength: pushBackStrength * 0.7 }, // Return with inertia
      { delay: 380, strength: -pushBackStrength * 0.4 }, // Oscillation backward
      { delay: 540, strength: pushBackStrength * 0.2 }, // Weak oscillation
      { delay: 680, strength: -pushBackStrength * 0.1 }, // Very weak oscillation
      { delay: 800, strength: 0 }, // Final stop
    ];

    oscillations.forEach(({ delay, strength }) => {
      setTimeout(() => {
        setTargetOffset({
          x: currentOffset.x * strength,
          y: currentOffset.y * strength,
        });
      }, delay);
    });
  }, [offset]);

  return (
    <RoundButton
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      offsetX={offset.x}
      offsetY={offset.y}
    >
      <ButtonText offsetX={offset.x} offsetY={offset.y}>
        Get in touch
      </ButtonText>
    </RoundButton>
  );
};

export default StickyButton;
