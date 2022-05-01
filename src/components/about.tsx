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
`;
const TextItemTitle = styled.h3`
	text-transform: uppercase;
	letter-spacing:2px;
	text-align:center;
	font-weight:400;
`;
const Seperator = styled.div`
	width: 64px;
	height: 2px;
	margin: 8px auto;
	background: var(--accentColor);
`;
const TextItemDescription = styled.div`
`;



const About = ({ text }) => {
  return (
    <AboutContainer>
    <Title>About</Title>
    <TextContainer>
    	<TextItem>
    		<TextItemTitle>Develop</TextItemTitle>
    		<Seperator />
    		<TextItemDescription>Test</TextItemDescription>
    	</TextItem>
    	<TextItem>
    		<TextItemTitle>Explore</TextItemTitle>
    		<Seperator />
    		<TextItemDescription>Test</TextItemDescription>
    	</TextItem>
    	<TextItem>
    		<TextItemTitle>Learn</TextItemTitle>
    		<Seperator />
    		<TextItemDescription>Test</TextItemDescription>
    	</TextItem>
    </TextContainer>
    </AboutContainer>
    )
}
export default About