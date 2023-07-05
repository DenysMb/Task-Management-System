import { css } from "@emotion/react";
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  BASE_SPACING,
  BORDER_RADIUS,
  BOX_SHADOW,
  COLOR,
  PADDING_XY,
  SPACING,
} from "../../shared/constants";

export const styles = {
  self: css({
    position: "absolute",
    top: 0,
    right: 0,
    flex: 1,
    width: "100%",
    height: "100%",
    background: COLOR.Opacity(0.5),
  }),

  card: css({
    position: "absolute",
    top: 0,
    right: 0,
    width: BASE_SPACING * 60,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: SPACING.Large,
    padding: SPACING.Large,
    background: BACKGROUND_DARK,
    boxShadow: BOX_SHADOW(undefined, BASE_SPACING, BASE_SPACING * 2),
    "@media (prefers-color-scheme: light)": {
      background: BACKGROUND_LIGHT,
    },
  }),

  topbar: {
    self: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }),
    buttons: css({
      display: "flex",
      gap: SPACING.Medium,
      // Position absolute to avoid the button to change header position
      position: "absolute",
      right: 0,
    }),
    button: css({
      padding: PADDING_XY(SPACING.Medium, SPACING.Large),
      borderRadius: BORDER_RADIUS.Small,
      backgroundColor: COLOR.Opacity(0.1),
      border: "none",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: COLOR.Opacity(0.2),
      },
    }),
  },

  textareaSection: css({
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }),

  input: css({
    width: "100%",
    padding: SPACING.Medium,
    borderRadius: BORDER_RADIUS.Small,
    border: "none",
    outline: "none",
    backgroundColor: COLOR.Opacity(0.1),
  }),

  select: css({
    width: "100%",
    padding: SPACING.Medium,
    borderRadius: BORDER_RADIUS.Small,
    border: "none",
    outline: "none",
    backgroundColor: COLOR.Opacity(0.1),
    textTransform: "capitalize",
  }),

  option: css({
    textTransform: "capitalize",
  }),

  textarea: css({
    flex: 1,
    width: "100%",
    padding: SPACING.Medium,
    borderRadius: BORDER_RADIUS.Small,
    border: "none",
    outline: "none",
    backgroundColor: COLOR.Opacity(0.1),
    resize: "none",
  }),

  button: css({
    padding: PADDING_XY(SPACING.Medium, SPACING.Large),
    borderRadius: BORDER_RADIUS.Small,
    backgroundColor: COLOR.Opacity(0.1),
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: COLOR.Opacity(0.2),
    },
  }),
};
