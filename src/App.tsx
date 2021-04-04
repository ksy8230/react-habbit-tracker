import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoList, { VideoItemType } from './components/video_list';
import Searchheader from './components/search_header/search_header';
import {VideoSnippetType} from './components/video_list'
import VideoDetail from './components/video_detail/video_detail';
import styles from './app.module.css';

type PropsTypes = {
  youtube:any
}

function App({youtube}: PropsTypes) {
  const [videos, setVideos] = useState<VideoItemType[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoSnippetType | null>(null);

  const selectVideo = (video:VideoItemType) => {
    setSelectedVideo(video);
  }

  const handleSearch = useCallback((query:string) => {
    youtube.search(query).then((result:any) => {
      setVideos(result);
      setSelectedVideo(null);
    });
  }, [youtube]);

  useEffect(() => {
      youtube.mostPopular().then((result:any) => setVideos(result))
  }, [youtube]); // missing dependency?! -> 컴포넌트가 마운트 되었을 때만 사용

  return (
    <div className={styles.app}>
      <Searchheader handleSearch={handleSearch} />
      <section className={styles.content}>
        
          {
            selectedVideo && <div className={styles.detail}><VideoDetail video={selectedVideo} /></div>
          }
        
        <div className={styles.list}>
          <VideoList videos={videos} handleVideoClick={selectVideo} />
        </div>

      </section>
    </div>
  );
}

export default App;
