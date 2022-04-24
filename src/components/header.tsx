import React from 'react'
import styled from "styled-components"
import StarrySky from "./starrySky"

const HeaderContainer = styled.div`
	display:flex;
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
	color: var(--headerColor)
`;
const Name = styled.div`
	font-size:2.5rem
`;



const Industry = styled.div`
	font-size:2rem
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