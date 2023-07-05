import { Tag } from "../models/Tag";
import { Trigger } from "../models/Trigger";
import { ENDPOINT } from "./endpoints";

// I will make no error treatment in this project.
const logError = (error: unknown) => {
  console.error("Error fetching data:", error);
};

const requestHeader = {
  "Content-Type": "application/json",
};

export const fetchTags = async (): Promise<Tag[] | undefined> => {
  try {
    const response = await fetch(ENDPOINT.Tags);
    const data = await response.json();

    return data;
  } catch (error: unknown) {
    logError(error);
    return undefined;
  }
};

export const fetchTriggers = async (): Promise<Trigger[] | undefined> => {
  try {
    const response = await fetch(ENDPOINT.Triggers);
    const data = await response.json();

    return data;
  } catch (error) {
    logError(error);
    return undefined;
  }
};

export const postTag = async (tag: Tag) => {
  const tagWitDate = { ...tag, createdAt: new Date().toISOString() };

  try {
    await fetch(ENDPOINT.Tags, {
      method: "POST",
      headers: requestHeader,
      body: JSON.stringify(tagWitDate),
    });
  } catch (error: unknown) {
    logError(error);
  }
};

export const patchTag = async (tag: Tag) => {
  try {
    await fetch(ENDPOINT.Tag(tag.id), {
      method: "PATCH",
      headers: requestHeader,
      body: JSON.stringify(tag),
    });
  } catch (error: unknown) {
    logError(error);
  }
};

export const deleteTag = async (tag: Tag) => {
  try {
    await fetch(ENDPOINT.Tag(tag.id), {
      method: "DELETE",
      headers: requestHeader,
    });
  } catch (error: unknown) {
    logError(error);
  }
};
