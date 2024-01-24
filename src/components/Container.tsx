import type { ReactNode } from 'react';

type PropsContainer = {
  children:ReactNode
}

export default function Container({children}:PropsContainer){
  return (
    <div className='container'>
      { children }
    </div>
  )
}