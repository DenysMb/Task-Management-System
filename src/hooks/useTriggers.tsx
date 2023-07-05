import { useEffect, useState } from "react";
import { Trigger } from "../models/Trigger";
import { fetchTriggers } from "../api";

const useTriggers = (): Trigger[] => {
  const [triggers, setTriggers] = useState<Trigger[]>([]);

  useEffect(() => {
    fetchTriggers().then((data) => {
      setTriggers(data || []);
    });
  }, []);

  return triggers;
};

export default useTriggers;
