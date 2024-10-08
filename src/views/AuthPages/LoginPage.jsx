import React, { Fragment, memo, useState } from "react";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../../components/logo";


const LoginPage = memo(() => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Assuming there's a dashboard route
    } catch (error) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <Fragment>
      <main className="main-content">
        <div
          className="vh-100"
          style={{
            backgroundImage: "url(assets/images/pages/01.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="5" md="12" className="align-self-center">
                <div className="user-login-card bg-body">
                  <div className="text-center">
                    <Logo />
                  </div>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.username_or_email")}
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className="rounded-0"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.password")}
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="rounded-0"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="text-end mb-3">
                      <Link to="/lost-password" className="text-primary fw-semibold fst-italic">
                        {t("form.forgot_password?")}
                      </Link>
                    </Form.Group>
                    <Form.Label className="list-group-item d-flex align-items-center mb-3 font-size-14 text-white fw-500">
                      <Form.Check.Input type="checkbox" className="m-0 me-2" />
                      {t("form.remember_me")}
                    </Form.Label>
                    <div className="full-button">
                      <div className="iq-button">
                        <button type="submit" className="btn text-uppercase position-relative">
                          <span className="button-text">{t("form.log_in")}</span>
                          <i className="fa-solid fa-play"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                  <p className="my-4 text-center fw-500 text-white">
                    <Link to="/register" className="text-primary ms-1">
                      {t("form.register")}
                    </Link>
                  </p>
                  {/* Additional content like social login buttons */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

LoginPage.displayName = "LoginPage";
export default LoginPage;
