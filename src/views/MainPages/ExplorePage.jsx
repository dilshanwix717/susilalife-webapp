import {memo, useEffect, useState} from "react";
import axios from 'axios';
// hero slider
import HomeHeroSlider from "../../components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import SusilaOriginals from "../../components/sections/SusilaOriginals.jsx";
import TeledramaSeries from "../../components/sections/TeledramaSeries.jsx";
import WebSeriesList from "../../components/slider/VerticalSectionSlider.jsx";
import TrendingSlider from "../../components/sections/TeledramaList.jsx";
import MoviesList from "../../components/sections/MoviesList.jsx";
import TravelSeries from "../../components/sections/TravelSeries.jsx";
import ParallexSection from "../../components/sections/ParallexSection";

//static data
import { verticleLatestMovies, latestMovie } from "../../StaticData/data";
import {
    executeGetMovies,
    executeGetSusilaOriginals,
    executeGetTeledramaSeries,
    executeGetWebSeries
} from "../../api/endPoints.jsx";
import ContactUsMessage from "../../providers/contentProviders.jsx";
import TeledramaList from "../../components/sections/TeledramaList.jsx";

//

const HomePage = memo(() => {
  const showViewAllLink = true;
  const [susilaOriginalsData, setSusilaOriginalsData] = useState([]);
  const [teledramaSeriesData, setTeledramaSeriesData] = useState([]);
  const [webSeriesData, setWebSeriesData] = useState([]);
  const [movies, setMovies] = useState([]);

    const fetchSusilaOriginals = async () => {
        // console.log('function  Execute start');
        try {
            const response = await executeGetSusilaOriginals();
            const allSusilaOriginalsData = response.data.data;
            setSusilaOriginalsData(allSusilaOriginalsData);
            // console.log(' Data List susilaOriginals:==============>>>', susilaOriginalsData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchTeledramaSeries = async () => {
        // console.log('function Execute start');
        try {
            const response = await executeGetTeledramaSeries();
            const allTeledramaSeries = response.data.data;
            setTeledramaSeriesData(allTeledramaSeries);
            // console.log(' Data list TeleSeries:==============>>>', teledramaSeriesData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchWebSeries = async( seriesName) =>{
        // console.log('function Execute start web');
        const webBody = { seriesName };
        // const webBody = { seriesName };
        // console.log('  Web :==============>>>', webBody);
        try {
            const response = await executeGetWebSeries(webBody);
            const allWebSeries = response.data.data;
            setWebSeriesData(allWebSeries);
            // console.log(' Data list Web Series:==============>>>', webSeriesData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const fetchMovies = async( ) =>{
        // console.log('function Execute start ');
        try {
            const response = await executeGetMovies();
            const allMovies = response.data.data;
            setMovies(allMovies);
            // console.log(' Data list Movies:==============>>>', movies);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchSusilaOriginals();
        fetchTeledramaSeries();
        fetchWebSeries("webSeries");
        fetchMovies();
    }, []);

    return (
    <>
      <HomeHeroSlider />

      <ContinueWatching slidesPerView={4} />

      <WebSeriesList sliderData={webSeriesData} containerFluid="container-fluid" />

      <TeledramaSeries teledramaSeriesData={teledramaSeriesData} paddingY="my-4" />

      <MoviesList  movies={movies} paddingY="my-4" />

      <TeledramaList teledramaSeriesData={teledramaSeriesData} />

      <ParallexSection />

      <TravelSeries paddingY='my-4' />

      <TrendingSlider />

      <SusilaOriginals paddingY="my-4" susilaOriginalsDta={susilaOriginalsData}/>

    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
