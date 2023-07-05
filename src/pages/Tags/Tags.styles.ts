import { css } from "@emotion/react";
import {
  BASE_SPACING,
  BORDER_RADIUS,
  COLOR,
  PADDING_XY,
  SPACING,
} from "../../shared/constants";

export const styles = {
  self: css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: SPACING.Large,
    padding: SPACING.Large,
  }),

  emptyPlaceholder: css({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: COLOR.Opacity(0.5),
  }),

  topbar: {
    self: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }),
    button: css({
      padding: PADDING_XY(SPACING.Medium, SPACING.Large),
      borderRadius: BORDER_RADIUS.Small,
      backgroundColor: COLOR.Opacity(0.1),
      // Position absolute to avoid the button to change header position
      position: "absolute",
      right: 0,
      border: "none",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: COLOR.Opacity(0.2),
      },
    }),
  },

  tags: css({
    display: "flex",
    flexWrap: "wrap",
    gap: SPACING.Medium,
    flex: 1,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  }),

  tag: {
    card: css({
      width: BASE_SPACING * 30,
      padding: SPACING.Large,
      display: "flex",
      alignItems: "center",
      gap: SPACING.Large,
      backgroundColor: COLOR.Opacity(0.1),
      borderRadius: SPACING.Medium,
    }),
    info: css({
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    icon: css({
      backgroundColor: "#000",
      borderRadius: BORDER_RADIUS.Full,
      minWidth: BASE_SPACING * 5,
      minHeight: BASE_SPACING * 5,
      width: BASE_SPACING * 5,
      height: BASE_SPACING * 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }),
    title: css({
      textTransform: "capitalize",
    }),
    type: css({
      textTransform: "capitalize",
      opacity: 0.5,
    }),
    button: css({
      background: COLOR.Opacity(0.1),
      border: "none",
      padding: PADDING_XY(SPACING.Small, SPACING.Medium),
      borderRadius: BORDER_RADIUS.Small,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: COLOR.Opacity(0.2),
      },
    }),
  },
};
