import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Slide, Fade} from 'react-reveal';
import './Certificates.css';
import { dataDigitalBestSeller } from './Data';
import Bg from '../../assets/bg.jpg';


const Credentials = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: Bg,
    }));
  };

  return (
    <div className="container-fluid __cert-container" id="certificates">
      <Slide right>
          <div className="__cert-title">
            <h2>Certificates</h2>
          </div>
      </Slide>

      <Fade left>
        <div className="__cert-wrapper">
         <Slider {...settings}>
            {dataDigitalBestSeller.map((item) => (
               <div className="__cert-card">
                 <div className="__cert-card-top">
                   <img
                       src={
                          defaultImage[item.title] === item.title
                          ? defaultImage.linkDefault
                          : item.linkImg
                        }
                        alt={item.title}
                        onError={handleErrorImage}
                    />
                    <h1 className="cert-title">{item.title}</h1>
               </div>

               <div className="__cert-card-bottom">
                  <h3 className="__cert-para">{item.description}</h3>
                  <button className="__cert-btn"><a href={item.credentialURL} rel="noreferrer" target="_blank">View More</a></button>
                </div>
              </div>
           ))}
       </Slider>
     </div>
     </Fade>
   </div>
  );
}

export default Credentials;