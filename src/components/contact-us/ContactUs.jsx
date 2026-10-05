import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import banner from "@/assets/images/contactBanner.jpg";
import styles from "@/components/contact-us/ContactUs.module.css";
import { useToast } from "@/custom-hooks/toast/ToastProvider";
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  console.log(errors);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.mobile?.trim()) {
      newErrors.mobile = "Mobile is required";
    }

    if (!formData.message?.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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

    return () => {
      if (tl) tl.kill();
      if (split) split.revert();
    };
  }, []);

  return (
    <>
      <section className={`${styles.inBanner}`}>
        <Image
          src={banner}
          alt="banner"
          //  height={}
          //  width={1000}
          className={`${styles.inBanImg}`}
        />
      </section>

      <section className={`${styles.aboutPage} sitePadding rounded-top-5`}>
        <div className="container-fluid pb-5">
          <div className="d-flex flex-wrap justify-content-center gap-5 position-relative z-1 mb-5">
            <div className="col-lg-9 text-center">
              <div
                className={`${styles.pageTitle} text-center mx-auto bg-white`}
              >
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
                      Unit No-71, Apollo Industrial Estate, Off Mahakali Caves
                      Road, <br /> Andheri (E), Mumbai - 400093.
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
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9355.864377354963!2d72.85060059357912!3d19.1149315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c82e3bfe78b3%3A0xcb26d534782029d2!2sApollo%20Industrial%20Estate!5e1!3m2!1sen!2sin!4v1790686154684!5m2!1sen!2sin"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-100 h-100 position-absolute animateThis fadeShrink"
                    ></iframe>
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
                        {errors?.name && (
                          <p className={`${styles.errorLabel} text-danger`}>{errors.name}</p>
                        )}
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
                        {errors?.email && (
                          <p className={`${styles.errorLabel} text-danger`}>{errors.email}</p>
                        )}
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
                        {errors?.mobile && (
                          <p className={`${styles.errorLabel} text-danger`}>{errors.mobile}</p>
                        )}
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
                        {errors?.message && (
                          <p className={`${styles.errorLabel} text-danger`}>{errors.message}</p>
                        )}
                      </div>
                      <div className="col-12 pt-3 text-center">
                        <button
                          type="button"
                          className="ctaBtn"
                          onClick={handleSubmit}
                          disabled={loading}
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