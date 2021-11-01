import '../styles/global.css';
import {ConfigurationProvider} from '../providers/configuration.provider';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigurationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigurationProvider>
  )
}

export default MyApp
