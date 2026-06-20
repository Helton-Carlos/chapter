import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { NeButton } from '@/components/NeButton'; 

describe('Render NeButton', () => {
  it('Render the application component', () => {
    render(<NeButton />);

    expect(screen).toBeDefined();
  });
});