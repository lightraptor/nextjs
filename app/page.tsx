"use client";
import React from "react";
import img from "@/public/arc_reactor_iron_man_2-wallpaper-1920x1080.jpg"
import Image from "next/image";
const VCardQRCode = () => {

  return (
    <div className="m-4 flex flex-col">
      <Image src={img} width={500} height={500} alt="bg" />
      <p className="text-5xl bold">Wabisabi team</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo aut, obcaecati ut non quidem natus perferendis velit perspiciatis quisquam ea in, ipsum ad doloribus facere id optio voluptate molestiae.</p>
      <button className="bg-black text-white w-1/4 p-3 mb-3"><a href="https://form.jotform.com/241032420358445">Khảo sát tiếng anh</a></button>
      
<button className="bg-black text-white w-1/4 p-3"><a href="https://form.jotform.com/241073918354458">Khảo sát tiếng việt</a></button>      
    </div>
  );
};

export default VCardQRCode;