import { sectionHome } from '@/utils/sectionHome';
import { NeCard } from '@/components/NeCard';

export function Home() {
  return (
    <>
      <div className='container'>
        <main className='bg-[url(https://www.abc.med.br/fmfiles/index.asp/::abcmed::/abc/ferroada-de-abelha.jpg)] bg-cover bg-center h-70 flex items-center justify-center text-white'>
          <h2>Seja-bem vindo ao BeeSting</h2>
        </main>
        
        <section className='py-8'>
          <h2 className='text-2xl font-bold mb-4'>Tipos de abelhas</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {sectionHome.map((section, index) => (
               <NeCard key={index} index={index} image={section.image} title={section.title} description={section.description} />
            ))}
          </div>
        </section> 
      </div>
      
      <section className='bg-primary-500 w-full p-8'>
       <div className='container text-center text-white'>
        <h2 className='text-2xl font-bold mb-4'>Tipos de abelhas</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {sectionHome.map((section, index) => (
           <NeCard key={index} index={index} image={section.image} title={section.title} description={section.description} />
          ))}
        </div>
       </div>
      </section> 

      <section className='py-8 container'>
        <h2 className='text-2xl font-bold mb-4'>Tipos de abelhas</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {sectionHome.map((section, index) => (
            <NeCard key={index} index={index} image={section.image} title={section.title} description={section.description} />
          ))}
        </div>
      </section> 
    </>
  )
}