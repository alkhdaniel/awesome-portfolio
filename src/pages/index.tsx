import React from "react"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import SmoothScroll from "../components/SmoothScroll"
import styled, { createGlobalStyle } from "styled-components"

// styles
const GlobalStyle = createGlobalStyle`
	/*dark theme*/
	:root {
		--offsetY: 0;
		--font: Roboto, sans-serif;
		--headerFont: Segoe ui, sans-serif;
		--headerPosition: 0px;
		--headerSize: ""
	    --mainWidth: auto;
	    --headerColor: #dadbdc;
	    --titleColor: #f2f2f2;
	    --textColor: #f2f2f2;
	    --backgroundInitial: #064273;
	    --backgroundInitial2: #064273;
	    --headerGradient1: #614973;
	    --headerGradient2: #c86496;
	    --headerGradient3: #f5bea5;
	    --accentColor: #ffbc00;
	    --waterRadial: #ff846e;
	    --elevation1: #36384a;
	    --sunPosition: 25px;
	    --linkColor: #F0A040;
	    --padding: 16px;
	    --dot: 0;
	}
	* {
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
    html {
    	font-size:16px;
		font-family: var(--font);
        color: var(--textColor);
    }
    body {
    	background: var(--backgroundInitial);
    }
    h1, h2 {
    	text-align:center;
    	font-family: var(--headerFont);
    }
    h1 {
    	text-transform: uppercase;
    	font-size:1.95rem;
    	font-weight:600;
    	letter-spacing:2px;
    }
    h2 {
    	color: #f0a040;
		text-transform: uppercase;
    	font-size:1.4rem;
    	font-weight:500;
    	letter-spacing:1px;
    	margin-bottom:64px;
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
			font-size:20px;
		}
		h1 {
			font-size:2rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		:root {
			font-size:24px;
			--mainWidth: 1024px;
		}
		h1 {
			font-size: 2.5rem;
		}
		h2 {
			font-size: 1.75rem;
			color: var(--accentColor);
		}
	}

	/* Scrollbar */
	/* width */
	::-webkit-scrollbar {
	  width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	  background: #303240;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
	  background: #999;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
	  background: #555;
	}
 `


// data
const pageTitle: string = "Daniel Al-Khrysat - Portfolio";
const name: string = "Daniel Al-Khrysat";
const industry: string = "Front-end Developer";
const projects =
<>
<p>lol</p>
</>;
const contactLinks: string[] = [
	{"text":"daniel@alkhrysat.com", "url":"mailto:daniel@alkhrysat.com"},
	{"text":"github","url":"https://github.com/alkhdaniel"},
	{"text":"linkedin","url":"https://www.linkedin.com/in/daniel-alkhrysat/"}]
const skills: string[] = ["JavaSript", "React"];
const about =
<>
<p>Former Super Mario 64 TASer</p>
<p>Based in Gothenburg, Sweden</p>
</>;



const [red, green, blue]: number = [6, 66, 115]
const [hg1red, hg1green, hg1blue]: number = [97, 73, 115]
const [hg2red, hg2green, hg2blue]: number = [200, 100, 150]
const [hg3red, hg3green, hg3blue]: number = [245, 190, 165]
const [hg4red, hg4green, hg4blue]: number = [6, 66, 115]

class EasyPortfolio extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = () => {
		const y = 1 + (window.scrollY || window.pageYOffset) / 500
		const [r, g, b]: number = [Math.max(red/y, 29), Math.max(green/y, 31), Math.max(blue/y, 41)].map(Math.round)
		const [r1, g1, b1]: number = [Math.max(hg1red/y, 29), Math.max(hg1green/y, 31), Math.max(hg1blue/y, 41)].map(Math.round)
		const [r2, g2, b2]: number = [Math.max(hg2red/y, 29), Math.max(hg2green/y, 31), Math.max(hg2blue/y, 41)].map(Math.round)
		const [r3, g3, b3]: number = [Math.max(hg3red/y, 29), Math.max(hg3green/y, 31), Math.max(hg3blue/y, 41)].map(Math.round)
		document.body.style.setProperty('--backgroundInitial', `rgb(${r}, ${g}, ${b})`);
		document.documentElement.style.setProperty('--headerGradient1', `rgb(${r1}, ${g1}, ${b1})`);
		document.documentElement.style.setProperty('--headerGradient2', `rgb(${r2}, ${g2}, ${b2})`);
		document.documentElement.style.setProperty('--headerGradient3', `rgb(${r3}, ${g3}, ${b3})`);
		document.documentElement.style.setProperty('--offsetY', window.pageYOffset);
		SmoothScroll(document,250,5)
	}

	render() {
		return (
			<>
				<GlobalStyle />
				<main>
					<title>{pageTitle}</title>
					<Header name={name} industry={industry}/>
					<About text={about} />
					<Projects projects={projects} />
					<Contact links={contactLinks} />
				</main>
			</>
		)
	}
}

export default EasyPortfolio
