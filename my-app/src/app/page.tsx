'use client'; // Para garantir que o código seja executado no cliente

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Garantir que useRouter seja chamado apenas no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correctAnswer = 2; // 1 + 1 = 2
    const userAnswer = parseInt(inputValue, 10);

    if (userAnswer === correctAnswer) {
      // Se a resposta estiver correta, redireciona para outra página
      redirect('/pergunta01'); // Mude o caminho para o que você desejar
    } else {
      // Se a resposta estiver errada, mostra um alert
      alert('Pelo amor de Deus ANITA CIVAN, É 1 + 1!!!!!!');
    }
  };

  // Verifica se o componente foi montado no lado do cliente
  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center text-center h-screen w-full bg-gradient-to-r from-gray-800 via-purple-700 to-black">
      <div className="flex flex-col items-center max-w-[1000px] gap-8 px-6 py-8 bg-gray-900 shadow-lg rounded-xl w-full sm:w-[80%] md:w-[60%]">
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">
          Vamos começar com uma perguntinha simples... Quanto é 1+1?
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 text-white">
          <input
            type="number"
            className="w-full p-4 text-center text-lg border-2 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            alt="Ex: 2"
            placeholder="Digite sua resposta"
          />
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg text-xl font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Verificar Resposta
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-4">Te amo gatinhaS2</p>
      </div>
    </div>
  );
}
