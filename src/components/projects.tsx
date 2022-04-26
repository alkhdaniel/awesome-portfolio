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
const ProjectList = styled.div`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    gap:32px;
    justify-content:center;
    & ${Project}:nth-child(odd){
        flex-direction:row-reverse;
    }
`;
const Project = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    gap:32px;
`;
const ProjectImage = styled.div`
    width:40%;
    height:400px;
    background:blue;
`;
const ProjectDescription = styled.div`
    width:400px;
    height:400px;
    background:red;
`;

const Timeline = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
const EventContainer = styled.div`
    width:100%;
`;
const EventR = styled.div`
    padding:32px;
    width:calc(50% + 0.5px);
    text-align:right;
    float:left;
    border-right:1px solid var(--accentColor);
`;
const EventL = styled.div`
    padding:32px;
    width:calc(50% + 0.5px);
    text-align:left;
    float:right;
    border-left:1px solid var(--accentColor);
`;
const EventTime = styled.div`
    border: 1px solid var(--accentColor);
    text-align:center;
    color:var(--accentColor);
    font-size:14px;
    padding:8px;
    border-radius:8px;
`;


const Projects = ({ projects }) => {
  return (
    <ProjectsContainer>
        <Timeline>
            <EventContainer>
                <EventR>
                    <h3>Naraka.win</h3>
                    <p>some text</p>
                </EventR>
            </EventContainer>
            <EventTime>2021</EventTime>
            <EventContainer>
                <EventL>
                    <h3>Playkog.win</h3>
                    <p>some text</p>
                </EventL>
            </EventContainer>
            <EventTime>2020</EventTime>
            <EventContainer>
                <EventR>
                    <h3>Crypto Arbitragetracker</h3>
                    <p>some text</p>
                </EventR>
            </EventContainer>
            <EventTime>2017</EventTime>
            <EventContainer>
                <EventL>
                    <h3>Callvote.net</h3>
                    <p>some text</p>
                </EventL>
            </EventContainer>
            <EventTime>2016</EventTime>
            <EventContainer>
                <EventR>
                    <h3>Gothenburg School of Economics</h3>
                    <p>some text</p>
                </EventR>
            </EventContainer>
            <EventTime>2015</EventTime>
            <EventContainer>
                <EventL>
                    <h3>John Bauer, Uddevalla</h3>
                    <p>some text</p>
                </EventL>
            </EventContainer>
            <EventTime>2008</EventTime>
            <EventContainer>
                <EventR>
                    <h3>Hello, World!</h3>
                    <p>Danieru was borned</p>
                </EventR>
            </EventContainer>
            <EventTime>1992</EventTime>
        </Timeline>
        {/*<ProjectList>
            <Project>
                <ProjectImage>Image</ProjectImage>
                <ProjectDescription>Info</ProjectDescription>
            </Project>
            <Project>
                <ProjectImage>Image</ProjectImage>
                <ProjectDescription>Info</ProjectDescription>
            </Project>
            <Project>
                <ProjectImage>Image</ProjectImage>
                <ProjectDescription>Info</ProjectDescription>
            </Project>
            <Project>
                <ProjectImage>Image</ProjectImage>
                <ProjectDescription>Info</ProjectDescription>
            </Project>
        </ProjectList>*/}
    </ProjectsContainer>
    )
}
export default Projects