import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { sectionHome } from '@/utils/sectionHome';
import { NeButton } from '@/components/NeButton';

export function Species() {
  const routeParames = useParams()
  const navigate = useNavigate();
  
  const { id } = routeParames;

  function getSpecies() {
    const species = sectionHome[Number(id)];

    if (!species) {
      return {
        title: 'Espécie não encontrada',
        description: 'A espécie que você está procurando não foi encontrada. Por favor, verifique o ID e tente novamente.',
        image: 'https://www.abc.med.br/fmfiles/index.asp/::abcmed::/abc/ferroada-de-abelha.jpg',
      }
    }

    return species;
  }

  const { title, description, image } = getSpecies();

  return (
    <div className='container'>

      <div className='flex justify-between items-center mb-4'>
        <h2>Espécies</h2>
        <NeButton onClick={() => navigate(-1)}>Voltar</NeButton>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <img src={image} alt={title} className='w-full h-auto mt-4 rounded-lg shadow-md' />
    </div>
  )
}