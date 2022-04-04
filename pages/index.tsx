import type { NextPage, GetServerSideProps } from "next";
import {
  GetAllProductsDocument,
  GetAllProductsQueryVariables,
  GetAllCategoriesDocument,
  GetAllCategoriesQueryVariables,
  GetAllBrandsDocument,
  GetAllBrandsQueryVariables,
} from "@/graphql/generated/graphql";
import apolloClient from "@/graphql/apollo";
import { HomeComp } from "@/components/Home";
import { LoginPopup } from "@/components/Login";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Banner } from "../components";

const Home: NextPage<GetAllProductsQueryVariables> = ({
  products,
  categories,
  brands,
}) => {
  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <>
      <Banner />
      <Header setLoginPopup={setLoginPopup} />
      <HomeComp products={products} categories={categories} brands={brands} />
      {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} />}
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

  const { data: BrandData } = await apolloClient.query({
    query: GetAllBrandsDocument,
  });

  return {
    props: {
      products: ProductData?.getAllProducts,
      categories: CategoryData?.getAllCategories,
      brands: BrandData?.getAllBrands,
    },
  };
};
