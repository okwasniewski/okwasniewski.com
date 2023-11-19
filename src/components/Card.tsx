import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import type { Badge as BadgeType } from 'src/lib/getAllPosts';
import Badge from './Badge';

interface CardProps {
  href: string;
  src: string;
  badges: BadgeType[];
  title: string;
  description: string;
  variants: Variants;
}

const Card = ({
  title,
  description,
  href,
  src,
  badges,
  variants,
}: CardProps) => (
  <Link href={href}>
    <motion.article variants={variants} className="transform">
      <div className="flex flex-col justify-center overflow-hidden transition bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer dark:bg-gray-900 dark:border-gray-800 h-80 hover:shadow-lg hover:-translate-y-2">
        <div className="relative flex justify-center mb-2 h-1/2">
          <Image
            src={src}
            sizes="100vw"
            alt={title}
            className="w-full object-cover -mt-[16px] border-b border-gray-200 dark:brightness-[0.85]"
            fill
          />
        </div>
        <div className="px-4 mb-4">
          <div className="flex flex-row gap-2">
            {badges?.map(({ color, text }, index) => (
              <Badge key={index} color={color} text={text} />
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
            {title}
          </h3>
          <p className="text-gray-500 h-[2.5em]">{description}</p>
        </div>
      </div>
    </motion.article>
  </Link>
);

export default Card;
