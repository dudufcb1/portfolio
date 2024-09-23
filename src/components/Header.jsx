import React from 'react';
import Menu from './Menu';

const items = [
  { name: 'React', color: '#f44336', href: '/' },
  { name: 'PHP MVC', color: '#e91e63', href: '/php-mvc' },
  { name: 'Laravel', color: '#9c27b0', href: '/laravel' },
  { name: 'Wordpress', color: '#673ab7', href: '/wordpress' },
  { name: 'Otras skills', color: '#503b72', href: '/otros' },
  { name: 'Contactame', color: '#3f51b5', href: '/contactame' },
];

export default function Header() {
  return (
    <header>
      <Menu items={items} />
    </header>
  );
}
