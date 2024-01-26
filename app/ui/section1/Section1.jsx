"use client";
import React, { useState } from "react";
import data from "../../../text_content.json";
import Image from "next/image";
import ReactSimplyCarousel from "react-simply-carousel";

function Section1() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className="mt-40 mb-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="subtitle">
          {data.section1.titulo.subtitle.toUpperCase()}
        </h3>
        <h1 className="title text-center w-[800px]">
          {data.section1.titulo.title}
          <span className="text-blue-bold">
            {data.section1.titulo.titleBold}
          </span>
        </h1>
      </div>
      <div className="relative w-screen">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          dotsNav={{
            show: true,
            containerProps: {
              position: "absolute",
              zindex: 20,
              background: "#eee",
            },
          }}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              border: "none",
              color: "white",
              cursor: "pointer",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
              position: "absolute",
              zindex: 10,
              right: 0,
              marginRight: 72,
              cursor: "pointer",
            },
            children: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#cdcdcd"
                className="hidden lg:flex lg:w-10 lg:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            ),
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              width: 30,
              position: "absolute",
              zIndex: 10,
              left: 0,
              marginLeft: 72,
            },
            children: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#cdcdcd"
                className="hidden lg:flex lg:w-10 lg:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          {data?.section1?.slider?.map((slide, index) => (
            <div
              key={index}
              className="flex w-[900px] flex-row items-center justify-center gap-5"
            >
              <div>
                <h1 className="text-right font-bold">{slide?.title}</h1>
                <p className="text-right text-2xl font-medium">{slide?.text}</p>
              </div>
              <Image src={slide?.img} alt={slide?.title} width={400} height={600} />
            </div>
          ))}
        </ReactSimplyCarousel>
        <div className="absolute -bottom-10 right-0 left-0">
          <div className="flex justify-center w-full gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                activeSlideIndex === 0 ? "bg-[#cdcdcd]" : "bg-[#656565]"
              } `}
            />
            <div
              className={`w-2 h-2 rounded-full ${
                activeSlideIndex === 1 ? "bg-[#cdcdcd]" : "bg-[#656565]"
              } `}
            />
            <div
              className={`w-2 h-2 rounded-full ${
                activeSlideIndex === 2 ? "bg-[#cdcdcd]" : "bg-[#656565]"
              } `}
            />
            <div
              className={`w-2 h-2 rounded-full ${
                activeSlideIndex === 3 ? "bg-[#cdcdcd]" : "bg-[#656565]"
              } `}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
