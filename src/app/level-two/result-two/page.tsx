// pages/level-two/result.tsx
"use client"
import { Suspense } from 'react';
import Result from '@/components/Result';
import {useRouter} from 'next/navigation';
import ReplayButton from '@/components/ReplayButton';

export default function ResultPageTwo() {

  const router = useRouter()

  const handleReplay = () => {
    localStorage.setItem('score', '0');
    router.refresh();
    router.push('/level-two'); // Reload the page to reset the score
};
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Result/>
      <ReplayButton onClick={handleReplay}/>
    </Suspense>
  );
}
