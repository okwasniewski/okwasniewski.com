import Link from "next/link";

const Header = () => (
  <header className="w-full max-w-[750px] mx-auto px-6 py-8">
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity font-bold"
      >
        okwasniewski
      </Link>
      <div className="flex gap-6 text-gray-600 dark:text-gray-400">
        <Link
          href="/blog"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          blog
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          contact
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
