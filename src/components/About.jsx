import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const MediaIcons = dynamic(() => import("./MediaIcons"), { ssr: false });
const Button = dynamic(() => import("./Button"), { ssr: false });

const About = ({ isLightTheme }) => {
    // Typewriting effect
    const words = ["Muhammad Umair"]; 

    // Initializing state
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [cursor, setCursor] = useState(true);
    const [typingCompleted, setTypingCompleted] = useState(false);

    useEffect(() => {
        if (typingCompleted) return;

        const typeSpeed = 80;
        const word = words[currentWordIndex];

        const handleTyping = () => {
            if (currentText === word) {
                setTypingCompleted(true); 
            } else {
                setCurrentText((prev) => word.substring(0, prev.length + 1));
            }
        };

        const timeout = setTimeout(handleTyping, typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, currentWordIndex, typingCompleted]);

    useEffect(() => {
        const cursorBlink = setInterval(() => setCursor((v) => !v), 500);
        return () => clearInterval(cursorBlink);
    }, []);

    // Text fill effect
    useEffect(() => {
        const letters = document.querySelectorAll('.text-outline span');
        letters.forEach((letter, index) => {
            letter.style.transitionDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <section className='flex flex-col lg:flex-row w-11/12 mx-auto justify-items-center items-center justify-around' id="about">
            <div className={`flex flex-col ${isLightTheme ? 'text-black' : 'text-white'} lg:w-1/2 w-5/6`}>
                <h1 className="text-[1.5rem]">Hi I am</h1>
                <div className="whitespace-pre-line text-[#FD6F00] font-semibold text-[1.5rem]">
                    {typingCompleted ? words[0] : currentText}
                </div>
                <div className="whitespace-pre-line">
                    {typingCompleted && cursor ? ' ' : ''}
                    {!typingCompleted && cursor && '|'}
                </div>
                <h3 className="flex gap-2 font-bold text-4xl lg:text-7xl xlllll:text-[10rem] mb-2 lg:mb-4">
                    {'UI & UX'.split('').map((char, index) => (
                        <span key={index} className="text-outline" data-text={char}>
                            {char}
                        </span>
                    ))}
                </h3>
                <h3 className="flex gap-2 lg:ml-[13vw] ml-[20vw] font-bold text-4xl lg:text-7xl xlllll:text-[10rem] mb-4 xlllll:mb-12">
                    {'Designer'.split('').map((char, index) => (
                        <span key={index} className="text-outline" data-text={char}>
                            {char}
                        </span>
                    ))}
                </h3>
                
                <Paragraph Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eveniet iusto quisquam consequatur, adipisci doloremque vitae tempore explicabo eaque sit impedit. Eaque recusandae molestias voluptatem eum obcaecati optio debitis odit." />
               <Button Text="Hire Me" about={true}/>
            </div>

            <div className="flex flex-col">
                <Image src="/about.png" width={400} height={400} alt="about" className="relative z-10" />
                <div className="bg-[#FD6F00] opacity-40 absolute inset-0 z-20 w-[20vw] h-[10vh] sssm:hidden xl:block" style={{ top: '3.7%',left: '65%' }}></div>
                <MediaIcons isLightTheme={isLightTheme} />
            </div>
           
        </section>
    );
}

export default About;
