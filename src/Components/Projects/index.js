import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../Data/Alldata'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend' ?
            <ToggleButton active value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'Mearn Stack' ?
            <ToggleButton active value="Mearn Stack" onClick={() => setToggle('Mearn Stack')}>Mearn Stack</ToggleButton>
            :
            <ToggleButton value="Mearn Stack" onClick={() => setToggle('Mearn Stack')}>Mearn Stack</ToggleButton>
          }
          <Divider />
          {toggle === 'Academic' ?
            <ToggleButton active value="Academic" onClick={() => setToggle('Academic')}>Academic</ToggleButton>
            :
            <ToggleButton value="Academic" onClick={() => setToggle('Academic')}>Academic</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects