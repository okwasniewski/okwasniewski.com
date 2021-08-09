import Link from 'next/link';
interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = ({ href, text }: MenuItemProps) => {
  return (
    <Link href={href}>
      <a className='my-4 text-lg md:mx-2 md:text-base md:my-0'>{text}</a>
    </Link>
  );
};

export default MenuItem;
