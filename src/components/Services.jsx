import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { easeInOut } from 'framer-motion/dom';
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const Heading = dynamic(() => import("./Heading"), { ssr: false });

const fadeInVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? '-100vw' : direction === 'right' ? '100vw' : 0,
    y: direction === 'top' ? '-100vh' : direction === 'bottom' ? '100vh' : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut
    },
  },
};

const Services = () => {
  return (
    <section className='flex flex-col w-5/6 mx-auto my-20 justify-items-center items-center' id='services'>
       <Heading Text="Services" />
       <Paragraph 
          Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti ducimus repellendus rem nobis quam, laboriosam velit facilis alias doloremque sint consequatur fugit beatae in similique nemo nihil!"
          isCenter={true} 
        />

      <div className="my-10 flex flex-col lg:flex-row justify-around lg:space-x-6 lg:space-y-0 space-y-6">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom="left"
          className="lg:w-1/4 w-5/6 mx-auto"
        >
          <ServiceCard
            image="/Service-1.png"
            title="UI/UX"
            text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom="top"
          className="lg:w-1/4 w-5/6 mx-auto"
        >
          <ServiceCard
            image="/Service-2.png"
            title="Web Design"
            text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          />
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom="bottom"
          className="lg:w-1/4 w-5/6 mx-auto"
        >
          <ServiceCard
            image="/Service-3.png"
            title="App Design"
            text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            app={true}
          />
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          custom="right"
          className="lg:w-1/4 w-5/6 mx-auto"
        >
          <ServiceCard
            image="/Service-4.png"
            title="Graphic Design"
            text="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
