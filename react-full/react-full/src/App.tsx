import { Routes, Route, Link } from 'react-router';
import {Home} from '@/pages/Home';
import {About} from '@/pages/About';
import {Contact} from '@/pages/Contact';
import { NeHeader } from '@/layout/NeHeader';

export default function App() {
  return (
    <>
    <NeHeader header={
      <div className='flex justify-between items-center gap-4'>
        <h1 className='text-amber-950'>BeeSting</h1>

        <nav>
          <ul className='flex gap-4'>
            <Link to="/" className='font-bold text-amber-950 hover:underline'>Home</Link> |
            <Link to="/about" className='font-bold text-amber-950 hover:underline'>About</Link> |
            <Link to="/contact" className='font-bold text-amber-950 hover:underline'>Contact</Link>
          </ul>
        </nav>
      </div>
    } />
    
    <div className='p-8'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}