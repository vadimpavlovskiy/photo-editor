import { IconType } from 'react-icons';

export interface ITool {
  Icon: IconType;
  size: number;
  active: boolean;
  name: string;
}

export interface IActiveTool {
  name: string;
  active: boolean;
}

export type ToolsContextType = {
  tools: ITool[];
  toggleTool: (index: number) => void;
  selectActiveTool: (tool: any) => void;
  activeTool: IActiveTool | null | undefined;
};
