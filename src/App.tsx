import React, { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoList from './components/video_list';
import Searchheader from './components/search_header/search_header';
import {VideoSnippetType} from './components/video_list'

type PropsTypes = {
  youtube:any
}

function App({youtube}: PropsTypes) {
  const [videos, setVideos] = useState<any[]>([]);

  const handleSearch = (query:string) => {
    youtube.search(query).then((result:any) => setVideos(result));
  };

  useEffect(() => {
      youtube.mostPopular().then((result:any) => setVideos(result.items))
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
