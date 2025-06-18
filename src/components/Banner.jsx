'use client';

import { MouseParallax } from 'react-just-parallax';
import Image from 'next/image';
import data from '@/data/data.json';
import '/Banner.module.sass';

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
    <div className="banner">
      <div className="container">
        <div className="banner__box">
          <div className="banner__content">
            <p className="banner__hi">Hello!</p>
            <h1 className="banner__title">{data.bannerTitle}</h1>
            <p className="banner__subtitle">{data.bannerSubtitle}</p>
            <ul className="banner__content-list">
              {data.bannerContentList.map((item, index) => (
                <li key={`content-${index}`} className="banner__content-marker">
                  <Image
                    src={item.img}
                    alt=""
                    width={24}
                    height={24}
                    style={{ objectFit: 'contain' }}
                  />
                  <p className="banner__content-item">
                    {highlightText(item.text, item.highlights)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="banner__scene">
            <div className="banner__stack-list">
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
                    className="banner__stack-item"
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
              <div className="banner__circle-box">
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
              <div className="banner__img-box">
                <Image
                  className="banner__img"
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