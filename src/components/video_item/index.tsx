import React from 'react';
import { VideoSnippetType } from '../video_list';


const VideoItem = (props: VideoSnippetType) => {
    console.log(props)
    return (
        <div>
            {/*props.item.title*/}
            {/*props.item.thumbnails.default.url*/}
        </div>
    );
};

export default VideoItem;