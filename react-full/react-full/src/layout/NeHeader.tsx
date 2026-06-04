import type { ReactNode } from 'react';

interface NeHeaderProps {
  header: ReactNode;
  children: ReactNode;
}

export function NeHeader({ header, children }: NeHeaderProps) {
  return (
    <div>
      <header>
        {header}
      </header>

      <section>
        {children}
      </section>
    </div>
  )
}