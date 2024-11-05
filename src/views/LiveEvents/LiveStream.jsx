import React from "react";

const LiveStream = ({ videoId }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Stream"
            //  style={{ pointerEvents: "none" }} // Disable pointer events on the iframe

            ></iframe>
        </div>
    );
};

export default LiveStream;
