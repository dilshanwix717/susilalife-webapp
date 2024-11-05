import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from '../../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { FaExclamationTriangle } from 'react-icons/fa'; // For error icon

function LiveEventsPage() {
    const collectionRef = collection(db, 'live');
    const [myData, setMyData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // useNavigate to navigate to the live stream page
    const { t } = useTranslation();

    const getEventName = useCallback(async () => {
        setError(null);
        try {
            const q = query(collectionRef);
            const data = await getDocs(q);
            setMyData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching events: ", error);
            setError("Failed to load events. Please try again later.");
        }
    }, [collectionRef]);

    useEffect(() => {
        getEventName();
    }, [getEventName]);

    // Extracts the actual Vimeo link from the stored HTML block
    const extractVimeoUrl = (htmlString) => {
        const match = htmlString.match(/src="([^"]+)"/);
        return match ? match[1] : '';  // Return the URL if found, otherwise empty string
    };

    // Handle watch button click and navigate to the live stream page
    const handleWatchClick = (eventId) => {
        navigate(`/live-stream/${eventId}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <div className="text-center" style={{ color: "#fff", width: "100%", padding: "32px" }}>
                <h5 className="fw-bold fs-1 mt-4" style={{ color: "#e50914", padding: "32px" }}>
                    Live Events
                </h5>
                {error && (
                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <FaExclamationTriangle size={30} color="#e50914" />
                        <span className="ms-2" style={{ color: "#e50914" }}>{error}</span>
                    </div>
                )}

                <div className="row">
                    {myData.length > 0 ? (
                        myData.map((event) => (
                            <div key={event.id} className="col-12 col-md-7 col-lg-4 mb-4" style={{ padding: "32px" }}>
                                <div className="card card-hover" style={{ backgroundColor: "#141314", borderRadius: "5px", padding: "32px", border: "none" }}>
                                    <h5 className="fw-bold fs-3" style={{ color: "#e50914" }}>{event.name}</h5>
                                    <p className="fs-6">{event.description}</p>
                                    <div className="mt-3">
                                        <div className="fs-5 align-items-center mb-2">
                                            <i className="bi bi-calendar" style={{ color: "#e50914", marginRight: "8px" }}></i>
                                            <div>
                                                <strong style={{ marginRight: "8px" }}>Start:</strong>
                                                <span>{new Date(event.startDateTime.seconds * 1000).toLocaleDateString()}</span>
                                                <strong style={{ margin: '0 8px' }}>at</strong>
                                                <span>{new Date(event.startDateTime.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                        <div className="fs-5 align-items-center">
                                            <i className="bi bi-clock" style={{ color: "#e50914", marginRight: "8px" }}></i>
                                            <div>
                                                <strong style={{ marginRight: "8px" }}>End:</strong>
                                                <span>{new Date(event.endDateTime.seconds * 1000).toLocaleDateString()}</span>
                                                <strong style={{ margin: '0 8px' }}>at</strong>
                                                <span>{new Date(event.endDateTime.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="iq-button" data-animation-in="fadeInUp" style={{ marginTop: "20px", padding: "10px" }}>
                                        <Link
                                            className="btn text-uppercase position-relative"
                                            onClick={() => handleWatchClick(event.id)}  // Pass the event ID instead of the video link
                                        >
                                            <span className="button-text">Watch</span>{" "}
                                            <i className="fa-solid fa-play"></i>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <h5 className="fw-bold fs-4" style={{ color: "#e50914" }}>No live events available at this moment.</h5>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LiveEventsPage;
