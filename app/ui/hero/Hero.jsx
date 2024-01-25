"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import BackHero from '../../../assets/back_hero.jpg';
import MockupLaptop from '../../../assets/mockup_laptop.png';
import data from '../../../text_content.json';

function Hero() {

  return (
    <section>
        <div className='relative'>
          <Image src={BackHero} alt="back_hero" className='w-full'  />
          <div className='absolute top-60 left-28 text-white w-2/3'>
            <p className='tracking-[10px] leading-none'>{data.hero.subtitulo}</p>
            <h1 className='text-7xl font-light my-2 leading-none tracking-[10px]'>{data.hero.titulo.regular.toUpperCase()} {" "}<span className='font-extrabold'>{data.hero.titulo.bold.toUpperCase()}</span></h1>
            <p className='w-[800px] tracking-wide text-3xl font-normal'>{data.hero.parrafo}</p>
            <p className='font-extralight text-sm mt-3'>{data.hero.CTA.subtitulo}</p>
            <button className='mt-6 ml-10 text-xs font-semibold'>{data.hero.CTA.btn.toUpperCase()}</button>
          </div>
          <Image src={MockupLaptop} alt="hero_mockup" className='absolute z-10 top-64 right-0 w-[800px]' />
        </div>
    </section>
  );
}

export default Hero;