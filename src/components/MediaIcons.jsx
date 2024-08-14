import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MediaIcons = ({ isLightTheme }) => {
    // Initialize image sources
    const [images, setImages] = useState({
        Facebook: isLightTheme ? "/Facebook-Light.png" : "/Facebook.png",
        Twitter: isLightTheme ? "/Twitter-Light.png" : "/Twitter.png",
        Instagram: isLightTheme ? "/Instagram-Light.png" : "/Instagram.png",
        LinkedIn: isLightTheme ? "/LinkedIn-Light.png" : "/LinkedIn.png",
    });

    useEffect(() => {
        setImages({
            Facebook: isLightTheme ? "/Facebook-Light.png" : "/Facebook.png",
            Twitter: isLightTheme ? "/Twitter-Light.png" : "/Twitter.png",
            Instagram: isLightTheme ? "/Instagram-Light.png" : "/Instagram.png",
            LinkedIn: isLightTheme ? "/LinkedIn-Light.png" : "/LinkedIn.png",
        });
    }, [isLightTheme]);

    const handleMouseEnter = (name) => {
        setImages((prevImages) => ({
            ...prevImages,
            [name]: `/${name}-hover.png`,
        }));
    };

    const handleMouseLeave = (name) => {
        setImages((prevImages) => ({
            ...prevImages,
            [name]: isLightTheme ? `/${name}-Light.png` : `/${name}.png`,
        }));
    };

    return (
        <div className="flex justify-items-center items-center justify-center space-x-6 my-8">
            <motion.a
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                href="https://www.facebook.com"
                className="cursor-pointer"
            >
                <Image
                    src={images.Facebook}
                    width={30}
                    height={30}
                    alt="facebook"
                    onMouseEnter={() => handleMouseEnter("Facebook")}
                    onMouseLeave={() => handleMouseLeave("Facebook")}
                />
            </motion.a>

            <motion.a
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                href="https://www.twitter.com"
                className="cursor-pointer"
            >
                <Image
                    src={images.Twitter}
                    width={30}
                    height={30}
                    alt="twitter"
                    onMouseEnter={() => handleMouseEnter("Twitter")}
                    onMouseLeave={() => handleMouseLeave("Twitter")}
                />
            </motion.a>

            <motion.a
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                href="https://www.instagram.com"
                className="cursor-pointer"
            >
                <Image
                    src={images.Instagram}
                    width={30}
                    height={30}
                    alt="instagram"
                    onMouseEnter={() => handleMouseEnter("Instagram")}
                    onMouseLeave={() => handleMouseLeave("Instagram")}
                />
            </motion.a>

            <motion.a
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                href="https://www.linkedIn.com"
                className="cursor-pointer"
            >
                <Image
                    src={images.LinkedIn}
                    width={30}
                    height={30}
                    alt="linkedIn"
                    onMouseEnter={() => handleMouseEnter("LinkedIn")}
                    onMouseLeave={() => handleMouseLeave("LinkedIn")}
                />
            </motion.a>
        </div>
    );
};

export default MediaIcons;
