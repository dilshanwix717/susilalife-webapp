import { Fragment, memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import BreadcrumbWidget from "../../components/BreadcrumbWidget";
import { executeCreateSubscriptionCheckout, executeCancelSubscription } from '../../api/endPoints';
import { auth, db } from "../../firebase"; // Firebase imports
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const PricingPage = memo(() => {
  const [userId, setUserId] = useState("");
  const [isCanceled, setIsCanceled] = useState(false); // Track if the subscription is canceled
  const [userName, setUserName] = useState("");
  const [planType, setPlanType] = useState(""); // Store user's current plan type
  const [subscriptionEndDate, setSubscriptionEndDate] = useState(""); // Store user's subscription end date
  const [daysLeft, setDaysLeft] = useState(0); // Store days left in the subscription
  const [monthsLeft, setMonthsLeft] = useState(0); // Store months left in the subscription
  const [subscriptionStatus, setSubscriptionStatus] = useState(""); // Store subscription status
  const { t } = useTranslation();

  // Check if the user is logged in and fetch their subscription details
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);

        // Load user data from Firestore
        const userDocRef = doc(db, "webAppUsers", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setPlanType(userData?.subscription?.planType || ""); // Set the current planType if exists
          setSubscriptionEndDate(userData?.subscription?.planEndDate || ""); // Set the subscription end date
          setSubscriptionStatus(userData?.subscription?.status || ""); // Set the subscription status
          calculateDaysLeft(userData?.subscription?.planEndDate || ""); // Calculate days left
        } else {
          console.log("No such user data found in Firestore");
        }
      } else {
        setUserId("");
        setPlanType(""); // Reset planType when user logs out
        setSubscriptionStatus(""); // Reset subscription status
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Calculate months and days left in the subscription
  const calculateDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);

    const diffTime = end - today;

    if (diffTime > 0) {
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Calculate months and days
      const months = Math.floor(diffDays / 30);
      const days = diffDays % 30;

      setMonthsLeft(months);
      setDaysLeft(days);
    } else {
      setMonthsLeft(0);
      setDaysLeft(0);
    }
  };

  // Checkout function to initiate subscription
  const checkout = (plan) => {
    executeCreateSubscriptionCheckout(plan, userId)
      .then((response) => {
        const { session } = response.data;
        window.location = session.url; // Redirect to the session URL
      })
      .catch((error) => {
        console.error('Checkout failed:', error);
      });
  };

  // Cancel subscription
  const cancelSubscription = () => {
    executeCancelSubscription(userId)
      .then((response) => {
        alert("Subscription canceled successfully.");
        setIsCanceled(true); // Mark the plan as canceled

        // Fetch updated data from Firestore
        const userDocRef = doc(db, "webAppUsers", userId);
        getDoc(userDocRef).then((userDocSnap) => {
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setPlanType(userData?.subscription?.planType || ""); // Set the current planType if exists
            setSubscriptionEndDate(userData?.subscription?.planEndDate || ""); // Set the subscription end date
            setSubscriptionStatus(userData?.subscription?.status || ""); // Set the subscription status
            calculateDaysLeft(userData?.subscription?.planEndDate || ""); // Calculate days left
          } else {
            console.log("No such user data found in Firestore");
          }
        });
      })
      .catch((error) => {
        console.error("Failed to cancel subscription:", error);
      });
  };

  // Array of pricing plans
  const pricingPlans = [
    {
      id: 1,
      name: "Monthly",
      price: "4",
      duration: t("pricing.month"),
      description: "Get started with our basic 30 days plan perfect for essential entertainment.",
      benefits: [
        "Fully access for 30 days",
        "Billing Monthly",
      ],
    },
    {
      id: 2,
      name: "3 Months",
      price: "12",
      duration: `3 ${t("pricing.month")}`,
      description: "Dive into a world of captivating content for a three-months period.",
      benefits: [
        "Fully access for 3 months",
        "Get 15 days free",
      ],
    },
    {
      id: 3,
      name: "6 Months",
      price: "20",
      duration: `6 ${t("pricing.month")}`,
      description: "Enjoy access to a wide range of movies and TV shows, for 6 months.",
      benefits: [
        "Fully access for 6 months",
        "Pay for 5 months and get 6th month free",
      ],
    },
    {
      id: 4,
      name: "Annually",
      price: "40",
      duration: `12 ${t("pricing.month")}`,
      description: "Experience the ultimate in streaming with our VIP 12-months Plan.",
      benefits: [
        "Fully access for 12 months",
        "Pay for 10 months and get 2 months free",
      ],
    },
  ];

  return (
    <Fragment>
      {/* <BreadcrumbWidget title={t("Please select a plan")} /> */}
      <div className="section-padding">
        <Container>
          <h1 className="plan-name text-capitalize text-body text-center my-5 ">Please select a plan</h1>

          <Row className="d-flex">
            {pricingPlans.map((plan, index) => (
              <Col key={index} lg="3" md="6" className="d-flex mb-3 mb-lg-0">
                <div className="pricing-plan-wrapper d-flex flex-column">
                  <div className="pricing-plan-header">
                    <h4 className="plan-name text-capitalize text-body">{plan.name}</h4>
                    <span className="main-price text-primary">${plan.price}</span>{" "}
                    <span className="font-size-18">/ {plan.duration}</span>
                  </div>
                  <div className="pricing-details flex-grow-1">
                    <div className="pricing-plan-description">
                      <ul className="list-inline p-0">
                        <li>
                          <span className="font-size-18 fw-500">{plan.description}</span>
                        </li>
                        {plan.benefits.map((benefit, i) => (
                          <li key={i}>
                            <i className="fas fa-check text-primary"></i>
                            <span className="font-size-18 fw-500">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                      {/* Check subscription status */}
                      {plan.name === planType && subscriptionStatus === "active" ? (
                        <div>
                          <div className="btn text-uppercase position-relative disabled">
                            <span className="button-text">Subscribed</span>
                            <i className="fas fa-check"></i> {/* Tick icon */}
                          </div>
                          <button
                            onClick={cancelSubscription}
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">Cancel Subscription </span>
                            <i className="fa-solid fa-trash"></i> {/* Trash icon */}
                          </button>
                        </div>
                      ) : plan.name === planType && subscriptionStatus === "cancelled" && (monthsLeft > 0 || daysLeft > 0) ? (
                        <div>
                          <button className="btn text-uppercase position-relative disabled">
                            <span className="button-text">Cancelled: {monthsLeft} months and {daysLeft} days left</span>
                            <i className="fas fa-clock"></i> {/* Clock icon */}
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => checkout(plan.price)} // Pass the numeric price directly
                          className="btn text-uppercase position-relative"
                          disabled={(subscriptionStatus === "active" && plan.name !== planType) || (subscriptionStatus === "cancelled" && (monthsLeft > 0 || daysLeft > 0))}
                        >
                          <span className="button-text">Choose</span>
                          <i className="fa-solid fa-play"></i> {/* Play icon */}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

PricingPage.displayName = "PricingPage";
export default PricingPage;
