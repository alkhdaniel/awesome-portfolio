import React, { useRef, useState, useEffect }from 'react'
import styled from "styled-components"
import StarrySky from "./starrySky"

const HeaderContainer = styled.div`
	height:75vh;
	overflow:hidden;
`;
const Sky = styled.div`
	& {
	--offsetY: 0;
	position:relative;
	z-index:-1;
	background: linear-gradient(#1c2948 10%, #614973 40%, #c86496 70%, #f5bea5 100%);
	height:70%;
	overflow:hidden;
}
`;
const Sun = styled.div`
		content:" ";
		box-shadow: 0 0 10px white;
		border-radius: 50%;
		position:absolute;
		width:50px;
		height:50px;
		bottom: calc((var(--offsetY)/4) * 1px + 25px);
		left: calc(50% - 25px);
		background: white;
		overflow:hidden;
`

const Title = styled.div`
	top:30%;
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
		position:relative;
		bottom: calc(var(--offsetY)/2 * 1px);
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
	position:relative;
	bottom: calc(var(--offsetY)/2 * 1px);
`;

const Header = ({ name, industry }) => {
	const skyref = useRef(null);
	useEffect(() => {
		const onScroll = () => {
			const offsetY = -window.pageYOffset;
			skyref.current.style.setProperty('--offsetY', -window.pageYOffset);
		}
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<HeaderContainer>
			<Sky ref={skyref}>
			<StarrySky />
			<Title>
				<Name>{name}</Name>
				<Industry>{industry}</Industry>
			</Title>
			<Sun/>
			</Sky>
			<Water />
		</HeaderContainer>
	)
}
export default Header