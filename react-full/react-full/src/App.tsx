import { Button } from '@/components/NeButton';
import { NeHeader } from '@/layout/NeHeader';

export default function App() {
  return (
    <NeHeader header={
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-yellow-900 text-4xl'>Booter</h1>
        </div>
        <div>
          <nav>
            <ul className='flex gap-4'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Contact</li>
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