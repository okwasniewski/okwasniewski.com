import Image from 'next/image';
import Heading from 'src/components/Heading';
import MainTemplate from 'src/templates/MainTemplate';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import contactImage from 'public/contact.svg';

const Contact = () => {
  return (
    <MainTemplate title='Kontakt'>
      <div className='mt-10 mb-32'>
        <Heading heading='Kontakt' subHeading='Masz jakieś pytania?' />
        <div className='flex flex-col items-center justify-around md:flex-row'>
          <ul className="mb-10 md:mb-0">
            <li className='flex m-2'>
              <FaGithub className='w-6 h-6 mr-2' />
              <a href='https://github.com/okwasniewski' target='_blank'>
                Github
              </a>
            </li>
            <li className='flex m-2'>
              <FaLinkedin className='w-6 h-6 mr-2' />
              <a
                target='_blank'
                href='https://www.linkedin.com/in/oskar-kwa%C5%9Bniewski-452977207/'
              >
                Linkedin
              </a>
            </li>
            <li className='flex m-2'>
              <FaEnvelope className='w-6 h-6 mr-2' />
                oskarkwasniewski@icloud.com
            </li>
          </ul>
            <Image src={contactImage} width={500} height={250} />
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
