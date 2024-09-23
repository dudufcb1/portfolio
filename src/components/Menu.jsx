import React, { useRef, useState, useEffect, createRef } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';

const Menu = ({ items }) => {
  const $root = useRef();
  const $indicator1 = useRef();
  const $indicator2 = useRef();
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);
  const location = useLocation();
  const timerRef = useRef(null); // Ref para el temporizador

  const animate = () => {
    const menuOffset = $root.current.getBoundingClientRect();
    const activeItem = $items.current[active].current;
    const { width, height, top, left } = activeItem.getBoundingClientRect();
    const settings = {
      x: left - menuOffset.x,
      y: top - menuOffset.y,
      width: width,
      height: height,
      backgroundColor: items[active].color,
      ease: 'elastic.out(.7, .7)',
      duration: 0.8,
    };
    gsap.to($indicator1.current, { ...settings });
    gsap.to($indicator2.current, { ...settings, duration: 1 });
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = items.findIndex((item) => item.href === currentPath);
    if (currentIndex !== -1) {
      setActive(currentIndex);
    }
  }, [location.pathname, items]);

  useEffect(() => {
    animate();
    window.addEventListener('resize', animate);
    return () => {
      window.removeEventListener('resize', animate);
    };
  }, [active]);

  // Función para manejar el hover sobre un ítem
  const handleMouseEnter = (index) => {
    setActive(index);

    // Limpia el temporizador si existe
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Configura un temporizador para volver al estado actual
    timerRef.current = setTimeout(() => {
      const currentPath = location.pathname;
      const currentIndex = items.findIndex((item) => item.href === currentPath);
      if (currentIndex !== -1) {
        setActive(currentIndex);
      }
    }, 2000); // Espera 2 segundos
  };

  // Maneja el click para ir al ítem seleccionado
  const handleClick = (index) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActive(index);
  };

  return (
    <div ref={$root} className="menu">
      {items.map((item, index) => (
        <Link
          key={item.name}
          ref={$items.current[index]}
          className={`item ${active === index ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index)} // Configura el click
          to={item.href} // Usa `to` en lugar de `href`
        >
          {item.name}
        </Link>
      ))}
      <div ref={$indicator1} className="indicator" />
      <div ref={$indicator2} className="indicator" />
    </div>
  );
};

export default Menu;
