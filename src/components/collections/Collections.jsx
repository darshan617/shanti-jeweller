import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import banner from "@/assets/images/heroSlide_1.jpg";
import colln1 from "@/assets/images/collections/1.jpg";
import colln2 from "@/assets/images/collections/2.jpg";
import colln3 from "@/assets/images/collections/3.jpg";
import colln4 from "@/assets/images/collections/4.jpg";
import colln5 from "@/assets/images/collections/5.jpg";
import colln6 from "@/assets/images/collections/6.jpg";
import colln7 from "@/assets/images/collections/7.jpg";
import colln8 from "@/assets/images/collections/8.jpg";
import colln9 from "@/assets/images/collections/9.jpg";
import colln10 from "@/assets/images/collections/10.jpg";
import colln11 from "@/assets/images/collections/11.jpg";
import colln12 from "@/assets/images/collections/12.jpg";
import colln13 from "@/assets/images/collections/13.jpg";
import styles from "@/components/collections/Collections.module.css";

const collectionImages = [
  colln1,
  colln2,
  colln3,
  colln4,
  colln5,
  colln6,
  colln7,
  colln8,
  colln9,
  colln10,
  colln11,
  colln12,
  colln13,
];

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
        style={{ backgroundImage: `url(${banner.src})` }}
      />

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-12 text-center">
              <div
                className={`${styles.pageTitle} bg-white rounded-circle text-center ratio ratio-1x1 mx-auto shadow-lg`}
              >
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="titleLotus mb-3 animateThis " />
                  <h2 className="sectSubTitle text-uppercase animateThis ">
                    Collections
                  </h2>
                </div>
              </div>

              <h3 className="mb-5 mx-auto heroAnim" style={{ maxWidth: 1300 }}>
                Every piece of jewelry we create tells a
                <span className="sectTitle titleFont textPrimary d-block pt-3 lh-base">
                  story of passion, dedication, and mastered craftsmanship.
                </span>
              </h3>
            </div>

            <div className="col-lg-8">
              <div className="row justify-content-around g-md-5 g-4 collectionList">
                {collectionImages.map((image, index) => (
                  <div
                    key={index}
                    className="col-md-5 col-6 animateThis slideTop"
                  >
                    <a href={image.src}>
                      <img src={image.src} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
