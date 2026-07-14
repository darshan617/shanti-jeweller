import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initAos();
  }, []);
  return <Component {...pageProps} />;
}

const initAos = async () => {
  await import("aos/dist/aos.css");
  const Aos = (await import("aos")).default;
  Aos.init({
    duration: 1000,
    once: true,
  });
};