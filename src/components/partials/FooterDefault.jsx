import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// components
import Logo from "../logo";

// image
import apple from "/assets/images/footer/apple.webp";
import playstore from "/assets/images/footer/google-play.webp";

// the hook
import { useTranslation } from "react-i18next";

const FooterMega = memo(() => {
  const { t } = useTranslation();
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <>
      <Fragment>
        <footer className="footer footer-default">
          <Container fluid>
            <div className="footer-top">
              <Row>
                <Col xl={3} lg={6} className="mb-5 mb-lg-0">
                  <div className="footer-logo">
                    <Logo></Logo>
                  </div>
                  <p className="mb-4 font-size-20">
                    {t("footer.email_us")}:{" "}
                    <span className="text-white">
                      {t("footer.info@slflicks")}
                    </span>
                  </p>
                  <p className="text-uppercase letter-spacing-1 font-size-16 mb-1">
                    {t("footer.customer_services")}
                  </p>
                  <p className="mb-0 contact text-white">Dubai: +971 50 685 4568</p>
                  <p className="mb-0 contact text-white">Sri Lanka: +94 716 555 588  | +94 717 555 588</p>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.quick_links")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="./about-us" className="ms-3">
                        {t("header.about_us")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="./pricing" className="ms-3">
                        {t("header.pricing_plan")}
                      </Link>
                    </li>
                    <li>
                      <Link to="./faq" className="ms-3">
                        {t("header.faq")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.about_company")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="/contact-us" className="ms-3">
                        {t("header.contact_us")}
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link to="" className="ms-3">
                        {t("footer.careers")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={2} lg={6} className="mb-5 mb-lg-0">
                  <h4 className="footer-link-title">
                    {t("footer.legal_company")}
                  </h4>
                  <ul className="list-unstyled footer-menu">
                    <li className="mb-3">
                      <Link to="/PrivacyPolicy" className="ms-3">
                        {t("header.privacy_policy")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use" className="ms-3">
                        {t("footer.terms_of_use")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col xl={3} lg={6}>
                  <div className="d-flex align-items-center mt-5">
                    <span className="font-size-14 me-2">
                      {t("footer.follow_us")}
                    </span>
                    <ul className="p-0 m-0 list-unstyled widget_social_media">
                      <li className="">
                        <Link
                          to="https://www.facebook.com/susilalife?mibextid=ZbWKwL/"
                          className="position-relative"
                        >
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to=""
                          className="position-relative"
                        >
                          <i className="fab fa-tiktok"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://www.youtube.com/channel/UCPanPZ7x8Gyczus5A1kQCww"
                          className="position-relative"
                        >
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://www.instagram.com/susila_life/?igshid=MzRlODBiNWFlZA%3D%3D"
                          className="position-relative"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="footer-bottom border-top">
              <Row className="align-items-center">
                <Col md={6}>
                  <ul className="menu list-inline p-0 d-flex flex-wrap align-items-center">
                    <li className="menu-item">
                      <Link to="/terms-of-use">
                        {" "}
                        {t("footer.terms_of_use")}
                      </Link>
                    </li>
                    <li id="menu-item-7316" className="menu-item">
                      <Link to="/privacyPolicy">
                        {" "}
                        {t("footer.privacy-policy")}
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/faq"> {t("header.faq")}</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/playlist"> {t("footer.watch_list")}</Link>
                    </li>
                  </ul>
                  <p className="font-size-17">
                    © <span className="currentYear">2024</span>{" "}
                    <span className="text-primary"> Sl Flicks </span>.{" "}
                    {t("footer.desc")}
                  </p>
                </Col>
                <Col md={3}></Col>
                <Col md={3}>
                  <h6 className="font-size-16 pb-1">
                    {t("footer.download_app")}
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link className="app-image" to="#">
                      <img src={playstore} loading="lazy" alt="play-store" />
                    </Link>
                    <br />
                    <Link className="ms-3 app-image" to="#">
                      <img src={apple} loading="lazy" alt="app-store" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
        <div
          id="back-to-top"
          style={{ display: "none" }}
          className={`animate__animated ${animationClass}`}
          onClick={scrollToTop}
        >
          <Link
            className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
            id="top"
            to="#top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </Link>
        </div>
      </Fragment>
    </>
  );
});
FooterMega.displayName = "FooterMega";
export default FooterMega;
