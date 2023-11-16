import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}

const Button = ({ href, children, secondary = false }: ButtonProps) => (
  <Link
    href={href}
    style={{ height: 'fit-content', width: 'fit-content' }}
    className={`rounded-full px-6 py-2 mr-2 border-2 font-medium transition border-blue-600 dark:border-blue-900 transform hover:scale-105 min-w-[160px] flex items-center justify-center ${
      secondary
        ? 'text-blue-600 dark:text-blue-900 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-900'
        : 'text-white bg-blue-600 dark:bg-blue-900'
    } `}
  >
    {children}
  </Link>
);

export default Button;
