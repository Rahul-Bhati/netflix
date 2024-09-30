import { useSelector } from 'react-redux';
import TrailerTitles from './TrailerTitles';
import VideoBackground from './VideoBackground';

const TrailerContainer = () => {
    const movie = useSelector(appStore => appStore.movie?.nowPlayingMovies);

    if (!movie) return;
    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <TrailerTitles data={movie[2]} />
            <VideoBackground movieId={movie[2].id} />
        </div>
    );

}

export default TrailerContainer