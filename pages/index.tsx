import type { NextPage, GetServerSideProps } from "next";
import {
  GetAllProductsDocument,
  GetAllProductsQueryVariables,
  GetAllCategoriesDocument,
  GetAllBrandsDocument,
  GetAllStoresDocument,
  GetAllStoresQuery,
  GetAllBrandsQuery,
  GetAllCategoriesQuery,
  GetAllProductsQuery,
  useProductAddedSubscription,
  useUserLoggedInSubscription,

} from "@/graphql/generated/graphql";
import apolloClient from "@/graphql/apollo";
import { HomeComp } from "@/components/Home";
import { LoginPopup } from "@/components/Login";
import { useState } from "react";
import  Header  from "@/components/Header";
import { Banner } from "../components";
import {ref , uploadBytesResumable , getDownloadURL} from "@firebase/storage"
import { storage } from "./../firebase/index.js";

export type Props = {
  products: GetAllProductsQuery;
  categories: GetAllCategoriesQuery;
  brands: GetAllBrandsQuery;
  stores: GetAllStoresQuery;
};

const Home: NextPage<Props> = ({ products, categories, brands, stores }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState(null);
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [progress, setProgress] = useState(0);


  return (
    <>
      {/* <Banner /> */}
      <Header setLoginPopup={setLoginPopup} />
      {/* @ts-ignore */}
      <HomeComp
      // @ts-ignore
      products={products?.getAllProducts}
      // @ts-ignore
      categories={categories?.getAllCategories}
      // @ts-ignore
        brands={brands?.getAllBrands}
      />
      {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} />}
      {stores?.getAllStores?.map((store) => (
        <div key={store?.id}>
          <h1>{store?.name}</h1>
          <p>{store?.description}</p>
        </div>
      ))}
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: ProductData } = await apolloClient.query({
    query: GetAllProductsDocument,
  });

  const { data: StoresData } = await apolloClient.query({
    query: GetAllStoresDocument,
  });

  const { data: CategoryData } = await apolloClient.query({
    query: GetAllCategoriesDocument,
  });

  const { data: BrandData } = await apolloClient.query({
    query: GetAllBrandsDocument,
  });

  return {
    props: {
      products: ProductData,
      categories: CategoryData,
      brands: BrandData,
      stores: StoresData,
    },
  };
};
