import React from 'react'
import styled from "styled-components"

const AboutContainer = styled.div`
    min-height:100vh;
    width: var(--mainWidth);
    margin:auto;
    padding:var(--padding)
`;
const Title = styled.h2`
    text-align:center;
    font-family: 'Segoe ui', sans-serif;
    color: var(--titleColor)
`;
const TextContainer = styled.div`
`;



const About = ({ text }) => {
  return (
    <AboutContainer>
    <Title>About</Title>
    <TextContainer>
    {text}
    </TextContainer>
    </AboutContainer>
    )
}
export default About