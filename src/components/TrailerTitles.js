import React from 'react'

const TrailerTitles = ({ original_title, overview, }) => {
    return (
        <div>
            <h1>{original_title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default TrailerTitles