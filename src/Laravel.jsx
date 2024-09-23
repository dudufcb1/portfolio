import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/laravel.svg';

import React from 'react';

export default function Laravel() {
  return (
    <>
      <Hero
        text={
          'He trabajado con laravel creando proyectos fullstack, utilizando el stack TALL y también utilizando Laravel como API REST y React en el frontend.'
        }
        title={'Mis proyectos en Laravel'}
        img={reactImg}
      />
      <Projects contenido={'laravel'} />
    </>
  );
}
