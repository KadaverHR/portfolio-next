'use client';

import { useRef, useEffect, useState } from "react";
import styles from "@/components/header/Header.module.sass";
import data from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";


function Header() {

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.box}>
          <a href="/">
            <Image
              src="/img/logo.svg"
              alt="Логотип"
              width={100}
              height={56}
              sizes="100vw"
              className={styles.logo}
            />
          </a>
          <nav className={styles.nav}>
            <Link href="/" className={styles.nav__link}>Главная</Link>
            <Link href="/about" className={styles.nav__link}>Обо мне</Link>
            <Link href="/blog" className={styles.nav__link}>Портфолио</Link>
            <Link href="/contact" className={styles.nav__link}> Контакты</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;