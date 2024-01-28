import { useEffect } from 'react';
import { drawAllRect } from '../functions/general/drawAllRect';
import { drawAllEllipse } from '../functions/general/drawAllEllipse';
import {
  Draw,
  DrownedObjectType,
  Ellipse,
  Rectangle,
  Text,
} from '../@types/contextTypes/objects';
import { drawAllPoints } from '../functions/general/drawAllPoints';
import { drawAllText } from '../functions/general/drawAllText';

export function useRedrawingHook(objects: DrownedObjectType[]) {
  useEffect(() => {
    objects.forEach((obj: Ellipse | Rectangle | Draw | Text) => {
      if (obj.type === 'ellipse') {
        drawAllEllipse(obj.startX, obj.startY, obj.x, obj.y, obj.context);
      }
      if (obj.type === 'rectangle') {
        drawAllRect(obj.startX, obj.startY, obj.width, obj.height, obj.context);
      }
      if (obj.type === 'draw') {
        drawAllPoints(obj.pointsArray, obj.context);
      }
      if (obj.type === 'text') {
        drawAllText(obj.x, obj.y, obj.font, obj.text, obj.context);
      }
    });

    return () => {};
  }, [JSON.stringify(objects)]);
}
