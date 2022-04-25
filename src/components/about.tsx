import React from 'react'
import styled from "styled-components"

const AboutContainer = styled.div`
    width: var(--mainWidth);
    margin:auto;
    padding:var(--padding)
`;
const Title = styled.h1`
    text-align:center;
    font-family: 'Segoe ui', sans-serif;
    color: var(--titleColor)
`;
const TextContainer = styled.div`
`;



const Header = ({ name, industry }) => {
  return (
    <AboutContainer>
    <Title>About</Title>
    <TextContainer>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet dapibus felis. Nunc faucibus purus vitae libero dignissim semper. Curabitur eu tellus sagittis, cursus turpis nec, pellentesque enim. Phasellus dui lectus, iaculis sed diam sit amet, elementum consequat metus. Phasellus malesuada porta odio in malesuada. Praesent mattis nisl non blandit cursus. Integer nec nisl sagittis, consectetur felis venenatis, tempus purus. Etiam ut fermentum ligula, nec consectetur lectus. Phasellus consequat hendrerit tristique. Aenean ac tincidunt orci, quis bibendum mi. Donec tincidunt lorem ac tempus ornare. Sed ullamcorper arcu nibh, a porttitor neque egestas nec. Cras tincidunt vehicula felis. Suspendisse a imperdiet lacus, sed aliquam ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
    <p>Suspendisse sed odio nec risus faucibus aliquet. Etiam vitae sodales ante. Ut sit amet augue enim. Donec est mauris, vulputate lacinia gravida malesuada, efficitur sed lacus. Suspendisse ut urna turpis. Praesent eros arcu, mollis quis maximus non, fringilla non orci. Praesent vel dolor id magna sollicitudin fringilla. Sed faucibus neque tempor, bibendum metus pharetra, blandit ex.</p>
    </TextContainer>
    </AboutContainer>
    )
}
export default Header