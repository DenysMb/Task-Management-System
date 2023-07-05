import { css, keyframes } from "@emotion/react";
import { BASE_SPACING, BORDER_RADIUS, COLOR } from "../../shared/constants";

const spinnerAnimation = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const styles = {
  self: css({
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  spinner: css({
    width: BASE_SPACING * 20,
    height: BASE_SPACING * 20,
    borderRadius: BORDER_RADIUS.Full,
    borderWidth: BASE_SPACING,
    borderColor: COLOR.Opacity(0.25),
    borderStyle: "dashed",
    animation: `${spinnerAnimation} 3s linear infinite`,
  }),
};
