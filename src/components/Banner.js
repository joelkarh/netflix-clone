import React from 'react';
import {useState, useEffect} from 'react'
import axios from '../axios'
import '../css/banner.css';
import requests from '../Request'

const Banner = () => {
    const [movie,
        setMovie] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.length - 1)]);
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
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}>
            <div class="banner_contents">
                <h1 class="banner_title">Movie Time</h1>
                <div class="banner_buttons">
                    <button class="banner_button">Play</button>
                    <button class="banner_button">My List</button>
                </div>
                <h1 class="banner_description">
                    {truncate(`this is a test description this is a test description
                        this is a test description
                        this is a test description
                        this is a test description
                        this is a test description
                        this is a test description
                        this is a test description
                        this is a test description`, 150)}
                    {/* when text get to long we do a trunkation '...' at the end */}
                </h1>
            </div>
            <div class="banner--fadeBottom"/>

        </header>
    )
}

export default Banner
