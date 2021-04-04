import React from 'react';
import VideoItem from '../video_item';
import styles from './video_list.module.css'

export type VideoSnippetType = {
    [k: string]: any;
}

export type VideoItemType = {
    kind:string;
    etag: string;
    id:string;
    snippet: VideoSnippetType;
}
type PropTypes = {
    videos: VideoItemType[]
    handleVideoClick: (video:any) => void
}
const VideoList = (props:PropTypes) => {
    return (
        <ul className={styles.videos}>
            {props.videos?.map(v => <VideoItem video={v} key={v.id} handleVideoClick={props.handleVideoClick} />) }
        </ul>
    );
};

export default VideoList;