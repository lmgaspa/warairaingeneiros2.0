import React, { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import { slides } from '../data/slidesData';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.src} alt={slide.alt} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;