import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { nowPlay } from '../../Function/NowPlaying';

// Custom hook to determine if the screen is large
const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen;
};

const PlayNow = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    nowPlay(id).then((data) => {
      if (data) {
        setData(data);
      } else {
        console.error('No video data found');
      }
    });
  }, [id]);

  // Only apply opts on large screens
  const opts = isLargeScreen
    ? {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      }
    : {
        height: '390',
        width: '340',
        playerVars: {
          autoplay: 1,
        },
    };
  // Check if data is loaded and has the expected structure
  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.key) {
    return <div>No video available</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <YouTube videoId={data.key} opts={opts} />
    </div>
  );
};

export default PlayNow;
