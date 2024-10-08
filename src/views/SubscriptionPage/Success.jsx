import React, { useEffect, useState } from 'react';
import success from "/assets/images/success.png";
import { auth, db } from "../../firebase"; // Import your Firebase auth and Firestore
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // Import the correct method for auth state
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { executePaymentSuccess } from "../../api/endPoints";

const Success = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserId(user.uid);
                // Load the user data from Firestore
                const userDocRef = doc(db, "webAppUsers", user.uid); // Reference to Firestore document
                const userDocSnap = await getDoc(userDocRef); // Get the document snapshot
                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data(); // Get the document data
                    setSessionId(userData?.subscription?.sessionId || ""); // Extract session ID if it exists
                    console.log(userData)
                } else {
                    console.log("No such user data found in Firestore");
                }
            } else {
                setUserId("");
                setSessionId(""); // Reset if user logs out
            }
        });
        return () => unsubscribe(); // Clean up the subscription on unmount
    }, []); // Empty dependency array to run only on mount


    console.log(sessionId)

    const handlePaymentSuccess = () => {
        executePaymentSuccess(sessionId, userId)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data.message);
                    navigate("/pricing");
                } else {
                    console.log(response.data.error);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="my-5 text-center d-flex flex-column justify-content-center align-items-center">
                    <img src={success} alt="" width="220" height="220" />
                    <h3 class="text-center fw-bold fs-1 mt-5">
                        Payment Successful
                    </h3>
                    <button onClick={() => handlePaymentSuccess()}
                        class="btn btn-success btn-lg mt-4 px-4 py-2"
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Success