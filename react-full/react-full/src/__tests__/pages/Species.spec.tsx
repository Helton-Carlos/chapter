import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { Species } from '@/pages/Species'; 

describe('Render Species', () => {
  it('Render the application component', () => {
    render(<Species />);

    expect(screen).toBeDefined();
  });

  it('Should title of page', () => {
    const wrapper = render(<Species />);

    expect(wrapper.getByText('Espécies')).toBeInTheDocument();
  });
});