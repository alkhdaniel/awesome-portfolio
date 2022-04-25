import React from "react"
import Header from "../components/header"
import About from "../components/about"
import Contact from "../components/contact"
import styled, { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
	/*dark theme*/
	:root {
		--font: "Roboto, sans-serif";
		--headerFont: "Segoe ui, sans-serif";
		--headerPosition: 0px;
		--base-scale:calc(100vw / 150);
		--h1Size: max(2rem, min(3.6rem, calc(var(--base-scale) * 4)));
		--h2Size: max(1.5rem, min(2.75rem, calc(var(--base-scale) * 3)));
		--headerSize: ""
	    --mainWidth: auto;
	    --headerColor: #dadbdc;
	    --titleColor: #f2f2f2;
	    --textColor: #f2f2f2;
	    --backgroundInitial: #064273;
	    --backgroundInitial2: #064273;
	    --backgroundInitial2: #093D68;
	    --backgroundInitial3: #0D385E;
	    --backgroundInitial4: #103353;
	    --backgroundInitial5: #132E49;
	    --backgroundInitial6: #16293E;
	    --backgroundInitial7: #1A2434;
	    --backgroundColor: #1d1f29;
	    --sunPosition: 25px;
	    --linkColor: #F0A040;
	    --padding: 16px;
	}
	* {
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
    html {
		font-family: var(--font);
        color: var(--textColor);
        background: var(--backgroundInitial);
    }
    h1, h2, h3 {
    	font-family: var(--headerFont);
    }
    h1 {
    	font-size:var(--h1Size);
    	font-weight:600;
    	letter-spacing:2px;
    }
    h2 {
    	font-size:var(--h2Size);
    	font-weight:500;
    	letter-spacing:1px;
    }
	a {
		padding: 0px 0;
		margin: 8px 0;
		color: #237546;
		text-shadow: none;
		-webkit-transition: color 0.3s;
		-moz-transition: color 0.3s;
		transition: color 0.3s;
		position: relative;
		color: #fff;
		text-decoration: none;
		outline: none;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size:1rem
	}

	a::before, a::after {
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background: #fff;
		content: '';
		opacity: 0;
		transition: opacity 0.3s, transform 0.3s;
		transform: translateY(-10px);
	}
	a::before {
		top: 0;
		transform: translateY(-4px);
	}
	a::after {
		bottom: 0;
		transform: translateY(4px);
	}

	a:hover {
		color: #fff;
	}
	a:hover::before, a:hover::after {
		opacity: 1;
		transform: translateY(0px);
	}




    @media only screen and (min-width: 900px) {
		:root {
			--mainWidth: 880px;
		}
	}

	@media only screen and (min-width: 1200px) {
		:root {
			font-size:18px;
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


// data
const pageTitle = "Daniel Al-Khrysat - Portfolio";
const name = "Daniel Al-Khrysat";
const industry = "Front-end Developer";
const contactLinks = [
	{"text":"daniel@alkhrysat.com", "url":"mailto:daniel@alkhrysat.com"},
	{"text":"github","url":"https://github.com/alkhdaniel"},
	{"text":"linkedin","url":"https://www.linkedin.com/in/daniel-alkhrysat/"}]
const skills = ["JavaSript", "React"];

// markup
const AwesomePortfolio = () => {
	return (
		<>
			<GlobalStyle />
			<main>
				<title>{pageTitle}</title>
				<NavBar />
				<Header name={name} industry={industry}/>
				<About />
				<Contact links={contactLinks} />
				<Footer />
			</main>
		</>
	)
}

export default AwesomePortfolio
