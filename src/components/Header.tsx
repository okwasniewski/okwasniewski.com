import Link from 'next/link';
import Button from './Button';
const Header = () => {
  return (
    <header className='w-full px-4 py-8 bg-white shadow-sm'>
      <div className='container flex items-center justify-between mx-auto'>
        <Link href='/'>
          <p className='text-xl font-bold cursor-pointer'>okwasniewski</p>
        </Link>
        <div>
          <Link href='/#about'>
            <a className='mx-2'>O mnie</a>
          </Link>
          <Link href='/portfolio'>
            <a className='mx-2'>Portfolio</a>
          </Link>
          <Link href='/#contact'>
            <a className='mx-2'>Kontakt</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
