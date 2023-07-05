// I will use only one big constants.ts file for this project.
import { Tag } from "../models";
import { ROUTES } from "./routes";

export const BASE_SPACING = 8;
export const PADDING_XY = (x: number, y?: number) => `${x}px ${y ?? x}px`;
export const BOX_SHADOW = (x?: number, y?: number, spread?: number) =>
  `${x ?? 0}px ${y ?? 0}px ${spread ?? 0}px 0 ${COLOR.Opacity(0.15)}`;
export const BACKGROUND_LIGHT = "#f1f5f9";
export const BACKGROUND_DARK = "#292929";

// There is a growing opinion in the comunity that we should avoid to use ENUMs.
// Here is a example of an article talking about this: https://dev.to/ivanzm123/dont-use-enums-in-typescript-they-are-very-dangerous-57bh
// So, this is the reason that I am using const assertion here.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
export const BORDER_RADIUS = {
  Small: BASE_SPACING / 2,
  Medium: BASE_SPACING,
  Large: BASE_SPACING * 2,
  Full: "100%",
};

export const SPACING = {
  Small: BASE_SPACING / 2,
  Medium: BASE_SPACING,
  Large: BASE_SPACING * 2,
} as const;

export const COLOR = {
  Opacity: (value: number) => `rgba(0, 0, 0, ${value})`,
  Teal: "#14b8a650",
  Pink: "#ec489950",
} as const;

export const TAG_TYPE: TagType[] = [
  { id: "1", title: "Lorem reprehenderit" },
  { id: "2", title: "Velit elit ipsum" },
  { id: "3", title: "Laborum occaecat" },
  { id: "4", title: "Aliqua proident" },
];

export const TAG_TEMPLATE: Tag = {
  id: "",
  createdAt: "",
  title: "",
  type: "1",
  trigger: "1",
  content: "",
};

export const MENU_ITEMS = [
  { url: ROUTES.Home, name: "🏠 Home" },
  { url: ROUTES.Tags, name: "🏷️ Tags" },
  { url: ROUTES.Triggers, name: "👇 Triggers" },
];

// I am exporting the types here in the constants file just to make it simple.
export type Spacing = (typeof SPACING)[keyof typeof SPACING];
export type Color = (typeof COLOR)[keyof typeof COLOR];
export type TagType = { id: string; title: string };
