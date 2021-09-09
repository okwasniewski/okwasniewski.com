import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  secondary?: Boolean;
}

const Button = ({ href, children, secondary = false }: ButtonProps) => {
  return (
    <Link href={href}>
      <a
        style={{ height: 'fit-content', width: 'fit-content' }}
        className={`rounded-full px-6 py-3 mr-2 font-medium transition border-blue-600 transform hover:scale-105 ${
          secondary
            ? 'text-blue-600  border-2 hover:text-white hover:bg-blue-600'
            : 'text-white bg-blue-600'
        } `}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
