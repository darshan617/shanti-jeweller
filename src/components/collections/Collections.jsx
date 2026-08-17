import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import banner from "@/assets/images/collection_banner.jpg";
import colln1 from "@/assets/images/colln_Karat5.jpg";
import colln2 from "@/assets/images/colln_Swaarnim.jpg";
import colln3 from "@/assets/images/colln_Svara.jpg";
import colln4 from "@/assets/images/colln_Raahat.jpg";
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
        style={{ backgroundImage: `url(${banner.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
              <h3 className="mx-auto heroAnim" style={{maxWidth: "1300px"}}>
                Discover fine jewellery collections crafted for one who value
                <span className="sectTitle titleFont textPrimary d-block pt-3 lh-base">
                  quality, consistency, and innovation.
                </span>
              </h3>
            </div>

            <div className="col-lg-8 p-4 rounded-4">
              <div className={`${styles.collectionGrid} d-flex flex-column d-sm-grid gap-3 gap-md-4`}>
                <div className={`${styles.gDiv1}`}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/karat" className="">
                      <Image src={colln1} alt="Karat5" />
                    </Link>
                  </div>
                </div>
                <div className={`${styles.gDiv2}`}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/swaarniim" className="">
                      <Image src={colln2} alt="Swaarnim" />
                    </Link>
                  </div>
                </div>
                <div className={`${styles.gDiv3}`}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/svara" className="">
                      <Image src={colln3} alt="Svara" />
                    </Link>
                  </div>
                </div>
                <div className={`${styles.gDiv4}`}>
                  <div className={`${styles.collnBox}`}>
                    <Link href="/raahat" className="">
                      <Image src={colln4} alt="Raahat" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
