import React from 'react'
import { useRef, useEffect } from 'react'
import styled from "styled-components"

const Timeline = styled.section`
    margin:auto;
    margin-bottom:128px;
    padding:var(--padding);
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 860px) {
        padding:var(--padding);
        justify-content:center;
    }
`;
const EventContainer = styled.article`
    width:100%;
`;
const Event = styled.div`
`;

const EventYear = styled.div`
    color:var(--accentColor);
    font-size:0.75rem;
    padding:8px;
    @media (min-width: 860px) {
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
    @media (min-width: 860px) {
        left: calc(50% - 10px);
    }
`;
const Tags = styled.ul`
`;
const Tag = styled.li`
    background: var(--elevation1);
    display:inline-block;
    padding:6px;
    margin:4px;
    font-size: 0.75rem;
`;
const BulletPoint = styled.p`
    margin:4px;
    font-size:0.9rem;
`;

const Projects = ({ projects }) => {
    /*useEffect(() => {
        const onScroll = e => {
            const y = (window.scrollY || window.pageYOffset) + window.innerHeight/2.25;
            for (let i = 0; i < containers.length; i++) {
                if (y > containers[i].current.offsetTop && y < containers[i].current.offsetTop+containers[i].current.offsetHeight) {
                    let offset = containers[i].current.offsetTop+containers[i].current.offsetHeight/2
                    document.documentElement.style.setProperty('--dot', offset);
                }
            } 
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });*/


    let containers = new Array();
    projects.map((project, i) => {
        containers[i] = useRef(0);
    });

    return (
        <Timeline>    
            {/*<Dot />*/}
                {projects.map((project, i) => 
                    <>
                        <EventContainer key={i} ref={containers[i]}>
                            <Event className={i % 2 ? "right" : "left"}>
                                <h3>{project[0]}</h3>
                                {project[1].map((bulletpoint) => 
                                    <BulletPoint key={bulletpoint}>{bulletpoint}</BulletPoint>
                                )}
                                <Tags>
                                    {project[2].map((tag) => 
                                    <Tag key={tag}>{tag}</Tag>
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