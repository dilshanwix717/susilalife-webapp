import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from "hls.js";
import "./HLsPlayer.css";

const HLS = ({ videoSource }) => {
  const videoRef = useRef();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSource);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          const player = new Plyr(video, {
            controls: [
              "play-large",
              "restart",
              "rewind",
              "play",
              "fast-forward",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
              "settings",
              "pip",
              "fullscreen",
            ],
            quality: {
              default: hls.levels[0].height,
              options: hls.levels.map((level) => level.height),
              forced: true,
              onChange: (newQuality) => {
                hls.levels.forEach((level, levelIndex) => {
                  if (level.height === newQuality) {
                    hls.currentLevel = levelIndex;
                  }
                });
              },
            },
          });

          // Hide loading spinner when video is ready to play
          setIsLoading(false);
        });

        // Show loading spinner while video is loading
        setIsLoading(true);

        return () => {
          hls.destroy();
        };
      }
    }
  }, [videoSource]);

  return (
    <div style={{ height: "400px", position: "relative" }}>
      {isLoading && (
        <div className="d-flex justify-content-center" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
          <div className="spinner-border" role="status" style={{ color: '#e50914' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <video ref={videoRef} controls style={{ display: isLoading ? "none" : "block", width: "100%", height: "100%" }} />
    </div>
  );
};

export default HLS;