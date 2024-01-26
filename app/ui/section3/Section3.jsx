import React from "react";
import data from "../../../text_content.json";
import Image from "next/image";

function Section3() {
  return (
    <section className="h-full flex flex-col py-10">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-1 flex-col items-end justify-center px-10">
          <h3 className="subtitle">{data.section3.subtitle}</h3>
          <h1 className="title text-right w-3/4">
            {data.section3.title.regular}{" "}
            <span className="text-blue-bold">{data.section3.title.bold}</span>
          </h1>
          <div className="flex flex-col items-end w-4/5 gap-10 text-right">
            <p className="parrafo">{data.section3.parrafo.p1}</p>
            <p className="parrafo">{data.section3.parrafo.p2}</p>
            <p className="parrafo">{data.section3.parrafo.p3}</p>
            <p className="parrafo">{data.section3.parrafo.p4}</p>
          </div>
        </div>
        <div className="flex">
          <Image
            src={data?.section3?.img}
            alt="image"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
