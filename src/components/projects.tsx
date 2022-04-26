import React from 'react'
import styled from "styled-components"

const ProjectsContainer = styled.div`
    width: var(--mainWidth);
    margin:auto;
    margin-bottom: 128px;
    padding:var(--padding)
`;
const Title = styled.h2`
`;
const TextContainer = styled.div`
`;



const Projects = ({ projects }) => {
  return (
    <ProjectsContainer>
        <Title>Projects</Title>
        <TextContainer>{projects}</TextContainer>
    </ProjectsContainer>
    )
}
export default Projects