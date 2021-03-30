import React, { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoList from './components/video_list';


function App() {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDZ5RQT4_83UKmPArumyBC6591UhBW4edk", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="App">
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
