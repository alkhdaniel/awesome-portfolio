import React from 'react'
import styled from "styled-components"

const AboutContainer = styled.div`
    width: var(--mainWidth);
    margin:auto;
    margin-bottom: 128px;
    padding:var(--padding)
`;
const Title = styled.h2`
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