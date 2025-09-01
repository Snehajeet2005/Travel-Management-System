import Image from "next/image";
import React from "react";

const Hero = ({ video, mainHeader, secondaryHeader }) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-8">
          <h2 className="text-white text-6xl font-bold">{mainHeader}</h2>
          <h5 className="text-white text-4xl font-semibold">
            {secondaryHeader}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
