import type { ReactNode } from 'react';

interface NeHeaderProps {
  header: ReactNode;
}

export function NeHeader({ header }: NeHeaderProps) {
  return (
    <div>
      <header className='w-full bg-amber-500 text-white px-8 py-4'>
        <div className='container'>
          {header}
        </div>
      </header>
    </div>
  )
}