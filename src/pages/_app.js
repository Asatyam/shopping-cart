import './globals.css';
import './components/App/App.module.css';
import Context from './context';
import Layout from './components/Layout/Layout';
export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
