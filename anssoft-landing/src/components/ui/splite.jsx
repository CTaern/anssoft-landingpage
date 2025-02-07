'use client';

import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-auto flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className={className}
      />
    </Suspense>
  );
}
