import React from 'react';
import Badge from 'src/components/Badge';
import { Badge as BadgeType } from 'src/lib/getAllPosts';

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  badges: BadgeType[];
}

export default function BlogHeader({
  title,
  subtitle,
  badges,
}: BlogHeaderProps) {
  return (
    <div className="p-4 md:p-0 bg-gray-50 dark:bg-gray-800 full-width">
      <div className="container pb-10 mx-auto mb-8 pt-14">
        <h1 className="mb-1 text-3xl font-semibold dark:text-gray-200">
          {title}
        </h1>
        <p className="mb-4 dark:text-gray-200/80">{subtitle}</p>
        <div className="flex gap-2 flex-row">
          {badges?.map(({ color, text }, index) => (
            <Badge key={index} color={color} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
