import '../styles/global.css';
import ConfigurationProvider from '../providers/configuration.context';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigurationProvider>
      <Component {...pageProps} />
    </ConfigurationProvider>
  )
}

export default MyApp
