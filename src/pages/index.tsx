import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// styles
/*dark theme*/
const theme = []
theme.mainWidth = "auto";
theme.backgroundColor = "#1d1f29";
theme.textColor = "#f2f2f2";

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        color: ${theme.textColor};
        background-color: ${theme.backgroundColor};
    }
 `

// data
const pageTitle = "Daniel Al-Khrysat - Portfolio";
const name = "Daniel Al-Khrysat";
const skills = [];
const projects = [];
const education = [];

// markup
const IndexPage = () => {
	return (
		<>
			<GlobalStyle />
			<main>
				<title>{pageTitle}</title>
				<h1>{name}</h1>
			</main>
		</>
	)
}

export default IndexPage
