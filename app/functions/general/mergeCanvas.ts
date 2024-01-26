import { RefObject } from 'react';

export function mergeCanvas(
  backgroundCanvas: RefObject<HTMLCanvasElement>,
  baseCanvas: RefObject<HTMLCanvasElement>,
) {
  const backgroundImageData = backgroundCanvas.current?.getContext('2d');
  const updateBaseCanvas = baseCanvas.current?.toDataURL('image/png');

  if (backgroundImageData && updateBaseCanvas) {
    let image = new Image();

    image.onload = () => {
      backgroundImageData.drawImage(image, 0, 0);
    };

    image.src = updateBaseCanvas;
  }
}
