import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { recentlyUpdate } from '../../Function/FectchMovie/Fetch';
import NextArrow from './NextArrow';

const RecentlyUpdate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    recentlyUpdate().then(data => setData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    arrows:true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='text-gray-200 mt-10 mb-6 lg:ml-[100px] text-xl font-semibold'>
        <p>Recently Updated</p>
      </div>

      <div className='lg:ml-[100px] ml-[5px]'>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className='flex items-center justify-center'>
              <div className='w-[206px] h-[103px] flex gap-3'>
                <div className='w-[64px] h-[103px]'>
                  <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.original_title} />
                </div>
                <div className='h-[80px] w-[118px] pt-4'>
                  <p className='text-gray-200'>{item.original_title}</p>
                  <p className='text-gray-200'>Series/S 2/EP 9</p>
                  <p className='text-gray-200'>11/05/23</p>
                </div>
              </div>
            </div>
          ))}
         
        </Slider>
       
        
      </div>
    </div>
  );
}

export default RecentlyUpdate;
