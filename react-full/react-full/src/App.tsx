import { useState } from 'react';
import { Button } from '@/components/NeButton';
import { Mail, ArrowRight, Trash2 } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-8 max-w-xs mx-auto flex flex-col gap-4">
      <Button>
        Enviar
      </Button>

      <Button iconLeft={<Mail size={16} />}>
        Entrar com E-mail
      </Button>

      <Button variant="secondary" iconRight={<ArrowRight size={16} />}>
        Avançar
      </Button>

      <Button
        variant="danger"
        iconLeft={<Trash2 size={16} />}
        disabled={isLoading}
        onClick={() => setIsLoading(true)}
      >
        Excluir Conta
      </Button>
    </div>
  );
}