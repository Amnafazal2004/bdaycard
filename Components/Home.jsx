
import React from 'react'
import heroimg from '@/Assets/heroimg.jpg';
import heroimg2 from '@/Assets/heroimg2.jpg';
import heroimg3 from '@/Assets/heroimg3.jpg';
import heroimg4 from '@/Assets/heroimg4.jpg';


import Image from 'next/image';

const Home = () => {


  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#FDE2E4] via-[#FFF0F3] to-[#FAD2E1]">

    <nav className="flex items-center justify-between bg-pink-700 py-3 px-10 border-b border-gray-200 backdrop-blur-md">
  {/* Logo */}
  <div className="text-md font-bold font-[playfair_display] text-white">
    Emaan's diary
  </div>

  {/* Links (centered with absolute + left-50 translate-x-50) */}
  <ul className="hidden md:flex space-x-8 text-white text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
    <li><a href="/" className="hover:text-[#FAD2E1]">Home</a></li>
    <li><a href="#Pottery" className="hover:text-[#FAD2E1]">Pottery</a></li>
    <li><a href="#Memories" className="hover:text-[#FAD2E1]">Memories</a></li>
    <li><a href="#Letters" className="hover:text-[#FAD2E1]">Letters</a></li>
    <li><a href="#Footer" className="hover:text-[#FAD2E1]">Contact</a></li>
  </ul>
</nav>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center py-8 px-6">

          <p className="text-2xl md:text-5xl font-bold text-gray-900 font-[playfair_display] leading-tight z-10">
            Celebrating Emaan's<br />
            <span className="text-pink-700">22nd</span>
          </p>
          <p className="mt-4 max-w-xl text-sm text-gray-600 z-10">
            Read somewhere that peak friendship is when they give you handmade gifts that make you cry
            So this is curated just for you, by thinking about only you✨
          </p>

          {/* Polaroid Style Hero Images */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 z-10">
            <div className="w-40 h-52 bg-white shadow-xl rounded-lg overflow-hidden transform rotate-[-6deg]">
              <Image src={heroimg} alt="Hero 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-52 bg-white shadow-xl rounded-lg overflow-hidden transform rotate-[-2deg]">
              <Image src={heroimg2} alt="Hero 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-52 bg-white shadow-xl rounded-lg overflow-hidden transform rotate-[4deg]">
              <Image src={heroimg3} alt="Hero 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-40 h-52 bg-white shadow-xl rounded-lg overflow-hidden transform rotate-[8deg]">
              <Image src={heroimg4} alt="Hero 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

      </div>

      {/* Marquee */}
      <div id="About" className="w-full bg-pink-700 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-white font-bold uppercase tracking-widest text-[14px]">
          HAPPY BIRTHDAY NAFSEEATI • HAPPY BIRTHDAY NAFSEEATI • HAPPY BIRTHDAY NAFSEEATI •
          HAPPY BIRTHDAY NAFSEEATI • HAPPY BIRTHDAY NAFSEEATI • HAPPY BIRTHDAY NAFSEEATI •
        </div>
      </div>






    </>
  );
};

export default Home;
