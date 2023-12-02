import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An E-Commerce website, short for Electronic Commerce website, is 
                an online platform that enables businesses and individuals to buy 
                and sell products and services over the internet. These websites 
                serve as virtual marketplaces where transactions can occur electronically.
            </p>
            <p>
            E-Commerce websites have revolutionized the way people shop and conduct business, 
            and they continue to evolve with technological advancements, providing both customers 
            and businesses with new opportunities and improved experiences in the digital marketplace.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox