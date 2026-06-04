import { Button } from '@/components/NeButton';
import { NeHeader } from '@/layout/NeHeader';

export default function App() {
  return (
    <NeHeader header={
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-primary-900 text-4xl'>Booter</h1>
        </div>
        <div>
          <nav>
            <ul className='flex gap-4 text-primary-800'>
              <li className='cursor-pointer hover:underline'>Home</li>
              <li className='cursor-pointer hover:underline'>About</li>
              <li className='cursor-pointer hover:underline'>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    }>
      <Button>
        Test new home
      </Button>
    </NeHeader>
  );
}