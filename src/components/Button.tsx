import Link, { LinkProps } from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
} & LinkProps;

const Button = ({
  href,
  children,
  secondary = false,
  ...props
}: ButtonProps) => (
  <Link
    href={href}
    style={{ height: 'fit-content', width: 'fit-content' }}
    className={`rounded-full px-6 py-2 mr-2 border-2 font-medium transition border-blue-600 transform hover:scale-105 min-w-[160px] flex items-center justify-center ${
      secondary
        ? 'text-blue-600 hover:text-white hover:bg-blue-600'
        : 'text-white bg-blue-600'
    } `}
    {...props}
  >
    {children}
  </Link>
);

export default Button;
