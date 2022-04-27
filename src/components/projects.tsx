import React from 'react'
import styled from "styled-components"

const ProjectsContainer = styled.div`
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
    position:relative;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
const EventContainer = styled.div`
    width:100%;
`;
const EventR = styled.div`
    padding: 32px 32px 32px 0;
    width:calc(50% + 0.5px);
    text-align:right;
    float:left;
    border-right:1px solid var(--accentColor);
`;
const EventL = styled.div`
    padding: 32px 0 32px 32px;
    width:calc(50% + 0.5px);
    text-align:left;
    float:right;
    border-left:1px solid var(--accentColor);
`;
const EventTime = styled.div`
    text-align:center;
    color:var(--accentColor);
    font-size:0.75rem;
    padding:8px;
`;
const Dot = styled.div`
    border-radius: 50%;
    height:20px;
    width:20px;
    background-color: var(--accentColor);
    position:absolute;
    left: calc(50% - 10px);
    top: -10px;
    transform: translateY(calc(var(--dot)*1px));
    transition: transform 0.5s ease;
`;
const Tags = styled.div`
`;
const Tag = styled.div`
    background: var(--elevation1);
    display:inline-block;
    padding:6px;
    margin:4px;
    font-size: 0.75rem;
`;


const Projects = ({ projects }) => {
    function changeDot(e) {
        let offset = e.target.offsetTop+e.target.offsetHeight/2
        console.log(offset);
        document.documentElement.style.setProperty('--dot', offset);;
    }
  return (
    <ProjectsContainer>
        <Timeline>
            <EventContainer onMouseEnter={changeDot}>
                <Dot />
                <EventR>
                    <h3>Naraka.win</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>React</Tag>
                        <Tag>NextJS</Tag>
                        <Tag>Node</Tag>
                        <Tag>Express</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>MongoDB</Tag>
                        <Tag>GraphQL</Tag>
                    </Tags>
                </EventR>
            </EventContainer>
            <EventTime>2021</EventTime>
            <EventContainer onMouseEnter={changeDot}>
                <EventL>
                    <h3>Playkog.win</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>React</Tag>
                        <Tag>NextJS</Tag>
                        <Tag>Node</Tag>
                        <Tag>Express</Tag>
                        <Tag>JavaScript</Tag>
                        <Tag>MongoDB</Tag>
                        <Tag>REST</Tag>
                    </Tags>
                </EventL>
            </EventContainer>
            <EventTime>2020</EventTime>
            <EventContainer onMouseEnter={changeDot}>
                <EventR>
                    <h3>Crypto Arbitragetracker</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>JavaScript</Tag>
                        <Tag>WebSockets</Tag>
                    </Tags>
                </EventR>
            </EventContainer>
            <EventTime>2017</EventTime>
            <EventContainer onMouseEnter={changeDot}>
                <EventL>
                    <h3>Callvote.net</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>JavaScript</Tag>
                        <Tag>Python</Tag>
                        <Tag>C++</Tag>
                        <Tag>PHP</Tag>
                        <Tag>MySQL</Tag>
                        <Tag>WebSockets</Tag>
                    </Tags>
                </EventL>
            </EventContainer>
            <EventTime>2016</EventTime>
            <EventContainer onMouseEnter={changeDot}>
                <EventR>
                    <h3>Gothenburg School of Economics</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>Statistics</Tag>
                        <Tag>Economics</Tag>
                        <Tag>Business</Tag>
                    </Tags>
                </EventR>
            </EventContainer>
            <EventTime>2015</EventTime>
            <EventContainer onMouseEnter={changeDot}>
                <EventL>
                    <h3>John Bauer, Uddevalla</h3>
                    <p>some text</p>
                    <Tags>
                        <Tag>Programming</Tag>
                        <Tag>Networks</Tag>
                        <Tag>Web Design</Tag>
                    </Tags>
                </EventL>
            </EventContainer>
            <EventTime>2008</EventTime>
            <EventContainer onMouseEnter={changeDot}>
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