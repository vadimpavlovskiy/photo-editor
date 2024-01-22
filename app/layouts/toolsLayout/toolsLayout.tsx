import { ToolButton } from "@/app/components/toolButton/toolButton";
import { styled } from "styled-components";
import { useContext, useEffect } from "react";
import { ToolsContext } from "@/app/context/ToolsContext";
// import { drawEverything } from "@/app/functions/painttool/drawEverything";


const ToolsLayoutStyled = styled.div`
display: flex;
gap: 1rem;
width: max-content;

`
export const ToolsLayout = ({}) => {
    const context =  useContext(ToolsContext); // Using global context to manipulate toolsData]
    if (context) {
        return (
            <ToolsLayoutStyled>
                {context.tools.map((tool, index) => (
                    <ToolButton
                        key={index}
                        Icon={tool.Icon}
                        size={tool.size}
                        active={tool.active}
                        onClick={() => {context.toggleTool(index); context.selectActiveTool(index)}}/>
                ))}
            </ToolsLayoutStyled>
        )
    } else {
        return (<></>)
    }
   
}