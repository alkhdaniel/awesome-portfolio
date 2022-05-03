import React from 'react'
import styled from "styled-components"

const AboutContainer = styled.section`
    & {
        position:relative;
        width: var(--mainWidth);
        margin:auto;
        margin-bottom: 64px;
        padding:var(--padding);
    }
`;
const Title = styled.h2`
`;
const TextContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media only screen and (min-width: 860px) {
	grid-template-columns: repeat(3, 1fr);
	}
`;
const TextItem = styled.div`
    margin: 16px 16px;
`;
const TextItemTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing:2px;
    text-align:center;
    font-weight:400;
`;
const Seperator = styled.div`
	width: 80px;
	height: 2px;
	margin: 16px auto;
    background: radial-gradient(circle,var(--accentColor) 40%,rgba(255,255,255,0) 100%);
`;
const TextItemDescription = styled.p`
    line-height:1.4;
    font-size:0.9rem;
`;



const About = ({ about }) => {
  return (
    <AboutContainer>
    <Title>About</Title>
    <TextContainer>
        {about.map((item, i) => 
            <TextItem key={i}>
            <TextItemTitle>{item[0]}</TextItemTitle>
            <Seperator />
            <TextItemDescription>{item[1]}</TextItemDescription>
            </TextItem>
        )}
    </TextContainer>
    </AboutContainer>
    )
}
export default About