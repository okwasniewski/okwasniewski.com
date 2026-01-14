import Link from "next/link";

const Footer = () => (
  <footer className="w-full max-w-[750px] mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-800">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
      <div className="flex gap-4">
        <Link
          href="https://github.com/okwasniewski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href="https://x.com/o_kwasniewski"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          X
        </Link>
      </div>
      <span>© {new Date().getFullYear()}</span>
    </div>
  </footer>
);

export default Footer;
