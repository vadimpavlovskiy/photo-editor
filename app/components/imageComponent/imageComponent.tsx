import { IImageComponent } from "@/app/@types/componetnsTypes/imageComponents"
import { CanvasContext } from "@/app/context/ImageContext";
import { ToolsContext } from "@/app/context/ToolsContext";
import { draw } from "@/app/functions/painttool/draw";
import { useDrawingHook } from "@/app/hooks/useDrawingHook";
import { useRedrawingHook } from "@/app/hooks/useRedrawingHook";
import { useSelectHook } from "@/app/hooks/useSelectHook";
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"
import styled from "styled-components";


const StyledCanvasContainer = styled.div`
position: relative;
height: 500px
`

const StyledCanvas = styled.canvas`
position: absolute; top: 0; left: 0;
`

export const ImageComponet = () => { // Image Component shows image
    const canvasContext = useContext(CanvasContext);
    const toolsContext = useContext(ToolsContext);

    const hookParams = {
        backgroundContext: canvasContext?.backgroundCanvasContext.current,
        baseCanvas: canvasContext?.canvas,
        canvasContext: canvasContext?.canvasContext.current,
        activeTool: toolsContext?.activeTool,
        objects: canvasContext?.objects,
        setObjects: canvasContext?.setObjects
    }
    useRedrawingHook(canvasContext!.objects)
    useDrawingHook(hookParams)
    
    useSelectHook({baseCanvas: canvasContext?.canvas, activeTool: toolsContext?.activeTool, objects: canvasContext?.objects, activeObject: canvasContext?.activeObject, setActiveObject: canvasContext?.setActiveObject })
    
    if(canvasContext?.image) {
        return (
            <StyledCanvasContainer>
                {/* <img style={{width: '50%', height: '50%'}} alt="Image Selected" src={src} /> */}
                <StyledCanvas ref={canvasContext?.backgroundCanvas} width={"500px"} height={'500px'} /> 
                <StyledCanvas ref={canvasContext?.canvas} width={"500px"} height={'500px'} /> 
            </StyledCanvasContainer>
        )
    }
    else {
        return <p>Image doesnt selected</p>
    }
}