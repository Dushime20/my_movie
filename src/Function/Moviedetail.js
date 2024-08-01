import axios from "axios"


export const movieDetail = async (id)=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw'
        }
      };
    try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options);
    return response.data
    }
    catch(error){
        console.log("error",error)
    }
}