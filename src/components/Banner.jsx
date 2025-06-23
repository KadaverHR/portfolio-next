'use client';

import { MouseParallax } from 'react-just-parallax';
import Image from 'next/image';
import data from '@/data/data.json';
import styles from './Banner.module.sass';

function Banner() {
  // Random function for parallax strength
  // function getRandomInRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // Function to highlight text
  const highlightText = (text, highlights) => {
    let highlightedText = text;
    highlights.forEach(({ word }) => {
      const regex = new RegExp(
        `(${word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`,
        'g'
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
      <div className="container">
        <div className={styles.banner__box}>
          <div className={styles.banner__content}>
            <p className={styles.banner__hi}>Hello!</p>
            <h1 className={styles.banner__title}>{data.bannerTitle}</h1>
            <p className={styles.banner__subtitle}>{data.bannerSubtitle}</p>
            <ul className={styles.banner__contentlist}>
              {data.bannerContentList.map((item, index) => (
                <li key={`content-${index}`} className={styles.banner__contentmarker}>
                  <Image
                    src={item.img}
                    alt=""
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain' }}
                  />
                  <p className={styles.banner__contentitem}>
                    {highlightText(item.text, item.highlights)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.banner__scene}>
            <div className={styles.banner__stacklist}>
              {data.myStack.map((item, index) => (
                <MouseParallax
                  key={`stack-${index}`}
                  strength={item.paralax}
                  lerpEase={0.07}
                  enableOnTouchDevice={true}
                  isHorizontal={true}
                  isVertical={true}
                >
                  <div
                    className={styles.banner__stackitem}
                    style={{
                      left: index === 1 ? '-60px' : index === 2 ? '-80px' : index === 3 ? '-60px' : index === 4 ? '-40px' : '0',
                    }}
                  >
                    <i className={item.icon}></i>
                    <p>{item.title}</p>
                  </div>
                </MouseParallax>
              ))}
            </div>
            <MouseParallax
              strength={0.3}
              lerpEase={0.07}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={false}
            >
              <div className={styles.banner__circlebox}>
                <div className="banner__circle"></div>
              </div>
            </MouseParallax>
            <MouseParallax
              strength={0.7}
              lerpEase={0.07}
              enableOnTouchDevice={true}
              isHorizontal={true}
              isVertical={true}
            >
              <div className={styles.banner__imgbox}>
                <Image
                  className={styles.banner__img}
                  src="/img/main.png"
                  alt="Main Image"
                  width={374}
                  height={600}
                  style={{ objectFit: 'cover' }}
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