import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { About } from '@/pages/About'; 

describe('Render About', () => {
  it('Render the application component', () => {
    render(<About />);

    expect(screen).toBeDefined();
  });

  it('Should title of page', () => {
    const wrapper = render(<About />);

    expect(wrapper.getByText('Sobre')).toBeInTheDocument();
  });

  it('Should testing sections title', () => {
    const wrapper = render(<About />);

    const subtitle = wrapper.getByTestId('subtitle-bees');

    expect(subtitle).toBeInTheDocument();
  });
});