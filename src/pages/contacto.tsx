"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import dynamic from 'next/dynamic';

const Contacto: React.FC = () => {
  const Map = dynamic(() => import('../components/Map'), { ssr: false });
  const [form, setForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.title,
      message: form.message,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('¡Mensaje enviado exitosamente!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('No se pudo enviar el mensaje. Inténtelo de nuevo más tarde...');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  return (
    <div id="contato" className="container mx-auto pt-8 w-full px-4">
      <Map />
      <div className="flex-1 flex items-center justify-center py-12">
        <form className="w-full bg-white p-4 rounded shadow-md" onSubmit={sendEmail}>
          <h2 className="text-3xl text-black font-bold mb-4 text-center hover:text-blue-500 transition duration-300 cursor-default">¿LISTO PARA SOLICITAR UNA COTIZACIÓN?</h2>
          <p className="text-center text-black font-bold mb-6 hover:text-blue-500 transition duration-300 cursor-default">RELLENA EL FORMULARIO Y NOS CONTACTAREMOS CONTIGO.</p>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Su nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2" htmlFor="title">
              Sujeto
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Sujeto"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-md font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full pt-2 pb-12 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={6}
              placeholder="Escribe tu mensaje aquí..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="mt-0 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300" type="submit">
              ENVIAR MENSAJE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
