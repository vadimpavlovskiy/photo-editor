import { ImageContextType } from "@/app/@types/contextTypes/image";
import { ImageComponet } from "@/app/components/imageComponent/imageComponent"
import { ImageContext } from "@/app/context/ImageContext"
import { useContext } from "react"

export const ImageLayout = () => {
    const {image} = useContext(ImageContext) as ImageContextType;

    if(image) {
        const blob = new Blob([image.image]); // Creating a Blob from image
        const imageUrl = URL.createObjectURL(blob); // Creating a path
        
        return (
            <ImageComponet src={imageUrl} />
        )
    } else {
       return <div>Image not selected!</div>
    }
}