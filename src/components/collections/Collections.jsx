import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import banner from "@/assets/images/collection_banner.jpg";
import colln1 from "@/assets/images/colln_Karat5.jpg";
import colln2 from "@/assets/images/colln_Swaarnim.jpg";
import colln3 from "@/assets/images/colln_Svara2.jpg";
import styles from "@/components/collections/Collections.module.css";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const heroEl = document.querySelector(".heroAnim");
    let tl;
    let split;

    if (heroEl) {
      tl = gsap.timeline();
      split = new SplitText(heroEl, { type: "words,chars" });
      tl.from(split.chars, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back",
        stagger: 0.035,
      });
    }

    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(".collectionList a", "skewY", "deg");
    const clamp = gsap.utils.clamp(-50, 50);

    const skewTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.2,
            ease: "sine.inOut",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    gsap.set(".collectionList a", {
      transformOrigin: "center center",
      force3D: true,
    });

    Fancybox.bind(".collectionList a", {
      groupAll: true,
      Carousel: {
        Thumbs: false,
        Toolbar: {
          display: {
            left: ["counter"],
            middle: [],
            right: ["close"],
          },
        },
      },
    });

    return () => {
      if (tl) tl.kill();
      if (split) split.revert();
      skewTrigger.kill();
      Fancybox.unbind(".collectionList a");
      Fancybox.close();
    };
  }, []);

  return (
    <>
      <section
        className={`${styles.inBanner} bgprimary`}
        style={{
          backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className={`${styles.pageTitle} text-center mx-auto bg-white`}>
            <div className="h-100 pt-4 d-flex flex-column align-items-center justify-content-center">
              <div className="titleLotus mb-3 animateThis fadeGrow"></div>
              <h2 className="sectSubTitle text-uppercase animateThis fadeIn">
                Collections
              </h2>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-12 text-center">
              <h3 className="mx-auto heroAnim" style={{ maxWidth: "1300px" }}>
                Discover fine jewellery collections crafted for one who value
                <span className="sectTitle titleFont textPrimary d-block pt-3 lh-base">
                  quality, consistency, and innovation.
                </span>
              </h3>
            </div>

            <div className={`${styles.collnContainer} mx-auto col-lg-10 p-4 rounded-4`}>
              <div className="row g-5 mb-5">
                <div className="col-md col-sm-6 animateThis slideLeft in-view " style={{ transitionDelay: "0.8s" }}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/karat">
                      <Image src={colln1} alt="collnKarat5" />
                    </Link>
                  </div>
                </div>
                <div className="col-md col-sm-6 animateThis slideTop in-view">
                  <div className={`${styles.collnBox}`}>
                    <Link href="/swaarniim">
                      <Image src={colln2} alt="swaarnim-gold" />
                    </Link>
                  </div>
                </div>
                {/* <div className="col-md col-sm-12 d-flex flex-md-column flex-sm-row flex-column gap-4 order-md-2"> */}
                <div className="col-md col-sm-6 animateThis slideRight in-view " style={{ transitionDelay: "0.8s" }}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/svara">
                      <Image src={colln3} alt="collnSvara" />
                    </Link>
                  </div>
                </div>
                {/* <div className="col animateThis fadeShrink">
                <div className={`${styles.collnBox}`}>
                  <Link href="/raahat">
                    <Image src={collnRaahat} alt="collnRaahat" />
                  </Link>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
