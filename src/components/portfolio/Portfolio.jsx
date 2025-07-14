"use client";

import styles from "./Portfolio.module.sass";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Portfolio = () => {
  const portfolio = data.portfolio;

  return (
    <section className={styles.block}>
      <div className="container">
        <h1 className={styles.title}>{portfolio.title}</h1>
        <ul className={styles.box}>
          {
            portfolio.projects.map((item, index) => (
              <li className={styles.item} key={index}>
                <ScrollParallax
                  strength={item.strength}
                  lerpEase={0.07}
                >
                  <div className={styles.content}>
                    {
                      item.decoration ? (
                        item.decoration.map((decoration, index) => (
                          <div key={index} data-decoration={decoration.name}
                            className={`${styles.decoration}  ${styles[`${decoration.class}`]}`}>
                          </div>
                        ))
                      ) : null
                    }


                    <div className={styles.imgbox}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={329}
                        height={250}
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.card}>
                      <h2 className={styles.card_title}>
                        {item.title}
                      </h2>
                      <p className={styles.card_desc}>
                        {item.desc}
                      </p>
                      <div className={styles.card_links}>
                        {
                          item.links.map((link, index) => (
                            link.type === "site" ? (
                              <Link target="_blank" href={`https://${link.link}`} key={index} className={styles.card_link} >
                                <Image
                                  src={link.favicon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className={styles.card_link_img}
                                />
                                <p className={styles.site}>{link.link}</p>
                              </Link>
                            )
                              :
                              link.type === "github" ? (
                                <Link href={link.link} key={index} className={styles.card_link}>
                                  <Image
                                    src="/img/git.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className={styles.card_link_img}
                                  />
                                  <p className={styles.card_link_git}>{link.link}</p>
                                </Link>
                              ) : null
                          ))
                        }
                      </div>

                    </div>



                  </div>
                </ScrollParallax>
              </li>
            ))
          }
        </ul >
      </div >
    </section >
  );

};

export default Portfolio;
