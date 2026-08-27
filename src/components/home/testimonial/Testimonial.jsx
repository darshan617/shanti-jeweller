"use client";

import Image from "next/image";
import handBg from "@/assets/images/handBg.png";
import React, { useEffect, useRef } from "react";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

import joyalukkas from "@/assets/images/clients/joyalukkas.jpg";
import grtJewellers from "@/assets/images/clients/grt_jewellers.jpg";
import princeJewellery from "@/assets/images/clients/prince_jewellery.jpg";
import vaibhavJewellers from "@/assets/images/clients/vaibhav_jewellers.jpg";
import AVRSwarnaMahal from "@/assets/images/clients/AVR_swarnamahal.jpg";
import lalithaaJewellers from "@/assets/images/clients/lalithaa_jewellers.jpg";
import sreeKumaranThangamaligai from "@/assets/images/clients/sree_kumaran_thangamaligai.jpg";

import styles from "@/components/home/testimonial/Testimonial.module.css";

const Testimonial = () => {
  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const marqueRef = useRef(null);

  // useEffect(() => {
  //   const testimonialSwiper = new Swiper(swiperElRef.current, {
  //     modules: [Navigation, Autoplay],
  //     slidesPerView: 1,
  //     spaceBetween: 15,
  //     speed: 1000,
  //     loop: true,
  //     loopAdditionalSlides: 1,
  //     centeredSlides: true,
  //     slideToClickedSlide: true,
  //     autoplay: {
  //       delay: 5000,
  //       disableOnInteraction: false,
  //     },
  //     navigation: {
  //       nextEl: nextRef.current,
  //       prevEl: prevRef.current,
  //     },
  //   });

  //   return () => {
  //     testimonialSwiper.destroy(true, true);
  //   };
  // }, []);

  useEffect(() => {
    if (!marqueRef.current) return;

    // FIX: previously this used the string selector ".marqueStrip", which
    // targets a literal class named "marqueStrip". The JSX below only ever
    // applies `styles.marqueStrip` (a CSS-Modules class, compiled to a
    // hashed name like "Testimonial_marqueStrip__aB3xZ"), so the selector
    // never matched anything on the page and Swiper silently failed to
    // initialize. Using a ref bound directly to the DOM node avoids the
    // class-name mismatch entirely.
    const marqueStrip = new Swiper(marqueRef.current, {
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 5000,
      loop: true,
      grabCursor: false,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      if (marqueStrip) {
        marqueStrip.destroy(true, true);
      }
    };
  }, []);

  return (
    <>
      <section className="bgPink py-5 position-relative testimSection overflow-hidden">
        <Image
          src={handBg}
          alt=""
          className={`${styles.handBg} position-absolute end-0 bottom-0 z-0`}
        />

        <div className="w-100 py-5 position-relative z-1">
          <div className="text-center mb-5">
            <h2 className="sectSubTitle text-uppercase animateThis slideTop">
              Our Clients
            </h2>

            <h3 className="titleFont sectTitle textPrimary lh-sm titleAnim">
              Pure Trust, Pure Brilliance
            </h3>
          </div>

          <div
            ref={marqueRef}
            className={`${styles.marqueStrip} swiper px-3 animateThis curtain `}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Image src={joyalukkas} alt="Joyalukkas" />
              </div>

              <div className="swiper-slide">
                <Image src={grtJewellers} alt="GRT Jewellers" />
              </div>

              <div className="swiper-slide">
                <Image src={princeJewellery} alt="Prince Jewellery" />
              </div>

              <div className="swiper-slide">
                <Image src={vaibhavJewellers} alt="Vaibhav Jewellers" />
              </div>

              <div className="swiper-slide">
                <Image
                  src={AVRSwarnaMahal}
                  alt="AVR Swarna Mahal Jewellers"
                />
              </div>

              <div className="swiper-slide">
                <Image
                  src={lalithaaJewellers}
                  alt="Lalithaa Jewellers"
                />
              </div>

              <div className="swiper-slide">
                <Image
                  src={sreeKumaranThangamaligai}
                  alt="Sree Kumaran Thangamaligai"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <section classNameName="bgPink py-5 position-relative testimSection overflow-hidden">
        <Image
          src={handBg}
          alt="handBag"
          classNameName={`${styles.handBg} position-absolute end-0 bottom-0 z-0`}
        />

        <div classNameName="w-100 py-5 position-relative z-1">
          <div classNameName="text-center mb-5">
            <h2 classNameName="sectSubTitle text-uppercase animateThis slideTop">
              Testimonials
            </h2>
            <h3 classNameName="titleFont sectTitle textPrimary lh-sm titleAnim">
              Our Happy Clients
            </h3>
          </div>

          <div
            ref={swiperElRef}
            classNameName={`${styles.testimonialSwiper} testimonialSwiper swiper w-100 my-lg-5 animateThis fadeIn`}
          >
            <div classNameName="swiper-wrapper">

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

              <div classNameName="swiper-slide">
                <div
                  classNameName={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
                >
                  <div classNameName={`${styles.ttmText}`}>
                    The craftsmanship is simply outstanding. Every detail reflects
                    elegance, and my bridal necklace was even more beautiful than
                    I imagined.
                  </div>

                  <div
                    classNameName={`${styles.ttmAuthor} text-uppercase textPrimary`}
                  >
                    Priya Sharma
                  </div>
                </div>
              </div>

            </div>

            <div
              ref={prevRef}
              classNameName={`${styles.swiperNavBtn} ttmPrev swiper-button-prev`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
            </div>

            <div
              ref={nextRef}
              classNameName={`${styles.swiperNavBtn} ttmNext swiper-button-next`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>

          </div>
        </div>
      </section>
      */}
    </>
  );
};

export default Testimonial;