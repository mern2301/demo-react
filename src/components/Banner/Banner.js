import React from 'react'
import './Banner.css'
import banner from '../assets/banner right img.png'
const Banner = () => {
  return (
    <section id="banner-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left_details">
                        <div className="text">
                            <h1>Building stellar websites for early startups</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div> 
                        <div className="banner_button">
                            <a href="#" className="button1">View our work</a>
                            <a href="#" className="button2">View Pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>                       
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right_img">
                        <div className="img">
                            <img src={banner} alt="banner right img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner