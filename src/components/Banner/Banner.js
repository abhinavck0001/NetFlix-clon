
import { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { Api, imgUrl } from '../../constants/constants'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${Api}&language=en-US`).then((response) => {
            // console.log("(((((((((((", response.data.results[5]);

            setMovie(response.data.results[1])
        })
    }, [])
    // console.log("iM the movie",movie);
    return (
        //conditional rendering is used here
        <div style={{
            backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ''})`
        }} className='banner' >
            <div className='content'>
                <h1 className='title'>{movie ? movie.name
                    : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview
                    : ''}</h1>
            </div>
            <div className="fade_bottom">

            </div>
        </div >
    )
}

export default Banner
