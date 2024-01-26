import { IActiveTool } from '../../@types/contextTypes/tools';
import { draw } from '../painttool/draw';
import { drawEllipse } from '../painttool/ellipse';
import { drawRectangle } from '../painttool/rectangle';
import { drawText } from '../painttool/text';

export function drawEverything(activeTool: IActiveTool | null | undefined) {
  // This is switch case conditional functional returning a function based on selected tool
  switch (activeTool?.name) {
    case 'Brush':
      return draw;
    case 'Square':
      return drawRectangle;
    case 'Circle':
      return drawEllipse;
    case 'Text':
      return drawText;
    case 'Sticker':
      break;
    case null:
      return null;
  }
  return;
}
