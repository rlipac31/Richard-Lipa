// components/Carousel.js
import { useState } from "react";
import Image from "next/image";


import slide2 from '../../../public/assets/skill/code-1084923_1920.png'
import slide3 from '../../../public/assets/skill/source-code-583537_1280.jpg'
import slide4 from '../../../public/assets/works/work-background.jpg'
import slide5 from '../../../public/assets/hero/parque.jpeg'


const Carousel = () => {
  const slides = [
    
    slide2,
    slide3,
    slide4,
    slide5
  ]; // Reemplaza con tus propias imágenes
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <div className="overflow-hidden">

      <Image
          src={slides[currentIndex]}
          width={300}
          height={150}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto rounded-lg"
        />
       
    
      </div>
      {/* Botón anterior */}

     <button
            onClick={prevSlide}
            className="absolute top-[50%] -left-10 transform -translate-y-[50%] bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Prev
          </button>
      {/* Botón siguiente */}
   
     <button
            onClick={nextSlide}
            className="absolute top-[50%] -right-10 transform -translate-y-[50%] bg-gray-800 text-white px-2 py-1 rounded-md"
          >
            Next
          </button>
    </div>
  );
};

export default Carousel;
