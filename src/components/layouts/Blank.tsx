import Head from 'components/Head';
import { SERVICE_NAME } from 'lib/constants';

export default function BlankLayout({ children }) {
  return (
    <>
      <Head title={SERVICE_NAME} />
      {children()}
    </>
  );
}
