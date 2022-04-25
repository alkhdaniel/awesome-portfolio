import React from 'react'
import styled from "styled-components"
import StarrySky from "./starrySky"

const HeaderContainer = styled.div`
	display:flex;
	position:relative;
	justify-content: center;
	background: linear-gradient(#1c2948 5%, #614973 30%, #c86496 60%, #f5bea5 80%, var(--background-color) 100%);
	height:75vh;
`;
const Title = styled.h1`
	top:15%;
	max-height:30%;
	position:relative;
	text-align:center;
	font-family: 'Segoe ui', sans-serif;
	color: var(--headerColor);
	z-index:3;
`;
const Name = styled.div`
	& {
		font-size:2.5rem;
		z-index:3;
	}
	&:before {
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
	}
`;



const Industry = styled.div`
	font-size:1.75rem
`;



const Header = ({ name, industry }) => {
	return (
		<HeaderContainer>
			<StarrySky />
			<Title>
				<Name>{name}</Name>
				<Industry>{industry}</Industry>
			</Title>
		</HeaderContainer>
	)
}
export default Header