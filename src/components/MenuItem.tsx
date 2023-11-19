import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = ({ href, text }: MenuItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link
      href={href}
      className={`my-4 text-lg md:mx-2 font-medium md:my-0 group relative text-gray-800 dark:text-gray-200 ${
        isActive ? 'font-bold' : ''
      }`}
    >
      {text}
      <span
        className={`h-[3px] bg-blue-600 absolute -bottom-[1px] left-0 -rotate-1 group-hover:w-full transition-all ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
    </Link>
  );
};

export default MenuItem;
