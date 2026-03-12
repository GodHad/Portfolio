"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlowBackground() {
  const x = useSpring(0, { stiffness: 70, damping: 18, mass: 0.6 });
  const y = useSpring(0, { stiffness: 70, damping: 18, mass: 0.6 });

  useEffect(() => {
    const update = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", update, { passive: true });

    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px]"
        style={{ left: x, top: y, x: "-50%", y: "-50%" }}
      />
      <motion.div
        className="absolute h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-[120px]"
        style={{ left: x, top: y, x: "-15%", y: "-20%" }}
      />
    </div>
  );
}
