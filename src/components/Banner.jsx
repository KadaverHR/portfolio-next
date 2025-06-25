"use client";

import { MouseParallax } from "react-just-parallax";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import data from "@/data/data.json";
import styles from "@/components/Banner.module.sass";

function Banner() {
  //cчитаем ширину баннера для анимации
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [sceneWidth, setSceneWidth] = useState(0);
  const [ready, setReady] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX + 30,
      y: event.clientY + 50,
    });
  };

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
        `<span style="color: #B564D4">$1</span>`
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
                    width={40}
                    height={15}
                    style={{ objectFit: "contain" }}
                  />
                  <p className={styles.contentitem}>
                    {highlightText(item.text, item.highlights)}
                  </p>
                </li>
              ))}
            </ul>

            <a
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className={styles.contactMe}
              href="mailto:{ich@hasslich.ru"
            >
              Свяжись со мной
              {isVisible && (
                <div
                  className={styles.follower}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                >
                  <Image
                    height={30}
                    width={197}
                    src="/img/plz.png"
                    alt="ну пожалуйста"
                    className="bubble"
                  />
                </div>
              )}
            </a>
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
                  lerpEase={0.03}
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
                    <Image src={item.icon} alt="" width={30} height={30} />
                    <p>{item.title}</p>
                  </div>
                </MouseParallax>
              ))}
            </div>
            <MouseParallax
              strength={0.03}
              lerpEase={0.05}
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
              strength={0.03}
              lerpEase={0.07}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={true}
              isAbsolutelyPositioned={true}
            >
              <div className={styles.imgbox}>
                <Image
                  className={styles.img}
                  priority
                  src={data?.imgs?.banner?.find((item) => item.pers)?.pers.src}
                  alt={data?.imgs?.banner?.find((item) => item.pers)?.pers.alt}
                  width={374}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </MouseParallax>
            <MouseParallax
              strength={0.04}
              lerpEase={0.06}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={true}
              isAbsolutelyPositioned={true}
            >
              <div className={styles.decoration}>
                <Image
                  className={styles.decoration}
                  src={
                    data?.imgs?.banner?.find((item) => item.decoration)
                      ?.decoration.src
                  }
                  alt={
                    data?.imgs?.banner?.find((item) => item.decoration)
                      ?.decoration.alt
                  }
                  width={156}
                  height={264}
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
