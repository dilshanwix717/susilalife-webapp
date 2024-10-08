import React, { Fragment, memo, useState } from "react";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth, db } from "../../firebase"; // Assuming firebase is in src/firebase.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

const SignUpPage = memo(() => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      // Assign the response from the createUserWithEmailAndPassword call
      const response = await createUserWithEmailAndPassword(auth, email, password);

      if (response.user) {
        // Use updateProfile function and pass the user object as the first argument
        await updateProfile(response.user, {
          displayName: firstName,
        });


        const uid = response.user.uid;

        // Write to Firestore database
        const userDocRef = doc(db, "webAppUsers", uid);  // Create reference to Firestore document
        await setDoc(userDocRef, {
          uid: uid,
          email: email,
          lastName: lastName,
          firstName: firstName,
        });

        // Reset form inputs
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      // Log the error to help debug
      console.error("Error during sign up: ", error.message);

      // Set error message for user feedback
      // Set error message for user feedback
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("Email already exists. Please use a new email.");
      } else {
        setError("Error during sign up: " + error.message);
      }
    }
  };

  return (
    <Fragment>
      <main className="main-content">
        <div className="vh-100" style={{ backgroundImage: "url(assets/images/pages/01.webp)", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative", minHeight: "500px", }} >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="8" md="12" className="align-self-center">
                <div className="user-login-card bg-body">
                  <h4 className="text-center mb-5">{t("form.create_account")}</h4>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSignUp}>
                    <Row lg="2" className="row-cols-1 g-2 g-lg-5">
                      <Col>
                        <Form.Label className="text-white fw-500 mb-2">{t("form.first_name")}</Form.Label>
                        <Form.Control type="text" className="rounded-0" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Label className="text-white fw-500 mb-2">{t("form.last_name")}</Form.Label>
                        <Form.Control type="text" className="rounded-0" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Label className="text-white fw-500 mb-2">{t("form.email")} *</Form.Label>
                        <Form.Control type="email" className="rounded-0" required value={email} onChange={(e) => setEmail(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Label className="text-white fw-500 mb-2">{t("form.password")} *</Form.Label>
                        <Form.Control type="password" className="rounded-0" required value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Col>
                      <Col>
                        <Form.Label className="text-white fw-500 mb-2">{t("form.confirm_password")} *</Form.Label>
                        <Form.Control type="password" className="rounded-0" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      </Col>
                    </Row>
                    <Form.Label className="list-group-item d-flex align-items-center mt-5 mb-3 text-white">
                      <Form.Check.Input className="m-0 me-2" type="checkbox" />
                      {t("form.read_and_accept")}
                      <Link to="/terms-of-use" className="ms-1">{t("form.terms_conditions")}</Link>
                    </Form.Label>
                    <div className="full-button">
                      <div className="iq-button">
                        <button type="submit" className="btn text-uppercase position-relative">
                          <span className="button-text">{t("form.sign_up")}</span>
                          <i className="fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                  <p className="my-4 text-center fw-500 text-white">
                    Already have an account?
                    <Link to="/login" className="text-primary ms-1">Sign in</Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

SignUpPage.displayName = "SignUpPage";
export default SignUpPage;