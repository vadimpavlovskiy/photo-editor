import { RefObject, useEffect } from 'react';
import { draw } from '../functions/painttool/draw';

export function useDrawingHook(
  baseCanvas: RefObject<HTMLCanvasElement>,
  src: string,
) {
  useEffect(() => {
    let isDrawing = false; // Boolean value to correct work of mouse listener
    let pointsArray: any = []; // Array of points to draw a smooth lines

    // Add the event listener
    // baseCanvas.current?.addEventListener('mousedown', (e) => {
    //   // We start drawing
    //   isDrawing = true;
    // });
    // baseCanvas.current?.addEventListener('mousemove', (e) => {
    //   if (isDrawing) {
    //     draw(e, canvasContext, baseCanvas, pointsArray); // Using a draw function to free drawing
    //   }
    // });
    // baseCanvas.current?.addEventListener('mouseup', (e) => {
    //   if (isDrawing) {
    //     draw(e, canvasContext, baseCanvas, pointsArray);
    //     isDrawing = false;
    //     pointsArray = []; // Here we need to reset array to be able draw from scretch
    //   }
    // });
  });

  return;
}
