import React, { memo, Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Alert, Button, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

const MyAccount = memo(() => {
  const { t } = useTranslation();
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  // Fetch user details from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);

        // Reference to the Firestore document
        const userDocRef = doc(db, "webAppUsers", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData(data);
        } else {
          setError("User data not found.");
        }
      } else {
        setUserId("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Fragment>
      <BreadCrumbWidget title={t("header.my_account")} />
      <div className="section-padding service-details">
        <Container>
          <Row>
            <Col lg={8} md={10} className="mx-auto">
              <h3 className="mb-4 text-center">{t("header.my_account")}</h3>
              {error && <Alert variant="danger">{error}</Alert>}

              <Row>
                {/* Personal Info Card */}
                <Col md={6}>
                  <Card className="mb-4 p-3 shadow-sm">
                    <Card.Header as="h5" className="text-secondary">{t("Personal Info")}</Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <p><strong>{t("form.first_name")}: </strong>{userData.firstName}</p>
                        </Col>
                        <Col md={6}>
                          <p><strong>{t("form.last_name")}: </strong>{userData.lastName}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p><strong>{t("form.email")}: </strong>{userData.email}</p>
                        </Col>
                      </Row>
                      <div className="text-center mt-3">
                        <Button as={Link} to="/update-user" variant="primary">
                          {t("Update Profile")}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Subscription Info Card */}
                <Col md={6}>
                  <Card className="mb-4 p-3 shadow-sm">
                    <Card.Header as="h5" className="text-secondary">{t("Subscription Info")}</Card.Header>
                    <Card.Body>
                      <Row>
                        <Col md={6}>
                          <p><strong>{t("Plan Type")}: </strong>{userData.subscription?.planType || "N/A"}</p>
                        </Col>
                        <Col md={6}>
                          <p><strong>{t("Status")}: </strong>{userData.subscription?.status || "N/A"}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p><strong>{t("End Date")}: </strong>{userData.subscription?.planEndDate || "N/A"}</p>
                        </Col>
                      </Row>
                      <div className="text-center mt-3">
                        <Button as={Link} to="/pricing" variant="primary">
                          {t("Subscription Details")}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>


            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

MyAccount.displayName = "MyAccount";
export default MyAccount;
