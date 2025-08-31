import React from 'react'
import Link from 'next/link';


const Letters = () => {
  return (
    <>
       {/* The Letters Section */}
<section id='Letters' className="relative py-20 px-6 bg-[#fff0f5] text-center overflow-hidden">
  {/* Background Circles */}
  <div className="absolute top-10 left-10 w-60 h-60 bg-pink-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-700 rounded-full blur-3xl opacity-30 animate-bounce"></div>
  <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>

  {/* Content */}
  <h3 className="relative text-4xl font-bold font-[playfair_display] mb-6 text-gray-800 z-10">
    The Letters
  </h3>
  <p className="relative max-w-2xl mx-auto text-gray-600 mb-8 z-10">
    An apperication letter for someone sooo dear to me {"<3"} <br/>

Wrote this in different timelines, some are when I wanted to say something to you but couldn’t or some are when I just randomly remembered you so eheh <br/>
P.S at the end of every timeline there is a song dedicated to that part (sun lena un ko if you want {"<3"} )  <br/>

Is dafa ye nhi likhoongi k cringe hai to sorry because now I don’t think telling someone you love, about how much you love them is cringe hehe
(Character development ik)
  </p>
     <Link href={'/Panel/Letters'}>

        <button  className="px-8 py-3 border-2 border-pink-700 text-pink-700 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition">
          {console.log("here")}
          Read the Letters
        </button>
        </Link>
      </section>
    </>
  )
}

export default Letters
