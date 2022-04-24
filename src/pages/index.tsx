import React from "react"
import Header from "../components/header"
import About from "../components/about"
import styled, { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
	/*dark theme*/
	:root {
	    --mainWidth: auto;
	    --headerColor: #f2f2f2;
	    --titleColor: #222431;
	    --textColor: #080808;
	    --background-color: #ffeddb;
	    --elevation1: #222431;
	    --elevation2: #272937;
	    --elevation3: #1f2230;
	    --nav-border-color: #36384a;
	    --link-color1: #a2bdf2;
	    --link-color2: #bdc1d1;
	    --link-hover-color: #2b6777;
	    --accent1: #f0a040;
	    --padding: 16px;
	}
    html, body {
    	font-family: Roboto, sans-serif;
        margin: 0;
        padding: 0;
        color: var(--textColor);
        background-color: var(--background-color);
    }
    @media only screen and (min-width: 900px) {
		:root {
			--mainWidth: 880px;
		}
	}

	@media only screen and (min-width: 1200px) {
		:root {
			--mainWidth: 1024px;
		}
	}
 `

const NavBar = styled.div`
`;
const Content = styled.div`
	width: var(--mainWidth);
	margin: auto;
	text-align: center;
`;
const Footer = styled.div`
`;

const Skills = styled.div`
`;
const Projects = styled.div`
`;
const Education = styled.div`
`;

// data
const pageTitle = "Daniel Al-Khrysat - Portfolio";
const name = "Daniel Al-Khrysat";
const industry = "Frontend/Fullstack Developer";
const skills = ["JavaSript", "React"];
const projects = [];
const education = [];

// markup
const AwesomePortfolio = () => {
	return (
		<>
			<GlobalStyle />
			<main>
				<title>{pageTitle}</title>
				<NavBar>
				</NavBar>
				<Header name={name} industry={industry}/>
				<About />
				<Content>
					<Skills>
					lorem
					</Skills>
					<Projects>
					lorem
					</Projects>
					<Education>
					lorem
					</Education>
				</Content>
				<Footer>
				</Footer>
			</main>
		</>
	)
}

export default AwesomePortfolio
