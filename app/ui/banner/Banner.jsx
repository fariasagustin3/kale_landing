import React from 'react';
import data from '../../../text_content.json';

function Banner() {
  return (
    <section className='flex flex-row items-center justify-between px-56 bg-[#f7f7f7] py-20'>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h2 className='banner-title'>{data.Banner.title}</h2>
        <p className='banner-p w-3/4'>{data.Banner.parrafo}</p>
      </div>
      <button className='border-[1px] border-[#656565] text-[#656565] font-semibold px-14 py-3 rounded-[5px]'>{data.Banner.Btn.toUpperCase()}</button>
    </section>
  )
}

export default Banner;