import { ToolButton } from "@/app/components/toolButton/toolButton";
import { FaPaintbrush, FaRegCircle, FaRegSquareFull } from "react-icons/fa6";
import { styled } from "styled-components";
import { IoText } from "react-icons/io5";
import { PiStickerLight } from "react-icons/pi";
import { useContext } from "react";
import { ToolsContext } from "@/app/context/ToolsContext";
import { ITool } from "@/app/@types/contextTypes/tools";


const ToolsLayoutStyled = styled.div`
display: flex;
gap: 1rem;
width: max-content;

`
export const ToolsLayout = ({}) => {
    const context = useContext(ToolsContext); // Using global context to manipulate toolsData
    return (
        <ToolsLayoutStyled>
            {context?.tools?.map((tool, index) => (
                <ToolButton
                    key={index}
                    Icon={tool.Icon}
                    size={tool.size}
                    active={tool.active}
                    onClick={() => {console.log('Hello');
                     context?.toggleTool(index)}}
                />
            ))}
        </ToolsLayoutStyled>
    )
}