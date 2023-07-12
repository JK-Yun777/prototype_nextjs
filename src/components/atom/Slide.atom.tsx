"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./atom.module.css";

const SlideAtom = ({ children }: { children: React.ReactNode }) => {
  let sliderSetting = {
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...sliderSetting} className={styles.slider}>
        {children}
      </Slider>
    </div>
  );
};

export default SlideAtom;
