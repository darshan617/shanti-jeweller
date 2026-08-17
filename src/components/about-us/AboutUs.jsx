import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import banner from "@/assets/images/collection_banner.jpg";
import styles from "@/components/about-us/AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {
  useEffect(() => {
    console.log("Runs once");
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
      <section className={`${styles.inBanner} bgprimary`}>
        <Image src={banner}
         alt="banner" 
        //  height={}
        //  width={1000}
         className={`${styles.inBanImg}`} />
      </section>

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className={`${styles.pageTitle} text-center mx-auto bg-white`}>
            <div className="h-100 pt-4 d-flex flex-column align-items-center justify-content-center">
              <div className="titleLotus mb-3 animateThis fadeGrow"></div>
              <h2 className="sectSubTitle text-uppercase animateThis fadeIn">
                About Us
              </h2>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-lg-9 text-center">
              <h3 className="titleFont mb-5 sectTitle textPrimary heroAnim">
                Crafting timeless jewellery <br /> with innovation, precision,
                and trust.
              </h3>

              <div
                className="mx-auto mb-5 titleAnim"
                style={{ maxWidth: "1050px" }}
              >
                <p className={`${styles.pTag} lh-lg`}>
                  For over three decades, Shanti Jewellers Pvt. Ltd. has quietly
                  stood behind some of the industry's most trusted jewellery
                  businesses.
                </p>

                <p className={`${styles.pTag} lh-lg`}>
                  Specialising in Plain Gold, Diamond, CZ, and Uncut Jewellery,
                  we combine refined craftsmanship with advanced manufacturing
                  to deliver collections that are distinctive, scalable, and
                  built for today's retail landscape.
                </p>

                <p className={`${styles.pTag} lh-lg`}>
                  Every collaboration begins with understanding a partner's
                  vision and ends with jewellery that reflects it—crafted with
                  precision, delivered with consistency, and backed by a legacy
                  of trust.
                </p>

                <p className={`${styles.pTag} lh-lg fw-semibold`}>
                  This is more than manufacturing. It's the foundation of
                  lasting brands.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-4">
              <div className="col-xl-5 col-lg-5 col-md-6 text-md-end text-center">
                <h3 className={`mb-0 lh-base sectTitle titleAnim`}>
                  <strong className="textPrimary">
                    28 years of perfecting
                  </strong>{" "}
                  every detail, refining every process, and delivering jewellery
                  that reflects excellence at every step.
                </h3>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-7 col-10">
                <video
                  className="w-100 rounded-3 instaVideo"
                  src="/videos/video_1.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
