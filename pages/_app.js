import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { RepositoryProvider } from '../context/repository';


export default function MyApp({ Component, pageProps }) {
  return <RepositoryProvider>
    <Component {...pageProps} />
  </RepositoryProvider>
}