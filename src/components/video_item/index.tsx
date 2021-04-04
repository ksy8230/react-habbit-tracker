import React, { memo } from 'react';
import { VideoSnippetType } from '../video_list';
import styles from './video_item.module.css'

type VideoItemPropType = {
    handleVideoClick: (video:any) => void
}

const VideoItem = memo((props: VideoItemPropType & VideoSnippetType) => {
    return (
        <li className={styles.container} onClick={() => props.handleVideoClick(props.video)}>
            <div className={styles.video}>
                <img src={props.video.snippet.thumbnails.default.url} className={styles.thumbnail} alt=""/>
                <div className={styles.metadata}>
                    <p className={styles.title}>{props.video.snippet.title}</p>
                </div>
            </div>
        </li>
    );
});

export default VideoItem;