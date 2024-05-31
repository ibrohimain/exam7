import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carouse = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WELCOME TO GREENSHOP",
      heading: "LET'S MAKE A BETTER PLANET",
      description: "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      buttonText: "SHOP NOW",
    },
    {
      title: "EXPLORE OUR COLLECTION",
      heading: "FIND YOUR PERFECT PLANT",
      description: "Discover a variety of plants that will bring life and color to your space. Shop our collection now and find the perfect addition to your home or office.",
      buttonText: "BROWSE NOW",
    },
    {
      title: "JOIN OUR COMMUNITY",
      heading: "SHARE YOUR URBAN JUNGLE",
      description: "Connect with fellow plant enthusiasts and share your plant journey. Join our community and be inspired by others who love plants as much as you do.",
      buttonText: "JOIN NOW",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className='carousel-container mt-[10px] w-[85%] h-[450px] mx-auto flex bg-[#f7f6f6]'>
      <div className='w-[60%] h-[100%] flex items-center justify-center'>
        <div className='w-[90%]'>
          <h3 className='font-semibold text-[15px] text-gray-700'>{slides[currentSlide].title}</h3>
          <h1 className='mt-[10px] text-[80px] w-[100%] leading-[70px] text-[#2d2d2d] font-bold'>
            {slides[currentSlide].heading.split(' ').map((word, index) => (
              <span key={index} className={word === 'PLANET' ? 'text-[#2d892d]' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className='text-[16px] text-gray-500 w-[650px] mt-[30px]'>{slides[currentSlide].description}</p>
          <Button variant='contained' color='success' sx={{ width: "165px", height: "45px", fontSize: "17px", backgroundColor: "#259925", margin: "50px 0 0 0" }}>
            {slides[currentSlide].buttonText}
          </Button>
        </div>
      </div>
      <div className='w-[40%] h-[100%] flex justify-end items-end relative'>
        <div className='flower_img'></div>
        <div className='flower_mini absolute left-[55px] bottom-[34px]'></div>
      </div>
      <div className='carousel-dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carouse;
