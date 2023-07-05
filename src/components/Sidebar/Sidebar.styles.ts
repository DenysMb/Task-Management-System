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
    display: "flex",
    flexDirection: "column",
    width: BASE_SPACING * 30,
    backgroundColor: COLOR.Opacity(0.1),
    padding: SPACING.Large,
    gap: SPACING.Large,
    "@media only screen and (max-width: 768px)": {
      width: "100%",
    },
  }),

  title: css({
    textAlign: "center",
  }),

  menu: css({
    display: "flex",
    flexDirection: "column",
    "@media only screen and (max-width: 768px)": {
      flexDirection: "row",
      justifyContent: "center",
    },
  }),

  menuItem: css({
    padding: PADDING_XY(SPACING.Medium, SPACING.Large),
    borderRadius: BORDER_RADIUS.Medium,
    "&:hover": {
      background: COLOR.Opacity(0.1),
    },
  }),
};
