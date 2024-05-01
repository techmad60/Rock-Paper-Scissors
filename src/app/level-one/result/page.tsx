// pages/level-one/result.tsx
"use client"

import { Suspense } from 'react';
import Result from '@/components/Result';

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Result />
    </Suspense>
  );
}
