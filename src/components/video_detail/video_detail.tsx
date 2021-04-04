import React from 'react';
import { VideoSnippetType } from '../video_list';

type PropTypes = {
    video : VideoSnippetType
}
const VideoDetail = ({video}:PropTypes) => {
    return (
        <div>
            <h1>{video.title}</h1>
            <iframe 
                width="720" 
                height="405"
                src={`https://www.youtube.com/embed/${video.id}`}
            ></iframe>
        </div>
    );
};

export default VideoDetail;