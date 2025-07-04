"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Header = dynamic(() => import('@/components/header/Header'), {
  suspense: true
});

const Custom404 = dynamic(() => import('@/components/custom404/Custom404'), {
  suspense: true
});


const NotFound = () => {
  return (
    <main>
      <Suspense fallback={
        <div className="loader">
          Загрузка
        </div>
      }>
        <Header />
        <Custom404 />
      </Suspense>

    </main>
  )
};

export default NotFound;