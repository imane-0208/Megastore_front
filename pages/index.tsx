import type { NextPage, GetServerSideProps } from "next";
import {
  GetAllProductsDocument,
  GetAllProductsQueryVariables,
  GetAllCategoriesDocument,
  GetAllCategoriesQueryVariables,
} from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import apolloClient from "@/graphql/apollo";
import { HomeComp } from "@/components/Home";
import { Product } from "@/components/Product";

const Home: NextPage<GetAllProductsQueryVariables> = ({
  products,
  categories,
}) => {
  return (
    <>
      <HomeComp products={products} categories={categories} />
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: ProductData } = await apolloClient.query({
    query: GetAllProductsDocument,
  });

  const { data: CategoryData } = await apolloClient.query({
    query: GetAllCategoriesDocument,
  });

  return {
    props: {
      products: ProductData?.getAllProducts,
      categories: CategoryData?.getAllCategories,
    },
  };
};
