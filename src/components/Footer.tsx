const Footer = () => (
  <footer className="flex justify-center p-4 mt-10 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto flex justify-center dark:text-gray-200">
      <p className="font-medium">
        &copy; {new Date().getFullYear()} - Oskar Kwaśniewski
      </p>
    </div>
  </footer>
);

export default Footer;
