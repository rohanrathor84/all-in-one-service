import * as React from "react";
import { styled } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.pxToRem(14),
  boxShadow: "none",
  "&:active, &:focus": {
    boxShadow: "none",
  },
  ...(size === "small" && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === "large" && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  }),
}));

// See https://next.material-ui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function Button(props) {
  return <ButtonRoot {...props} />;
}

export default Button;
