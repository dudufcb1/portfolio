import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/reactsvg.svg';

export default function ReactProjects() {
  return (
    <>
      <Hero
        text={
          'Esta es una colección de algunos proyectos realizandos en React. Desde lo más simple hasta lo más complejo.'
        }
        title={'Mis proyectos en React JS'}
        img={reactImg}
      />
      <Projects contenido={'projects'} />
    </>
  );
}
