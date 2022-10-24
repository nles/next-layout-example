import Head from 'components/Head';
import { SERVICE_NAME } from 'lib/constants';

export default function Alt1Layout({ children }) {
  return (
    <>
      <Head title={SERVICE_NAME} />
      <div className="text-gray-50 bg-white min-h-screen">
        <div className="flex flex-col h-full text-black">
          <header className="relative">Alt 1</header>
          <main className="pb-10 mt-10 mx-auto w-full sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">{children}</main>
        </div>
      </div>
    </>
  );
}
