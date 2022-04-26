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
	z-index:-1;
	background: linear-gradient(var(--backgroundInitial) 10%, var(--headerGradient1) 40%, var(--headerGradient2) 70%, var(--headerGradient3) 100%);
	height:70%;
	overflow:hidden;
}
`;
const Sun = styled.div`
		content:" ";
		box-shadow: 0 0 20px white;
		border-radius: 50%;
		position:absolute;
		width:100px;
		height:100px;
		bottom: 0px;
		transform: translateY(calc(var(--offsetY)/5 * 1px));
		left: calc(50% - 50px);
		background: white;
		overflow:hidden;
`

const Title = styled.div`
	top:30%;
	position:relative;
	transform: translateY(calc(var(--offsetY)/2 * 1px));
	text-align:center;
	color: var(--headerColor);
	z-index:3;
`;

const Water = styled.div`
	position:relative;
	background: radial-gradient(calc(80% - (var(--offsetY)/5*0.8%)) calc(60% - (var(--offsetY)/5*0.6%)) at 50% 0%, #ff846e, var(--backgroundInitial));
	height:30%;
	overflow:hidden;
	z-index:2;
	&:after {						/*sun reflection*/
		content:" ";
		border-radius: 50%;
		filter: blur(5px);
		background: linear-gradient(white, rgba(255, 255, 255, 0));
		position:absolute;
		width:100px;
		height:100px;
		top:0px;
		transform: translateY(calc(var(--offsetY)/5 * -1px));
		left: calc(50% - 50px);
		overflow:hidden;
`;

const Name = styled.h1`
	& {
		z-index:3;
		position:relative;
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
`;

const Header = ({ name, industry }) => {
	return (
		<HeaderContainer>
			<Sky>
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