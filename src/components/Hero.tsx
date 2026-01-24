import Image from "next/image";

const Hero = () => (
  <section className="mb-16">
    <div className="flex items-center gap-4 mb-6">
      <Image
        src="/oskar.jpg"
        width={60}
        height={60}
        alt="Oskar Kwaśniewski"
        className="rounded-full"
      />
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Oskar Kwaśniewski
        </h1>
        <p className="text-gray-600 dark:text-gray-400 font-mono">
          Senior Software Engineer
        </p>
      </div>
    </div>
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
      <p>
        Building React Native apps at{" "}
        <a
          href="https://www.born.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          Born
        </a>
        . Open source enthusiast with 100+ merged PRs to React Native Core.
      </p>
      <p>
        Focused on native development in Swift, Objective-C, Java and Kotlin. In
        my free time I enjoy gravel cycling and learning new things.
      </p>
    </div>
  </section>
);

export default Hero;
