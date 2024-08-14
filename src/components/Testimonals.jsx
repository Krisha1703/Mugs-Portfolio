import { useState } from 'react';
import Slider from 'react-slick';
import TestimonalCard from '../components/TestimonialCard';
import dynamic from "next/dynamic";

const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });
const Heading = dynamic(() => import("./Heading"), { ssr: false });

const Testimonals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%', // Adds space around the centered slide
    beforeChange: handleBeforeChange,
    arrows: false, // Disable arrows
    customPaging: (i) => (
      <div
        style={{
          width: '24px',
          height: '8px',
          borderRadius: '12px',
          backgroundColor: i === currentSlide ? '#FD6F00' : '#D9D9D9',
          cursor: 'pointer',
          margin: '0 4px'
        }}
      />
    ),
    dotsClass: 'slick-dots custom-dots'
  };

  return (
    <section className='flex flex-col w-5/6 mx-auto my-20 justify-items-center items-center'>
      <Heading Text="Testimonials" />
      <Paragraph 
          Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti ducimus repellendus rem nobis quam, laboriosam velit facilis alias doloremque sint consequatur fugit beatae in similique nemo nihil!"
          isCenter={true} 
        />

      <div className="relative w-full">
        <Slider {...settings} className="w-full">
          <div className="p-4"> {/* Add padding to create space around the cards */}
            <TestimonalCard 
              image="/testimonial.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti
              ducimus repellendus rem nobis quam"
              name="Mike Jason"
              position="CEO"
            />
          </div>
          <div className="p-4"> {/* Add padding to create space around the cards */}
            <TestimonalCard 
              image="/testimonials2.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti
              ducimus repellendus rem nobis quam"
              name="Danny Woods"
              position="Director"
            />
          </div>
          <div className="p-4"> {/* Add padding to create space around the cards */}
            <TestimonalCard 
              image="/testimonial.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti
              ducimus repellendus rem nobis quam"
              name="Jack Colls"
              position="Co-Founder"
            />
          </div>
          <div className="p-4"> {/* Add padding to create space around the cards */}
            <TestimonalCard 
              image="/testimonials2.png"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa doloribus deleniti
              ducimus repellendus rem nobis quam"
              name="Alison Wateny"
              position="Manager"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonals;
