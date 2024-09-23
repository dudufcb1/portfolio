import React, { useState } from 'react';

export default function BasicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch('https://formcarry.com/s/c3fgwXUTfoJ', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('¡Hemos recibido tu envío, gracias!');
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Tu nombre
        </label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Tu nombre completo"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Tu email
        </label>
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="correo@ejemplo.com"
        />
      </div>
      <div className="form-row">
        <label htmlFor="message" className="form-label">
          Tu mensaje
        </label>
        <textarea
          className="form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-row">
        <button type="submit" className="btn btn-block">
          Enviar
        </button>
      </div>
    </form>
  );
}
