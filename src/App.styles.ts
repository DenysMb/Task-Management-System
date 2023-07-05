import { css } from "@emotion/react";

export const styles = {
  self: css({
    display: "flex",
    flex: 1,
    "@media only screen and (max-width: 768px)": {
      flexDirection: "column-reverse",
    },
  }),
};
