import React from 'react'
import image_1 from '../../../public/assets/hr_1.jpg'
import image_2 from '../../../public/assets/hr_2.jpg'
import image_3 from '../../../public/assets/hr_3.jpg'
import image_4 from '../../../public/assets/hr_4.jpg'
import image_5 from '../../../public/assets/hr_5.jpg'
import image_6 from '../../../public/assets/hr_6.jpg'
import image_7 from '../../../public/assets/hr_7.jpg'
import Card from './Card'

const BestHotels = () => {
  const data = [
    {
      id: 1,
      name: "Arabian Paradise",
      image: image_1,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 2,
      name: "Arabian Paradise",
      image: image_2,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 3,
      name: "Arabian Paradise",
      image: image_3,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 4,
      name: "Arabian Paradise",
      image: image_4,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 5,
      name: "Arabian Paradise",
      image: image_5,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 6,
      name: "Arabian Paradise",
      image: image_6,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    },
    {
      id: 7,
      name: "Arabian Paradise",
      image: image_7,
      price: 324.50,
      category: "Luxury",
      reviews: 4.7,
      location: "Dubai, UAE"
    }
  ]
  
  return (
    <div className="h-full w-full my-36">
      <div className="h-full w-5/6 mx-auto flex flex-col justify-start">
        <h5 className="text-[20px] bg-blue-500 text-white rounded-full p-4 w-max">
          Explore Top
        </h5>
        <h2 className="text-4xl text-slate-800 font-bold mt-6 mb-12">
          Best Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {data?.map((place) => (
            <Card key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestHotels
