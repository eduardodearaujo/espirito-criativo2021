import { styled } from "@stitches/react";

export const SlideShowWrapper = styled("section", {
  maxWidth: "192rem",
  position: "relative",
  width: "100%",
  margin: "60px auto 0",
  display: "block",
});

export const SlideShowNav = styled("nav", {
  padding: "0 5px",
  maxWidth: "134rem",
  display: "flex",
  zIndex: 1,
  position: "absolute",
  width: "100%",
  top: "36%",
  transform: "translateY(-36%)",
  margin: "0 auto",
  right: 0,
  left: 0,
  boxSizing: "border-box",
});

export const SlideShowNavButton = styled("button", {
  cursor: "pointer",
  width: "28px",
  height: "49px",
  flex: "initial",
  display: "inline-block",
  border: 0,
  backgroundColor: "transparent",
  variants: {
    pos: {
      left: {
        marginRight: "auto",
        backgroundImage: "url(/images/seta_esq.png)",
        "&:hover": {
          backgroundImage: "url(/images/seta_esq_hover.png)",
        },
      },
      right: {
        marginLeft: "auto",
        backgroundImage: "url(/images/seta_dir.png)",
        "&:hover": {
          backgroundImage: "url(/images/seta_dir_hover.png)",
        },
      },
    },
  },
});

export const SlideShowContentWrapper = styled("div", {
  maxWidth: "192rem",
  justifyContent: "center",
  flexWrap: "wrap",
  display: "flex",
  position: "relative",
  width: "100%",
  margin: "0 auto",
  color: "#eee5e0",
});

export const SlideShowContent = styled("div", {
  paddingRight: "65px",
  paddingLeft: "65px",
  maxWidth: "134rem",
  position: "absolute",
  width: "100%",
  top: "32%",
  transform: "translateY(-32%)",
  boxSizing: "border-box",
});

export const ContentTitle = styled("h2", {
  span: {
    display: "inline-block",
    backgroundColor: "#e57e51",
    lineHeight: "1.03em",
    padding: "0 10px",
    paddingBottom: "0.18em",
    margin: "0",
    marginBottom: "0.067em",
    fontSize: "3.6rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    "&:last-child": {
      marginBottom: 0,
    },
  },
});

export const ContentDescription = styled("p", {
  paddingLeft: "12px",
  paddingBottom: "12px",
  paddingTop: "10px",
  marginTop: "15px",
  maxWidth: "36rem",
  boxSizing: "border-box",
  backgroundColor: "#8899ff",
  fontSize: "1.4rem",
  fontFamily: "stratos, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
});
