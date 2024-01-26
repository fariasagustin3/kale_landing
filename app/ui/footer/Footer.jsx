import React from "react";
import data from "../../../text_content.json";
import Image from "next/image";

function Footer() {
  return (
    <section className="bg-[#212153] py-16">
      <div className="px-32">
        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-white">
          <div className="flex flex-row items-center">
            <Image
              src={data.footer.top.left.logo.logoPath}
              alt="logo"
              width={70}
              height={100}
              className="py-5 w-24"
            />
            <button className="border-l-[1px] border-l-white ml-5 pl-5">
              <a href={data.footer.top.left.ig.url} target="_blank">
                <Image
                  src={data.footer.top.left.ig.iconPath}
                  width={30}
                  height={30}
                />
              </a>
            </button>
          </div>
          <hr className="bg-white mt-3" />
          <div>
            <button className="border-[1px] border-white text-white text-sm font-medium px-5 py-2 rounded-[5px]">
              {data.footer.top.right.boletin.btn.texto.toUpperCase()}
            </button>
          </div>
        </div>
        <div className="flex flex-row text-white items-center justify-center gap-4 mt-10 text-xs font-light">
          <a href={data.footer.botton.item1.link}><span>{data.footer.botton.item1.text}</span></a>
          <a href={data.footer.botton.item2.link}><span>{data.footer.botton.item2.text}</span></a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
