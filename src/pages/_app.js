import './globals.css';
import './components/App/App.module.css';
import Layout from './components/Layout/Layout';
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
