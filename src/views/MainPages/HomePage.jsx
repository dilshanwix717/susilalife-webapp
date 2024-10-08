import {memo, Fragment, useState, useEffect} from "react";
// hero slider
import OttHeroSlider from "../../components/slider/OttHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import WebSeriesList from "../../components/slider/VerticalSectionSlider.jsx";
// import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import OnlyOnStreamit from "../../components/sections/OnlyOnStreamit";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";
import PopularMovies from "../../components/sections/PopularMovies";
import TabSlider from "../../components/sections/TabSlider";
import RecommendedForYou from "../../components/sections/RecommendedForYou";
import TopPicsForYou from "../../components/sections/TopPicsForYou";
import GenreSlider from "../../components/sections/GenreSlider";

//static data
import { ottVerticleLatestMovies } from "../../StaticData/data";
import SusilaOriginals from "../../components/sections/OnlyOnStreamit";
import {executeGetMovies, executeGetSusilaOriginals} from "../../api/endPoints.jsx";
import LatestContents from "../../components/sections/LatestContents.jsx";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider.jsx";

const HomePage = memo(() => {
    const [susilaData, setSusilaData] = useState([]);
    const [moviesData, setMoviesData] = useState([]);
    const [susilaOriginalsData,setSusilaOriginalsData]= useState([]);

    const getSusilaOriginals = async () => {
        console.log('content Data Execute start');
        try {
            const response = await executeGetSusilaOriginals();
            var allSusilaOriginalsData = response.data["data"];
            console.log('Content Data :==============>>>', response.data['data']);
            setSusilaOriginalsData(response.data['data']);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const getMovies = async( ) =>{
        // console.log('function Execute start ');
        try {
            const response = await executeGetMovies();
            const allMovies = response.data.data;
            setMoviesData(allMovies);
            // console.log(' Data list Movies:==============>>>', movies);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getMovies();
        getSusilaOriginals();
    }, []);

  return (
    <Fragment>
      <OttHeroSlider />
      {/*<ContinueWatching slidesPerView={5} />*/}
      {/*<TopTenMoviesToWatch />*/}
      <SusilaOriginals contentData = {susilaOriginalsData}/>
      <LatestContents/>
      <VerticalSectionSlider sliderData={moviesData} />
      {/*<YourFavouritePersonality paddingY="my-4" />*/}
      <PopularMovies paddingY="my-4" />
      <TabSlider />
      {/*<GenreSlider />*/}
      {/*<RecommendedForYou paddingY="my-4" />*/}
      {/*<TopPicsForYou paddingY="my-4" />*/}
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
