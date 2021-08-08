import Link from 'next/link';
import Image from 'next/image';
import Badge, { BadgeProps } from './Badge';

interface CardProps {
  href: string;
  src: string;
  badge: BadgeProps,
  title: string;
  description: string;
}

const Card = ({
  title,
  description,
  href,
  src,
  badge: { color, text },
}: CardProps) => {
  return (
    <Link href={href}>
      <div className='transform'>
        <div className='flex flex-col justify-center transition bg-white border-2 border-gray-200 rounded-lg shadow-sm cursor-pointer h-96 hover:shadow-lg hover:-translate-y-2'>
          <div className='flex justify-center mb-4 border-b-2 border-gray-200'>
            <Image src={src} width={200} height={200} />
          </div>
          <div className='px-4 mb-4'>
            <Badge color={color} text={text} />
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
