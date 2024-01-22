import { IActiveTool } from '../../@types/contextTypes/tools';
import { draw } from '../painttool/draw';

export function drawEverything(activeTool: IActiveTool | null | undefined) {
  switch (activeTool?.name) {
    case 'Brush':
      console.log('This is a brush tool');
      return draw;
    case 'Square':
      console.log('This is a square tool');
      break;
    case 'Circle':
      console.log('This is a circle tool');
      break;
    case 'Text':
      console.log('This is a text tool');
      break;
    case 'Sticker':
      console.log('This is a sticker tool');
      break;
    case null:
      console.log('Tool is not selected');
      return null;
  }
  return;
}
