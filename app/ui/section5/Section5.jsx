import React from "react";
import data from "../../../text_content.json";
import Image from "next/image";

function Section5() {
  return (
    <section className="py-40 px-60">
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <h3 className="subtitle text-left">{data.section5.subtitle}</h3>
          <h1 className="title">
            {data.section5.title.regular}{" "}
            <span className="text-blue-bold">{data.section5.title.bold}</span>
          </h1>
          <Image
            src={data.section5.img}
            alt="section5 image"
            width={400}
            height={300}
          />
          <p className="parrafo mt-10 w-4/5">{data.section5.parrafo}</p>
        </div>
      </div>
    </section>
  );
}

export default Section5;
