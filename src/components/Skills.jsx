import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const Heading = dynamic(() => import("./Heading"), { ssr: false });

const Skills = ({ isLightTheme }) => {
    return (
        <section className='flex flex-col lg:flex-row w-full mx-auto justify-items-center items-center justify-around'>
            <Image src="/skills.png" width={400} height={400} alt="skills" />
            <div className={`flex flex-col ${isLightTheme ? 'text-black' : 'text-white'} lg:w-1/2 w-5/6`}>
                <Heading Text="About Me" />

                <Paragraph Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eveniet iusto quisquam consequatur, adipisci doloremque vitae tempore explicabo eaque sit impedit. Eaque recusandae molestias voluptatem eum obcaecati optio debitis odit." />

                <motion.div 
                    className="my-4 relative" 
                    initial={{ opacity: 0 }}   
                    animate={{ opacity: 1 }}   
                    exit={{ opacity: 0 }}      
                    transition={{ duration: 0.4 }} 
                >
                    <h1 className={`${isLightTheme ? 'text-black' : 'text-white'}`}>UX</h1>
                    <hr className={`absolute lg:w-[45vw] w-[70vw] xlllll:w-[46.5vw] left-0 top-10 rounded-l-lg border-2 border-solid ${isLightTheme ? 'border-[#FD6F00]' : 'border-[#FD6F00]'}`}/>
                    <hr className={`absolute lg:w-[5vw] w-[12vw] xlllll:w-[3vw] right-0 top-10 rounded-r-lg border-2 border-solid ${isLightTheme ? 'border-[#EDECEC]' : 'border-white'}`}/>
                    <div className={`absolute top-7 right-[40px] rounded-full border-2 p-3 ${isLightTheme ? 'bg-white' : 'bg-white'} border-solid border-[#FD6F00]`}></div>
                </motion.div>

                <motion.div 
                    className="my-4 relative mt-6" 
                    initial={{ opacity: 0 }}  
                    animate={{ opacity: 1 }}   
                    exit={{ opacity: 0 }}     
                    transition={{ duration: 0.4 }} 
                >
                    <h1 className={`${isLightTheme ? 'text-black' : 'text-white'}`}>Website Design</h1>
                    <hr className={`absolute lg:w-[43vw] w-[60vw] xlllll:w-[45vw] left-0 top-10 rounded-l-lg border-2 border-solid ${isLightTheme ? 'border-[#FD6F00]' : 'border-[#FD6F00]'}`}/>
                    <hr className={`absolute lg:w-[7vw] w-[20vw] xlllll:w-[4vw] right-0 top-10 rounded-r-lg border-2 border-solid ${isLightTheme ? 'border-[#EDECEC]' : 'border-white'}`}/>
                    <div className={`absolute top-7 right-[70px] rounded-full border-2 p-3 ${isLightTheme ? 'bg-white' : 'bg-white'} border-solid border-[#FD6F00]`}></div>
                </motion.div>

                <motion.div 
                    className="my-4 relative mt-6" 
                    initial={{ opacity: 0 }}  
                    animate={{ opacity: 1 }}   
                    exit={{ opacity: 0 }}     
                    transition={{ duration: 0.4 }} 
                >
                    <h1 className={`${isLightTheme ? 'text-black' : 'text-white'}`}>App Design</h1>
                    <hr className={`absolute lg:w-[47vw] w-[80vw] xlllll:w-[50vw] left-0 top-10 rounded-l-lg border-2 border-solid ${isLightTheme ? 'border-[#FD6F00]' : 'border-[#FD6F00]'}`}/>
                    <hr className={`absolute lg:w-[2vw] w-[5vw] right-0 top-10 rounded-r-lg border-2 border-solid ${isLightTheme ? 'border-[#EDECEC]' : 'border-white'}`}/>
                    <div className={`absolute top-7 right-[10px] rounded-full border-2 p-3 ${isLightTheme ? 'bg-white' : 'bg-white'} border-solid border-[#FD6F00]`}></div>
                </motion.div>

                <motion.div 
                    className="my-4 relative mt-6" 
                    initial={{ opacity: 0 }}   
                    animate={{ opacity: 1 }}   
                    exit={{ opacity: 0 }}      
                    transition={{ duration: 0.4 }} 
                >
                    <h1 className={`${isLightTheme ? 'text-black' : 'text-white'}`}>Graphic Design</h1>
                    <hr className={`absolute lg:w-[45vw] w-[70vw] xlllll:w-[50vw] left-0 top-10 rounded-l-lg border-2 border-solid ${isLightTheme ? 'border-[#FD6F00]' : 'border-[#FD6F00]'}`}/>
                    <hr className={`absolute lg:w-[5vw] w-[12vw] xlllll:w-[3vw] right-0 top-10 rounded-r-lg border-2 border-solid ${isLightTheme ? 'border-[#EDECEC]' : 'border-white'}`}/>
                    <div className={`absolute top-7 right-[40px] rounded-full border-2 p-3 ${isLightTheme ? 'bg-white' : 'bg-white'} border-solid border-[#FD6F00]`}></div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
