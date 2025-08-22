import Image from 'next/image'
import React from 'react'

const Hero = ({
  image,
  mainHeader,
  secondaryHeader
}) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        {/* use fill so we don't need explicit width/height, and add alt */}
        <Image
          src={image}
          alt={mainHeader || "Hero image"}
          fill
          className="brightness-50 h-full w-full object-cover"
          priority
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center gap-8"
        >
          <h2 className="text-white text-6xl font-bold">
            {mainHeader}
          </h2>
          <h5 className="text-white text-4xl font-semibold">
            {secondaryHeader}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Hero
