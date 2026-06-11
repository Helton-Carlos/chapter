import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { Home } from '@/pages/Home'; 

describe('Render Home', () => {
  it('Render the application component', () => {
    render(<Home />);

    expect(screen).toBeDefined();
  });

  it('Should title of page', () => {
    const wrapper = render(<Home />);

    expect(wrapper.getByText('Seja-bem vindo ao BeeSting')).toBeInTheDocument();
  });

  it('Should testing sections title', () => {
    const wrapper = render(<Home />);

    const titleTypes = wrapper.getByTestId('title-types-bees');
    const titleCuriosities = wrapper.getByTestId('title-curiosities')
    const titleEndangered = wrapper.getByTestId('title-endangered')

    expect(titleTypes).toBeInTheDocument();
    expect(titleCuriosities).toBeInTheDocument();
    expect(titleEndangered).toBeInTheDocument();
  });
});