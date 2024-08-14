"use client";

import { useState, memo } from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonals from '../components/Testimonals';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };

  // Optimized components using react memo
  const MemoizedSection = memo(Section);
  MemoizedSection.displayName = 'MemoizedSection';

  const MemoizedNavbar = memo(Navbar);
  MemoizedNavbar.displayName = 'MemoizedNavbar';

  const MemoizedAbout = memo((props) => <About {...props} isLightTheme={isLightTheme} />);
  MemoizedAbout.displayName = 'MemoizedAbout';

  const MemoizedSkills = memo((props) => <Skills {...props} isLightTheme={isLightTheme} />);
  MemoizedSkills.displayName = 'MemoizedSkills';

  const MemoizedServices = memo(Services);
  MemoizedServices.displayName = 'MemoizedServices';

  const MemoizedProjects = memo((props) => <Projects {...props} isLightTheme={isLightTheme} />);
  MemoizedProjects.displayName = 'MemoizedProjects';

  const MemoizedTestimonals = memo(Testimonals);
  MemoizedTestimonals.displayName = 'MemoizedTestimonals';

  const MemoizedContact = memo((props) => <Contact {...props} isLightTheme={isLightTheme} />);
  MemoizedContact.displayName = 'MemoizedContact';

  const MemoizedFooter = memo((props) => <Footer {...props} isLightTheme={isLightTheme} />);
  MemoizedFooter.displayName = 'MemoizedFooter';

  return (
    <main className={`relative ${isLightTheme ? 'bg-white text-black' : 'bg-[#1E1E1E] text-white'}`}>
      <MemoizedNavbar isLightTheme={isLightTheme} />

      <MemoizedSection>
        <MemoizedAbout />
      </MemoizedSection>

      <MemoizedSection>
        <MemoizedSkills />
      </MemoizedSection>

      <MemoizedSection>
        <MemoizedServices />
      </MemoizedSection>

      <MemoizedSection>
        <MemoizedProjects />
      </MemoizedSection>

      <MemoizedSection>
        <MemoizedTestimonals />
      </MemoizedSection>

      <div className="lg:sticky lg:top-0">
        <MemoizedSection>
          <MemoizedContact />
        </MemoizedSection>
      </div>

      <MemoizedSection>
        <MemoizedFooter />
      </MemoizedSection>

      {/* Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-2 bg-[#FD6F00] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Toggle Theme
      </button>
    </main>
  );
}
