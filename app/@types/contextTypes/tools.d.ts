import { IconType } from 'react-icons';

export interface ITool {
  Icon: IconType;
  size: number;
  active: boolean;
  name: string;
}

export type ToolsContextType = {
  tools: ITool[];
  toggleTool: (index: number) => void;
};
