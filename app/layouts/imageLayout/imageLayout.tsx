import { ImageContextType } from "@/app/@types/contextTypes/image";
import { ImageComponet } from "@/app/components/imageComponent/imageComponent"
import { ImageContext } from "@/app/context/ImageContext"
import { useContext } from "react"
import { ToolsLayout } from "../toolsLayout/toolsLayout";

export const ImageLayout = () => {
    const {image} = useContext(ImageContext) as ImageContextType;

    if(image) {
        const blob = new Blob([image.image]); // Creating a Blob from image
        const imageUrl = URL.createObjectURL(blob); // Creating a path
        
        return (
            <>
                <ImageComponet src={imageUrl} />
                <ToolsLayout />
            </>
        )
    } else {
       return <div>Image not selected!</div>
    }
}