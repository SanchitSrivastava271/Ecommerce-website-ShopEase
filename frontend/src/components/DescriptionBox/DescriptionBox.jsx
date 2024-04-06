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
            <p>The eCommerce website provides a secure, user-friendly interface with efficient product navigation and a seamless checkout experience. Featuring responsive design, diverse payment options, and robust order management, it ensures a smooth online shopping journey. Legal compliance and scalable infrastructure make it a reliable platform for successful and growing online retail operations.</p>
            <p>E-commerce encompasses a wide range of activities, including online retail stores, online marketplaces, digital payment systems, and more, making it a fundamental part of the modern business landscape.</p>
        </div>
    </div>
  )
}

export default DescriptionBox