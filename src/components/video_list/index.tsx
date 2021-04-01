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
}
const VideoList = (props:PropTypes) => {
    return (
        <ul className={styles.videos}>
            {props.videos?.map(v => <VideoItem item={v.snippet} key={v.id} />) }
        </ul>
    );
};

export default VideoList;