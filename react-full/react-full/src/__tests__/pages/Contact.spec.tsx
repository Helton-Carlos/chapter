import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { Contact } from '@/pages/Contact'; 

describe('Render Contact', () => {
  it('Render the application component', () => {
    render(<Contact />);

    expect(screen).toBeDefined();
  });

  it('Should title of page', () => {
    const wrapper = render(<Contact />);

    expect(wrapper.getByText('Contato')).toBeInTheDocument();
  });

  
  it('Should testing image in page', () => {
    const wrapper = render(<Contact />);

    const image = wrapper.getByTestId('image-bee')

    expect(image).toBeInTheDocument();
  });
});