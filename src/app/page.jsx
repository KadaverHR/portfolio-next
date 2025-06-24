"use client";

import '@/app/styles/main.sass';
import dynamic from 'next/dynamic';
import { lazy } from 'react';
import { Suspense } from 'react';

const Banner = dynamic(() => import('@/components/Banner'), {
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
        <Banner />
      </Suspense>

    </main>
  );
}