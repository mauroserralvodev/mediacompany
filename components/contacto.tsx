import React from 'react';

export default function Component() {
  return (
    <section className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-black text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
            <p className="text-black text-muted-foreground md:text-xl">
              ¿Tienes una pregunta o quieres trabajar juntos? Rellena el formulario a continuación y te responderemos lo antes posible.
            </p>
          </div>
          <form action="https://formsubmit.co/mauroserralvo@gmail.com" method="POST" className="bg-white p-6 grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Ingresa tu nombre"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Ingresa tu correo electrónico"
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Escribe tu mensaje..."
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            <input type="hidden" name="_next" value="https://mediacompany.vercel.app/form"/>
            <input type="hidden" name="_captcha" value="false"/>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
