import { IImageComponent } from "@/app/@types/componetnsTypes/imageComponents"
import { CanvasContext } from "@/app/context/ImageContext";
import { ToolsContext } from "@/app/context/ToolsContext";
import { draw } from "@/app/functions/painttool/draw";
import { useDrawingHook } from "@/app/hooks/useDrawingHook";
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"


export const ImageComponet = () => { // Image Component shows image
    const context = useContext(CanvasContext)
    if(context?.image) {
        return (
            <>
                {/* <img style={{width: '50%', height: '50%'}} alt="Image Selected" src={src} /> */}
                <canvas ref={context?.canvas} width={"500px"} height={'500px'} /> 
            </>
        )
    }
    else {
        return <p>Image doesnt selected</p>
    }
}