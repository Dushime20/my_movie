import React, { useEffect, useState } from 'react'
import { movieDetail } from '../../Function/Moviedetail';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Card from '../Home/Card';
import { FaCirclePlay } from "react-icons/fa6";

const MovieDetails = () => {
    const { id } = useParams(); // Correctly destructure useParams
    const navigate = useNavigate();
    const [data, setData] = useState(null); // Initialize data as null
  
    useEffect(() => {
        movieDetail(id).then(data => {
            console.log("Fetched data:", data); // Debug: Log fetched data
            setData(data);
          });
        }, [id]);
  
    const handleNavigate = () => {
      navigate("/");
    }

    console.log("data",data)
  
    if (!data) {
      return <div className='text-gray-50'>Loading...</div>; // Handle loading state
    }
   
  
    return (
      <div className='flex items-center justify-center flex-wrap'>
        <div>
          <div className='flex justify-between m-3'>
            <h2 className='text-gray-200 text-3xl'>Movie details</h2>
            <button className='bg-slate-200 w-16 rounded-md' onClick={handleNavigate}>Back</button>
          </div>
         <NavLink to={`/playvideo/${data.id}`}>
         <div className=' text-gray-100 text-6xl absolute top-72 lg:ml-72 ml-32'>
            <FaCirclePlay/>
          </div>
         </NavLink>
          <div className='lg:w-[700px] h-[500px] shadow-lg rounded-md'>
            <Card 
              title={data.original_title} 
              desc={`${data.overview}`} 
              vote={data.vote_average} 
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
              popularity={data.popularity} 
            />
          </div>
         
        </div>
        
      </div>
    )
  }

export default MovieDetails
