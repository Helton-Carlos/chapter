export function About() {
  return (
    <div className='container'>
      <h2>Sobre</h2>

      <h4 
        className='text-lg font-bold py-4'
        data-testid="subtitle-bees"
      >Bem-vindo à página Sobre!</h4>

      <p>O BeeSting é um projeto dedicado a fornecer informações sobre as abelhas, suas espécies, comportamentos e a importância que desempenham no ecossistema. Nosso objetivo é educar e conscientizar as pessoas sobre a importância da conservação das abelhas e como elas contribuem para a polinização de plantas, produção de alimentos e manutenção da biodiversidade.</p>

      <p>Na página Sobre, você encontrará informações detalhadas sobre as diferentes espécies de abelhas, seus habitats, comportamentos e curiosidades. Também abordaremos a importância das abelhas para a agricultura, a produção de mel e outros produtos apícolas, além de destacar os desafios que as abelhas enfrentam atualmente, como a perda de habitat, o uso de pesticidas e as mudanças climáticas.</p>

      <p>Nosso compromisso é fornecer informações precisas e atualizadas sobre as abelhas, promovendo a conscientização sobre a importância da conservação dessas incríveis criaturas. Junte-se a nós nessa jornada para aprender mais sobre as abelhas e como podemos protegê-las para garantir um futuro sustentável para todos.</p>
  
      <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJlbGFzfGVufDB8fDB8fHww&w=1000&q=80' alt='Abelha' className='w-full h-auto mt-4 rounded-lg shadow-md' />  
    </div>
  )
}