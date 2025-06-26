"use client";

import styles from "@/components/about/About.module.sass";
import data from "@/data/data.json";
import { MouseParallax } from "react-just-parallax";
import { ScrollParallax } from "react-just-parallax";
import Image from "next/image";

const About = () => {
  const aboutData = data.about;
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.center}>
            <h2 className={styles.title}>Обо мне</h2>
            <div className={styles.content}>
              <div className={styles.textbox}>
                <p className={styles.text}>
                  Верстаю, как могу. Главное — чтобы работало.
                </p>
                <p className={styles.textgray}>
                  (Хотя бы у меня на компьютере)
                </p>
              </div>
              <div className={styles.stackbox}>
                <h3 className={styles.stacktitle}>Мой стэк</h3>
                <ul className={styles.stacklist}>
                  {aboutData.stack.map((item, index) => (
                    <li className={styles.stackitem} key={index}>
                      <p className={styles.itemtext}>
                        <span className={styles.itemtitle}>{item.title}</span>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.circlebox}>
            <div className={styles.circlemax}></div>
            <div className={styles.circlemin}></div>
          </div>
          <div className={styles.pointbox}></div>
          <div className={styles.left}>
            <div className={styles.imagebox}></div>
            <MouseParallax
              strength={0.02}
              lerpEase={0.03}
              enableOnTouchDevice={true}
              shouldPause={false}
              isVertical={true}
              isAbsolutelyPositioned={true}
              scrollContainer={styles.about}
            >
              <Image
                width={475}
                height={500}
                src="/img/about1.png"
                alt="Фото"
                className={styles.imageleft}
              />
            </MouseParallax>
          </div>
          <div className={styles.right}>
            <ScrollParallax strength={0.1} lerpEase={0.07}>
              <div className={styles.rightbox}>
                <Image
                  width={288}
                  height={512}
                  src="/img/about2.png"
                  alt="Фото"
                  className={styles.imageright}
                />
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
