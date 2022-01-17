import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { RepositoryProvider } from '../context/repository';
import { UserProvider } from '../context/user';


export default function MyApp({ Component, pageProps }) {
  return <RepositoryProvider>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  </RepositoryProvider>
}