"use client";

import Image from "next/image";
import handBg from "@/assets/images/handBg.png";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "@/components/home/testimonial/Testimonial.module.css";

const Testimonial = () => {
  const swiperElRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const testimonialSwiper = new Swiper(swiperElRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      loop: true,
      loopAdditionalSlides: 1,
      centeredSlides: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      },
    });

    return () => {
      testimonialSwiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="bgPink py-5 position-relative testimSection overflow-hidden">
      <Image
        src={handBg}
        alt="handBag"
        className={`${styles.handBg} position-absolute end-0 bottom-0 z-0`}
      />

      <div className="w-100 py-5 position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="sectSubTitle text-uppercase animateThis slideTop">
            Testimonials
          </h2>
          <h3 className="titleFont sectTitle textPrimary lh-sm titleAnim">
            Our Happy Clients
          </h3>
        </div>

        <div
          ref={swiperElRef}
          className={`${styles.testimonialSwiper} testimonialSwiper swiper w-100 my-lg-5 animateThis fadeIn`}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className={`${styles.testimBox} d-flex flex-column align-items-center gap-5 text-center`}
              >
                <div className={`${styles.ttmText}`}>
                  The craftsmanship is simply outstanding. Every detail reflects
                  elegance, and my bridal necklace was even more beautiful than
                  I imagined.
                </div>
                <div
                  className={`${styles.ttmAuthor} text-uppercase textPrimary`}
                >
                  Priya Sharma
                </div>
              </div>
            </div>
          </div>

          <div
            ref={prevRef}
            className={`${styles.swiperNavBtn} ttmPrev swiper-button-prev`}
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
            className={`${styles.swiperNavBtn} ttmNext swiper-button-next`}
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
  );
};

export default Testimonial;
