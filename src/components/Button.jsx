import { motion } from 'framer-motion';

const Button = ({ Text, buttonId, selectedButton, onClick, about }) => {
  // Determine if the button is selected
  const buttonSelected = selectedButton === buttonId;

  // Determine background and text colors based on the selected state
  const bgColor = buttonSelected ? '#FD6F00' : 'white';
  const textColor = buttonSelected ? 'white' : 'black';

  // Define the hover animation
  const hoverAnimation = { 
    x: buttonSelected ? 20 : 0, 
    color: "#FD6F00", 
    backgroundColor: "white", 
    fontWeight: 700 
  };

  return (
    <motion.button
      className={`lg:text-md text-sm xlllll:text-[1.5rem] justify-items-center lg:px-6 px-2 lg:h-[3vw] h-[8vw] ${about ? 'w-1/4' : ''} ${buttonSelected ? 'max-w-1/4' : ''} text-nowrap items-center lg:p-2 my-4 rounded-md xlllll:rounded-lg`}
      style={{ backgroundColor: bgColor, color: textColor }}
      // Conditionally apply the whileHover animation based on the 'about' prop
      whileHover={about ? hoverAnimation : undefined}
      onClick={() => onClick(buttonId)}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {Text}
    </motion.button>
  );
};

export default Button;
