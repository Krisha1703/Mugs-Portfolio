import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useState, memo } from 'react';
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const Heading = dynamic(() => import("./Heading"), { ssr: false });
const Button = dynamic(() => import("./Button"), { ssr: false });

const cardVariants = {
  hidden: { opacity: 0 },
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.5, // Sequential delay for each card
      duration: 0.5
    }
  })
};

const Projects = ({ isLightTheme }) => {
  const [selectedButton, setSelectedButton] = useState(1); // Initially select "All"

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const MemoizedButton = memo(Button)

  const projects = [
    { image: '/project1.png', title: 'Web Design', text: 'AirCalling Landing Page Design' },
    { image: '/project2.png', title: 'Web Design', text: 'Business Landing Page Design' },
    { image: '/project3.png', title: 'Web Design', text: 'Ecom Web Page Design' },
    { image: '/project1.png', title: 'App Design', text: 'AirCalling Landing Page Design' },
    { image: '/project2.png', title: 'Graphic Design', text: 'Business Landing Page Design' },
    { image: '/project3.png', title: 'Graphic Design', text: 'Ecom Web Page Design' },
    { image: '/project1.png', title: 'UI/UX', text: 'AirCalling Landing Page Design' },
    { image: '/project2.png', title: 'App Design', text: 'Business Landing Page Design' },
    { image: '/project3.png', title: 'UI/UX', text: 'Ecom Web Page Design' }
  ];

  // Filter projects based on the selected button
  const filteredProjects = selectedButton === 1
    ? projects
    : projects.filter(project => {
        const buttonLabels = {
          2: 'UI/UX',
          3: 'Web Design',
          4: 'App Design',
          5: 'Graphic Design'
        };
        return project.title === buttonLabels[selectedButton];
      });

  return (
    <section className='flex flex-col w-5/6 mx-auto lg:my-20 -my-10 justify-items-center items-center' id="projects">
       
      <Heading Text="My Projects" />
      <Paragraph 
          Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti ducimus repellendus rem nobis quam, laboriosam velit facilis alias doloremque sint consequatur fugit beatae in similique nemo nihil!"
          isCenter={true} 
        />
        
      <div className='lg:flex grid grid-cols-2 justify-items-center items-center lg:gap-4'>
        <MemoizedButton Text="All" buttonId={1} selectedButton={selectedButton} onClick={handleButtonClick} />
        <MemoizedButton Text="UI/UX" buttonId={2} selectedButton={selectedButton} onClick={handleButtonClick} />
        <MemoizedButton Text="Web Design" buttonId={3} selectedButton={selectedButton} onClick={handleButtonClick} />
        <MemoizedButton Text="App Design" buttonId={4} selectedButton={selectedButton} onClick={handleButtonClick} />
        <MemoizedButton Text="Graphic Design" buttonId={5} selectedButton={selectedButton} onClick={handleButtonClick} />
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 xlllll:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`w-full ${isLightTheme ? 'text-black' : 'text-white'}`}
            initial="hidden"
            animate="visible"
            custom={index} 
            variants={cardVariants}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              text={project.text}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
