import axios from '../axios';
import React from 'react';
import {useState, useEffect} from 'react'
import '../css/banner.css';
import requests from '../Requests';

const Banner = () => {
    const [movie,
        setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrginals);

            // console.log(request.data.results.length) 
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]); 
            //length of results of datamovies * random amount => gives one movie (random number for array amount)
            return request;
            
            
        }
        
        fetchData();


    }, []) 
       

    const truncate = (string, nChars) => {
        return string
            ?.length > nChars
                ? string.substr(0, nChars - 1) + '...'
                : string;
        //before a string get undefined we use ?.
    }
    return (
        <header
            className='banner'
            style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,  //'?.' => voorkomt https://image.tmdb.org/t/p/original/undefied
            backgroundPosition: 'top center'
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie
                        ?.title || movie
                            ?.name || movie
                                ?.orginal_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">

                    {truncate(movie?.overview, 150)}
                    {/* when text get to long we do a trunkation '...' at the end */}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
