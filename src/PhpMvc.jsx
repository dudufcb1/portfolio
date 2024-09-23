import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/php.svg';

import React from 'react';

export default function PhpMvc() {
  return (
    <>
      <Hero
        text={
          'Conozco el lenguaje PHP y he trabajado con el patrón MVC en varios proyectos. Aquí te muestro algunos de ellos.'
        }
        title={'Mis proyectos en PHP MVC'}
        img={reactImg}
      />
      <Projects contenido={'php'} />
    </>
  );
}
