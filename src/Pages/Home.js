import React from 'react'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Navbar />
        <br />
        <br />
        <br />
        <Carousel />
        <Categories />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Home
