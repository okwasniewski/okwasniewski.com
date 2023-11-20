import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import type { Badge as BadgeType } from 'src/lib/getAllPosts';
import Badge from './Badge';

interface CardProps {
  href: string;
  src?: string;
  badges: BadgeType[];
  title: string;
  description: string;
  variants: Variants;
  compact?: boolean;
}

const Card = ({
  title,
  description,
  href,
  src,
  badges,
  variants,
  compact,
}: CardProps) => (
  <Link href={href}>
    <motion.article variants={variants} className="transform">
      <div
        className={`flex flex-col justify-center overflow-hidden transition bg-white border border-gray-200 rounded-lg shadow-sm dark:shadow-none cursor-pointer dark:bg-dark-surface dark:border-dark-surface-accent hover:shadow-lg hover:dark:shadow-none ${
          !compact ? 'h-80 hover:-translate-y-2' : 'hover:scale-[1.01]'
        }`}
      >
        {!compact && src && (
          <div className="relative flex justify-center mb-2 h-[60%]">
            <Image
              src={src}
              sizes="100vw"
              alt={title}
              className="w-full object-cover -mt-[8px] border-b border-gray-200 dark:border-dark-surface-accent dark:brightness-[0.85]"
              fill
            />
          </div>
        )}
        <div
          className={`px-4 ${
            compact
              ? 'flex md:flex-row-reverse justify-between items-center p-3'
              : 'mb-4'
          }`}
        >
          <div
            className={`flex-row gap-2 ${compact ? 'hidden md:flex' : 'flex'}`}
          >
            {badges?.map(({ color, text }, index) => (
              <Badge
                key={index}
                color={color}
                text={text}
                className={!compact && 'mb-4'}
              />
            ))}
          </div>
          <div className={compact ? 'flex flex-col justify-center' : ''}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
              {title}
            </h3>
            <p className={`text-gray-500 ${compact ? '' : 'h-[2.5em]'}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  </Link>
);

export default Card;
