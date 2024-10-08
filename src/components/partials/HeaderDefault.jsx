import { memo, Fragment, useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom"; // Combined react-router-dom imports
import { Button, Nav, Collapse, Navbar, Offcanvas, Container, Dropdown } from "react-bootstrap"; // React-bootstrap imports
import { useDispatch } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/actions";
import Logo from "../logo";
import CustomToggle from "../CustomToggle";
import { useTranslation } from "react-i18next"; // Translation hook
import user from "/assets/images/user/user1.webp";
import { auth } from "../../firebase";

const HeaderDefault = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMega, setIsMega] = useState(true);
  const location = useLocation();

  //for translation
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === 'ar') {
      dispatch(theme_scheme_direction('rtl'))
    }
    else {
      dispatch(theme_scheme_direction('ltr'))
    }
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add("sticky");
        } else {
          headerSticky.classList.remove("sticky");
        }
      }
    };

    const updateIsMega = () => {
      setIsMega(location.pathname === "/");
    };

    window.addEventListener("scroll", handleScroll);
    updateIsMega();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user'); // Remove user data from local storage
      navigate('/login'); // Navigate to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };



  return (
    <Fragment>
      <header className="header-center-home header-default header-sticky">
        <Navbar
          expand="xl"
          className="nav navbar-light iq-navbar header-hover-menu py-xl-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex gap-3 gap-xl-0 align-items-center">
                <div>
                  <button
                    type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar_main" aria-controls="navbar_main"
                    className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn"
                    onClick={() => setShow1(!show1)}
                  >
                    <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Logo></Logo>
              </div>
              <Navbar
                expand="xl"
                className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${show1 ? "show" : ""}`}
                style={{ visibility: show1 ? "visible" : "hidden" }}
                id="navbar_main"
              >
                <Container fluid className="container-fluid p-lg-0">
                  <Offcanvas.Header className="px-0" closeButton onHide={() => setShow1(false)}>
                    <div className="navbar-brand ms-3">
                      <Logo />
                    </div>
                  </Offcanvas.Header>
                  <ul className="navbar-nav iq-nav-menu list-unstyled" id="header-menu">
                    {/* Home Menu */}
                    <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open2}
                        href="#homePages"
                        onClick={() => setOpen2(!open2)}
                        className={location.pathname === "/home" || location.pathname === "/explore" || location.pathname === "/tv-shows" || location.pathname === "/movies" || location.pathname === "/miscellaneous" ? "active" : ""}
                      >
                        <span className="item-name">{t("header.home")}</span>
                        <span className="menu-icon ms-2">
                          <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                          <span className="toggle-menu">
                            <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                            <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open2} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li"><Link to="/home" className={location.pathname === "/home" ? "active" : ""}>{t("header.home")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/explore" className={location.pathname === "/explore" ? "active" : ""}>{t("header.explore")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/tv-shows" className={location.pathname === "/tv-shows" ? "active" : ""}>{t("header.tv_show")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/movies" className={location.pathname === "/movies" ? "active" : ""}>{t("header.movie")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/miscellaneous" className={location.pathname === "/miscellaneous" ? "active" : ""}>{t("header.miscellaneuos")}</Link></Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                    <Nav.Item as="li">{/* Explore Menu */}
                      <Nav.Link aria-expanded={open1} href="/explore"><span className="item-name">{t("header.explore")}</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">{/* Movie Menu */}
                      <Nav.Link aria-expanded={open1} href="/movies"><span className="item-name">{t("header.movie")}</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">{/* TV Show Menu */}
                      <Nav.Link aria-expanded={open1} href="/tv-shows"><span className="item-name">{t("header.tv_show")}</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">      {/* Pages Menu */}
                      <Nav.Link aria-expanded={open2} href="#homePages" onClick={() => setOpen2(!open2)} className={location.pathname === "/about-us" || location.pathname === "/contact-us" || location.pathname === "/faq" || location.pathname === "/PrivacyPolicy" || location.pathname === "/pricing" ? "active" : ""} >
                        <span className="item-name">{t("header.pages")}</span>
                        <span className="menu-icon ms-2">
                          <i className="fa fa-caret-down toggledrop-desktop right-icon" aria-hidden="true"></i>
                          <span className="toggle-menu">
                            <i className="fa fa-plus  arrow-active text-white" aria-hidden="true"></i>
                            <i className="fa fa-minus  arrow-hover text-white" aria-hidden="true"></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open2} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li"><Link to="/about-us" className={location.pathname === "/about-us" ? "active" : ""}>{t("header.about_us")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""}>{t("header.contact_us")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/faq" className={location.pathname === "/faq" ? "active" : ""}>{t("header.faq")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/PrivacyPolicy" className={location.pathname === "/PrivacyPolicy" ? "active" : ""}>{t("header.privacy_policy")}</Link></Nav.Item>
                          <Nav.Item as="li"><Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>{t("header.pricing_plan")}</Link></Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item>
                  </ul>
                </Container>
              </Navbar>
              <div className="right-panel">
                <Button
                  id="navbar-toggle" bsPrefix="navbar-toggler" type="button"
                  aria-expanded={show} data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" onClick={() => setShow(!show)}
                >
                  <span className="navbar-toggler-btn">
                    <span className="navbar-toggler-icon"></span>
                  </span>
                </Button>
                <div className={`navbar-collapse collapse ${show ? "show" : ""}`} id="navbarSupportedContent" >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0 gap-3">
                    <Dropdown as="li" className="nav-item dropdown iq-responsive-menu">
                      <div className="search-box">
                        <Link to="#" onClick={() => setShow2(!show2)} className={`nav-link p-0 ${show2 ? "show" : ""}`} id="search-drop" data-bs-toggle="dropdown" aria-expanded="false" >
                          <div className="btn-icon btn-sm rounded-pill btn-action">
                            <svg className="icon-20" viewBox="0 0 24 24" fill="none">
                              <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" />
                              <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" />
                            </svg>
                          </div>
                        </Link>
                        <ul
                          className={`dropdown-menu p-0 dropdown-search m-0 iq-search-bar ${show2 ? "show" : ""}`}
                          style={{ width: "10rem" }} data-bs-popper="static" >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input type="text" className="form-control border-0" placeholder={t("blogs.search")} />
                              <button onClick={() => setShow2(!show2)} type="submit" className="search-submit">
                                <svg className="icon-15" viewBox="0 0 24 24" fill="none">
                                  <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" />
                                  <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Dropdown>
                    <Dropdown as="li" className="nav-item">
                      <Dropdown.Toggle size="sm" id="dropdownMenuButton1" as={CustomToggle} href="#" variant="nav-link d-flex align-items-center px-0" >
                        <div className="btn-icon rounded-pill user-icons">
                          <span className="btn-inner">
                            <svg className="icon-18" width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.877 15.206c-3.844 0-7.127.581-7.127 2.909 0 2.328 3.263 2.93 7.127 2.93 3.845 0 7.127-.582 7.127-2.909 0-2.327-3.263-2.93-7.127-2.93Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.877 11.886c2.523 0 4.568-2.045 4.568-4.568C14.444 4.795 12.4 2.75 9.877 2.75 7.354 2.75 5.31 4.795 5.31 7.318c-.01 2.515 2.02 4.56 4.535 4.568h.032Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M19.204 8.669v4.01M21.25 10.674h-4.09" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu as="ul" className="dropdown-menu-end dropdown-user border-0 p-0 m-0">
                        <li className="user-info d-flex align-items-center gap-3 mb-3">
                          <img src={user} className="img-fluid" alt="" loading="lazy" />
                          <span className="font-size-14 fw-500 text-capitalize text-white">{t("header.jenny")}</span>
                        </li>
                        {[
                          { to: "/playlist", icon: "M7.845 20.662C4.153 20.662 1 20.088 1 17.787c0-2.301 3.133-4.425 6.845-4.425 3.692 0 6.845 2.103 6.845 4.403 0 2.301-3.133 4.425-6.845 4.425Z M7.837 10.174c2.423 0 4.387-1.964 4.387-4.387S10.26 1.4 7.837 1.4c-2.423 0-4.387 1.964-4.387 4.387-.008 2.414 1.942 4.378 4.357 4.386h.033Z", label: "my_account" },
                          { to: "/playlist", icon: "M19 11h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2Z", label: "watchlist" },
                          { to: "/pricing", icon: "M8.587 8.236l2.598-5.232a1 1 0 0 1 1.63 0l2.598 5.232 5.809.844c.745.108 1.042 1.019.502 1.541L17.522 14.692l.992 5.749c.128.738-.652 1.301-1.319.953L12 18.678l-5.194 2.716c-.667.349-1.446-.214-1.319-.953l.992-5.749L2.276 10.622c-.54-.522-.243-1.433.502-1.541l5.809-.845Z", label: "subscription" },
                        ].map(({ to, icon, label }, idx) => (
                          <li key={idx}>
                            <Link to={to} className="iq-sub-card d-flex align-items-center gap-3">
                              <svg width="16" height="16" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d={icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">{t(`header.${label}`)}</h6>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2" onClick={() => handleLogout()}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.822 16c-.355 0-.659-.126-.911-.378-.252-.252-.378-.556-.378-.911V1.733c0-.355.126-.659.378-.911C1.163.57 1.467.444 1.822.444h6.134v1H1.822c-.074 0-.141.03-.2.089a.267.267 0 0 0-.089.2v12.978c0 .074.03.141.089.2.059.06.126.089.2.089h6.134v1H1.822ZM12.089 11.6l-.733-.711 2.178-2.156H5.689V7.711h7.822L11.333 5.555l.733-.733L15.467 8.244 12.089 11.6Z" fill="currentColor" />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">{t("header.logout")}</h6>
                          </Link>
                        </li>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
});

HeaderDefault.displayName = "HeaderDefault";
export default HeaderDefault;
