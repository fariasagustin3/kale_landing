import React from "react";
import data from "../../../text_content.json";
import Image from "next/image";
import Paletas from '../../../assets/paletas.png';

function Section2() {
  return (
    <section className="h-full w-screen bg-gradient-to-b from-[#c4d0e0] flex justify-center py-10">
      <div className="flex flex-col gap-7 w-1/2 items-center">
        <div>
          <h3 className="subtitle">{data.section2.subtitle}</h3>
          <h1 className="title">
            {data.section2.title.regular}{" "}
            <span className="text-blue-bold">{data.section2.title.bold}</span>
          </h1>
        </div>
        <div>
          <p className="parrafo">{data.section2.parrafo}</p>
        </div>
        <div className="relative">
          <Image
            src={data.section2.img}
            alt="image section2"
            width={900}
            height={500}
            className="w-full"
          />
          <Image src={Paletas} alt="paletas" className="absolute -bottom-10" />
        </div>
      </div>
    </section>
  );
}

export default Section2;
