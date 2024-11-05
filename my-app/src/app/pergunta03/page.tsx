'use client'; // Para garantir que o código seja executado no cliente

import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function P03() {
  const [isMounted, setIsMounted] = useState(false);
  const [yesButtonPosition, setYesButtonPosition] = useState({ x: 0, y: 0 });

  // Garantir que o código seja executado apenas no cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleYesClick = () => {
    // Aumenta ainda mais o movimento do botão "Sim"
    setYesButtonPosition({
      x: Math.random() * 400 - 200, // Movimento aleatório no eixo X (de -200% a 200%)
      y: Math.random() * 400 - 200, // Movimento aleatório no eixo Y (de -200% a 200%)
    });
  };

  const handleNoClick = () => {
    // Redireciona para outra página quando o "Não" for clicado
    redirect('/final');
  };

  // Verifica se o componente foi montado no lado do cliente
  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center text-center h-screen w-full bg-gradient-to-r from-green-800 to-black px-4">
      <div className="flex flex-col items-center max-w-[1000px] gap-8 px-6 py-8 bg-transparent shadow-2xl rounded-2xl w-full sm:w-[80%] md:w-[60%]">
        <h3 className="text-base md:text-xl font-semibold text-white mb-4 leading-snug">
          E por último, mas não menos importante...
        </h3>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-snug">
          Você quer namorar comigo?
        </h1>

        {/* Os botões "Sim" e "Não" */}
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 text-white">
          <button
            onClick={handleYesClick}
            className={`w-24 sm:w-32 p-2 text-base sm:text-lg border-2 border-gray-700 bg-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300`}
            style={{
              transform: `translate(${yesButtonPosition.x}%, ${yesButtonPosition.y}%)`, // Aplica o movimento mais amplo
            }}
          >
            Sim
          </button>

          {/* O botão "Não" que leva para outra página */}
          <button
            onClick={handleNoClick}
            className="w-24 sm:w-32 p-2 text-base sm:text-lg border-2 border-gray-700 bg-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          >
            Não
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">Te amo gatinhaS2</p>
      </div>
    </div>
  );
}
