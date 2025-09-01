import React from 'react'
import memories1 from '@/Assets/memories1.jpg';
import memories3 from '@/Assets/memories3.jpg';
import memories2 from '@/Assets/memories2.jpg';
import memories5 from '@/Assets/memories5.jpg';
import memories4 from '@/Assets/memories4.jpg';
import memories6 from '@/Assets/memories6.jpg';
import memories7 from '@/Assets/memories7.jpg';
import memories8 from '@/Assets/memories8.jpg';
import Image from 'next/image';

const Memories = () => {
  return (
    <>
      {/* Our Memories Section */}
          <section id='Memories' className="relative py-20 px-6 bg-[#FAD2E1] overflow-hidden">
            <h3 className="text-4xl font-bold font-[playfair_display] text-center mb-14 text-gray-800">
              Our Memories
            </h3>
    
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto z-10">
              {[memories1, memories2, memories3, memories4, memories5, memories6, memories7, memories8].map(
                (img, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-2xl p-4 pb-10 w-full transition transform hover:rotate-6 hover:scale-105 rounded-md"
                  >
                    <Image
                      src={img}
                      alt={`Memory ${index + 1}`}
                      className="w-full h-[300px] object-cover rounded-sm"
                    />
                    <p className="text-center text-base mt-4 text-gray-700 font-semibold">
                      {index + 1} {"<3"}
                    </p>
                  </div>
                )
              )}
            </div>
    
            <p className="text-center mt-14 max-w-3xl mx-auto text-gray-600">
              hese are some of our memories where we actually took pictures - werna to bed rotting kertay huay fazool baatein kernay main jo maza hai wo to kisi main nhi, But still, I love literally all the pictures we have ever took, the way even the pictures can tell that we grew up together. ehhehe
            </p>
          </section>
    </>
  )
}

export default Memories
