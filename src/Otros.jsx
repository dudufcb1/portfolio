import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/otros.svg';

export default function Otros() {
  return (
    <>
      <Hero
        text={
          'A lo largo de mi carrera como programador he trabajado principalmente en web, pero también he tenido la oportunidad de trabajar en otros proyectos y tecnologías. Soy un apasionado por la tecnología y siempre estoy dispuesto a aprender cosas nuevas. Siempre estoy aprendiendo cosas nuevas y actualizandome.'
        }
        title={'Mi valor agregado'}
        img={reactImg}
      />
      <Projects />
    </>
  );
}
