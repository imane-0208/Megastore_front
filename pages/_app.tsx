import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      {/* <Sidebar /> */}
      <main className='mx-auto max-w-7xl'>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
