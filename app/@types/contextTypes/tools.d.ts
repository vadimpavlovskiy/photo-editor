import { IconType } from 'react-icons';

export interface ITool {
  Icon: IconType;
  size: number;
  active: boolean;
}

export type ToolsContextType = {
  tools: ITool[];
  toggleTool: (index: number) => void;
};
