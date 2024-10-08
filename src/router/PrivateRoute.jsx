import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase"; // Import your Firebase auth and Firestore
import { doc, getDoc } from "firebase/firestore";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [hasAccess, setHasAccess] = useState(false); // Track access based on subscription
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsAuthenticated(true);
                // Load user subscription details from Firestore
                const userDocRef = doc(db, "webAppUsers", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    const subscriptionStatus = userData?.subscription?.status;
                    const planEndDate = userData?.subscription?.planEndDate;
                    // Check subscription status
                    if (subscriptionStatus === "active") {
                        setHasAccess(true);
                    } else if (subscriptionStatus === "cancelled") {
                        const today = new Date();
                        const endDate = new Date(planEndDate);
                        const timeLeft = endDate - today;
                        if (timeLeft > 0) {
                            setHasAccess(true); // User has days left on a canceled subscription
                        } else {
                            navigate("/pricing"); // No active or valid subscription, redirect to pricing page
                        }
                    } else {
                        navigate("/pricing"); // If the user doesn't have a valid subscription, redirect to pricing
                    }
                } else {
                    console.log("No such user data found in Firestore");
                    navigate("/pricing"); // If no user data, redirect to pricing
                }
            } else {
                setIsAuthenticated(false);
                navigate("/login"); // If not authenticated, redirect to login
            }
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [navigate]);
    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Add a loader or spinner if desired
    }
    return children; // Render the child components if the user has access
};

export default PrivateRoute;
