export interface IImage {
  // Property of image
  id: number;
  image: File;
}
export type ImageContextType = {
  // Image type context
  image: IImage | null;
  uploadImage: (image: IImage) => void;
};
