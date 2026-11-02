import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer / desktop
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        setIsHovered(!!isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing animation
    let curX = targetX;
    let curY = targetY;
    const loop = () => {
      curX += (targetX - curX) * 0.18;
      curY += (targetY - curY) * 0.18;
      setTrailingPos({ x: curX, y: curY });
      animFrame = requestAnimationFrame(loop);
    };
    animFrame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Tiny sharp center point */}
      <div
        className="fixed w-2 h-2 bg-[#42D9FF] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_8px_#42D9FF]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Trailing smooth magnetic aura */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 border transition-all duration-200 ease-out pointer-events-none ${
          isHovered
            ? 'w-12 h-12 bg-[#9B7BFF]/15 border-[#9B7BFF] scale-110 shadow-[0_0_20px_rgba(155,123,255,0.4)]'
            : 'w-7 h-7 bg-transparent border-[#9B7BFF]/40 scale-100'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </div>
  );
};

