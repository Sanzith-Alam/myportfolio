import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-.5 md:grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-learning"
          des=" E-Learning Website built with React and Vite will be a fast, modern, 
          and user-friendly platform for online education."
          src={projectOne}
        />
        <ProjectsCard
          title="iphone-clone"
          des="The iPhone Clone is a visually stunning and interactive web project built using React.js and Three.js.
           It replicates the smooth UI/UX experience of an iPhone with 3D animations,
            transitions, and interactive elements. The project leverages cutting-edge 
            technologies like React Three Fiber, GSAP, and Tailwind CSS to create an immersive user experience."
          src={projectTwo}
        />
        {/*
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />*/}
      </div>
    </section>
  );
}

export default Projects