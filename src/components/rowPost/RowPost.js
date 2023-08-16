import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { apiKey, imgUrl } from '../../constants/Constants'
import Youtube from 'react-youtube';

function RowPost({ title, isSmall, url }) {
    const [movies, setMovies] = useState([])
    const [youTubeId, setYouTubeId] = useState()
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
    }, [])
    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    const playTrailer = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
            .then((res) => {
                if (res.data.results.length !== 0) {
                    setYouTubeId(res.data.results[0].key)
                }
                else {
                    alert("trailer not available");
                }
            })
            .catch((err) => console.log("error"))
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='posters'>
                {movies && movies.map((movie) => {
                    return (
                        <img onClick={() => playTrailer(movie.id)} key={movie.id} className={isSmall ? "poster-small" : "poster-large"} src={isSmall ? imgUrl + movie.poster_path : imgUrl + movie.backdrop_path} alt={movie.name + ' poster'} />
                    )
                })}
            </div>
            {youTubeId && <Youtube videoId={youTubeId} opts={opts} />}
        </div>
    )
}

export default RowPost
