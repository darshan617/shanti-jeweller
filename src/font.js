// app/fonts.js

import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const stardom = localFont({
  src: "../public/fonts/Stardom-Regular.otf",
  variable: "--font-stardom",
  display: "swap",
});