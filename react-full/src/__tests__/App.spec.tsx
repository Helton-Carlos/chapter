import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router'; // ou 'react-router-dom'
import { describe, it, expect} from 'vitest';
import App from '../App'; 

describe('Render App', () => {
  it('Render the application component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen).toBeDefined();
  });

  it('Should text checked  page init', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('BeeSting')).toBeInTheDocument();
  });
});