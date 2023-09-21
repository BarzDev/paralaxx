"use client";

import Image from "next/image";
import style from "./parallax.module.css";
import { useEffect, useState } from "react";

const Parallax = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    let text = document.getElementById("text");
    let moon = document.getElementById("moon");
    let hill2 = document.getElementById("hill2");
    let tree3 = document.getElementById("tree3");
    let tree2 = document.getElementById("tree2");
    let tree4L = document.getElementById("tree4L");
    let tree4R = document.getElementById("tree4R");

    // let Mtext = document.getElementById("M_text");
    let Mhill2 = document.getElementById("M_hill2");
    let Mcomet = document.getElementById("M_comet");
    let MtreeR = document.getElementById("M_treeR");
    let MtreeL = document.getElementById("M_treeL");

    const handleScroll = () => {
      const value = window.scrollY;

      // Check if the elements exist before accessing their 'style' property
      if (text) {
        text.style.marginTop = value * 1.5 + "px";
      }
      if (tree2) {
        tree2.style.marginTop = value * 0.2 + "px";
      }
      if (moon) {
        moon.style.marginTop = value * 0.05 + "px";
      }
      if (tree3) {
        tree3.style.marginLeft = value * -0.05 + "px";
      }
      if (tree4L) {
        tree4L.style.left = value * -0.3 + "px";
      }
      if (tree4R) {
        tree4R.style.left = value * 0.1 + "px";
      }
      if (hill2) {
        hill2.style.marginTop = value * 0.6 + "px";
      }

      // if (Mtext) {
      //   Mtext.style.top = value * 1.25 + "px";
      // }
      if (Mhill2) {
        Mhill2.style.marginTop = value * 0.15 + "px";
      }
      if (Mcomet) {
        Mcomet.style.left = value * -0.6 + "px";
      }
      if (Mcomet) {
        Mcomet.style.marginTop = value * 0.6 + "px";
      }
      if (MtreeR) {
        MtreeR.style.left = value * -0.1 + "px";
      }
      if (MtreeR) {
        MtreeR.style.marginTop = value * 0.05 + "px";
      }
      if (MtreeL) {
        MtreeL.style.left = value * 0.1 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {windowWidth > 600 ? (
        <section className={style["Parallax"]}>
          <div className={style["imgParallax"]} id="stars">
            <Image
              src="/stars.png"
              alt="stars"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="moon">
            <Image
              src="/moon.png"
              alt="moon"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="hill2">
            <Image
              src="/hill2.png"
              alt="hill2"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>

          <div className={style["imgParallax"]} id="hill1">
            <Image
              src="/hill1.png"
              alt="hill1"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="tree4L">
            <Image
              src="/tree4L.png"
              alt="tree4L"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="tree4R">
            <Image
              src="/tree4R.png"
              alt="tree4R"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="tree3">
            <Image
              src="/tree3.png"
              alt="tree3"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>

          <h1 id="text" className={style["text"]}>
            MY PORTOFOLIO WEBSITE
          </h1>

          <div className={style["imgParallax"]} id="tree2">
            <Image
              src="/tree2.png"
              alt="tree2"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
          <div className={style["imgParallax"]} id="tree1">
            <Image
              src="/tree1.png"
              alt="tree1"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
        </section>
      ) : (
        <section className={style["Parallax_mobile"]}>
          <div className={style["imgParallax_mobile"]} id="bg">
            <Image
              src="/M_bg.png"
              alt="M_bg"
              fill
              style={{ objectFit: "fill" }}
              priority={true}
            />
          </div>

          <div className={style["imgParallax_mobile"]} id="M_moon">
            <Image
              src="/M_moon.png"
              alt="M_moon"
              fill
              style={{ objectFit: "contain" }}
              priority={true}
            />
          </div>

          <div className={style["imgParallax_mobile"]} id="M_comet">
            <Image
              src="/M_comet.png"
              alt="M_comet"
              fill
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>

          <div className={style["imgParallax_mobile"]} id="M_hill2">
            <Image
              src="/M_hill2.png"
              alt="M_hill2"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>

          <h1 id="M_text" className={style["M_text"]}>
            MY PORTOFOLIO WEBSITE
          </h1>

          <div className={style["imgParallax_mobile"]} id="M_treeL">
            <Image
              src="/M_treeL.png"
              alt="M_treeL"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>

          <div className={style["imgParallax_mobile"]} id="M_treeR">
            <Image
              src="/M_treeR.png"
              alt="M_treeR"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>

          <div className={style["imgParallax_mobile"]} id="M_hill">
            <Image
              src="/M_hill.png"
              alt="M_hill"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default Parallax;
