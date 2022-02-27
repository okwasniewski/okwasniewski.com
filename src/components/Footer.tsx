const Footer = () => {
  return (
    <footer className='flex justify-center p-4 bg-gray-100'>
      <div className='container mx-auto flex justify-center'>
        <p className='font-medium'>
          &copy; {new Date().getFullYear()} - Oskar Kwaśniewski
        </p>
      </div>
    </footer>
  );
};

export default Footer;
