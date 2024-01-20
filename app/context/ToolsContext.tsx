import { createContext, useState } from "react";
import { ToolsContextType } from "../@types/contextTypes/tools";
import { ToolsData } from "../data/toolsData";

export const ToolsContext = createContext<ToolsContextType | null>(null);

export const ToolsProvider = ({children}:any) => {
    const [tools, setTools] = useState(ToolsData);

    const toggleTool = (index: number) => {
        setTools((prevTools) => { // This function toogle tool set
            const updatedTools = prevTools.map((tool, i) => ({
                ...tool,
                active: i === index ? !tool.active : false,
              }));
            return updatedTools;
        })
    }
    return (
        <ToolsContext.Provider value={{tools, toggleTool}}>
           {children} 
        </ToolsContext.Provider>
    )
}