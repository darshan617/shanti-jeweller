import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import styles from "@/components/collections/CollectionsDetail/CollectionsDetail.module.css";

const CollectionsDetail = ({ title, logo, image, images = [] }) => {
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            document.body.classList.add("stick");
          } else {
            document.body.classList.remove("stick");
          }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  useEffect(() => {
    let gsap;
    let ScrollTrigger;
    let SplitText;
    let Fancybox;

    let tl = null;
    let split = null;
    let skewTrigger = null;

    const initAnimations = async () => {
      if (
        typeof window === "undefined" ||
        typeof document === "undefined"
      ) {
        return;
      }

      try {
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import(
          "gsap/ScrollTrigger"
        );
        const splitTextModule = await import(
          "gsap/SplitText"
        );

        gsap = gsapModule.default;
        ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        SplitText = splitTextModule.SplitText;

        const fancyboxModule = await import(
          "@fancyapps/ui"
        );

        Fancybox = fancyboxModule.Fancybox;

        gsap.registerPlugin(
          ScrollTrigger,
          SplitText
        );

        const heroEl =
          document.querySelector(".heroAnim");

        if (heroEl) {
          tl = gsap.timeline();

          split = new SplitText(heroEl, {
            type: "words,chars",
          });

          tl.from(split.chars, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "back",
            stagger: 0.035,
          });
        }

        const collectionLinks =
          document.querySelectorAll(
            ".collectionList a"
          );

        if (collectionLinks.length > 0) {
          const proxy = {
            skew: 0,
          };

          const skewSetter = gsap.quickSetter(
            ".collectionList a",
            "skewY",
            "deg"
          );

          const clamp = gsap.utils.clamp(
            -10,
            10
          );

          skewTrigger = ScrollTrigger.create({
            onUpdate: (self) => {
              const skew = clamp(
                self.getVelocity() / -200
              );

              if (
                Math.abs(skew) >
                Math.abs(proxy.skew)
              ) {
                proxy.skew = skew;

                gsap.to(proxy, {
                  skew: 0,
                  duration: 0.5,
                  ease: "back.inOut(1)",
                  overwrite: true,

                  onUpdate: () => {
                    skewSetter(proxy.skew);
                  },
                });
              }
            },
          });

          gsap.set(".collectionList a", {
            transformOrigin:
              "center center",
            force3D: true,
          });
        }

        if (Fancybox && collectionLinks.length > 0) {
          Fancybox.bind(
            ".collectionList a",
            {
              groupAll: true,
              zoomEffect: false,

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
            }
          );
        }
      } catch (error) {
        console.error(
          "CollectionsDetail animation initialization error:",
          error
        );
      }
    };

    initAnimations();

    return () => {
      try {
        if (tl) {
          tl.kill();
        }

        if (split) {
          split.revert();
        }

        if (skewTrigger) {
          skewTrigger.kill();
        }

        if (Fancybox) {
          Fancybox.unbind(
            ".collectionList a"
          );

          Fancybox.close();
        }
      } catch (error) {
        console.error(
          "CollectionsDetail animation cleanup error:",
          error
        );
      }
    };
  }, [images]);

  const validImages = images.filter(Boolean);

  return (
    <>
      <Image
        src={image}
        alt=""
        className={styles.colnBanner}
        height={500}
        width={1000}
      />

      <section className={`${styles.colnAdjust} sitePadding`}>
        <div className="container-fluid pb-5">
          <div className="row vh-100 mb-5">
            <div className="col-sm-6 col-12 d-flex align-items-sm-center align-items-end justify-content-center">
              <div className="text-center mb-5 mb-sm-0">
                <Image
                  src={logo}
                  alt=""
                  className={`${styles.colnLogo} mb-5`}
                  height={1000}
                  width={1000}
                />

                <div className="heroAnim">
                  <p className={`${styles.pTag} bgprimary rounded text-white p-2 d-block lh-base`}>
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-lg-8">
              <div className="row justify-content-around g-md-5 g-4 collectionList">
                {validImages.map((img, index) => (
                  <div
                    className="col-md-5 col-6 animateThis slideTop"
                    key={index}
                  >
                    <a href={img.src}>
                      <Image src={img} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 text-center">
              <Link
                href="/collections"
                className="ctaBtn"
              >
                Back to Collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsDetail;