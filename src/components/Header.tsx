import rimac from '@/assets/rimac.svg';
import phone from '@/assets/icons/phone.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={rimac} alt="Logo Rimac" />
      
      <div className='header--right'>
        <p className='header--right--hidden'>¡Compra por este medio!</p>
        <p className='header--right--with-icon'>
          <img src={phone} alt="icono celular" /> (01) 411 6001
        </p>
      </div>
    </header>
  );
}
