import React, { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoList from './components/video_list';
import Searchheader from './components/search_header/search_header';
import {VideoSnippetType} from './components/video_list'

function App() {
  const [videos, setVideos] = useState<any[]>([]);

  const handleSearch = (query:string) => {
    const requestOptions = {
      method: 'GET',
    };

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDZ5RQT4_83UKmPArumyBC6591UhBW4edk`, requestOptions)
      .then(response => response.json())
      .then(result => result.items?.map((item:VideoSnippetType) => ({...item, id: item.id.videoId})))
      .then(result => setVideos(result))
      .catch(error => console.log('error', error));
  };

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
    <div className="app">
      <Searchheader handleSearch={handleSearch} />
      <div className="content">
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default App;
