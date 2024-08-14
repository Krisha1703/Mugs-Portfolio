import { motion } from "framer-motion";

const Heading = ({Text}) => {
  return (
    <motion.h1 className="text-[2rem] xlllll:text-[3rem] cursor-pointer font-semibold py-4"  
                whileHover={{
                letterSpacing: "0.2em",
                transition: { type: "spring", stiffness: 100 }
            }}
      >{Text}
    </motion.h1>
  )
}

export default Heading