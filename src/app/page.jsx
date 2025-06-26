"use client";

// import Header from '@/components/header/Header';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';


const Banner = dynamic(() => import('@/components/banner/Banner'), {
  suspense: true
});

const About = dynamic(() => import('@/components/about/About'), {
  suspense: true
});

const Header = dynamic(() => import('@/components/header/Header'), {
  suspense: true
});

export default function Home() {
  return (
    <main>
      <Suspense fallback={
        <div className="loader">
          Загрузка
        </div>
      }>
        <Header />
        <Banner />
        <About />
      </Suspense>

    </main>
  );
}