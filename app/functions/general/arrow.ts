import { RefObject } from 'react';

export function arrow(e: any, baseCanvas: RefObject<HTMLCanvasElement>) {
  const rect = baseCanvas.current?.getBoundingClientRect();
  let x = e.clientX - rect!.left; // Relative to canvas user mouse X axis
  let y = e.clientY - rect!.top; // Relative to canvas user mouse Y axis

  console.log(x, y);
}
