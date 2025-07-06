// pages/404.js
import Link from "next/link";
import { ScrollParallax } from "react-just-parallax";
import { useState } from "react";
import styles from "../styles/404.module.css";

export default function Custom404() {
  const [title, setTitle] = useState("404: Упс! Я опять накосячила!");
  const errorMessages = [
    "404: Упс! Я опять накосячила!",
    "404: Кажется, useState меня подвёл!",
    "404: Ой, npm run dev не помог!",
  ];

  const handleTitleClick = () => {
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    setTitle(errorMessages[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <ScrollParallax strength={0.2}>
        <h1 className={styles.title} onClick={handleTitleClick}>
          {title}
        </h1>
      </ScrollParallax>
      <p className={styles.text}>
        Кажется, эта страница ушла в <code>undefined</code>. Похоже, кто-то (я)
        забыла <code>return</code>. Пока я чиню баг с помощью магии{" "}
        <code>console.log('HELP')</code>, можешь{" "}
        <Link href="/">
          <a className={styles.link}>
            верни меня в <code>index.js</code>!
          </a>
        </Link>{" "}
        — там хотя бы что-то рендерится.
      </p>
      <div className={styles.codeBits}>
        <ScrollParallax
          strength={0.15}
          isAbsolutelyPositioned
          style={{ left: "10%", animationDelay: "0s" }}
        >
          <span className={styles.codeBit}>undefined</span>
        </ScrollParallax>
        <ScrollParallax
          strength={0.1}
          isAbsolutelyPositioned
          style={{ left: "25%", animationDelay: "0.7s" }}
        >
          <span className={styles.codeBit}>return</span>
        </ScrollParallax>
        <ScrollParallax
          strength={0.25}
          isAbsolutelyPositioned
          style={{ left: "40%", animationDelay: "1.3s" }}
        >
          <span className={styles.codeBit}>null</span>
        </ScrollParallax>
        <ScrollParallax
          strength={0.2}
          isAbsolutelyPositioned
          style={{ left: "60%", animationDelay: "1.8s" }}
        >
          <span className={styles.codeBit}>useEffect</span>
        </ScrollParallax>
        <ScrollParallax
          strength={0.3}
          isAbsolutelyPositioned
          style={{ left: "80%", animationDelay: "0.4s" }}
        >
          <span className={styles.codeBit}>...</span>
        </ScrollParallax>
      </div>
    </div>
  );
}
