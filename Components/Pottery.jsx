import React from 'react'
import pottery1 from '@/Assets/pottery1.jpg';
import pottery2 from '@/Assets/pottery2.jpg';
import Image from 'next/image';
const Pottery = () => {
  return (
    <>
       {/* Pottery Class Together Section */}
            <section id='Pottery' className="py-20 px-6 bg-[#fff0f5]">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left: Text */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">
                    Our Pottery Class Together
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Now that we have just done it and honestly it was such a fun, cute memory so why not add it here? hehe
                    The way we were just remembring that we would never have been able to do it if it were our younger selves but 
                    here we are, overcoming all that awkwardness and being able to enjoy things like these too...
                  </p>
                </div>
      
                {/* Right: Overlapping Polaroids */}
                <div className="relative flex justify-center md:justify-end">
                  <div className="w-40 md:w-48 transform rotate-[-5deg] shadow-lg bg-white p-1 rounded-lg relative z-10">
                    <Image src={pottery1} alt="Pottery Class 1" className="rounded-md" />
                    <p className="text-center text-gray-600 text-xs mt-1">Hamarey cute pots</p>
                  </div>
                  <div className="w-40 md:w-48 transform rotate-[6deg] shadow-lg bg-white p-1 rounded-lg -ml-8 mt-8">
                    <Image src={pottery2} alt="Pottery Class 2" className="rounded-md" />
                    <p className="text-center text-gray-600 text-xs mt-1">{"<3"}</p>
                  </div>
                </div>
              </div>
            </section>
      </>
         
  )
}

export default Pottery
