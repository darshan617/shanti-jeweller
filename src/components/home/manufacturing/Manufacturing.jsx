"use client";

import React from "react";
import styles from "@/components/home/manufacturing/Manufacturing.module.css";
import bracelet from '@/assets/images/bracelet.png'
import Image from "next/image";

const Manufacturing = () => {
  return (
    <>
      <section
        className={`${styles.manufSection} sitePadding pt-5 bgprimary position-relative  overflow-hidden`}
      >
        <div className="container-fluid pt-4 position-relative z-1">
          <div className="d-flex flex-wrap justify-content-center text-center mb-4">
            <div className="col-12 mb-5">
              <h2 className="sectSubTitle text-uppercase text-white animateThis slideTop">
                Manufacturing
              </h2>
              <h3 className="titleFont sectTitle textPink lh-sm titleAnim">
                Elegance, Perfectly Crafted
              </h3>
            </div>
            <div className="col-12 mt-md-5">
              <div
                className={`${styles.videoBox} w-100 position-relative rounded-5`}
              >
                <video
                  src="/videos/manufactuing.mp4"
                  className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover videoPoster rounded-5 animateThis fadeIn"
                  autoPlay
                  loop
                  muted
                  // poster="images/videoImg.jpg"
                ></video>
                <div className={`${styles.onVideoTxt}`}>
                  <div
                    className="animateThis slideRight"
                    //   style="transition-delay:1s;"
                  >
                    In-house manufacturing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sitePadding py-5 overflow-hidden">
        <div className="container-fluid py-4">
          <div className="text-center mb-5">
            <h2 className="sectSubTitle text-uppercase animateThis slideTop">
              Core Values
            </h2>
            <h3 className="titleFont sectTitle textPrimary lh-sm titleAnim">
              The Values That Defines Us
            </h3>
          </div>

          <div className="row align-items-center justify-content-center pt-5 g-md-0 g-3">
            <div className={`${styles.valueStone} col-lg col-7 order-lg-2  text-center animateThis slideBottom`}>
              <div className={`${styles.valueTxt} titleFont textPink`}>Values</div>
              <Image
                src={bracelet}
                alt="goldStone"
                className="w-100 goldStone_2 h-auto"
              />
            </div>
            <div className="col-lg col-md-6 order-lg-1">
              <div className={`${styles.valueCombo} d-flex flex-column gap-lg-5 gap-3 mx-auto `}>
                <div className="animateThis slideRight">
                  <div className={`${styles.valueItem}`}>
                    <h3 className={`${styles.valueHead} titleFont textPrimary`}>
                      Craftsmanship
                    </h3>
                    <p className={`${styles.pTag}`}>
                      Handcrafted by master artisans with exceptional attention
                      to detail.
                    </p>
                  </div>
                </div>
                <div className="animateThis slideLeft">
                  <div className={`${styles.valueItem}`}>
                    <h3 className={`${styles.valueHead} titleFont textPrimary`}>Quality</h3>
                    <p className={`${styles.pTag}`}>
                      Only the finest materials are selected for lasting beauty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg col-md-6 order-lg-3">
              <div className={`${styles.valueCombo} d-flex flex-column gap-lg-5 gap-3 mx-auto`}>
                <div className="animateThis slideLeft">
                  <div className={`${styles.valueItem}`}>
                    <h3 className={`${styles.valueHead} titleFont textPrimary`}>Trust</h3>
                    <p className={`${styles.pTag}`}>
                      Only the finest materials are selected for lasting beauty.
                    </p>
                  </div>
                </div>
                <div className="animateThis slideRight">
                  <div className={`${styles.valueItem}`}>
                    <h3 className={`${styles.valueHead} titleFont textPrimary`}>
                      Timeless Design
                    </h3>
                    <p className={`${styles.pTag}`}>
                      Designs inspired by heritage, elegance and modern luxury
                      made to be cherished forever.
                    </p>
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

export default Manufacturing;
