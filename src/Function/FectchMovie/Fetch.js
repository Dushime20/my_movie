import axios from 'axios'
export const fetchMovie = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
      }
    };
  
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, options);
      // Logging the response data
      console.log(response.data);
      // Returning the response data
      return response.data.results; // Note: `results` is the correct property to access movie data
    } catch (error) {
      // Logging the error message
      console.log(error.message);
    }
  }

  export const NewMovie = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
        }
      };

      try{
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, options);
        return response.data.results;

      }  
      catch(error){
        console("error",error);
      }    
  }

  export const newSeries = async ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
        }
      };
   try{
     const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, options);
     return response.data.results
   }  
   catch(error){
    console.log("error",error.message);
   }    

  }

  export const recommended = async () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
        }
      };

      try{
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        return response.data.results
      }
      catch(error){
        console.log("error",error)
      }
  }

  export const recentlyUpdate = async ()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
      }
    };
    try{
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
      return response.data.results;

    }
    catch(error){
      console.log("error",error)
    }
  }

  export const topRated = async () =>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
      }
    };
    try{
     const response = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
     console.log("data",response.data.results)
     return response.data.results;
     
    }
    catch(error){
      console.log("error",error)

    }
  }