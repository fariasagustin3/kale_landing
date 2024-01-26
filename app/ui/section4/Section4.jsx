import React from "react";
import data from "../../../text_content.json";
import Image from "next/image";

function Section4() {
  return (
    <section className="px-20 bg-[#f7f7f7] py-36">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-end">
          <h3 className="subtitle">{data.section4.subtitle}</h3>
          <h1 className="title mb-10">
            {data.section4.title.regular}{" "}
            <span className="text-blue-bold">{data.section4.title.bold}</span>
          </h1>
          <div className="flex flex-col gap-5 text-right w-5/6 mb-10">
            <p className="parrafo">{data.section4.parrafo.p1}</p>
            <p className="parrafo">{data.section4.parrafo.p2}</p>
          </div>
        </div>
        <Image
          src={data.section4.img}
          alt="mockup section4"
          width={900}
          height={800}
          className=""
        />
      </div>
    </section>
  );
}

export default Section4;
