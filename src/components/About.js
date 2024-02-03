import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, I'm Abdulla Janda, a Computer Science Engineering student at G Pulla Reddy Engineering College. I'm passionate about technology and honed my skills in Full Stack Java during an internship at Virtusa. Proficient in Spring Boot, Hibernate, and ReactJS, I thrive on merging academic knowledge with practical expertise in web development.
        </p>

        <br />

        <p className="text-xl">
        Proficient in Java, Python, C, NodeJs, ReactJs, and Spring, I've contributed to projects like EB-Cart and Chatter Probe, showcasing technical prowess. As a Runner-Up in the Quant-A-Maze hackathon at NMIT Bangalore, my team optimized trading systems using quantum computing algorithms. In the Neural Hack Season 6 by Virtusa, I played a pivotal role in a 36-hour project, contributing to the front-end development of an e-commerce website using the MERN stack. These experiences, coupled with my role as Training and Placement Club Coordinator, reflect my versatility and commitment to innovation. Fluent in English, Hindi, and Telugu, I'm eager to bring my diverse skill set to innovative projects
        </p>
      </div>
    </div>
  );
};

export default About;
