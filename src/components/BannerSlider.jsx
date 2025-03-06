import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/slider4.jpg'
import img2 from '../assets/slider8.jpg'
import img3 from '../assets/slider3.jpg'

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    
      return (
        <div className=" overflow-hidden ">
          <div className="relative">
            <Slider {...settings}>
              <div>
                <div className="relative">
                  <img src={img1} alt="Slide 1" className="w-full md:h-[600px] h-[160px] object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
                    {/* <h3 className="text-white text-3xl font-bold">Slide 1</h3> */}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img src={img2} alt="Slide 2" className="w-full md:h-[600px] h-[160px]  object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center k bg-opacity-50">
                    {/* <h3 className="text-white text-3xl font-bold">Slide 2</h3> */}
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img src={img3} alt="Slide 3" className="w-full md:h-[600px] h-[150px] object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
                    {/* <h3 className="text-white text-3xl font-bold">Slide 3</h3> */}
                  </div>
                </div>
              </div>
            </Slider>
            {/* Custom Dots Positioning */}
            <style>
              {`
                .slick-dots {
                  position: absolute;
                  bottom: 20px;
                  width: 100%;
                  text-align: center;
                }
                .slick-dots li button:before {
                  color: white; /* Dot color */
                }
                .slick-dots li.slick-active button:before {
                  color: white; /* Active dot color */
                }
              `}
            </style>
          </div>
        </div>
      );
};

export default BannerSlider;