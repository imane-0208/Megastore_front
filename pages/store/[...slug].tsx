import apolloClient from "@/graphql/apollo";
import { GetStoreByIdDocument } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const Store: NextPage = () => {
  const { query, isReady } = useRouter();

  const storeId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetStoreByIdDocument, {
    variables: {
      getStoreByIdId: storeId[0],
    },
  });

  const store = data?.getStoreById;

  return (
    <div
      style={{
        backgroundColor: store?.options.bgColor,
      }}
    >
      <div>{store?.name}</div>
      {!store?.options.slider && <div>slider</div>}
      {!store?.options.bestProducts && <div>bestProducts</div>}
      {!store?.options.ourBrands && <div>ourBrands</div>}
      {!store?.options.whatsapp && <div>whatsapp</div>}
    </div>
  );
};

export default Store;
