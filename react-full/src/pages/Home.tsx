import { sectionHome } from '@/utils/sectionHome';
import { NeCard } from '@/components/NeCard';

export function Home() {
  return (
    <>
      <div className="relative w-full h-140 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          id="video-abelha"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video-abelha.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <img src='/logo-icon.svg' alt='logo do BeeSting' width={120} height={30} />
          <h1 className="text-3xl md:text-7xl text-center font-bold" data-testid="title-types-bees">Seja-bem vindo <br></br> ao BeeSting</h1>
        </div>
      </div>
      
      <section className='bg-primary-500 w-full p-8'>
       <div className='container text-center text-white'>
        <h2 className='text-2xl font-bold mb-4' data-testid="title-curiosities">Curiosidades</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {sectionHome.map((section, index) => (
           <NeCard key={index} index={index} image={section.image} title={section.title} description={section.description} />
          ))}
        </div>
       </div>
      </section> 

      <section className='py-8 container'>
        <h2 className='text-2xl font-bold mb-4' data-testid="title-endangered">Especies em extição</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {sectionHome.map((section, index) => (
            <NeCard key={index} index={index} image={section.image} title={section.title} description={section.description} />
          ))}
        </div>
      </section> 
    </>
  )
}