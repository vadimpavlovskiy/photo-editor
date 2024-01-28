import { IImage } from '@/app/@types/contextTypes/image';

export function setImage(
  event: React.ChangeEvent<HTMLInputElement>,
  uploadImage: (image: IImage) => void,
): void {
  console.log('SetImage has been triggered!');

  const target = event.target as HTMLInputElement;
  const image = target.files?.[0];

  console.log(image); // Just for debug

  if (image !== undefined) {
    return uploadImage({
      id: Math.random(),
      image: image,
    });
  }
}
