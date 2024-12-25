import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-screen h-screen bg-slate-500">
      <div className="flex h-20 w-full justify-evenly items-center italic bg-slate-400">
        <h1 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui et cupi</h1>
        <button className="text-white italic">Download resume</button>
      </div>
      <div className="flex flex-1 justify-evenly w-full">
        <div className="w-[33%] h-full bg-black">

        </div>
        <div className="w-[33%] h-full bg-red-100">
          <img src="" alt=""/>
        </div>
        <div className="w-[33%] h-full bg-green-100">

        </div>
      </div>
      <div className="h-20 w-full bg-slate-600">
        <ul className="h-full w-full flex justify-evenly italic text-white items-center">
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>SKILLS & TECHNOLOGIES</li>
          <li>PROJECTS & EXPERIENCE</li>
          <li>HIRE ME</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
