import { RefObject } from 'react';

export function initializeImage(
  baseCanvas: RefObject<HTMLCanvasElement>,
  imageSrc: string,
  canvasContext: CanvasRenderingContext2D | undefined | null,
  canvasImage: HTMLImageElement,
) {
  canvasImage.src = imageSrc;

  canvasImage.onload = () => {
    if (baseCanvas) {
      return canvasContext?.drawImage(canvasImage, 0, 0, 500, 500);
    }
  };
}
