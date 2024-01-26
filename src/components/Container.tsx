import type { ReactNode } from 'react';

type PropsContainer = {
  children:ReactNode;
}

export default function Container({children}:PropsContainer){
  return (
    <div className="blur-container">
      <div className='container blur-container'>
        { children }
      </div>
    </div>
  )
}