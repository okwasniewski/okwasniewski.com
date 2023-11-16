import Link from "next/link";
import Image from "next/image";
import Badge, { BadgeProps } from "./Badge";
import { motion, Variants } from "framer-motion";

interface CardProps {
  href: string;
  src: string;
  badges: BadgeProps[];
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
}: CardProps) => {
  return (
    <Link href={href}>
      <motion.article variants={variants} className="transform">
        <div className="flex flex-col justify-center transition bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm cursor-pointer h-80 hover:shadow-lg hover:-translate-y-2">
          <div className="flex justify-center mb-4 border-b border-gray-200 h-1/2">
            <Image
              src={src}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", marginTop: -10 }}
              alt={title}
            />
          </div>
          <div className="px-4 mb-4">
            <div className="flex gap-2 flex-row">
              {badges?.map(({ color, text }, index) => (
                <Badge color={color} text={text} />
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
};

export default Card;
