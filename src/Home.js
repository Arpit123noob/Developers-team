import React, { useEffect, useState } from 'react';
import './App.css';


import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,image2,image3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the time interval (in milliseconds) as desired

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow ${index + 1}`}
            className={currentIndex === index ? 'active' : ''}
          />
        ))}
      </div>
      <h1>Welcome to WeConnect!!</h1>
      <p>This is the home page.</p>
    </div>
  );
}

export default Home;
