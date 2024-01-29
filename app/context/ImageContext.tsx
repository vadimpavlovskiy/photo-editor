import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IImage, CanvasContextType } from "../@types/contextTypes/image";
import { initializeCanvasImage } from "../functions/general/initializeImage";
import { DrownedObjectType } from "../@types/contextTypes/objects";

export const CanvasContext = createContext<CanvasContextType | null>(null); // Created global context to modify file

const ImageProvider = ({ children }: {children: ReactNode}) => {
  
  const [image, setImage] = useState<IImage | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const canvasContext = useRef<CanvasRenderingContext2D | null>(null);

  const backgroundCanvas = useRef<HTMLCanvasElement | null>(null);
  const backgroundCanvasContext = useRef<CanvasRenderingContext2D | null>(null);
  const canvasImage = new window.Image();

  const [objects, setObjects] = useState<DrownedObjectType[]>([])
  const [activeObject, setActiveObject] = useState(null);


  const initCanvasImage = useCallback(
    () => {
      console.log('InitCanvasImage triggered!');
      
      // Initialized Canvas are resposible for drawing
      const initializedCanvas = canvas.current;
      // Initialized Background Canvas are responsible for background image
      const initializedBackgroudCanvas = backgroundCanvas.current;
      if(!backgroundCanvas) return

      const initializedCanvasContext = initializedCanvas?.getContext("2d");
      const initializedBackgroundCanvasContext = initializedBackgroudCanvas?.getContext("2d");

      if (!initializedCanvasContext || !initializedBackgroundCanvasContext) return;

      canvasContext.current = initializedCanvasContext;
      backgroundCanvasContext!.current = initializedBackgroundCanvasContext;
      

      if(image) {
        const blob = new Blob([image!.image]); // Creating a Blob from image
        const imageUrl = URL.createObjectURL(blob); // Creating a path

        initializeCanvasImage(backgroundCanvas, imageUrl, backgroundCanvasContext.current, canvasImage)
      }
    },
    [image],
  )

  useEffect(() => {
    initCanvasImage()
  }, [initCanvasImage, backgroundCanvasContext])
  

  const uploadImage = (newImage: IImage) => { // Function upload image to context
    setImage(newImage);
  };

  const contextValue = useMemo(() => ({
    canvas,
    canvasContext,
    initCanvasImage,
    uploadImage,
    image,
    backgroundCanvas,
    backgroundCanvasContext,
    objects,
    activeObject,
    setActiveObject,
    setObjects
  }), [uploadImage, image])

  return <CanvasContext.Provider value={contextValue}>{children}</CanvasContext.Provider>
};

export default ImageProvider;
