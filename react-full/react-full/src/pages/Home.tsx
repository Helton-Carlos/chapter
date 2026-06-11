import { sectionHome } from '@/utils/sectionHome';
import { NeButton } from '@/components/NeButton';

export function Home() {
  return (
    <>
      <main className='bg-[url(https://www.abc.med.br/fmfiles/index.asp/::abcmed::/abc/ferroada-de-abelha.jpg)] bg-cover bg-center h-70 flex items-center justify-center text-white'>
        <h2>Seja-bem vindo ao BeeSting</h2>
      </main>
      
      <section className='py-8'>
        <h2 className='text-2xl font-bold mb-4'>Tipos de abelhas</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {sectionHome.map((section, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img src={section.image} alt={section.title} className='w-full object-cover' />

              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{section.title}</h3>
                <p className='text-gray-700 mb-4'>{section.description}</p>
                <NeButton>Saiba mais</NeButton>
              </div>
            </div>
          ))}
        </div>
      </section>  
    </>
  )
}