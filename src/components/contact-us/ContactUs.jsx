import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import banner from "@/assets/images/innerBanner.jpg";
import styles from "@/components/contact-us/ContactUs.module.css";
import { useToast } from "@/custom-hooks/toast/ToastProvider";
import Link from "next/link";

const ContactUs = () => {
  const mapRef = useRef(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
        subject: "Website Enquiry",
        message: formData.message,
      }),
    });
    const data = await response.json();

    if (data?.success) {
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      showToast("Enquiry submitted successfully.", "success");
    } else {
      console.log(data);
      showToast(data.message, "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    gsap.registerPlugin(SplitText);

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

    let map;
    let cancelled = false;
    let invalidateTimer;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !mapRef.current) return;

      map = L.map(mapRef.current).setView(
        [19.118959851795875, 72.85936016138986],
        12,
      );

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap",
        },
      ).addTo(map);

      const myIcon = L.icon({
        iconUrl: "/images/mapMarker.png",
        iconSize: [40, 50],
        popupAnchor: [-3, -10],
      });

      L.marker([19.118959851795875, 72.85936016138986], { icon: myIcon })
        .addTo(map)
        .bindPopup(
          '<span className="d-block text-center" style="font-size:10px">We are here</span><strong>Shanti Jewellers</strong> <a href="https://www.google.com/maps/dir/Current+Location/Shanti+Jewellers+Pvt+Limited,+Unit+No-+71,+Apollo+Industrial+Estate,+Off+Mahakali+Caves+Rd,+Andheri+(E,+Mumbai,+Maharashtra+400093/@19.1460563,72.8283077,8592m/data=!3m2!1e3!4b1!4m18!1m8!3m7!1s0x3be7c83100bff59b:0x15f51dfd1d289cee!2sShanti+Jewellers+Pvt+Limited!8m2!3d19.1149315!4d72.8601278!15sCgxzd2FybiBzaGFudGmSARRqZXdlbHJ5X21hbnVmYWN0dXJlcuABAA!16s%2Fg%2F11fnpb6ybc!4m8!1m1!4e1!1m5!1m1!1s0x3be7c83100bff59b:0x15f51dfd1d289cee!2m2!1d72.8601278!2d19.1149315?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="d-block text-center mt-1" style="font-size:11px;color:#6d2a46">Get Directions</a>',
        );

      invalidateTimer = setTimeout(() => {
        if (!cancelled && map) map.invalidateSize();
      }, 100);
    };

    initMap();

    return () => {
      cancelled = true;
      clearTimeout(invalidateTimer);
      if (tl) tl.kill();
      if (split) split.revert();
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, []);

  return (
    <>
      <section
        className={`${styles.inBanner} bgprimary`}
        style={{ backgroundImage: `url(${banner.src}) ` }}
      />

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-lg-9 text-center">
              <div className={`${styles.pageTitle} text-center mx-auto bg-white`}>
                <div className="h-100 pt-4 d-flex flex-column align-items-center justify-content-center">
                  <div className="titleLotus mb-3 animateThis fadeGrow"></div>
                  <h2 className="sectSubTitle text-uppercase animateThis fadeIn">
                    Contact Us
                  </h2>
                </div>
              </div>

              <h3 className="mb-5 mx-auto heroAnim" style={{ maxWidth: 1300 }}>
                To lead the future of jewellery manufacturing through
                <span className="sectTitle titleFont textPrimary d-block pt-3 lh-base">
                  Innovation, Advanced Technology, and Enduring partnerships
                  that empower brands worldwide.
                </span>
              </h3>
            </div>

            <div className="col-xxl-9 col-lg-12">
              <div className="row justify-content-between g-lg-5">
                <div className={`${styles.contactInfo} col-lg-7 mb-5`}>
                  <address
                    className="mb-3 animateThis slideRight"
                    style={{ maxWidth: 580 }}
                  >
                    <small
                      className="d-block text-secondary text-uppercase"
                      style={{ fontSize: ".75rem" }}
                    >
                      Address
                    </small>
                    <strong
                      className={`${styles.strongTag} titleFont textPrimary`}
                    >
                      Shanti Jewellers
                    </strong>
                    <p className={`${styles.pTag}`}>
                      Unit No-71, Apollo
                      Industrial Estate, Off Mahakali Caves Road, <br/> Andheri (E),
                      Mumbai - 400093.
                    </p>
                  </address>

                  <div className={`${styles.pTag} mb-3 animateThis slideRight`}>
                    <small
                      className="d-block text-secondary text-uppercase"
                      style={{ fontSize: ".75rem" }}
                    >
                      Email
                    </small>
                    <Link href="mailto:admin@shantijewellers.com">
                    admin@shantijewellers.co
                    </Link>
                  </div>

                  <div className={`${styles.pTag} mb-3 animateThis slideRight`}>
                    <small
                      className="d-block text-secondary text-uppercase"
                      style={{ fontSize: ".75rem" }}
                    >
                      Contact No.
                    </small>
                    <Link href="tel:+919820987528">+91 98209 87528</Link>
                  </div>

                  <div
                    className={`${styles.mapWrapper} mt-4 rounded-1 w-100 position-relative overflow-hidden`}
                  >
                    <div
                      ref={mapRef}
                      className="w-100 h-100 position-absolute animateThis fadeShrink"
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="p-4 bgPink rounded-4 shadow-lg border border-light animateThis slideTop">
                    <form className={`${styles.formFormat} row g-0`}>
                      <div className="col-12">
                        <h4 className="textPrimary sectSubTitle titleFont mb-0 lh">
                          Send Us A Message
                        </h4>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <span className={styles.errorLabel}>
                          This field is required
                        </span>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <span className={styles.errorLabel}>
                          This field is required
                        </span>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Mobile No.*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        <span className={styles.errorLabel}>
                          This field is required
                        </span>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          rows={2}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <span className={styles.errorLabel}>
                          This field is required
                        </span>
                      </div>
                      <div className="col-12 pt-3 text-center">
                        <button
                          type="button"
                          className="ctaBtn"
                          onClick={handleSubmit}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
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

export default ContactUs;
