import { styled } from '@stitches/react'

export const Footer = styled('div', {
    backgroundColor: "#E5824E"
})
export const FooterWrapper = styled('div', {
    width: "100%",
    maxWidth: "118rem",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    margin: "0 auto",
    paddingTop: "140px",
    paddingBottom: "85px"
})
export const FooterContent = styled('div', {
    flex: 1,
    color: "#eee5e0"
})
export const FooterContentTitle = styled('h2', {
    fontSize: "3.6rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    maxWidth: "25rem",
    padding: 0,
    margin: 0,
    maxWidth: "22rem",
    lineHeight: "1em",
    marginBottom: "6rem"
})
export const FooterContentDescription = styled('p', {
    fontSize: "1.4rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    margin: 0,
    padding: 0,
    lineHeight: "1.2em",
    maxWidth: "35.5rem"
})
export const FooterContentSocialMedia = styled('ul', {
    display: "block",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    marginTop: "45px"
})
export const FooterContentSocialMediaItem = styled('li', {
    display: "inline",
    marginLeft: "22px",
    "&:first-child": {
        marginLeft: 0
    }
})
export const FooterContact = styled('form', {
    flex: 1,
    display: "flex",
    flexWrap: "wrap"
})
export const FooterContactTextField = styled('input', {
    fontSize: "1.1rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#eee5e0",
    backgroundColor: "transparent",
    border: "1px solid #B73A18",
    display: "block",
    outline: "none",
    width: "100%",
    height: "4rem",
    marginTop: "18px",
    paddingLeft: "18px",
    boxSizing: "border-box",
    "&:first-child": {
        marginTop: 0
    },
    "&:focus": {
        borderColor: "#FFD1E5"
    }
})
export const FooterContactMessageField = styled('textarea', {
    fontSize: "1.1rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#eee5e0",
    backgroundColor: "transparent",
    border: "1px solid #B73A18",
    display: "block",
    outline: "none",
    width: "100%",
    height: "12rem",
    marginTop: "18px",
    paddingLeft: "18px",
    paddingTop: "13px",
    boxSizing: "border-box",
    "&:focus": {
        borderColor: "#FFD1E5"
    }
})
export const FooterContactSubmitButton = styled('input', {
    height: "4rem",
    width: "24rem",
    backgroundColor: "#8899FF",
    color: "#EEE5E0",
    fontSize: "1.4rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    border: 0,
    marginLeft: "auto",
    flex: "initial",
    marginTop: "18px",
    "&:hover": {
        cursor: "pointer"
    }
})
export const FooterSiteMap = styled('div', {
    flex: "0 0 100%",
    paddingTop: "38px",
    marginTop: "207px",
    borderTop: "1px solid #B73A18",
    display: "flex"
})
export const FooterSiteMapBrand = styled('a', {})
export const FooterSiteMapNavWrapper = styled('nav', {
    marginLeft: "auto",
    display: "flex",
    paddingRight: "125px",
    boxSizing: "border-box"
})
export const FooterSiteMapNav = styled('div', {
    fontSize: "1.4rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#B73A18",
    marginRight: "90px",
    ul: {
        display: "block",
        listStyleType: "none",
        margin: 0,
        padding: 0
    },
    h2: {
        fontSize: "1.4rem",
        fontWeight: "400",
        padding: 0,
        margin: 0,
        marginBottom: "13px"
    },
    "&:last-child": {
        marginRight: 0
    }
})
export const FooterSiteMapNavItem = styled('li', {
    marginBottom: "-5px",
    "&:last-child": {
        marginBottom: 0
    }
})
