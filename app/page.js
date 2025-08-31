import React from 'react'
import Home from '@/Components/Home'
import Footer from '@/Components/Footer'
import Pottery from '@/Components/Pottery'
import Memories from '@/Components/Memories'
import Letters from '@/Components/Letters'

const page = () => {
  return (
    <div>
      <Home/>
      <Pottery/>
      <Memories/>
      <Letters/>
      <Footer/>
    </div>
  )
}

export default page
