import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { NeHeader } from '@/layout/NeHeader'; 

describe('Render NeHeader', () => {
  it('Render the application component', () => {
    render(<NeHeader
      header={
        <div className='flex justify-between items-center gap-4'>
          <h1 className='text-amber-950 text-3xl font-bold'>BeeSting</h1>

          <nav>
            <ul className='flex gap-4'>
              <a href="/" className='font-bold text-amber-950 hover:underline'>Home</a> |
              <a href="/about" className='font-bold text-amber-950 hover:underline'>About</a> |
              <a href="/contact" className='font-bold text-amber-950 hover:underline'>Contact</a>
            </ul>
          </nav>
        </div>
      }
      />);

    expect(screen).toBeDefined();
  });
});