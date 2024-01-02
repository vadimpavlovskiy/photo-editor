import React, { createContext, useState } from "react";
import { IImage, ImageContextType } from "../@types/contextTypes/image";

export const ImageContext = createContext<ImageContextType | null>(null); // Created global context to modify file

const ImageProvider = ({ children }: any) => {
  const [image, setImage] = useState<IImage | null>(null);

  const uploadImage = (newImage: IImage) => { // Function upload image to context
    console.log(newImage);
    setImage(newImage);
  };

  return (
    <ImageContext.Provider value={{ image, uploadImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
