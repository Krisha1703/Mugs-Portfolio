import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const Heading = dynamic(() => import("./Heading"), { ssr: false });

export default function Contact({ isLightTheme }){
    return(
    <section className='flex flex-col w-5/6 mx-auto my-20 justify-items-center items-center'>
      <Heading Text="Lets Design Together" />
      <Paragraph 
          Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti ducimus repellendus rem nobis quam, laboriosam velit facilis alias doloremque sint consequatur fugit beatae in similique nemo nihil!"
          isCenter={true} 
        />

        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between text-md my-10 xlllll:scale-150">
            <input type="email" placeholder="Enter your email" className={`p-2 px-10 mx-0 ${isLightTheme ? 'bg-[#f7f5f5]' : 'bg-white'} rounded-md`}/>
            <motion.button 
              className='bg-[#FD6F00] text-white  justify-items-center items-center p-2 px-6 mx-4 rounded-md'
              whileHover={{x:20, color: "#FD6F00", backgroundColor: "white", fontWeight: 700}}
              transition={{ease: "easeInOut", duration: 0.3}}
            >Contact Me
            </motion.button>
        </div>
      </section>
    )
}