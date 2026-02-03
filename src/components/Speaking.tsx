import Link from "next/link";

const Speaking = () => (
  <section className="mb-16">
    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
      Speaking
    </h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      I speak at React Native conferences about native development, visionOS, and performance optimization.{" "}
      <Link
        href="/videos"
        className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
      >
        Watch my talks →
      </Link>
    </p>
  </section>
);

export default Speaking;
