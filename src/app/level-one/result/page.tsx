// pages/level-one/result.tsx
"use client"
import { Suspense } from 'react';
import Result from '@/components/Result';
import {useRouter, useSearchParams} from 'next/navigation';
import {useState}  from 'react';
import ReplayButton from '@/components/ReplayButton';
import PlayAgain from '@/components/PlayAgain';
import LevelTwoButton from '@/components/LevelTwo';

export default function ResultPage() {
  const [score, setScore] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const scoreParam = parseInt(searchParams.get('score') || '0', 10);
  setScore(scoreParam)
  const handleReplay = () => {
    localStorage.setItem('score', '0');
    router.refresh();
    router.push('/level-one'); // Reload the page to reset the score
};
const playAgain = () => {
  router.push(`/level-one`);
}

  return (
    <Suspense>
      <Result />
      <div className='flex justify-center items-center gap-20 mt-12'>
        <PlayAgain onClick={playAgain} />
        <ReplayButton onClick={handleReplay}/>
      </div>
      <LevelTwoButton/>
    </Suspense>
  );
}
