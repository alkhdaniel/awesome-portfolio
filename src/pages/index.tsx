import React from "react"
import Header from "../components/header"
import About from "../components/about"
import styled, { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
	/*dark theme*/
	:root {
	    --mainWidth: auto;
	    --headerColor: #dadbdc;
	    --titleColor: #f2f2f2;
	    --textColor: #f2f2f2;
	    --backgroundColor: #064273;
	    --padding: 16px;
	}
	* {
		margin:0;
		padding:0;
	}
    html {
		font-family: Consolas, monaco, monospace;
        color: var(--textColor);
        background-color: var(--backgroundColor);
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
const industry = "Front End Developer";
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
