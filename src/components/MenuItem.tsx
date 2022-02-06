import { useRouter } from "next/dist/client/router";
import Link from "next/link";
interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem = ({ href, text }: MenuItemProps) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={`my-4 text-lg md:mx-2 md:text-base md:my-0 ${
          router.pathname === href ? "font-bold" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default MenuItem;
