import { styled } from '@stitches/react'

export const WhatWeDo = styled('section', {
    backgroundColor: "#E5824E"
})
export const WhatWeDoWrapper = styled('div', {
    width: "100%",
    maxWidth: "118rem",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    margin: "0 auto"
})
export const WhatWeDoContent = styled('div', {
    flex: "0 0 100%",
    textAlign: "center",
    maxWidth: "67rem",
    margin: "0 auto",
    paddingTop: "50px"
})
export const WhatWeDoContentTitle = styled('h2', {
    color: "#FFD1E5",
    fontSize: "3.6rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    margin: 0,
    padding: 0

})
export const WhatWeDoContentDescription = styled('p', {
    color: "#EEE5E0",
    fontSize: "1.4rem",
    fontFamily: "stratos, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    margin: 0,
    padding: 0,
    marginTop: "15px",

})
export const WhatWeDoExamples = styled('ul', {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    marginTop: "80px"
})
export const WhatWeDoExamplesItem = styled('li', {
    flex: 1,
    border: "1px solid #B73A18",
    marginLeft: "20px",
    "&:first-child": {
        marginLeft: 0
    },
    textAlign: "center",
    color: "#EEE5E0",
    padding: "40px",
    h2: {
        fontSize: "1.6rem",
        fontFamily: "stratos, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        margin: 0,
        padding: 0,
        marginBottom: "10px"
    },
    p: {
        fontSize: "1.4rem",
        fontFamily: "stratos, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        margin: 0,
        padding: 0,
        marginTop: "5px"
    },
    "&:hover": {
        backgroundColor: "#EEE5E0",
        color: "#313686"
    }
})