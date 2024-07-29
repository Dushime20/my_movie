import React, { useEffect, useState } from 'react';
import { SlCalender } from "react-icons/sl";
import { LuTimer } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import RecentlyUpdate from '../Recently_update/RecentlyUpdate';
import Trending from '../Trending/Trending';
import NewReleaseMovie from '../NewRelease_Movies/NewReleaseMovie';
import NewReleaseSeries from '../NewRelease_series/NewReleaseSeries';
import Recommended from '../Recommended/Recommended';
import { topRated } from '../../Function/FectchMovie/Fetch';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    topRated().then(data => setData(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div className='my-10'>
      {/* <Slider {...settings}> */}
        {data.slice(2, 3).map((item) => (
          <div
            key={item.id}
            className='bg-cover bg-center bg-no-repeat w-full h-[744px] lg:flex justify-center'
            style={{ 
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center' 
            }}
          >
            <div className='flex items-center justify-center h-full'>
              <div className='flex gap-4'>
                <button className='text-gray-200 bg-[#ff0000] lg:h-[76px] p-3 lg:w-[223px] rounded'>Watch Now</button>
                <button className='text-gray-200 border-2 border-[#ff0000] p-3 lg:h-[76px] lg:w-[223px] rounded'>Watch Later</button>
              </div>
            </div>
            <div className='top-[564px] absolute lg:left-[160px] text-gray-200 h-full'>
              <div className='text-3xl mb-3 font-semibold'>
                <p>Avatar: The Way Of Water</p>
              </div>
              <div className='flex gap-2 mb-3 lg:w-[614.43px] h-[44px] items-center'>
                <button className='lg:w-[63px] lg:h-[44px] bg-gray-200 text-[#000300] rounded-full p-2'>Action</button>
                <button className='lg:w-[106px] lg:h-[44px] bg-gray-200 text-[#000300] rounded-full p-2'>Adventure</button>
                <button className='lg:w-[142px] lg:h-[44px] bg-gray-200 text-[#000300] rounded-full p-2'>Science Fiction</button>
                <div className='lg:flex'>
                  <p className='flex gap-1 items-center'><SlCalender /> 2022</p>
                  <p className='flex gap-1 items-center'><LuTimer /> 3:12:00</p>
                  <p className='flex gap-1 items-center'><FaStar /> 8.5</p>
                </div>
              </div>
              <div className='lg:w-[626px] flex items-center'>
                <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
              </div>
            </div>
          </div>
        ))}
      {/* </Slider> */}
      
      <div className='mt-5'>
        <RecentlyUpdate />
      </div>
      <div>
        <Trending />
      </div>
      <div>
        <NewReleaseMovie />
      </div>
      <div>
        <NewReleaseSeries />
      </div>
      <div>
        <Recommended />
      </div>
    </div>
  );
}

export default Home;
