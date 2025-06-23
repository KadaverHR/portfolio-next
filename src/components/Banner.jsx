"use client";

import { MouseParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/data.json";
import styles from "./banner.module.sass";

function Banner() {
  //cчитаем ширину баннера для анимации
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [sceneWidth, setSceneWidth] = useState(0);
  const [ready, setReady] = useState(false);

  const updateWidth = () => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;
      const width =
        window.innerWidth <= 768
          ? containerWidth
          : containerWidth - contentWidth;

      setSceneWidth(width);
      setReady(true);
    }
  };

  useEffect(() => {
    // Подождать, пока DOM загрузится
    const timeout = setTimeout(updateWidth, 0);
    window.addEventListener("resize", updateWidth);
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
      observer.disconnect();
    };
  }, []);

  const highlightText = (text, highlights) => {
    let highlightedText = text;
    highlights.forEach(({ word }) => {
      const regex = new RegExp(
        `(${word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")})`,
        "g"
      );
      highlightedText = highlightedText.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div className={styles.banner}>
      <div className="container" ref={containerRef}>
        <div className={styles.box}>
          <div className={styles.content} ref={contentRef}>
            <p className={styles.hi}>Привет!</p>
            <h1 className={styles.title}>{data.bannerTitle}</h1>
            <p className={styles.subtitle}>{data.bannerSubtitle}</p>
            <ul className={styles.contentlist}>
              {data.bannerContentList.map((item, index) => (
                <li key={`content-${index}`} className={styles.contentmarker}>
                  <Image
                    src={item.img}
                    alt=""
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                  <p className={styles.contentitem}>
                    {highlightText(item.text, item.highlights)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={styles.scene}
            style={{
              width: `${sceneWidth}px`,
              visibility: sceneWidth === 0 ? "hidden" : "visible",
            }}
          >
            <div className={styles.stacklist}>
              {data.myStack.map((item, index) => (
                <MouseParallax
                  key={`stack-${index}`}
                  strength={item.paralax}
                  lerpEase={0.01}
                  enableOnTouchDevice={true}
                  isHorizontal={true}
                  isVertical={true}
                >
                  <div
                    className={styles.stackitem}
                    style={{
                      left:
                        index === 1
                          ? "-60px"
                          : index === 2
                          ? "-80px"
                          : index === 3
                          ? "-60px"
                          : index === 4
                          ? "-40px"
                          : "0",
                    }}
                  >
                    <i className={item.icon}></i>
                    <p>{item.title}</p>
                  </div>
                </MouseParallax>
              ))}
            </div>
            <MouseParallax
              strength={0.03}
              lerpEase={0.07}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={false}
              isAbsolutelyPositioned={true}
            >
              <div className={styles.circlebox}>
                <div className={styles.circle}></div>
              </div>
            </MouseParallax>
            <MouseParallax
              strength={0.07}
              lerpEase={0.01}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={true}
              isAbsolutelyPositioned={true}
            >
              <div className={styles.imgbox}>
                <Image
                  className={styles.img}
                  src="/img/main.png"
                  alt="Main Image"
                  width={374}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </MouseParallax>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
