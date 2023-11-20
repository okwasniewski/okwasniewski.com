const Footer = () => (
  <footer className="flex justify-center p-4 mt-10 bg-gray-100 dark:bg-dark-surface">
    <div className="container flex justify-center mx-auto dark:text-gray-200">
      <p className="font-medium">
        &copy; {new Date().getFullYear()} - Oskar Kwaśniewski
      </p>
    </div>
  </footer>
);

export default Footer;
