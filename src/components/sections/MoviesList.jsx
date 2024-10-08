import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";


//static data
import {latestMovie, suggested} from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from 'react-router-dom';

const MoviesList = memo((props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const {movies} = props;

    console.log(" movie data:=============>>>", movies);
    // const handleClickChip = ()=> {
    //     console.log('Function execute ')
    //     navigate('/movies-detail', { state: { selectedMovieId: id, moviesList: movies } });
    // }
  return (
    <Fragment>
      <SectionSlider
        title={t("explore.movies")}
        list={movies}
        className="suggested-block streamit-block"
        slidesPerView="6"
        paddingY={props.paddingY}
      >
        {(data) => (
          <CardStyle
            image={data.thumbnail_url}
            title={t(data.title)}
            movies={movies}
            id={data.id}
            // movieTime={data.movieTime}
            // watchlistLink="/playlist"
            // link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

MoviesList.DisplayName = "MoviesList";
export default MoviesList;
