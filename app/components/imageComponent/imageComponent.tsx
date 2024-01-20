import { IImageComponent } from "@/app/@types/componetnsTypes/imageComponents"
import { initializeImage } from "@/app/functions/general/initializeImage";
import { draw } from "@/app/functions/painttool/draw";
import { useDrawingHook } from "@/app/hooks/useDrawingHook";
import Image from "next/image"
import { useEffect, useRef, useState } from "react"


export const ImageComponet = ({src}:IImageComponent) => { // Image Component shows image
const baseCanvas = useRef<HTMLCanvasElement>(null);

useDrawingHook(baseCanvas, src);

    return (
    <>
        {/* <img style={{width: '50%', height: '50%'}} alt="Image Selected" src={src} /> */}
        <canvas ref={baseCanvas} width={"500px"} height={'500px'} /> 
    </>
)
}