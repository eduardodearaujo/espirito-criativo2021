import { styled } from "@stitches/react";

export const MenuWrapper = styled("div", {
  width: "100%",
  maxWidth: "118rem",
  display: "flex",
  position: "relative",
  margin: "0 auto",
});

export const MenuBrand = styled("a", {
  flex: "initial",
});

export const MenuNavWrapper = styled("nav", {
  marginTop: "10px",
  textAlign: "right",
  flex: "auto",
});

export const MenuNav = styled("ul", {
  display: "block",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  color: "#eee5e0",
  fontSize: "1.4rem",
  fontFamily: "stratos, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
});

export const MenuNavItem = styled("li", {
  display: "inline",
  marginLeft: "15px",
  "&:first-child": {
    marginLeft: "0",
  },
  variants: {
    version: {
      light: {
        color: "#6d47ef",
      },
      dark: {
        color: "#eee5e0",
      },
    }
  },
  a: {
    "&:hover": {
      color: "#E57E51",
    },
  },
});
