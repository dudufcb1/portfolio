import React from 'react';
import heroimg from '../assets/hero.svg';
import HeroText from './HeroText';

const Hero = ({ text, title, img }) => {
  return (
    <section className="hero">
      <div className="hero-center">
        <HeroText text={text} title={title} />
        <div className="img-container">
          <img src={img} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
