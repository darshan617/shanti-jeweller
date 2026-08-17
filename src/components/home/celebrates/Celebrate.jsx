import Image from "next/image";
import React from "react";
import goldStone from "@/assets/images/goldStone_1.png";
import jewellryDiamond from "@/assets/images/jewellry_diamond.jpg";
import jewellryCZ from "@/assets/images/jewellry_CZ.jpg";
import jewellryGold from "@/assets/images/jewellry_gold.jpg";
import premJain from "@/assets/images/prem_jain.jpg";
import durgaJain from "@/assets/images/durga_jain.jpg";
import mukeshJain from "@/assets/images/mukesh_jain.jpg";
import styles from "@/components/home/celebrates/Celebrate.module.css";
import Link from "next/link";

const Celebrate = () => {
  return (
    <>
      <section className="sitePadding pt-5 bg-white overflow-hidden craftmanSection position-relative">
        <div className="container-fluid pt-md-4 position-relative z-3">
          <div className="d-flex flex-wrap justify-content-center text-center">
            <div className="col-lg-9 mb-5">
              <div className="titleLotus mb-3"></div>
              <h2 className="sectSubTitle text-uppercase animateThis fadeIn">
                JEWELLERY THAT CELEBRATES HERITAGE & ELEGANCE
              </h2>
              <h3 className="titleFont sectTitle textPrimary lh-sm titleAnim">
                Every piece is handcrafted with precision, blending traditional
                artistry with{" "}
                <span className="d-inline-block textPinkDark">
                  exceptional craftsmanship.
                </span>
              </h3>
            </div>
            <div className="col-12">
              <Link href="/about_us" className="ctaBtn">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.stoneBox} py-5 py-lg-0`}>
          <Image
            src={goldStone}
            className={`${styles.goldStone_1} goldStone_1`}
          />
          <div className={`${styles.aboutYear} aboutYear titleFont`}>
            Since 1999
          </div>
        </div>
      </section>

      <section className="sitePadding mb-5">
        <div className="container-fluid">
          <div className="row g-xl-5 g-md-4 g-3 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
              <div className={`${styles.jewellryItem} ${styles.jiVert} d-flex align-items-end`}>
                <Image
                  src={jewellryDiamond}
                  className={`${styles.jwImg} animateThis curtainLeft`}
                  alt="jewellryDiamond"
                />
                <div className={`${styles.jwTxt} animateThis slideRight`}>
                  <h2 className={`${styles.jwHead} titleFont`}>
                    Diamond <br /> Jewelry{" "}
                  </h2>
                  <Link href="/karat" className="ctaBtn ghost">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
              <div className={`${styles.jewellryItem} ${styles.jiVert} d-flex align-items-end`}>
                <Image
                  src={jewellryGold}
                  className={`${styles.jwImg} animateThis curtainLeft`}
                  alt="jewellryGold"
                />
                <div className={`${styles.jwTxt} animateThis slideRight`}>
                  <h2 className={`${styles.jwHead} titleFont`}>
                    Gold <br /> Jewelry
                  </h2>
                  <Link href="/swaarniim" className="ctaBtn ghost">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12">
              <div className={`${styles.jewellryItem} ${styles.jiVert} d-flex align-items-end`}>
                <Image
                  src={jewellryCZ}
                  className={`${styles.jwImg} animateThis curtainLeft`}
                  alt="jewellryCZ"
                />
                <div className={`${styles.jwTxt} animateThis slideRight`}>
                  <h2 className={`${styles.jwHead} titleFont`}>
                    CZ <br /> Jewelry
                  </h2>
                  <Link href="/svara" className="ctaBtn ghost">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sitePadding py-5">
        <div className="container-fluid py-md-4">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-6 mb-5 mb-md-0">
              <div
                className="d-flex flex-column sticky-top z-0"
                style={{ top: "150px" }}
              >
                <div className="text-center text-md-start">
                  <h2 className="sectSubTitle text-uppercase animateThis slideRight">
                    The Curators
                  </h2>
                  <h3 className="titleFont sectTitle textPrimary lh-sm titleAnim">
                    Glimmering Grace Glamour
                  </h3>
                  <div className="titleAnim">
                    <p className={`${styles.pTag}`}>
                      At Shanti Jewellers, every piece reflects exceptional
                      craftsmanship, timeless elegance, and unmatched quality.
                    </p>
                    <p className={`${styles.pTag}`}>
                      Inspired by India's rich heritage, we create exquisite
                      gold and diamond jewellery for life's most cherished
                      moments.
                    </p>
                    <p className={`${styles.pTag}`}>
                      Every creation carries our legacy of trust, artistry, and
                      fine craftsmanship.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-md-end justify-content-center position-relative">
                  <div className={`${styles.aboutCircle}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlLang="en"
                      viewBox="0 0 500 500"
                      className={`${styles.cirText}`}
                    >
                      <title>MAKING JEWELLERY SINCE 1999</title>
                      <defs>
                        <path
                          id="textcircle"
                          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          transform="scale(1.1)"
                          transformOrigin="50% 50%"
                        />
                      </defs>
                      <g className={`${styles.textcircle}`}>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="1000">
                            MAKING JEWELLERY SINCE 1999 &#160;&bull;&#160;
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    <div className={`${styles.inCircle}`}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-4 col-md-5 ps-xxl-5">
              <div className="row row-cols-xl-3 row-cols-md-1 row-cols-sm-2 row-cols-1 justify-content-center g-md-4 g-4 text-center">
                <div
                  className="col animateThis slideTop"
                  style={{ transitionDelay: ".3s" }}
                >
                  <div
                    className={`${styles.teamItem} d-flex flex-column pb-5`}
                    style={{ "--teamBgColor": "#f1d4cf" }}
                  >
                    <div className="col-auto">
                      <div className={`${styles.teamImgBox}`}>
                        <Image
                          src={premJain}
                          alt="premJain"
                          className={`${styles.teamImg}`}
                        />
                      </div>
                    </div>
                    <div className="col-auto teamTxt py-3">
                      <h4 className={`${styles.teamName} mb-0`}>Prem Jain</h4>
                      <div
                        className={`${styles.teamDesg} titleFont mb-3 mx-auto w-75`}
                      >
                        Director - Design Development, Sales &amp; Marketing
                      </div>
                    </div>
                    <div className={`${styles.teamInfo} col px-4`}>
                      <p className={`${styles.pTag}`}>
                        At the intersection of design and market insight, Pavan
                        Jain shapes collections that respond to evolving demand.
                        His understanding of product and people keeps Shanti
                        connected to retailers, wholesalers and the changing
                        pulse of the jewellery industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col animateThis slideTop"
                  style={{ transitionDelay: ".5s" }}
                >
                  <div
                    className={`${styles.teamItem} d-flex flex-column pb-5`}
                    style={{ "--teamBgColor": "#e8c2b4" }}
                  >
                    <div className="col-auto">
                      <div className={`${styles.teamImgBox}`}>
                        <Image
                          src={durgaJain}
                          alt="durgaJain"
                          className={`${styles.teamImg}`}
                        />
                      </div>
                    </div>
                    <div className="col-auto teamTxt py-3">
                      <h4 className={`${styles.teamName} mb-0`}>Durga Jain</h4>
                      <div
                        className={`${styles.teamDesg} titleFont mb-3 mx-auto w-75`}
                      >
                        Director - Accounts
                      </div>
                    </div>
                    <div className={`${styles.teamInfo} col px-4`}>
                      <p className={`${styles.pTag}`}>
                        Precision, structure and accountability define Durga
                        Jain's approach to the financial framework of Shanti.
                        Her meticulous oversight brings clarity and consistency
                        to the operations that keep the business moving
                        seamlessly.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col animateThis slideTop"
                  style={{ transitionDelay: ".7s" }}
                >
                  <div
                    className={`${styles.teamItem} d-flex flex-column pb-5`}
                    style={{ "--teamBgColor": "#c8a999" }}
                  >
                    <div className="col-auto">
                      <div className={`${styles.teamImgBox}`}>
                        <Image
                          src={mukeshJain}
                          alt="mukeshJain"
                          className={`${styles.teamImg}`}
                        />
                      </div>
                    </div>
                    <div className="col-auto teamTxt py-3">
                      <h4 className={`${styles.teamName} mb-0`}>Mukesh Jain</h4>
                      <div
                        className={`${styles.teamDesg} titleFont mb-3 mx-auto w-75`}
                      >
                        Director - Finance &amp; Strategic Planning
                      </div>
                    </div>
                    <div className={`${styles.teamInfo} col px-4`}>
                      <p className={`${styles.pTag}`}>
                        A strategic mind behind Shanti's growth, Mukesh Jain
                        steers the company's financial direction and long-term
                        vision. His measured approach to planning and progress
                        continues to strengthen the business for what lies
                        ahead.
                      </p>
                    </div>
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

export default Celebrate;
