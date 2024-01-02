import { IImageComponent } from "@/app/@types/componetnsTypes/imageComponents"
import Image from "next/image"
import { useEffect, useRef } from "react"


export const ImageComponet = ({src}:IImageComponent) => { // Image Component shows image
const baseCanvas = useRef<HTMLCanvasElement>(null);

useEffect(() => {
    if(baseCanvas.current) {
        const canvasContext = baseCanvas.current.getContext('2d');
        const canvasImage = new window.Image();

        canvasImage.src = src;

        canvasImage.onload = () => {
            if(baseCanvas) {
                canvasContext?.drawImage(canvasImage, 0, 0, 500, 500);
            }
          };
    }
}, [])
    return (
    <>
        {/* <img style={{width: '50%', height: '50%'}} alt="Image Selected" src={src} /> */}
        <canvas ref={baseCanvas} width="600px" height={'600px'} /> 
    </>
)
}