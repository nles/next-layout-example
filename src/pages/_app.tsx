import 'styles/globals.css';
import DefaultLayout from 'components/layouts/Default';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return <Layout>{(layoutProps) => <Component {...pageProps} {...layoutProps} />}</Layout>;
}

export default MyApp;
