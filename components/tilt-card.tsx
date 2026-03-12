"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, type MotionStyle } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glareClassName?: string;
  maxSkew?: number;
  maxDrift?: number;
};

export function TiltCard({
  children,
  className = "",
  glareClassName = "",
  maxSkew = 4,
  maxDrift = 8,
}: TiltCardProps) {
  const skewX = useSpring(0, { stiffness: 170, damping: 18, mass: 0.7 });
  const skewY = useSpring(0, { stiffness: 170, damping: 18, mass: 0.7 });
  const driftX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.75 });
  const driftY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.75 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(103, 232, 249, 0.16), rgba(103, 232, 249, 0.08) 20%, transparent 60%)`;
  const shadow = useMotionTemplate`${driftX}px ${driftY}px 70px rgba(0, 0, 0, 0.28)`;

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const offsetX = (px - 0.5) * 2;
    const offsetY = (py - 0.5) * 2;

    skewX.set(offsetX * maxSkew);
    skewY.set(offsetY * maxSkew * -1);
    driftX.set(offsetX * maxDrift);
    driftY.set(offsetY * maxDrift);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const reset = () => {
    skewX.set(0);
    skewY.set(0);
    driftX.set(0);
    driftY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  const shellStyle: MotionStyle = {
    skewX,
    skewY,
    boxShadow: shadow,
    transformOrigin: "center center",
  };

  const glareStyle: MotionStyle = {
    backgroundImage: glare,
    x: driftX,
    y: driftY,
  };

  return (
    <motion.div
      className={`tilt-shell ${className}`.trim()}
      style={shellStyle}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 ${glareClassName}`.trim()}
        style={glareStyle}
      />
      <div className="relative h-full w-full">{children}</div>
    </motion.div>
  );
}
