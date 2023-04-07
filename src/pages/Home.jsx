import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import DropdownList from '../components/DropdownList'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <DropdownList/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
