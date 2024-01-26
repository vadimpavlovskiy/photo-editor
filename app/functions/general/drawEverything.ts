import { IActiveTool } from '../../@types/contextTypes/tools';
import { draw } from '../painttool/draw';
import { drawEllipse } from '../painttool/ellipse';
import { drawRectangle } from '../painttool/rectangle';

export function drawEverything(activeTool: IActiveTool | null | undefined) {
  // This is switch case conditional functional returning a function based on selected tool
  switch (activeTool?.name) {
    case 'Brush':
      return draw;
    case 'Square':
      return drawRectangle;
    case 'Circle':
      return drawEllipse;
      break;
    case 'Text':
      console.log('This is a text tool');
      break;
    case 'Sticker':
      break;
    case null:
      return null;
  }
  return;
}
