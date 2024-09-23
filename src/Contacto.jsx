import Hero from './components/Hero';
import Projects from './components/Projects';
import reactImg from './assets/contacto.svg';

import React from 'react';
import BasicForm from './components/BasicForm';

export default function Contacto() {
  return (
    <>
      <Hero
        text={
          'Estoy abierto a colaborar en proyectos interesantes y desafiantes. Si tienes una idea o proyecto en mente, no dudes en contactarme.'
        }
        title={'Me gustaría trabajar contigo'}
        img={reactImg}
      />
      <BasicForm />
    </>
  );
}
