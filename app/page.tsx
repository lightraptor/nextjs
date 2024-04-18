"use client";
import React from "react";
import img from "@/public/arc_reactor_iron_man_2-wallpaper-1920x1080.jpg"
import Image from "next/image";
const VCardQRCode = () => {

  return (
    <div className="m-4 flex flex-col">
{/*       <Image src={img} width={500} height={500} alt="bg" /> */}
      <p align="center" className="text-5xl bold">Wabi-Sabi</p>
      <p align="center">Khiếm khuyết một cách hoàn hảo (hiện tại là với cái web này)</p>
      <p>"Nothing about us without us"</p>
      <button className="bg-black text-white w-1/4 p-3 mb-3"><a href="https://form.jotform.com/241032420358445">English Survey</a></button>
      
<button className="bg-black text-white w-1/4 p-3"><a href="https://form.jotform.com/241073918354458">Khảo sát Tiếng Việt</a></button>      
    </div>
  );
};

export default VCardQRCode;
