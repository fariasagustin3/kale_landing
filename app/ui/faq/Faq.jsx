import React from 'react'
import data from '../../../text_content.json';

function Faq() {
  return (
    <section>
      <div className='flex flex-col items-center py-36'>
        <h1 className='text-4xl font-bold mb-20'>Preguntas Frecuentes</h1>
        {data.faq.map((f, index) => (
          <div key={index} className='w-[800px] flex flex-col gap-3'>
            <p className='font-bold'>{f.pregunta}</p>
            <p className='ml-10'>{f.respuesta}</p>
            <hr className='my-5' />
          </div>
        ))}
      </div>  
    </section>
  )
}

export default Faq