// pages/level-one/result.tsx
"use client"
import { Suspense } from 'react';
import Result from '@/components/Result';
import {useRouter} from 'next/navigation';
import {useState}  from 'react';
import ReplayButton from '@/components/ReplayButton';
import PlayAgain from '@/components/PlayAgain';

export default function ResultPage() {
  const [resultPage, setResultPage] = useState (false);
  const router = useRouter()

  const handleReplay = () => {
    localStorage.setItem('score', '0');
    router.refresh();
    router.push('/level-two'); // Reload the page to reset the score
};
const playAgain = () => {
  router.push(`/level-two`);
}

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Result/>
      <PlayAgain onClick={playAgain} />
      <ReplayButton onClick={handleReplay}/>
    </Suspense>
  );
}