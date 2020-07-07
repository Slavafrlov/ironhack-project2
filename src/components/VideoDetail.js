import React from 'react';
import './ViedoItem.css'

const VideoDetail = ({video}) => { 
    if (!video) {
        return <div className="ui segment">
        <div className="ui active inverted dimmer">
            <div className="ui text loader">
            <p>We're fectching videos for you.</p>
            </div>
        </div>
        </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    // using {video} instead of props.video (destructering)
    return (
        <div>
        <div className="ui embed">
            <iframe title="videoPlayer" allowfullscreen="true" src={videoSrc} />
        </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>         
        </div>
    )
}


export default VideoDetail