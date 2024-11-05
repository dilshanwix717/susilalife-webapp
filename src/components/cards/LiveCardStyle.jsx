import { Fragment, memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const LiveCardStyle = memo(({ title, movieTime, watchlistLink, link, image, video_url, selectedVideo_Data, selectedVideo_Array }) => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <div className="iq-card card-hover">
                <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                        {/* Use an anchor tag for external links */}
                        <a href={link} target="_blank" rel="noopener noreferrer" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                        <img
                            src={image}
                            alt="movie-card"
                            className="img-fluid object-cover w-100 d-block border-0"
                        />
                    </div>
                    <div className="card-description with-transition">
                        <div className="cart-content">
                            <div className="content-left">
                                {/* Link the title to the external link */}
                                <h5 className="iq-title text-capitalize">
                                    <a href={link} target="_blank" rel="noopener noreferrer">{t(title)}</a>
                                </h5>
                                <div className="movie-time d-flex align-items-center my-2">
                                    <span className="movie-time-text font-normal">{movieTime}</span>
                                </div>
                            </div>
                            <div className="watchlist">
                                <Link className="watch-list-not" to={watchlistLink}>
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon-10"
                                    >
                                        <path
                                            d="M12 4V20M20 12H4"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <span className="watchlist-label">{t("ott_home.watchlist")}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
});

LiveCardStyle.displayName = "LiveCardStyle";
export default LiveCardStyle;