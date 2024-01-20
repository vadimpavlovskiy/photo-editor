import { RefObject } from 'react';

export function positionCalculation( // This function calculate mouse position
  canvas: RefObject<HTMLCanvasElement>,
  event: any,
) {
  if (canvas.current) {
    let coordX = event.clientX - canvas.current.offsetLeft;
    let coordY = event.clientY - canvas.current.offsetTop;
    return { coordX, coordY };
  }
}
