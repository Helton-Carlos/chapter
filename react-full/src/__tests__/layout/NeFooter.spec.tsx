import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { NeFooter } from '@/layout/NeFooter'; 

describe('Render NeFooter', () => {
  it('Render the application component', () => {
    render(<NeFooter />);

    expect(screen).toBeDefined();
  });
});