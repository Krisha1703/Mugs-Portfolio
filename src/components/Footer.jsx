import Image from 'next/image';
import dynamic from "next/dynamic";

const MediaIcons = dynamic(() => import("./MediaIcons"), { ssr: false });
const NavbarMenus = dynamic(() => import("./NavbarMenus"), { ssr: false });

function Footer({ isLightTheme }) {
  return (
    <section>
        <nav className={`flex flex-col lg:my-0 justify-items-center ${isLightTheme ? 'bg-[#F8F8F8]' : 'bg-[#1F1F1F]'} items-center justify-center w-full mx-auto p-6`}>
            <Image src={isLightTheme ? "/Light-logo.png" : "/Logo.png"}  width={200} height={200} alt='logo' className='my-8 xlllll:scale-150'/>
            <ul className={`list-none flex flex-col lg:flex-row ${isLightTheme ? 'text-black' : 'text-white'} text-md xlllll:text-[1.5rem] justify-items-center items-center my-8`}>
                <NavbarMenus Menu="Home" />
                <NavbarMenus Menu="About Me" />
                <NavbarMenus Menu="Services" />
                <NavbarMenus Menu="Projects" />
                <NavbarMenus Menu="Testimonials" />
                <NavbarMenus Menu="Contact" />
            </ul>

            <MediaIcons isLightTheme={isLightTheme} />

        </nav>

        <div className={`flex ${isLightTheme ? 'bg-[#545454]' : 'bg-black'} text-white lg:text-[1rem] text-xs justify-center p-5 w-full`}>
            © 2023 <span className='text-[#FD6F00] font-semibold mx-1'>Mumair</span> All Rights Reserved, Inc.
        </div>
    </section>
  )
}

export default Footer;
