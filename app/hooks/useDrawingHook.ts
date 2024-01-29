import { RefObject, useContext, useEffect } from 'react';
import { IActiveTool } from '../@types/contextTypes/tools';
import { drawEverything } from '../functions/general/drawEverything';
import { draw } from '../functions/painttool/draw';
import { IImage } from '../@types/contextTypes/image';
import { CanvasContext } from '../context/ImageContext';
import { mergeCanvas } from '../functions/general/mergeCanvas';
import { DrownedObjectType } from '../@types/contextTypes/objects';

export function useDrawingHook({
  backgroundContext,
  baseCanvas,
  canvasContext,
  activeTool,
  objects,
  setObjects,
}: {
  backgroundContext: CanvasRenderingContext2D;
  baseCanvas: RefObject<HTMLCanvasElement>;
  canvasContext: CanvasRenderingContext2D;
  activeTool: IActiveTool | undefined | null;
  objects: DrownedObjectType[] | undefined;
  setObjects: React.Dispatch<React.SetStateAction<DrownedObjectType[]>>;
}) {
  const activeDrawingFunction = drawEverything(activeTool);
  useEffect(() => {
    console.log(baseCanvas);

    let isDrawing = false; // Boolean value to correct work of mouse listener
    let pointsArray: any = []; // Array of points to draw a smooth lines
    // We start drawing
    console.log('UseDrawingHook has been triggered!');
    console.log(backgroundContext, canvasContext);

    const handleMouseDown = (e: any) => {
      isDrawing = true;
    };
    const handleMouseMove = (e: any) => {
      if (isDrawing) {
        console.log(activeDrawingFunction);
        if (activeDrawingFunction !== null) {
          activeDrawingFunction!(
            e,
            backgroundContext,
            canvasContext,
            baseCanvas,
            pointsArray,
            objects,
            setObjects,
          );
        }
        // Using a draw function to free drawing
      }
    };
    const handleMouseUp = (e: any) => {
      if (isDrawing) {
        if (activeDrawingFunction !== null) {
          activeDrawingFunction!(
            e,
            backgroundContext,
            canvasContext,
            baseCanvas,
            pointsArray,
            objects,
            setObjects,
          ); // Using a draw function to free drawing
        }
        isDrawing = false;
        // mergeCanvas(backgroundCanvas, baseCanvas);
        // Here I need to put a merge drawing canvas to background canvas
        pointsArray = []; // Here we need to reset array to be able draw from scretch
      }
    };

    baseCanvas.current?.addEventListener('mousedown', handleMouseDown);
    baseCanvas.current?.addEventListener('mousemove', handleMouseMove);
    baseCanvas.current?.addEventListener('mouseup', handleMouseUp);

    return () => {
      // Delete every listener after dependencies changes such as Tool deactivation or changing the tool
      baseCanvas.current?.removeEventListener('mousedown', handleMouseDown);
      baseCanvas.current?.removeEventListener('mousemove', handleMouseMove);
      baseCanvas.current?.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeDrawingFunction, activeTool]); // Tool deactivation or changing the tool
  return;
}
