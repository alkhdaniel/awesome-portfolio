import React from "react"
import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import styled, { createGlobalStyle } from "styled-components"
import {Helmet} from "react-helmet"

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
    h1, h2{
    	text-align:center;
    	font-family: var(--headerFont);
    }
    h1 {
    	text-transform: uppercase;
    	font-size:1.9rem;
    	font-weight:600;
    	letter-spacing:3px;
    }
    h2 {
    	color: #f0a040;
		  text-transform: uppercase;
    	font-size:1.5rem;
    	font-weight:500;
    	letter-spacing:2px;
    	margin-bottom:20px;
    }
    h3 {
      letter-spacing:1px;
      font-weight:400;
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

  a:focus {
    outline: 2px solid var(--accentColor);
  }

  a:hover {
  }

  svg {
    transition: fill 0.33s ease-in-out;
    fill:white;
    width:48px;
    height:48px;
    padding:8px;
    margin:0 8px;
  }
  .leetcode:hover {
    fill: #FFA116;
  }
  .github:hover {
    fill: #6e7781;
  }
  .linkedin:hover {
    fill: #0A66C2;
  }

  i {
    font-size:2rem;
    margin:4px;
  }

  @media only screen and (min-width: 1280px) {
  	:root {
  		--mainWidth: 1100px;
  	}
    h1 {
      font-size:2.1rem;
    }
    h2 {
      font-size:1.6rem;
    }
}

@media only screen and (min-width: 1600px) {
	:root {
		font-size:20px;
		--mainWidth: 1400px;
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
	.left {
		@media (max-width: 860px) {
			margin-left:20px;
			border-left:1px solid var(--accentColor);
		}
		padding: 32px 0 32px 32px;
        @media (min-width: 860px) {
        	padding: 32px 32px 32px 0;
	        text-align:right;
	        border-right:1px solid var(--accentColor);
            width:calc(50% + 0.5px);
            float:left;
        }
    }
    .right {
    	@media (max-width: 860px) {
			margin-left:20px;
		}
    	border-left:1px solid var(--accentColor);
    	padding: 32px 0 32px 32px;
    	margin-left:32px;
        @media (min-width: 860px) {
        	text-align:left;
        	border-left:1px solid var(--accentColor);
            width:calc(50% + 0.5px);
            float:right;
        }
    }
 `


// data
const pageTitle: string = "Daniel Al-Khrysat - Portfolio";
const name: string = "Daniel Al-Khrysat";
const industry: string = "Front-end Developer";
const email: string = {"text":"daniel@alkhrysat.com", "url":"mailto:daniel@alkhrysat.com"}
const contactLinks: string[] = [
	{"text":"github","url":"https://github.com/alkhdaniel"},
	{"text":"linkedin","url":"https://www.linkedin.com/in/daniel-alkhrysat/"},
  {"text":"leetcode","url":"https://leetcode.com/a-daniel/"}]
const skills: string[] = ["JavaSript", "React"];
const about: string[] = 
  [
    [
      "Develop",
      "My passion for developing began as a teen wanting to create games - it led me on a path to where I've launched numerous websites, programmed countless of small apps or solutions and explored a vast section of software engineering."
    ],
    [
      "Explore",
      "Exploring the world, visiting  unique places and making new friends fills me with great excitement."
    ],
    [
      "Learn",
      "I love learning computer science and languages:<br />Recent: 10ECTS in Python/Machine Learning<br />Current: AWS Solutions Architect & Chinese<br/>Future: Kubernetes."
    ]
  ];
const projects: string[] = [
  [
  	"Easy Portfolio",
    [
      "You're looking at it",
      "Highly customizeable portfolio template"
    ],
    [
      "React",
      "Gatsby",
      "TypeScript",
      "Styled Components"
    ],
    "2022"
  ],[
    "Naraka.win",
    [
      "Fansite - Naraka: Bladepoint",
      "Learned Next.JS and GraphQL",
      "Currently serves around 2.5k unique visitors / month"
    ],
    [
      "React",
      "NextJS",
      "Node",
      "Express",
      "JavaScript",
      "NGINX",
      "MongoDB",
      "GraphQL"
    ],
    "2021"
  ],[
    "Playkog.win",
    [
      "Fansite - Honor of Kings",
      "Learned React, Node and RESTful API's",
      "Currently serves around 2k unique visitors / month"
    ],
    [
      "React",
      "Node",
      "Express",
      "JavaScript",
      "NGINX",
      "MongoDB",
      "REST",
      "Chinese"
    ],
    "2020"
  ],[
    "China",
    [
      "Moved to China",
      "Studied Chinese @ Southwestern University of Finance and Economics"
    ],
    [
      "Chinese"
    ],
    "2018"
  ],[
    "Crypto Arbitragetracker",
    [
      "Crypto arbitrage trader",
      "Wrote a bot to search for exchange arbitrage opportunities",
      "Revenue +++ Time Saved +++"
    ],
    [
      "JavaScript",
      "WebSockets",
      "Crypto"
    ],
    "2017"
  ],[
    "Japan",
    [
      "Exchange studies @ Hokkaido University, Japan"
    ],
    [
      "Statistics",
      "Economics",
      "Japanese"
    ],
    "2016"
  ],[
    "Callvote.net",
    [
      "text"
    ],
    [
      "JavaScript",
      "Python",
      "C++",
      "Apache",
      "PHP",
      "MySQL",
      "WebSockets"
    ],
    "2016"
  ],[
    "Gothenburg School of Economics",
    [
      "University"
    ],
    [
      "Statistics",
      "Economics",
      "Business"
    ],
    "2015"
  ],[
    "John Bauer, Uddevalla",
    [
      "High school"
    ],
    [
      "Programming",
      "Networks",
      "Web Design"
    ],
    "2008"
  ],[
    "Teeworlds",
    [
      "Contributed to an Open Source game",
      "Created my first website",
      "Hosted an RTMP server for live streaming"
    ],
    [
      "C++",
      "Apache",
      "PHP",
      "JavaScript",
      "MySQL",
      "RTMP"
    ],
    "2007"
  ],[
    "GameMaker",
    [
      "My interest in developing (games) began"
    ],
    [
    ],
    "2001"
  ],[
    "Hello, World!",
    [
      "Born in Bohus, Sweden"
    ],
    [
    ],
    "1992"
  ]
]



const [red, green, blue]: number = [6, 66, 115]
const [hg1red, hg1green, hg1blue]: number = [97, 73, 115]
const [hg2red, hg2green, hg2blue]: number = [200, 100, 150]
const [hg3red, hg3green, hg3blue]: number = [245, 190, 165]
const [hg4red, hg4green, hg4blue]: number = [6, 66, 115]

class EasyPortfolio extends React.Component {

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
    this.onScroll();
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
	}

	render() {
		return (
			<>
        <Helmet htmlAttributes={{lang: 'en',}}>
        <title>{pageTitle}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="icon" href="/static/favicon-32x32.png" />
        <link rel="icon" href="/static/favicon-16x16.png" />
        <script src="https://kit.fontawesome.com/dac55c9186.js" crossorigin="anonymous"></script>
        </Helmet>
				<GlobalStyle />
        <Header name={name} industry={industry}/>
				<main>
					<About about={about} />
					<Projects projects={projects} />
				</main>
        <Contact email={email} links={contactLinks} />
			</>
		)
	}
}

export default EasyPortfolio
