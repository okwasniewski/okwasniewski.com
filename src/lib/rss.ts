import fs from 'fs';
import RSS from 'rss';
import { Post } from 'src/lib/getAllPosts';

export default function generateRssFeed(allPosts: Post[]) {
  const feedOptions: RSS.FeedOptions = {
    title: 'Blog oskarkwasniewski.dev',
    description: 'Welcome to this blog about Mobile development and more',
    site_url: process.env.NEXT_PUBLIC_SITE_URL,
    feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
    image_url: `${process.env.NEXT_PUBLIC_SITE_URL}/preview_image.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.forEach((post) => {
    feed.item({
      title: post.meta.title,
      description: post.meta.subtitle,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
      date: post.meta.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
