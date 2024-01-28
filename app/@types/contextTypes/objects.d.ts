export interface Ellipse {
  type: 'ellipse';
  startX: number;
  startY: number;
  x: number;
  y: number;
  context: CanvasRenderingContext2D;
}

export interface Rectangle {
  type: 'rectangle';
  startX: number;
  startY: number;
  x: number;
  y: number;
  width: number;
  height: number;
  context: CanvasRenderingContext2D;
}
export interface Text {
  type: 'text';
  x: number;
  y: number;
  font: string;
  text: string;
  context: CanvasRenderingContext2D;
}

export interface Draw {
  type: 'draw';
  pointsArray: { x: number; y: number }[];
  context: CanvasRenderingContext2D;
}

export type DrownedObjectType = Ellipse | Rectangle | Draw | Text;
