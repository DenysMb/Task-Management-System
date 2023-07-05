import { useEffect, useState } from "react";
import { TAG_TYPE, TagType } from "../shared/constants";

const useTypes = (): TagType[] => {
  const [type, setTypes] = useState<TagType[]>([]);

  useEffect(() => {
    setTypes(TAG_TYPE);
  }, []);

  return type;
};

export default useTypes;
