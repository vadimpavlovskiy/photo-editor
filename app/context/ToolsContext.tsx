import { createContext, useContext, useState } from "react";
import { IActiveTool, ToolsContextType } from "../@types/contextTypes/tools";
import { ToolsData } from "../data/toolsData";

export const ToolsContext = createContext<ToolsContextType | null>(null);

export const ToolsProvider = ({children}:any) => {
    const [tools, setTools] = useState(ToolsData);
    const [activeTool, setActiveTool] = useState<IActiveTool | null>(null);

    const toggleTool = (index: number) => {
        setTools((prevTools) => { // This function toogle tool set
            const updatedTools = prevTools.map((tool, i) => ({
                ...tool,
                active: i === index ? !tool.active : false,
              }
              ));
            return updatedTools;
        })
    }
    const selectActiveTool = (index:number) => {
        console.log(tools[index]);
        setActiveTool({name: tools[index].name, active: true})
    }

    return (
        <ToolsContext.Provider value={{tools, toggleTool, selectActiveTool}}>
           {children} 
        </ToolsContext.Provider>
    )
}