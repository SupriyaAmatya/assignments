import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Search from './Search'
import Blog from './Blog'

const Home = () => {
  return (
    <div className="main-body">
      <Hero />
      <Products />
      <Search />
      <Blog />
    </div>
  )
}

export default Home
