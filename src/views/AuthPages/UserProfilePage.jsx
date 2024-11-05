import { Fragment, memo, useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

const UserProfilePage = memo(() => {
    const { t } = useTranslation();
    const [userId, setUserId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Fetch user details when the component mounts
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserId(user.uid);
                setEmail(user.email);

                // Fetch user data from Firestore
                const userDocRef = doc(db, "webAppUsers", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    setFirstName(userData.firstName || "");
                    setLastName(userData.lastName || "");
                } else {
                    console.log("No user data found in Firestore.");
                }
            }
        });

        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        try {
            if (!userId) throw new Error("User not logged in.");

            // Update profile display name in Firebase Auth
            await updateProfile(auth.currentUser, { displayName: firstName });

            // Update user data in Firestore
            const userDocRef = doc(db, "webAppUsers", userId);
            await updateDoc(userDocRef, {
                firstName,
                lastName,
                email,
            });

            setSuccessMessage("Profile updated successfully.");
            setError("");
        } catch (error) {
            console.error("Error updating profile:", error.message);
            setError("Failed to update profile: " + error.message);
        }
    };

    return (
        <Fragment>
            <BreadCrumbWidget title={t("Update")} />

            <Container className="section-padding">
                <h1 className="text-center mb-4">{t("Update")}</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}

                <Form onSubmit={handleUpdateProfile}>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Form.Group controlId="formFirstName" className="mb-3">
                                <Form.Label>{t("form.first_name")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName" className="mb-3">
                                <Form.Label>{t("form.last_name")}</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>{t("form.email")}</Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    value={email}
                                    disabled
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                {t("Update")}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Fragment>
    );
});

UserProfilePage.displayName = "UserProfilePage";
export default UserProfilePage;
