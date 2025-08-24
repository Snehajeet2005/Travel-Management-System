"use client"
import Image from "next/image" 
import hotel_image_1 from "../../../../public/assets/hr_1.jpg"
import hotel_image_2 from "../../../../public/assets/hr_2.jpg"
import React, { useRef, useState, useEffect, use } from "react"
import { register } from "swiper/element/bundle"
import { AiFillStar } from 'react-icons/ai'
import { CiLocationOn } from "react-icons/ci"
import { FaBed, FaWifi } from "react-icons/fa"
import { format } from 'currency-formatter'
import BookModal from '@/components/book-modal/BookModal'
import Review from "./Review"

const HotelDetails = ({ params }) => {
  // ✅ unwrap params promise with React.use()
  const { id } = use(params)

  const [selectedStar, setSelectedStar] = useState(5)
  const [showModal, setShowModal] = useState(false)
  const [reviewText, setReviewText] = useState("")   // ✅ controlled input fix
  const swiperElRef = useRef(null)

  // Register swiper only on client
  useEffect(() => {
    register()
  }, [])

  const handleHideModal = () => setShowModal(false)

  return (
    <div className={`min-h-screen w-full mt-24 ${showModal && "overflow-hidden"}`}>
      {showModal && (
        <BookModal handleHideModal={handleHideModal} />
      )}
      <div className="h-full w-3/4 mx-auto">
        {/* Swiper Section */}
        <div className="w-full h-[750px] overflow-hidden mx-auto">
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="true"
          >
            <swiper-slide>
              <Image
                className="h-[750px] w-full object-cover"
                src={hotel_image_1}
                alt="Hotel 1"
              />
            </swiper-slide>
            <swiper-slide>
              <Image
                className="h-[750px] w-full object-cover"
                src={hotel_image_2}
                alt="Hotel 2"
              />
            </swiper-slide>
          </swiper-container>
        </div>

        {/* Hotel Info */}
        <div className="mt-12 px-6 w-full flex items-center justify-between">
          <h2 className="font-bold text-4xl">
            Arabian Paradise
          </h2>
          <div>
            <span className="p-2 px-4 text-[22px] rounded-full bg-blue-600 text-white flex items-center gap-2">
              <AiFillStar color="white" />
              <span className="text-white">4.7</span>
            </span>
          </div>
        </div>

        {/* Location & Pricing */}
        <div className="mt-16 px-6 flex items-center gap-8">
          <span className="flex items-center gap-2">
            <CiLocationOn />
            Dubai, UAE 
          </span>
          <span className="flex items-center gap-2">
            {format(325.50, { locale: "en-US" })}/night
          </span>
          <span className="flex items-center gap-2">
            2 <FaBed />
          </span>
          <span className="flex items-center gap-2">
            Free <FaWifi />
          </span>
        </div>

        {/* Description + Book Button */}
        <div className="mt-16 px-6 w-full flex items-end justify-between">
          <p className="text-xl max-w-xl text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Hic corporis exercitationem placeat maiores vitae numquam asperiores
            cumque consequuntur vero recusandae quidem totam porro tenetur soluta culpa iusto, a non repellat!
          </p>
          <button 
            suppressHydrationWarning
            type="button"  
            className="cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500"
            onClick={() => setShowModal(true)}
          >
            Book
          </button>
        </div>

        {/* Reviews Section */}
        <div className="border-t-2 border-slate-300 px-6 mt-16 mx-auto">
          <h1 className="mt-16 text-3xl font-bold">Reviews</h1>

          {/* Rating Stars */}
          <div className="mt-8 flex items-center gap-6">
            {Array.from(Array(5).keys()).map((number) => (
              <span
                key={number}
                onClick={() => setSelectedStar(number + 1)}
                className={`${selectedStar === number + 1 ? "scale-125" : ""}
                cursor-pointer flex items-center gap-2 transition-all`}
              >
                {number + 1}
                <AiFillStar size={22} color="rgb(59, 130, 246)" />
              </span>
            ))}
          </div>

          {/* Add Review Box */}
          <div className="mt-8 flex items-center gap-6 border rounded-lg py-4 px-6 w-max">
            <input
              className="outline-none"
              type="text"
              placeholder="Leave your opinion..."
              value={reviewText}   // ✅ controlled input
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button 
              type="button"
              className="cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 hover:bg-blue-400 transition-all"
              onClick={() => {
                console.log("Review posted:", reviewText)
                setReviewText("") // clear after post
              }}
            >
              Post
            </button>
          </div>

          {/* Single Review */}
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  )
}

export default HotelDetails



