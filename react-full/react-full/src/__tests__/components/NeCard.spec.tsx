import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { NeCard } from '@/components/NeCard'; 

describe('Render NeCard', () => {
  const  NeCardProps = {
    index: 1,
    image: 'string',
    title: 'string',
    description: 'string',
  }

  it('Render the application component', () => {
    render(
    <NeCard  
      index={NeCardProps.index} 
      image={NeCardProps.image} 
      title={NeCardProps.title} 
      description={NeCardProps.description}
    />);

    expect(screen).toBeDefined();
  });
});