import { useEffect, useState } from "react";
import { Tag } from "../models/Tag";
import { fetchTags } from "../api";

const useTags = (): [
  Tag[] | undefined,
  React.Dispatch<React.SetStateAction<Tag[] | undefined>>
] => {
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);

  useEffect(() => {
    fetchTags().then((data) => {
      setTags(data);
    });
  }, []);

  return [tags, setTags];
};

export default useTags;
