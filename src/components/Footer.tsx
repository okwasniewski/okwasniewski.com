const Footer = () => (
  <footer className="flex justify-center p-4 mt-10 bg-gray-100 dark:bg-dark-surface">
    <div className="container flex flex-col items-center justify-between mx-auto md:flex-row dark:text-gray-200">
      <p className="text-sm font-medium">
        &copy; {new Date().getFullYear()} - Oskar Kwaśniewski
      </p>
      <p className="text-xs opacity-30">Made with ❤️ and Next.js</p>
    </div>
  </footer>
);

export default Footer;
