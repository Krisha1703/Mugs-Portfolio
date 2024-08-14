import Image from 'next/image';
import {Tilt} from 'react-next-tilt';

const ServiceCard = ({ image, title, text, app }) => {
  return (
    <Tilt>
    <div className="rounded-md bg-[#F8F8F8] p-4 py-10 w-full max-w-sm flex flex-col gap-4">
      <div className="relative w-1/2 h-20 flex items-start">
        <Image
          src={image}
          layout="intrinsic" // Allows you to set specific width and height
          width={50}
          height={50}
          quality={100}
          objectFit="contain" // Maintains aspect ratio and fits within the container
          alt={title} // Use title or a descriptive text for accessibility
          className={`${app ? 'scale-75' : 'scale-100'} transition-transform duration-300`}
        />
      </div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{text}</p>
    </div>
    </Tilt>
  );
};

export default ServiceCard;
