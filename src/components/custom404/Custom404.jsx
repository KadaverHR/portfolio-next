"use client";

import styles from "./Custom404.module.sass";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import { MouseParallax } from "react-just-parallax";

const Custom404 = () => {

  const custom404 = data.custom404;
  const highlightText = (text, decoration) => {
    decoration.map((item) => {
      text = text.replaceAll(item, `<span style="color: #B564D4">${item}</span>`)
    })
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <section className={styles.block}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div>
                <h1 className={styles.title}>
                  <span className={styles.pretitle}>
                    {custom404.pretitle}
                  </span>
                  {data.custom404.title}
                </h1>
                <p className={styles.subtitle}>
                  {custom404.subtitle}
                </p>
              </div>
              <p className={styles.contentitem}>
                {highlightText(custom404.description.text, custom404.description.decoration)}
              </p>
              <Link href="/"
                className={styles.button}>
                Верни меня в <span className={styles.link_text}>pages/</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>

  );

};

export default Custom404;