import { createContext } from "react";
import { Tag, Trigger } from "../models";
import { TAG_TEMPLATE } from "../shared/constants";

export interface AppContextProps {
  triggers: Trigger[];
  tags: Tag[];
  setTags?: React.Dispatch<React.SetStateAction<Tag[]>>;
  tag: Tag;
  setTag?: React.Dispatch<React.SetStateAction<Tag>>;
  isTagEditorOpened: boolean;
  setIsTagEditorOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({
  triggers: [],
  tags: [],
  tag: TAG_TEMPLATE,
  isTagEditorOpened: false,
});
