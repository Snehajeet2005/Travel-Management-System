import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import hotel_image from "../../public/assets/hr_10.jpg";

export default function Home() {
  return (
    <>
      <Hero
        video="/assets/seawave.mp4"
        mainHeader="Are you ready for an adventure?"
        secondaryHeader="Browse through the popular locations."
      />
      <PopularLocations />
      <Hero
        image={hotel_image}
        mainHeader="Get the best offer for your hotel!"
        secondaryHeader="Pick your desired place."
      />
      <BestHotels />
    </>
  );
}
