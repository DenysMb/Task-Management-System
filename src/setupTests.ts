import "@testing-library/jest-dom";

import { AppContextProps } from "./context/AppContext";

import { JSXElementConstructor, ReactElement } from "react";

export type Wrapper = ReactElement<
  unknown,
  string | JSXElementConstructor<unknown>
>;

const createdAt = new Date().toISOString();

const mockTags = [
  {
    id: "1",
    title: "Tag 1",
    type: "1",
    trigger: "1",
    content: "Tag 1 Content",
    createdAt,
  },
  {
    id: "2",
    title: "Tag 2",
    type: "2",
    trigger: "2",
    content: "Tag 2 Content",
    createdAt,
  },
  {
    id: "3",
    title: "Tag 3",
    type: "3",
    trigger: "3",
    content: "Tag 3 Content",
    createdAt,
  },
];

const mockTriggers = [
  {
    id: "1",
    color: "#ff0000",
    icon: "🔴",
    title: "Trigger 1",
    createdAt,
  },
  {
    id: "2",
    color: "#0000ff",
    icon: "🔵",
    title: "Trigger 2",
    createdAt,
  },
];

export const mockContextValues: AppContextProps = {
  tag: mockTags[0],
  setTag: jest.fn(),
  tags: mockTags,
  setTags: jest.fn(),
  triggers: mockTriggers,
  isTagEditorOpened: true,
  setIsTagEditorOpened: jest.fn(),
};
