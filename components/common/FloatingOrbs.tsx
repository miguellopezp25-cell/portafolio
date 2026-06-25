"use client";

import { useEffect, useRef } from "react";

export default function FloatingOrbs() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;
    let mx = 0, my = 0;
    let cx1 = 0, cy1 = 0;
    let cx2 = 0, cy2 = 0;
    let vx1 = 0, vy1 = 0;
    let vx2 = 0, vy2 = 0;

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const c1x = w * 0.1;
      const c1y = h * 0.1;
      const c2x = w * 0.85;
      const c2y = h * 0.85;

      const dx1 = cx1 + c1x - mx;
      const dy1 = cy1 + c1y - my;
      const d1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      const force1 = Math.max(0, 1 - d1 / 250);

      const dx2 = cx2 + c2x - mx;
      const dy2 = cy2 + c2y - my;
      const d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      const force2 = Math.max(0, 1 - d2 / 250);

      const fx1 = d1 > 0.1 ? (dx1 / d1) * force1 * 8 : 0;
      const fy1 = d1 > 0.1 ? (dy1 / d1) * force1 * 8 : 0;
      const fx2 = d2 > 0.1 ? (dx2 / d2) * force2 * 8 : 0;
      const fy2 = d2 > 0.1 ? (dy2 / d2) * force2 * 8 : 0;

      vx1 += fx1 - cx1 * 0.02;
      vy1 += fy1 - cy1 * 0.02;
      vx1 *= 0.88;
      vy1 *= 0.88;
      cx1 += vx1;
      cy1 += vy1;

      vx2 += fx2 - cx2 * 0.02;
      vy2 += fy2 - cy2 * 0.02;
      vx2 *= 0.88;
      vy2 *= 0.88;
      cx2 += vx2;
      cy2 += vy2;

      if (orb1.current) {
        orb1.current.style.transform = `translate(${cx1}px, ${cy1}px)`;
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${cx2}px, ${cy2}px)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={orb1}
        className="fixed top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-purple-900/20 blur-[120px] -z-10"
      />
      <div
        ref={orb2}
        className="fixed bottom-[-10%] right-[-10%] w-[30%] aspect-square rounded-full bg-blue-900/10 blur-[120px] -z-10"
      />
    </>
  );
}
