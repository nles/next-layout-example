import Head from 'components/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { SERVICE_NAME } from 'lib/constants';

export default function DefaultLayout({ children, embed }) {
  return (
    <>
      <Head title={SERVICE_NAME} />
      <div id="container" className="text-gray-50 min-h-screen" style={{ backgroundColor: '#f8f6f4' }}>
        <div className="flex flex-col h-full text-black">
          {!embed && <Header />}
          <main className="pb-10 mt-10 mx-auto w-full sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28"> {children()}</main>
          {!embed && <Footer />}
        </div>
      </div>
    </>
  );
}
