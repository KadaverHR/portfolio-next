'use client';

import styles from "@/components/about/About.module.sass";
import data from "@/data/data.json";

const About = () => {
  const aboutData = data.about;
  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.title}>
          Обо мне
        </h2>
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
            <h3 className={styles.stacktitle}>
              Мой стэк
            </h3>
            <ul className={styles.stacklist}>
              {
                aboutData.stack.map((item, index) => (
                  <li className={styles.stackitem} key={index}>
                    <p className={styles.itemtext}>
                      <span className={styles.itemtitle}>
                        {item.title}
                      </span>
                      {item.text}
                    </p>
                  </li>
                ))
              }

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About