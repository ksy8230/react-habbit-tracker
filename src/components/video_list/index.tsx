import React from 'react';
import VideoItem from '../video_item';

export type VideoSnippetType = {
    [k: string]: string | any[] | object; // ?
}

export type VideoItemType = {
    kind:string;
    etag: string;
    id:string;
    snippet: VideoSnippetType;
}
type PropTypes = {
    videos: VideoItemType[]
}
const VideoList = (props:PropTypes) => {
    return (
        <ul>
            {props.videos.map(v => <VideoItem item={v.snippet} key={v.id} />) }
        </ul>
    );
};

export default VideoList;