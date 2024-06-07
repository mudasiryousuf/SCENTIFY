import React from 'react'
import {TypeAnimation} from'react-type-animation'
import {PRODUCTS} from "../../Products"
import Product from "./Product";
import "./shop.css";
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'> 
     <img src="./bimages/slideshow1.jpeg" alt="" />
       <h1>
        {/* Scentify */}
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
        'GET SCENT-STATIONALLY NOTICED',
        1000,
      
        1000,
        "Discover Your Signature Scent with Scentify",
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '30', display: 'inline-block' }}
      repeat={Infinity}
    />
       </h1>
      </div>
      <div className='products'> {PRODUCTS.map((product)=>(
         <Product data={product}/>
      ))}</div>
    </div>
  )
}

export default Shop
