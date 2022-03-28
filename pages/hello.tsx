import type { GetServerSideProps, NextPage } from 'next';
import apolloClient from 'graphql/apollo';
import {
  HelloDocument,
  HelloQueryVariables,
} from '@/graphql/generated/graphql';

const Hello: NextPage<HelloQueryVariables> = ({ message }) => {
  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Hello;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: HelloDocument,
  });

  return {
    props: {
      message: data?.hello,
    },
  };
};
