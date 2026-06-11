export function NeFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div>
      <footer className='w-full bg-primary-950 text-white px-8 py-4'>
        <div className='container'>
          <ul className='flex flex-col md:flex-row gap-4 justify-center'>
            <li><a href='#' className='hover:underline'>Home</a></li>
            <li><a href='#' className='hover:underline'>Sobre</a></li>
            <li><a href='#' className='hover:underline'>Contato</a></li>
          </ul>
          <p className='text-center mt-4'>&copy; {currentYear} BeeSting. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}