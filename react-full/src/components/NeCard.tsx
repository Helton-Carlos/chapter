import { NeButton } from '@/components/NeButton';
import { useNavigate } from 'react-router-dom';

interface NeCardProps {
  index: number;
  image: string;
  title: string;
  description: string;
}

export function NeCard({index,image, title, description}: NeCardProps) {
  const navigate = useNavigate();

  function goPage(index: number) {
     navigate(`/species/${index}`)
  }
  
  return(
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <img src={image} alt={title} className='w-full object-cover' />

      <div className='p-4 text-primary-800'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-700 mb-4'>{description}</p>
        <NeButton onClick={() => goPage(index)}>Saiba mais</NeButton>
      </div>
    </div>
  )
}