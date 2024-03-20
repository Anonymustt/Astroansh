import Image from "next/image";
import Stars from "../../public/Stars.png";
import Logo from "/public/logo.png";
import Earth from "../../public/Earth.png";
import Saturn from "../../public/SaturnG.gif";
import Planet from "../../public/Planet.png";
import Star from "../../public/Shoot.gif";
import Moon from "../../public/MoonR.gif";
import Purplegradient from "../../public/Purplegradient.png";
import Blugradient from "../../public/BluGradient.png";
import Tick from "../../public/Tick.png"
import Play from "/public/Play.png"
import styles from "./index.css"
export default function Home() {
  return (
    <main className=" h-screen w-screen">
      <Image src={Stars} alt="star" className=" w-screen h-screen absolute" />
        
        <Image
        src={Earth}
        alt="earth"
        className="earth absolute right-0"
        width={1200}
        height={800}
      />
      <Image
        src={Purplegradient}
        alt="purple"
        className=" absolute top-0"
        width={1000}
        height={800}
      />
      <Image
        src={Star}
        alt="purple"
        className=" absolute "
        width={200}
        height={80}
      />
      <Image
        src={Moon}
        alt="moon"
        className={`absolute ${styles.moonImage} -left-20 -bottom-20   w-[35%] md:w-[15%] `}
        width={250}
        height={200}
      />
      <Image
        src={Blugradient}
        alt="blue"
        className=" absolute bottom-0 right-0 opacity-80"
        width={1000}
        height={1000}
      />
      <Image
        src={Saturn}
        alt="saturn"
        className="absolute  bottom-15 top-1/4 opacity-70 md: top-1/3 left-1/4 opacity-90"
        width={100}
        height={150}
      />
      <Image
        src={Planet}
        alt="planet"
        className=" absolute top-10 left-10 opacity-50 md:opacity-85"
        width={40}
        height={40}
      />
      <div className="w-screen h-screen bg-black flex flex-col justify-between items-center p-10 z-0">
        <div className="w-[100%] md:w-1/2 h-12 bg-white bg-opacity-10 p-4 mt-5 rounded-full border border-slate-600 relative z-10 flex items-center justify-between">
          <Image
            src={Logo}
            alt="Logo"
            className=" "
            width={100}
            height={70}
          />
          <input
            className="w-1/2 bg-transparent text-white outline-none md: ml-1 mr-1"
            
          />
          <button className="text-white bg-pink-600 hover:bg-transparent rounded-full text-xs justify-center items-center flex flex-auto 
            w-2/5 px-3 py-1.5 md:px-1 md:py-1 max-w-32 flex-auto relative overflow-hidden">
            <span className="md:hidden">Book Now!!</span>
            <span className="hidden md:inline">Book a Spot Now!</span>
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity"></div>
          </button>

        </div>
        <div className="flex flex-col justify-center items-center z-10 h-1/2 space-y-10">
          <div className="text-l text-white flex flex-auto items-center justify-between space-x-4">
            <Image
              src={Tick}
              alt="watch"
              className="w-[10%]md:w-[10%]"
              width={23}
              height={10}
            />
            
            <span>Book Now and Get an Early Bird Offer!</span>
          </div>
          <div className="text-3xl max-w-screen-sm md:text-5xl text-white font-bold text-center space-x-4 ">
            <span className=" mt-3 ">Genuine Vedic Astrology Consultation that you were looking for!</span>
          </div>
          <div className="flex justify-between items-center space-x-5 mt-4">
            <button className="text-white bg-pink-600 hover:bg-opacity-40  rounded-full text-sm px-6 py-1.5 flex-auto">
            <span className="md:hidden">Book Now!!</span>
            <span className="hidden md:inline">Book a Spot Now!</span>
            </button>
            <button className="text-white flex">
              <div>
                <Image
                  src={Play}
                  alt="play"
                  className="transition duration-300 transform hover:scale-110"
                  width={35}
                  height={40}
                />
              </div>
              <span className=" text-center mt-1.5 ml-2">
                Watch Video
              </span>
             
            </button>
          </div>
        </div>
        <div className="footer justify-between items-center z-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div class="flex items-center mr-2">
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <div className="text-white flex flex-row">4.6/5 (Reviewed by 500+ Customers)</div>
          </div>
         
        </div>
      </div>
    </main>
  );
}