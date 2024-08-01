import axios from 'axios';

export const nowPlay = async (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTEzZmM3MDc4NTViYTFjNTA5ZThmODQ2NzNlMWM1ZCIsIm5iZiI6MTcyMjE0ODA0MC4wNTMzOCwic3ViIjoiNjZhMjhlZjJkOWVjODExOTQ4Y2Y4NzhlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.kh2ntUjrpMzZe4eZ35vG2fEDkfuiHSz9dzLGJ6PHcfw',
    },
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    // Ensure you're accessing the correct part of the response
    const videos = response.data.results;
    if (videos && videos.length > 0) {
      return videos[0]; // Return the first video
    }
    return null; // No videos found
  } catch (error) {
    console.error('Error fetching video data', error);
    return null; // Handle error case
  }
};
