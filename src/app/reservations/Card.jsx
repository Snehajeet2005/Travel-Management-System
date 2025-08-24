import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
const Card = ({
    hotel
}) => {
  return (
    <div className="w-[300px] min-h-full flex flex-col ml-12">
      <Link href={'/details/${hotel.listingId}'}>
        <Image 
          alt='Hotel Image'
          src={hotel.image}
          className="rounded-xl shadow-xl"
          height="200"
          width="300"
        />
      </Link>
      <div className="p-2 mt-2 flex flex-col gap-4">
         <span className="font-semibold text-lg">
             {hotel.location}
         </span>
         <span>
            {hotel.name}
         </span>
         <div>
             <span className="text-slate-500">
                  {format(hotel.startDate, "MMM do yyy")}
             </span>
             <span className="px-2">-</span>
             <span className="text-slate-500">
                  {format(hotel.endDate, "MMM do yyy")}
             </span>
         </div>
         <div>
                Total price: ${hotel.daysDifference * hotel.pricePerNight}
         </div>
         <button
                    
                    className="w-full py-2 bg-red-500 text-white rounded-xl transition-all hover:bg-red-400"
          >
                    Cancel
                </button>
      </div>
    </div>
  )
}

export default Card