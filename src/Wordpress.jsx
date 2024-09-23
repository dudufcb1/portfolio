import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/wp.svg';

import React from 'react';

export default function Wordpress() {
  return (
    <>
      <Hero
        text={
          'Tengo experiencia trabajando con Wordpress, creando themes y plugins personalizados. Aquí te muestro algunos de mis proyectos. No me limito a personalizar wordpress a nivel usuario, puedo crear themes y plugins desde cero. Además, puedo trabajar con el API de Wordpress y todo lo relacionado con su programación.'
        }
        title={'Mis proyectos en Wordpress'}
        img={reactImg}
      />
      <Projects contenido={'wordpress'} />
    </>
  );
}
