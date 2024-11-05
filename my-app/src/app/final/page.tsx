'use client'; // Para garantir que o código seja executado no cliente

import Fotinha from '../../../public/Group_1.png'
import Image from 'next/image';

export default function Final() {
  return (
    <div className='md:flex justify-center items-center gap-8 p-4 md:p-0 h-screen'>
      <div className='flex flex-col items-center md:items-start text-center md:text-left gap-4'>
        <p className='text-lg md:text-xl'>
          Não quer namorar comigo?
        </p>
        <p className='text-lg md:text-xl'>
          Tudo bem gatinha, eu te amo MUITOOO!
        </p>
        <p className='text-lg md:text-xl'>
          Nos próximos episódios contamos com um pedido bem feito.
        </p>
      </div>
      <div className='flex justify-center mt-36'>
        <Image width={300} height={300} alt='Foto nossa de casalzin' src={Fotinha} />
      </div>
    </div>
  );
}
