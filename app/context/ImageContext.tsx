import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IImage, CanvasContextType } from "../@types/contextTypes/image";
import { initializeCanvasImage } from "../functions/general/initializeImage";

export const CanvasContext = createContext<CanvasContextType | null>(null); // Created global context to modify file

const ImageProvider = ({ children }: {children: ReactNode}) => {
  
  const [image, setImage] = useState<IImage | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const canvasContext = useRef<CanvasRenderingContext2D | null>(null);
  const canvasImage = new window.Image();


  const initCanvasImage = useCallback(
    () => {
      const initializedCanvas = canvas.current;
      if(!canvas) return

      const initializedCanvasContext = initializedCanvas?.getContext('2d')
      if (!initializedCanvasContext) return;

      canvasContext.current = initializedCanvasContext;

      if(image) {
        const blob = new Blob([image!.image]); // Creating a Blob from image
        const imageUrl = URL.createObjectURL(blob); // Creating a path

        initializeCanvasImage(canvas, imageUrl, canvasContext.current, canvasImage)
      }
    },
    [image],
  )

  useEffect(() => {
    initCanvasImage()
  }, [initCanvasImage])
  

  const uploadImage = (newImage: IImage) => { // Function upload image to context
    setImage(newImage);
  };

  const contextValue = useMemo(() => ({
    canvas,
    canvasContext,
    initCanvasImage,
    uploadImage,
    image
  }), [initCanvasImage, uploadImage, image])

  return <CanvasContext.Provider value={contextValue}>{children}</CanvasContext.Provider>
};

export default ImageProvider;
