import { RefObject } from 'react';

export function initializeCanvasImage(
  baseCanvas: RefObject<HTMLCanvasElement>,
  imageSrc: string,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvasImage: HTMLImageElement,
) {
  // This function is filling background canvas with image
  canvasImage.src = imageSrc;

  canvasImage.onload = () => {
    if (baseCanvas) {
      return canvasContext?.drawImage(canvasImage, 0, 0, 500, 500);
    }
  };
}
