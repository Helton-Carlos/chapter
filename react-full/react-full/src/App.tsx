import { Routes, Route } from 'react-router';
import {Home} from '@/pages/Home';
import { NeHeader } from '@/layout/NeHeader';

export default function App() {
  return (
    <>
    <NeHeader header={<h1 className='text-amber-950'>BeeSting</h1>} />
    
    <div className='p-8'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </>
  );
}