import type { ReactNode } from 'react';

interface NeHeaderProps {
  header: ReactNode;
  children: ReactNode;
}

export function NeHeader({ header, children }: NeHeaderProps) {
  return (
    <div>
      <header className='w-full bg-amber-500 text-white px-8 py-4'>
        {header}
      </header>

      <section className='px-8 py-4'>
        {children}
      </section>
    </div>
  )
}