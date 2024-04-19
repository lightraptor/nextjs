"use client";
import React from "react";
import Image from 'next/image'; // Import the Image component
// import carot from '@/app/thichcarot.jpg'

const Home = () => {
  return (
    <div className="m-4 flex flex-col gap-3">
      <div className="title-wrap w-full h-fit flex justify-center items-center">
        <p className=" sm:text-8xl text-5xl font-bold my-9 tracking-wider">Wabi-Sabi</p>
      </div>
      {/* Insert the image here */}
      <div className="image-wrap w-full h-fit flex justify-center items-center">
        <img src={"https://raw.githubusercontent.com/lightraptor/nextjs/main/app/thichcarot.jpg"} alt="Thich Carot" width={500} height={500} />
      </div>
      <div className="content-wrap flex flex-col gap-3">
        <p className="sm:text-3xl text-xl font-normal tracking-wide text-center">Khiếm khuyết một cách hoàn hảo (hiện tại là với cái web này)</p>
        <p className="sm:text-3xl text-xl font-normal tracking-wide text-center">Nothing about us without us</p>
      </div>
      <div className="button-wrap flex sm:flex-row flex-col justify-around sm:my-20 my-10 gap-7">
        <div className="button-left sm:w-1/2n w-full flex justify-center items-center">
          <button className="button-item sm:w-1/2 w-[90%] p-4 text-xl hover:text-2xl hover:sm:text-3xl hover:sm:w-2/3 hover:w-[95%] duration-300">
            <a href="https://form.jotform.com/241073918354458" className=" tracking-wide">Khảo sát Tiếng Việt</a>
          </button>
        </div>
        <div className="button-right sm:w-1/2n w-full flex justify-center items-center">
          <button className="button-item sm:w-1/2 w-[90%] p-4 text-xl hover:text-2xl hover:sm:text-3xl hover:sm:w-2/3 hover:w-[95%] duration-300">
            <a href="https://form.jotform.com/241032420358445" className=" tracking-wide">English Survey</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
