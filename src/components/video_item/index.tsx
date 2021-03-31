import React from 'react';
import { VideoSnippetType } from '../video_list';
import styles from './video_item.module.css'

const VideoItem = (props: VideoSnippetType) => {
    return (
        <li className={styles.container}>
            <div className={styles.video}>
                <img src={props.item.thumbnails.default.url} className={styles.thumbnail} alt=""/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{props.item.title}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;