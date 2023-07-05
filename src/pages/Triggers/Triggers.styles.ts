import { css } from "@emotion/react";
import {
  BASE_SPACING,
  BORDER_RADIUS,
  COLOR,
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

  triggers: css({
    display: "flex",
    flexDirection: "column",
    gap: SPACING.Large,
    flex: 1,
  }),

  trigger: {
    card: css({
      display: "flex",
      alignItems: "center",
      gap: SPACING.Medium,
      padding: SPACING.Medium,
      backgroundColor: COLOR.Opacity(0.1),
      borderRadius: BORDER_RADIUS.Medium,
    }),
    icon: css({
      width: BASE_SPACING * 5,
      height: BASE_SPACING * 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLOR.Opacity(0.05),
      borderRadius: BORDER_RADIUS.Medium,
    }),
    title: css({
      textTransform: "capitalize",
    }),
  },
};
