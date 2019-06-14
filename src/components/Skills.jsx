import React from 'react';
import styled,{ keyframes } from 'styled-components'

const SkillsContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding: 3rem 4em 2em 5em;
`;
const Skill = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    height:3em;
    border-bottom: 1px solid lightgray;;
    box-shadow: 1px 10px 3px -7px rgba(176,176,176,1);
`;

const SkillsH5 = styled.h5`
    font-size: 1.4em;
    /* margin: .5em 0; */
    font-weight: normal;
`;

const SkillsLine = styled.div`
    height: 1.5em;
    position: relative;
    border-radius: 50px;
    background: #dedede;
    width:70%;
`;

const move = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
    display:block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color:#0060ca;
    overflow:hidder;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
    &:after{
        content: "";
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;

        background-image: linear-gradient(-45deg, rgba(255,255,255,0.2)
        25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
        z-index:1;
        background-size: 50px 50px;
        animation: ${move} 4s linear infinite;
        overflow: hidden;
    }
`;




const Skills = props =>(
    <div className="Skills">
        <SkillsContainer>
            {props.data.map((skill,index)=>(
                <Skill className="Skills-item" key={`Skill-${index}`}>
                    <SkillsH5>{skill.name}</SkillsH5>
                    <SkillsLine>
                        <SkillsSpan width={skill.percentage} />
                    </SkillsLine>
                </Skill>
            ))

            }
        </SkillsContainer>
    </div>
);

export default Skills;