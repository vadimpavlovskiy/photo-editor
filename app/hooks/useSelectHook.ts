import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
} from 'react';
import { drawEverything } from '../functions/general/drawEverything';
import { IActiveTool } from '../@types/contextTypes/tools';
import {
  Draw,
  DrownedObjectType,
  Ellipse,
  Rectangle,
  Text,
} from '../@types/contextTypes/objects';

export function useSelectHook({
  baseCanvas,
  activeTool,
  objects,
  activeObject,
  setActiveObject,
}: {
  baseCanvas: RefObject<HTMLCanvasElement>;
  activeTool: IActiveTool | null | undefined;
  objects: DrownedObjectType[] | undefined;
  activeObject: any;
  setActiveObject: Dispatch<SetStateAction<Object | null>>;
}) {
  useEffect(() => {
    let startX: number = 0;
    let startY: number = 0;
    let isDragging = false;
    const handleMouseDown = (e: MouseEvent) => {
      if (activeTool?.name === 'Arrow' && baseCanvas.current) {
        const rect = baseCanvas.current?.getBoundingClientRect();
        let x: number = e.clientX - rect!.left; // Relative to canvas user mouse X axis
        let y: number = e.clientY - rect!.top; // Relative to canvas user mouse Y axis
        // console.dir({ objects, x, y });
        objects?.forEach((obj: Rectangle | Ellipse | Draw | Text) => {
          if (obj.type === 'rectangle' && !isDragging) {
            if (
              obj.startX <= x &&
              obj.x >= x &&
              obj.startY <= y &&
              obj.y >= y
            ) {
              console.log(isDragging);
              isDragging = true;
              startX = x;
              startY = y;
              setActiveObject(obj);
            }
          }
        });
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && baseCanvas.current) {
        const rect = baseCanvas.current?.getBoundingClientRect();
        let x: number = e.clientX - rect!.left; // Relative to canvas user mouse X axis
        let y: number = e.clientY - rect!.top; // Relative to canvas user mouse Y axis

        console.log(isDragging);

        const distanseX = startX - x;
        const distanseY = startY - y;

        console.dir({ distanseX, distanseY, isDragging });
      }
    };
    const handleMouseUp = (e: MouseEvent) => {
      const rect = baseCanvas.current?.getBoundingClientRect();
      let x: number = e.clientX - rect!.left; // Relative to canvas user mouse X axis
      let y: number = e.clientY - rect!.top; // Relative to canvas user mouse Y axis

      if (isDragging) {
        isDragging = false;
        setActiveObject(null);
      }
    };
    if (activeTool?.name === 'Arrow' && baseCanvas.current) {
      baseCanvas.current?.addEventListener('mousedown', handleMouseDown);
      baseCanvas.current?.addEventListener('mousemove', handleMouseMove);
      baseCanvas.current?.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (baseCanvas.current && activeTool?.name === 'Arrow') {
        baseCanvas.current?.removeEventListener('mousedown', handleMouseDown);
        baseCanvas.current?.removeEventListener('mousemove', handleMouseMove);
        baseCanvas.current?.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [activeTool, setActiveObject, objects]);
  return;
}
