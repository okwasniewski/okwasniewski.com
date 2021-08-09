import Button from 'src/components/Button';
import Image from 'next/image';
import HomeImage from 'src/assets/home.svg';

const Hero = () => {
  return (
    <div className='flex items-center justify-around mx-auto mt-10 mb-20'>
      <div className='w-full'>
        <h1 className='mb-6 text-3xl font-bold text-gray-900 md:text-5xl'>
          Pomagam firmom
        </h1>
        <h2 className='mb-6 text-2xl font-bold text-gray-900 md:text-4xl'>
          zwiększać sprzedaż
        </h2>
        <h3 className='text-xl text-gray-900'>
          tworząc <strong>przejrzyste</strong> strony internetowe
        </h3>
        <div className='mt-8'>
          <Button href='/portfolio'> Zobacz więcej </Button>
          <Button href='#contact' secondary>
            Kontakt
          </Button>
        </div>
      </div>
      <div className='hidden md:block'>
        <Image src={HomeImage} width={500} />
      </div>
    </div>
  );
};
export default Hero;
