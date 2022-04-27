import React from 'react'
import styled from "styled-components"

const Timeline = styled.div`
    margin:auto;
    margin-bottom:128px;
    padding:var(--padding);
    position:relative;
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 900px) {
        padding:var(--padding);
        justify-content:center;
    }
`;
const EventContainer = styled.div`
    width:100%;
`;
const Event = styled.div`
`;

const EventYear = styled.div`
    color:var(--accentColor);
    font-size:0.75rem;
    padding:8px;
    @media (min-width: 900px) {
        padding:8px;
        text-align:center;
    }
`;

const Dot = styled.div`
    border-radius: 50%;
    height:20px;
    width:20px;
    background-color: var(--accentColor);
    position:absolute;
    left: 26px;
    top: -10px;
    transform: translateY(calc(var(--dot)*1px));
    transition: transform 0.5s ease;
    @media (min-width: 900px) {
        left: calc(50% - 10px);
    }
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
const BulletPoint = styled.p`
    margin:4px;
    font-size: 0.8rem;
`;


const Projects = ({ projects }) => {
    function changeDot(e) {
        let offset = e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2
        document.documentElement.style.setProperty('--dot', offset);;
    }
  return (
        <Timeline>    
            <Dot />
                {projects.map((project, i) => 
                    <>
                        <EventContainer onMouseEnter={changeDot}>
                            <Event className={i % 2 ? "right" : "left"}>
                                <h3>{project[0]}</h3>
                                {project[1].map((bulletpoint) => 
                                    <BulletPoint>{bulletpoint}</BulletPoint>
                                )}
                                <Tags>
                                    {project[2].map((tag) => 
                                    <Tag>{tag}</Tag>
                                )}
                                </Tags>
                            </Event>
                        </EventContainer>
                        { (projects.length - 1 === i) ? (
                            <EventYear key={project[3]}>{project[3]}</EventYear>
                        ) : (projects[i][3] != projects[i+1][3]) &&
                            <EventYear key={project[3]}>{project[3]}</EventYear>
                        }
                    </>
                )}
        </Timeline>
    )
}
export default Projects