import { Routes, Route, Link } from 'react-router';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Species } from '@/pages/Species';
import { NeHeader } from '@/layout/NeHeader';
import { NeFooter } from '@/layout/NeFooter';

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
      
      <div className='py-8'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/species/:id" element={<Species />} />
        </Routes>
      </div>

      <NeFooter />
    </>
  );
}