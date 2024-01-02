import { IImageComponent } from "@/app/@types/componetnsTypes/imageComponents"
import Image from "next/image"


export const ImageComponet = ({src}:IImageComponent) => { // Image Component shows image
return (
    <>
        <img style={{width: '50%', height: '50%'}} alt="Image Selected" src={src} /> 
    </>
)
}