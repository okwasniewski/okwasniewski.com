import Button from "./Button";

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-around w-full my-20 md:flex-row'
    >
      <div className='mb-2 text-center md:w-1/2 md:text-left'>
        <h2 className='text-2xl font-bold'>Kontakt</h2>
        <p className='text-gray-500'>Chcesz podjąć współpracę?</p>
      </div>
      <Button href='/contact'> Kontakt </Button>
    </div>
  );
};

export default Contact;
