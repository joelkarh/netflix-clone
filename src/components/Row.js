import axios from '../axios';
import React, {useEffect, useState} from 'react';
import '../css/row.css'

const Row = ({
    title,
    fetchUrl,
    isLargeRow = false
}) => { //destructering  const {title} = row.title
    const [movies,
        setMovies] = useState([]);
    const baseImgUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()

    }, [fetchUrl])

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map((movie) => (((isLargeRow && movie.backdrop_path) || (!isLargeRow && movie.backdrop_path)) && (<img
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    key={movie
                    ?.id}
                    src={`${baseImgUrl}${isLargeRow
                    ? movie.poster_path
                    : movie.backdrop_path}`}
                    alt={movie.name}/>)))}
            </div>
        </div>
    )
}
export default Row
