import { Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const TeledramaSeries = (props) => {
  const { t } = useTranslation();

  const {teledramaSeriesData} = props;

  return (
    <Fragment>
      <SectionSlider
        title={t("explore.teledrama_series")}
        list={teledramaSeriesData}
        className="latest-block streamit-block"
        slidesPerView="6"
        paddingY={props.paddingY}
      // loop={true}
      >
        {(teledramaSeriesData) => (
          <CardStyle
            image={teledramaSeriesData.thumbnail_url}
            title={t(teledramaSeriesData.title)}
            // movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
};

TeledramaSeries.DisplayName = TeledramaSeries;
export default TeledramaSeries;
