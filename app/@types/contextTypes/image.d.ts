export interface IImage {
  // Property of image
  id: number;
  image: File;
}
export type CanvasContextType = {
  // Image type context
  image: IImage | null;
  canvas: MutableRefObject<HTMLCanvasElement | null>;
  canvasContext: MutableRefObject<CanvasRenderingContext2D | null>;

  backgroundCanvas: MutableRefObject<HTMLCanvasElement | null>;
  backgroundCanvasContext: MutableRefObject<CanvasRenderingContext2D | null>;
  initCanvasImage: () => void;
  uploadImage: (image: IImage) => void;
};
