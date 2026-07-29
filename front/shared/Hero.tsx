import React from 'react'

const Hero = () => {
  return (
    <div  className="w-full bg-background flex flex-col">
      <section>
        <h1 className='text-foreground text-3xl'>
            Conoce a ESPERANZA: <br />
            <span className='text-primary'>Mi Asistente de IA</span> te <br />
            Cuenta sobre mi experiencia
        </h1>
        <p>
          Hola, soy Esperanza, una apasionada desarrolladora Full <br />
          stack. Mi asistente de IA esta aquí para responder tus <br />
          preguntas sobre mis habilidades, proyectos y trayectoria en <br />
          tiempo real.
        </p>
      </section>
    </div>
  )
}

export default Hero
