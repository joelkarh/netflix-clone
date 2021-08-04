import React from 'react';
import '../css/homeScreen.css';
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import requests from '../Requests';
import Row from '../components/Row';


const HomScreen = () => {
    return (
        <div className='homeScreen'>
            <Navbar/>
            <Banner/>
            <Row title='Netflix Originals'fetchUrl={requests.fetchNetflixOrginals} isLargeRow />
            <Row title='Trending Now'fetchUrl={requests.fetchTreding}isLargeRow />
            <Row title='Top rated' fetchUrl={requests.fetchTopRated} isLargeRow/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} isLarge/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLarge/> 
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLarge/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLarge/>
            <Row title='Documenttaries' fetchUrl={requests.fetchDocumenttaries} isLarge/>
        </div>
    )
}

export default HomScreen
