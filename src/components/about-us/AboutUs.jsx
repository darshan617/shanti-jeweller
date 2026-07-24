import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import banner from "@/assets/images/heroSlide_1.jpg";
import styles from "@/components/about-us/AboutUs.module.css";

const AboutUs = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const heroEl = document.querySelector(".heroAnim");
    if (!heroEl) return;

    const tl = gsap.timeline();
    const split = new SplitText(heroEl, { type: "words,chars" });
    tl.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "back",
      stagger: 0.035,
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, []);

  return (
    <>
      <section
        className={`${styles.inBanner} bgprimary`}
        style={{ backgroundImage: `url(${banner.src})` }}
      />

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-lg-9 text-center">
              <div
                className={`${styles.pageTitle} bg-white rounded-circle text-center ratio ratio-1x1 mx-auto shadow-lg`}
              >
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="titleLotus mb-3 animateThis fadeGrow" />
                  <h2 className="sectSubTitle text-uppercase animateThis fadeIn">
                    About Us
                  </h2>
                </div>
              </div>

              <h3 className="titleFont mb-5 sectTitle textPrimary heroAnim">
                Crafting timeless jewellery <br /> with innovation, precision,
                and trust.
              </h3>

              <div className="mx-auto mb-5 titleAnim" style={{ maxWidth: 850 }}>
                <p className={`${styles.pTag}`}>
                  At a very young age of 18 years founder made his remarkable
                  beginning as a trader and earned a great angle of reputation.
                  Their commitments and determination acted as a pillar and
                  supported their ambitions to start with just 20 - 25 staff
                  members gave wings to Shanti Jewellers.
                </p>
                <p className={`${styles.pTag}`}>
                  With over 18+ years of first hand manufacturing, trading and
                  management exprience since 1999 in CZ Casting Jewellery Shanti
                  Jewellers is now recognized as a Brand with its accute
                  presence at National Level with hundreds of Staff Members and
                  thousands of customers.
                </p>
                <p className={`${styles.pTag}`}>
                  With a clear vision and focus in mind Shanti Jewellers as a
                  Brand has continuously prioritized on Elegant Designs, Superoir
                  Quality and Customer Centric Approach. Shanti Jewellers with
                  its astounding facet of products takes pride in serving an
                  idealogy in operations by keeping themselves in customers
                  shoes.
                </p>
              </div>
            </div>

            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-4">
              <div className="col-xl-5 col-lg-5 col-md-6 text-md-end text-center">
                <h3 className="mb-0 lh-base sectTitle titleAnim">
                  <strong className="textPrimary">28 years of perfecting</strong>{" "}
                  every detail, refining every process, and delivering jewellery
                  that reflects excellence at every step.
                </h3>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10">
                <video
                  className={`w-100 rounded-3 ${styles.instaVideo}`}
                  src="/videos/video_1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
