import Heading from 'src/components/Heading';
import Card from 'src/components/Card';

const Work = ({ posts }) => {
  return (
    <>
      <Heading heading='Portfolio' subHeading='Moje ostatnie prace' />
      <div className='grid gap-10 mb-20 gtc-auto'>
        {posts.map(({ slug, meta }) => (
          <Card
            key={slug}
            src={meta.featuredImage}
            href={`/portfolio/${slug}`}
            badge={meta.badge}
            description={meta.subtitle}
            title={meta.title}
          />
        ))}
      </div>
    </>
  );
};

export default Work;
