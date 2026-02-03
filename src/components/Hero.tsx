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
        . Previously at{" "}
        <a
          href="https://callstack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          Callstack
        </a>{" "}
        for 3.5 years. Open source enthusiast with 100+ merged PRs to React Native Core.
      </p>
      <p>
        Creator of{" "}
        <a href="/portfolio/react-native-visionos" className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100">
          react-native-visionos
        </a>
        ,{" "}
        <a href="/portfolio/react-native-bottom-tabs" className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100">
          react-native-bottom-tabs
        </a>
        , and{" "}
        <a href="/portfolio/liquid-glass" className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100">
          Liquid Glass
        </a>
        . Focused on bridging React Native with native platforms — iOS, Android, visionOS, macOS.
      </p>
      <p>
        When not coding, I enjoy gravel cycling and building side projects.
      </p>
    </div>
  </section>
);

export default Hero;
