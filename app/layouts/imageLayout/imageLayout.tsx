import { ImageComponet } from "@/app/components/imageComponent/imageComponent"
import { CanvasContext } from "@/app/context/ImageContext"
import { useContext } from "react"
import { ToolsLayout } from "../toolsLayout/toolsLayout";

export const ImageLayout = () => {
   const context = useContext(CanvasContext);
   
        return (
            <>
                <ImageComponet />
                <ToolsLayout />
            </>
        )
    }