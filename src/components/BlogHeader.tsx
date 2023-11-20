import React from 'react';
import Badge from 'src/components/Badge';
import Button from 'src/components/Button';
import { Badge as BadgeType, PostMeta } from 'src/lib/getAllPosts';

type BlogHeaderProps = {
  title: string;
  subtitle: string;
  badges: BadgeType[];
  date?: string;
} & Pick<PostMeta, 'primaryAction'>;

export default function BlogHeader({
  title,
  subtitle,
  badges,
  date,
  primaryAction,
}: BlogHeaderProps) {
  return (
    <div className="p-4 md:p-0 bg-gray-50 dark:bg-gray-800 full-width mb-4">
      <div className="container flex flex-row items-center justify-between pb-10 mx-auto mb-4 pt-14">
        <div>
          <p className="text-xs dark:text-gray-200/80">{date}</p>
          <h1 className="mb-2 text-3xl font-semibold dark:text-gray-200">
            {title}
          </h1>
          <p className="mb-2 dark:text-gray-200/80">{subtitle}</p>
          <div className="flex flex-row gap-2">
            {badges?.map(({ color, text }, index) => (
              <Badge key={index} color={color} text={text} />
            ))}
          </div>
        </div>
        {primaryAction && (
          <Button
            // @ts-expect-error Types are not correct here, but Next passes those props to `a` tag.
            rel="noopener noreferrer"
            target="_blank"
            href={primaryAction.href}
          >
            {primaryAction.text}
          </Button>
        )}
      </div>
    </div>
  );
}
