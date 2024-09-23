import React from 'react';

export default function HeroText({ text, title }) {
  return (
    <div className="hero-title">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
