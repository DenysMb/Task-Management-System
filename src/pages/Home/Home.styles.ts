import { css } from "@emotion/react";
import { BORDER_RADIUS, COLOR, SPACING } from "../../shared/constants";

export const styles = {
  self: css({
    padding: SPACING.Large,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: SPACING.Large,
  }),

  content: css({
    flex: 1,
    display: "flex",
    gap: SPACING.Large,
  }),

  card: css({
    cursor: "pointer",
    flex: 1,
    padding: SPACING.Large,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.Large,
    backgroundColor: COLOR.Teal,
    borderRadius: BORDER_RADIUS.Large,
    "&:nth-of-type(even)": {
      backgroundColor: COLOR.Pink,
    },
  }),
};
