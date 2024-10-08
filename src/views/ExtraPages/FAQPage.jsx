import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const FAQPage = memo(() => {
  const { t } = useTranslation();
  const [faq, setfaq] = useState("1");
  return (
    <Fragment>
      <BreadcrumbWidget title={t("header.faq")} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordian iq-accordian-square">
                <div
                    className={`iq-accordian-block ${faq === "1" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("1");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title">
                      How do I access an OTT platform?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "1" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> You can access an OTT platform through various devices,
                      including smartphones, tablets, smart TVs, streaming devices and computers. Simply download
                      the platform's app or visit their website, sign up for a subscription, and start streaming. </p>
                  </div>
                </div>

                <div
                    className={`iq-accordian-block 2  ${faq === "2" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("2");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      What type of content is available on OTT platforms?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "2" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> SL Flicks offer a wide range of content,
                      including movies, TV shows, web series, documentaries, original productions, live events, and
                      more.</p>
                  </div>
                </div>

                <div
                    className={`iq-accordian-block 3  ${faq === "3" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("3");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      Can I share my OTT account with others?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "3" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> SL Flicks have policies regarding the number of
                      devices or screens that can stream content simultaneously under one account. Sharing accounts
                      with people outside your household might violate the platform's terms of service. </p>
                  </div>
                </div>

                <div
                    className={`iq-accordian-block 4 ${faq === "4" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("4");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      How is the video quality on OTT platforms?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "4" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0">The video quality on OTT platforms can vary
                      depending on several factors, such as your internet connection speed, the device you're
                      using. </p>
                  </div>
                </div>

                <div
                    className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("5");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      How secure are payments on OTT platforms?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> SL Flicks use secure payment gateways to process
                      subscriptions, ensuring the safety of your payment information. Always use official apps or
                      websites to subscribe and avoid sharing sensitive information with unknown sources. </p>
                  </div>
                </div>
                <div
                    className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("5");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      Can I watch content simultaneously on multiple devices?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0">The number of devices or screens
                      that can stream content simultaneously varies depending on the OTT platform and subscription
                      plan.  </p>
                  </div>
                </div>
                <div
                    className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("5");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      Can I create a Wish List on an OTT platform?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> Yes, users can create a Wish List where they can
                      add movies, TV shows, or any other content they wish to watch later.   </p>
                  </div>
                </div>
                <div
                    className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("5");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      Can I change my subscription plan on an OTT platform?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0">Yes, you can usually change your
                      subscription plan. You can upgrade to a higher-tier plan for more features or downgrade to a
                      lower-tier plan if available.  </p>
                  </div>
                </div>
                <div
                    className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                    onClick={() => {
                      setfaq("5");
                    }}
                >
                  <div className="iq-accordian-title">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="fa fa-minus active"></i>
                      <i aria-hidden="true" className="fa fa-plus inactive"></i>
                    </div>
                    <h4 className="mb-0 accordian-title iq-heading-title text-capitalize">
                      Do OTT platforms offer content in multiple languages?
                    </h4>
                  </div>
                  <div
                      className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0">  Yes, SL Flicks provide content in multiple
                      languages, catering to diverse audiences worldwide. You can often find content in Sinhala and
                      Tamil. </p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

FAQPage.displayName = "FAQPage";
export default FAQPage;
