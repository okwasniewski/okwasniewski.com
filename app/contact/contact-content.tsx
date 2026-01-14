import Link from "next/link";

export default function ContactContent() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        Contact
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Feel free to reach out
      </p>
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li>
          <Link
            href="https://github.com/okwasniewski"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/o_kwasniewski"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            X
          </Link>
        </li>
        <li>
          <Link
            href="mailto:hello@oskarkwasniewski.dev"
            className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            hello@oskarkwasniewski.dev
          </Link>
        </li>
      </ul>
    </section>
  );
}
