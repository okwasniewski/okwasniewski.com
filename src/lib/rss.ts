import fs from 'fs';
import RSS from 'rss';
import { Post } from 'src/lib/getAllPosts';

export default function generateRssFeed(allPosts: Post[]) {
  const siteURL = 'https://oskarkwasniewski.dev';

  const feedOptions: RSS.FeedOptions = {
    title: 'Blog oskarkwasniewski.dev',
    description: 'Welcome to this blog about Mobile development and more',
    site_url: siteURL,
    feed_url: `${siteURL}/rss.xml`,
    image_url: `${siteURL}/preview_image.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.forEach((post) => {
    feed.item({
      title: post.meta.title,
      description: post.meta.subtitle,
      url: `${siteURL}/blog/${post.slug}`,
      date: post.meta.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
