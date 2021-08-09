import Button from './Button';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full my-20 md:flex-row'>
      <div className='mb-2 text-center md:w-1/2 md:text-left'>
        <h2 className='text-2xl font-bold'>Kontakt</h2>
        <p>Chcesz podjąć współpracę?</p>
      </div>
      <Button href='mailto:oskarkwasniewski@icloud.com'> Kontakt </Button>
    </div>
  );
};

export default Contact;
