import { useEffect, useState } from "react";
import { Tag } from "../models/Tag";
import { fetchTags } from "../api";

const useTags = (): [Tag[], React.Dispatch<React.SetStateAction<Tag[]>>] => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    fetchTags().then((data) => {
      setTags(data || []);
    });
  }, []);

  return [tags, setTags];
};

export default useTags;
