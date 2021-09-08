import Head from 'next/head';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

interface MainTemplateProps {
  children: React.ReactNode;
  title: string;
}

const MainTemplate = ({
  children,
  title = 'Home',
}: MainTemplateProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Oskar Kwaśniewski - {title}</title>
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
