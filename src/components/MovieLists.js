import React, { useRef } from 'react';

const MovieLists = ({ title, data }) => {
    const scrollContainerRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    return (
        <div className='text-white pl-20 flex flex-col relative'>
            <h1 className='text-xl mb-6'>{title}</h1>
            <div className='flex overflow-x-auto scroll-smooth' style={{ scrollbarWidth: "none" }} ref={scrollContainerRef}>
                <div className="flex">
                    {data.map((movie, index) => (
                        <div key={index} className="w-36 md:w-48">
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='rounded-lg w-32' alt={movie.title} />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className='absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-100'
                onClick={handleScrollLeft}
            >
                &lt;
            </button>
            <button
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300'
                onClick={handleScrollRight}
            >
                &gt;
            </button>
        </div>
    );
};

export default MovieLists;