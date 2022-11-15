import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imgUrl, Api } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlid, seturlid] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);

            setmovies(response.data.results)

        }).catch((err) => {
            alert('Network Error', err)
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    console.log("i got all the movies", movies);

    const watchTrailor = (id) => {

        axios.get(`/movie/${id}/videos?api_key=${Api}&language=en-Us`).then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                seturlid(response.data.results[0])
            } else {
                alert("NO DATA")
            }

        })

        // console.log("this isnthe id ", id);

    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) => <img onClick={() => watchTrailor(obj.id)

                } className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgUrl + obj.backdrop_path}`} />)}


            </div>
        { urlid &&   <  YouTube videoId={urlid.key} opts={opts} />}


        </div> 
    )
}

export default RowPost
