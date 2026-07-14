import React from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ExperienceCard from '../cards/ExperienceCard';

const Container = styled.div`
    display:flex;
    justify-content:center;
    margin-top:50px;
    align-items:center;
    flex-direction:column;
    z-index:1;
    position:relative;
`;
const Wrapper = styled.div`
    display:flex;
    position:relative;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    width:100%;
    max-width:1100px;
    gap:12px;
    @media(max-width:960px){
        flex-direction:column;
    }
`;
const Title = styled.div`
    text-align:center;
    font-size:52px;
    font-weight:600;
    margin-top:20px;
    color:${({theme})=>theme.text_primary};
    @media(max-width:768px){
        margin-top:12px;
        font-size:32px;
    }
`;
const Desc = styled.div`
    text-align:center;
    font-size:18px;
    font-weight:600;
    color:${({theme})=>theme.text_secondary};
    @media (max-width:768px){
    font-size:16px;
    }
    `;

const Experience = () => {
  return (
    <Container id="Experience">
        <Wrapper>
            <Title>Experience</Title>
            <Desc style={{marginBottom:"40px"}}>
                Here are some of my skills on which I have been working on the for the past 3 years
            </Desc>
            <VerticalTimeline>
                {experiences.map((experience,index)=>(
                    <ExperienceCard key={`experience-${index}`} experience={experience}/>
                ))}
            </VerticalTimeline>
        </Wrapper>
    </Container>
  )
}

export default Experience;