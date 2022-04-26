import React, {useState, useEffect} from "react"
import SmoothScroll from "smoothscroll-for-websites"
import Header from "../components/header"
import About from "../components/about"
import Contact from "../components/contact"
import styled, { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
	/*dark theme*/
	:root {
		--offsetY: 0;
		--font: "Roboto, sans-serif";
		--headerFont: "Segoe ui, sans-serif";
		--headerPosition: 0px;
		--headerSize: ""
	    --mainWidth: auto;
	    --headerColor: #dadbdc;
	    --titleColor: #f2f2f2;
	    --textColor: #f2f2f2;
	    --backgroundInitial: #064273;
	    --headerGradient1: #614973;
	    --headerGradient2: #c86496;
	    --headerGradient3: #f5bea5;
	    --waterRadial: #ff846e;
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
    }
    body {
    	background: var(--backgroundInitial);
    }
    h1, h2, h3 {
    	font-family: var(--headerFont);
    }
    h1 {
    	font-size:2.5rem;
    	font-weight:600;
    	letter-spacing:2px;
    }
    h2 {
    	font-size:1.75rem;
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
const [red, green, blue] = [6, 66, 115]
const [hg1red, hg1green, hg1blue] = [97, 73, 115]
const [hg2red, hg2green, hg2blue] = [200, 100, 150]
const [hg3red, hg3green, hg3blue] = [245, 190, 165]
const [hg4red, hg4green, hg4blue] = [6, 66, 115]

class EasyPortfolio extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		const y = 1 + (window.scrollY || window.pageYOffset) / 150
		const [r, g, b] = [Math.max(red/y, 29), Math.max(green/y, 31), Math.max(blue/y, 41)].map(Math.round)
		const [r1, g1, b1] = [Math.max(hg1red/y, 29), Math.max(hg1green/y, 31), Math.max(hg1blue/y, 41)].map(Math.round)
		const [r2, g2, b2] = [Math.max(hg2red/y, 29), Math.max(hg2green/y, 31), Math.max(hg2blue/y, 41)].map(Math.round)
		const [r3, g3, b3] = [Math.max(hg3red/y, 29), Math.max(hg3green/y, 31), Math.max(hg3blue/y, 41)].map(Math.round)
		document.body.style.setProperty('--backgroundInitial', `rgb(${r}, ${g}, ${b})`);
		document.documentElement.style.setProperty('--headerGradient1', `rgb(${r1}, ${g1}, ${b1})`);
		document.documentElement.style.setProperty('--headerGradient2', `rgb(${r2}, ${g2}, ${b2})`);
		document.documentElement.style.setProperty('--headerGradient3', `rgb(${r3}, ${g3}, ${b3})`);
		document.documentElement.style.setProperty('--offsetY', window.pageYOffset);
	}

	render() {
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
}

export default EasyPortfolio
