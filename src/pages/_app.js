import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ToastProvider } from "@/custom-hooks/toast/ToastProvider";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initAos();
  }, []);

  useEffect(() => {
    const cleanup = initSiteAnimations();
    import("aos").then((mod) => mod.default.refresh());
    return cleanup;
  }, [router.asPath]);

  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

const initAos = async () => {
  await import("aos/dist/aos.css");
  const Aos = (await import("aos")).default;
  Aos.init({
    duration: 1000,
    once: true,
  });
};

function initSiteAnimations() {
  if (typeof window === "undefined") return () => {};

  gsap.registerPlugin(ScrollTrigger, SplitText);

  const cleanups = [];

  const heroEl = document.querySelector(".heroSectTxt");
  if (heroEl) {
    const tl = gsap.timeline();
    const split = new SplitText(heroEl, { type: "words,chars" });
    tl.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "back",
      stagger: 0.05,
    });
    cleanups.push(() => {
      tl.kill();
      split.revert();
    });
  }

  function setupSplits() {
    const targets = document.querySelectorAll(".titleAnim");

    targets.forEach((target) => {
      if (target.dataset.splitReady === "true") return;
      target.dataset.splitReady = "true";

      const splitElement = new SplitText(target, { type: "words,chars" });
      const chars = splitElement.chars;

      const tlSplitBurrowing = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });

      tlSplitBurrowing.from(chars, {
        duration: 0.2,
        opacity: 0.01,
        x: -20,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
      });

      cleanups.push(() => {
        tlSplitBurrowing.scrollTrigger?.kill();
        tlSplitBurrowing.kill();
        splitElement.revert();
        delete target.dataset.splitReady;
      });
    });
  }

  ScrollTrigger.addEventListener("refresh", setupSplits);
  setupSplits();
  cleanups.push(() =>
    ScrollTrigger.removeEventListener("refresh", setupSplits),
  );

  if (document.querySelector(".goldStone_1")) {
    const tween = gsap.to(".goldStone_1", {
      rotation: 180,
      scrollTrigger: {
        trigger: ".goldStone_1",
        start: "top 75%",
        end: "bottom center",
        scrub: 5,
      },
    });
    cleanups.push(() => {
      tween.scrollTrigger?.kill();
      tween.kill();
    });
  }

  if (document.querySelector(".goldStone_2")) {
    const tween = gsap.from(".goldStone_2", {
      scale: 0.5,
      scrollTrigger: {
        trigger: ".goldStone_2",
        start: "top 80%",
        end: "top center",
        scrub: 5,
      },
    });
    cleanups.push(() => {
      tween.scrollTrigger?.kill();
      tween.kill();
    });
  }

  if (document.querySelector(".aboutYear")) {
    const tween = gsap.from(".aboutYear", {
      x: "80%",
      scrollTrigger: {
        trigger: ".aboutYear",
        start: "top 90%",
        end: "bottom center",
        scrub: 5,
      },
    });
    cleanups.push(() => {
      tween.scrollTrigger?.kill();
      tween.kill();
    });
  }

  const checkIfInView = () => {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY || window.pageYOffset;
    const windowBottomPosition = windowTopPosition + windowHeight;
    const animationElements = document.querySelectorAll(".animateThis");

    animationElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTopPosition =
        rect.top + (window.scrollY || window.pageYOffset) + 100;

      if (elementTopPosition <= windowBottomPosition) {
        element.classList.add("in-view");
      } else {
        element.classList.remove("in-view");
      }
    });
  };

  window.addEventListener("scroll", checkIfInView);
  window.addEventListener("resize", checkIfInView);
  checkIfInView();
  cleanups.push(() => {
    window.removeEventListener("scroll", checkIfInView);
    window.removeEventListener("resize", checkIfInView);
  });

  return () => {
    cleanups.forEach((fn) => fn());
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
