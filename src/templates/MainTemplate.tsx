import Head from 'next/head';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

interface MainTemplateProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const MainTemplate = ({
  children,
  title = 'Home',
  description = 'Nazywam się Oskar Kwaśniewski, pomagam firmom zwiększać sprzedać tworząc przejrzyste strony internetowe.',
}: MainTemplateProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Oskar Kwaśniewski - {title}</title>
        <meta name='description' content={description} />
        <meta property="og:site_name" content="Oskar Kwaśniewski" key="ogsitename" />
        <meta property="og:url" content="okwasniewski.com" key="ogurl" />
        <meta property="og:image" content='/preview_image.jpg' key="ogimage" />
        <meta property="og:title" content={`Oskar Kwaśniewski - ${title}`} key="ogtitle" />
+       <meta property="og:description" content={description} key="ogdesc" />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <main className='container w-full h-full px-4 mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
