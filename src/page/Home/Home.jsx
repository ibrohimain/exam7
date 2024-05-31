import React from 'react'
import Carouse from '../../components/Carousel/Carouse'
import Categoria from '../../components/Categoria/Categoria'
import Summer from '../../components/SummerFlower/Summer'
import Ousrblog from '../../components/OurBlog/Ousrblog'
import Footer from '../../components/Footer/Footer'
import GeenShoop from '../../components/GreenSHoop/GeenShoop'

const Home = () => {
  return (
    <div className='w-[100%] mx-auto'>
      <Carouse />
      <Categoria />
      <Summer/>
      <Ousrblog/>
      <Footer/>
      <GeenShoop/>
    </div>
  )
}

export default Home
