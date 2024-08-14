import { motion } from "framer-motion"

const Paragraph = ({Text, isCenter}) => {
  return (
    <div className={`${isCenter ? ' text-center' : ''}`}>
    <motion.p
        className={`mt-0  sssm:text-sm  sssm:max-w-[320px] lgg:text-lg xlllll:text-[1.6rem] xlllll:leading-[3.5vh] xlllll:max-w-6xl lgg:max-w-3xl leading-[30px]`}
    >
        { Text
            .split(" ")
            .map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-2" // Adjust margin as needed
                >
                    {word.split("").map((char, charIndex) => (
                        char === ' ' ? (
                            <span key={charIndex} className="inline-block">
                                {" "} {/* Add space between words */}
                            </span>
                        ) : (
                            <motion.span
                                key={charIndex}
                                className="inline-block hover:text-[#FD6F00] hover:font-semibold cursor-pointer"
                                initial={{ y: 0 }}
                                whileHover={{ y: -5 }} // Adjust the value to your preference
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {char}
                            </motion.span>
                        )
                    ))}
                </motion.span>
            ))
        }
    </motion.p>
    </div>
  )
}

export default Paragraph