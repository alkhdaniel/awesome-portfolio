import * as React from 'react'
import styled from "styled-components"

const HeaderContainer = styled.div`
	display:flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	height:75vh;
`;
const Name = styled.h1`
`;

const Header = ({ name }) => {
  return (
    <HeaderContainer>
    	<Name>{name}</Name>
    </HeaderContainer>
  )
}
export default Header