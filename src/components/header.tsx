import React from 'react'
import styled from "styled-components"
import StarrySky from "./starrySky"

const HeaderContainer = styled.div`
	height:75vh;
	overflow:hidden;
`;
const Sky = styled.div`
	& {
	position:relative;
	top:var(--headerPosition);
	z-index:-1;
	background: linear-gradient(#1c2948 10%, #614973 40%, #c86496 70%, #f5bea5 100%);
	height:70%;
	overflow:hidden;}
	&:after {						/*sun*/
		content:" ";
		box-shadow: 0 0 10px white;
		border-radius: 50%;
		position:absolute;
		width:50px;
		height:50px;
		bottom:var(--sunPosition);
		left: calc(50% - 25px);
		background: white;
		overflow:hidden;
	}
`;

const Title = styled.div`
	top:30%;
	max-height:30%;
	position:relative;
	text-align:center;
	color: var(--headerColor);
	z-index:3;
`;

const Water = styled.div`
	position:relative;
	background: radial-gradient(80% 60% at 50% 0%, #ff846e, var(--backgroundInitial));
	height:30%;
	overflow:hidden;
	z-index:2;
	&:after {						/*sun reflection*/
		content:" ";
		border-radius: 50%;
		filter: blur(5px);
		background: linear-gradient(white, rgba(255, 255, 255, 0));
		position:absolute;
		width:50px;
		height:50px;
		top:-25px;
		left: calc(50% - 25px);
		overflow:hidden;

		@keyframes light {
	  0% {
	    transform: scaleX(1) translate3d(0, 0, 0);
	  }
	  50% {
	    transform: scaleX(1) translate3d(-2px, 0, 0);
	  }
	  100% {
	    transform: scaleX(1) translate3d(0, 0, 0);
	  }
	}
	animation: light 5s infinite;
	}
`;

const Name = styled.h1`
	& {
		z-index:3;
	}
	/*&:before {
		content: "Daniel Al-Khrysat";
		white-space: nowrap;
		position: absolute;
		color: transparent;
		background-image: repeating-linear-gradient(
		    45deg,
		    transparent 0,
		    transparent 2px,
		    white 2px,
		    white 4px
		);
		-webkit-background-clip: text;
		text-align:center;
		z-index:4;
		top: 0px;
		left: 0px;
		transition: 1s;
		z-index:-1;
	}
	&:after {
		content: "Daniel Al-Khrysat";
		white-space: nowrap;
		position: absolute;
		color: transparent;
		background-image: repeating-linear-gradient(
			135deg,
			transparent 0,
			transparent 2px,
			white 2px,
			white 4px
		);
		-webkit-background-clip: text;
		top: 0px;
		left: 0px;
		transition: 1s;
		visibility:hidden;
	}

	&:hover:before {
		top: 8px;
		left: 8px;
	}

	&:hover:after {
		visibility:visible;
		top: -8px;
		left: -8px;
	}*/
`;


const Industry = styled.h2`
`;


const Header = ({ name, industry }) => {
	document.addEventListener('scroll', function(e) {
		let offset = window.pageYOffset;
		document.documentElement.style.setProperty('--sunPosition',(((offset/4)+25))+"px")
		document.documentElement.style.setProperty('--headerPosition',(offset/2)+"px")
		var style = window.getComputedStyle(document.documentElement);
		if (offset < 50)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial1'))
		else if (offset < 100)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial2'))
		else if (offset < 150)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial3'))
		else if (offset < 200)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial4'))
		else if (offset < 250)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial5'))
		else if (offset < 300)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial6'))
		else if (offset < 350)	document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundInitial7'))
		else document.documentElement.style.setProperty('--backgroundInitial', style.getPropertyValue('--backgroundColor'))
	});

	return (
		<HeaderContainer>
			<Sky>
			<StarrySky />
			<Title>
				<Name>{name}</Name>
				<Industry>{industry}</Industry>
			</Title>
			</Sky>
			<Water />
		</HeaderContainer>
	)
}
export default Header