import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((v, i) => {
        return <VideoItem key={i} onVideoSelect={onVideoSelect} video={v} />
    })
    return (
        <div className="ui relasxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList