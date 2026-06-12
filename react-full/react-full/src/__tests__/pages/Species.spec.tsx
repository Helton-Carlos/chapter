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

it('deve renderizar o ID dinâmico da rota e voltar ao clicar no botão', () => {
    const wrapper = render(<Species />);

    const title = wrapper.getByTestId('title-species');
    const description = wrapper.getByTestId('description-species');
    const button = wrapper.getByTestId('button-go-back');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});