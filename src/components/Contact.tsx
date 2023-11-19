import Button from './Button';

const Contact = () => (
  <div
    id="contact"
    className="flex flex-col items-center justify-around w-full my-20 md:flex-row"
  >
    <div className="mb-2 text-center md:w-1/2 md:text-left">
      <h2 className="text-2xl font-bold dark:text-gray-200">Contact</h2>
      <p className="text-gray-500 dark:text-gray-200/80">
        Feel free to contact me
      </p>
    </div>
    <Button href="/contact"> Contact </Button>
  </div>
);

export default Contact;
