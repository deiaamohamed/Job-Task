import { useEffect, useRef } from "react";
import Fluid from "./fluid-simulation";

export default function FluidEffect() {
  const canvasRef = useRef(null);
  const cleanupRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cleanup = Fluid(canvas);
    cleanupRef.current = cleanup;

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
    />
  );
}
