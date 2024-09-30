import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(appStore => appStore.movie?.movieTrailer);

    useTrailerVideo(movieId);
    return (
        <div className="w-[100%] h-[100%]">

            <iframe className="w-[100%] h-[100%] aspect-video" src={"https://www.youtube-nocookie.com/embed/" + trailerVideo?.key + "?si=OMS2HwPBXFqfb3yx&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground