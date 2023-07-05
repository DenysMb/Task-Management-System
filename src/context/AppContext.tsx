import { createContext } from "react";
import { Tag, Trigger } from "../models";

export interface AppContextProps {
  triggers?: Trigger[];
  tags?: Tag[];
  setTags?: React.Dispatch<React.SetStateAction<Tag[] | undefined>>;
  tag?: Tag;
  setTag?: React.Dispatch<React.SetStateAction<Tag>>;
  isTagEditorOpened?: boolean;
  setIsTagEditorOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({});
