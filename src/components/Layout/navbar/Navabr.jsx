import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import styles from "@/components/Layout/navbar/Navbar.module.css";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const onScroll = () => setStick(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setMenuShow(false);
      return;
    }

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuShow(true));
    });
    return () => cancelAnimationFrame(id);
  }, [menuOpen]);

  return (
    <header
      className={`${styles.pageHeader} ${menuOpen ? styles.opened : ""} ${
        stick ? styles.stick : ""
      } sitePadding py-3`}
    >
      <div className={`${styles.pgHeadMain} container-fluid rounded`}>
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <Link href="/" className={`${styles.logoBox} `}>
              <Image
                src={logo}
                alt="Shanti Jewellers"
                title="Shanti Jewellers"
                className={`${styles.logoImg}`}
                fill
              />
            </Link>
          </div>
          <div className="col-auto">
            <div className="hstack gap-4">
              <button
                type="button"
                role="button"
                className={`${styles.headBtns} ${styles.menuBtn}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-controls="menu"
              >
                <span className={`${styles.span}`}></span>
                <span className={`${styles.span}`}></span>
                <span className={`${styles.span}`}></span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${styles.menuPanel} ${menuOpen ? styles.menuPanelOpen : ""} ${menuShow ? "show" : ""}`}
          id="menu"
        >
          <ul className={`${styles.naviWrap} d-flex flex-column py-5`}>
            <li>
              <a onClick={() => router.push("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => router.push("/about_us")}>About Us</a>
            </li>
            <li>
              <a onClick={() => router.push("/collections")}>Collections</a>
            </li>
            <li>
              <a onClick={() => router.push("/contact-us")}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}