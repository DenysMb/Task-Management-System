import { useEffect, useState } from "react";
import { Trigger } from "../models/Trigger";
import { fetchTriggers } from "../api";

const useTriggers = (): Trigger[] | undefined => {
  const [triggers, setTriggers] = useState<Trigger[] | undefined>(undefined);

  useEffect(() => {
    fetchTriggers().then((data) => {
      setTriggers(data);
    });
  }, []);

  return triggers;
};

export default useTriggers;
