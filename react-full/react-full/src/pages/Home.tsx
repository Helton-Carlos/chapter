import { sectionHome } from '@/utils/sectionHome';
import { NeButton } from '@/components/NeButton';

export function Home() {
  return (
    <>
      <main className='bg-[url(https://www.abc.med.br/fmfiles/index.asp/::abcmed::/abc/ferroada-de-abelha.jpg)] bg-cover bg-center h-70 flex items-center justify-center text-white'>
        <h2>Seja-bem vindo ao BeeSting</h2>
      </main>
      
      {
        sectionHome.map((section, index) => (
          <div key={index} className='p-4 border-b'>
            <h3 className='text-xl font-bold mb-2'>{section.title}</h3>
            <p>{section.description}</p>

            <NeButton>
              {section.title}</NeButton>
          </div>
        ))
      }
    </>
  )
}