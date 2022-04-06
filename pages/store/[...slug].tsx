import Header from "@/components/Header";
import { HeaderStore } from "@/components/HeaderStore";
import HomeSlider from "@/components/HomeSlider";
import { PopupStore } from "@/components/PopupStore";
import { ProductComp } from "@/components/Product";
import apolloClient from "@/graphql/apollo";
import { GetStoreByIdDocument , useProductAddedSubscription } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import * as boxProduct from "@/lottie/boxProduct.json";
import FooterStore from "@/components/FooterStore";
import { gql, useSubscription } from "@apollo/client";


const Store: NextPage = () => {
  const [popup, setPopup] = useState(false);
  const [popupOption, setPopupOption] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [loginPopup, setLoginPopup] = useState(false);
  const [products, setProducts] = useState([]);

  const { query, isReady } = useRouter();

  const storeId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetStoreByIdDocument, {
    variables: {
      getStoreByIdId: storeId[0],
    },
  });


  
  const PRODUCT_SUBSCRIPTION = gql`
    subscription ProductAdded {
      productAdded {
        id
        name
        description
        image
        price
      }
    }
  `;

  const {
    data: subscriptionData,
    loading : subLoading,
    error : subError,
  } = useProductAddedSubscription({
    onSubscriptionData: (data) => {
      console.log({ data: data });
    }
  });

  

  useEffect(() => {
    if (subscriptionData) {
      console.log(subscriptionData);
    }
  }, [subscriptionData , subError , subLoading]);



  const store = data?.getStoreById;

  useEffect(() => {
    if (store) {
      setProducts(store.productIds);
    }
    if (store?.options?.popup) {
      setImageSrc(store?.options?.popupImage);
      setTimeout(() => {
        setPopup(true);
      }, 2000);
    }
  }, [store]);

  return (
    <div
      style={{
        backgroundColor: store?.options.bgColor,
      }}
      className="pt-20"
    >
      <Header title={store?.name} setLoginPopup={setLoginPopup} />
      {!store?.options.slider && (
        <div className="flex justify-between items-center  w-full h-96 bg-white shadow-lg">
          <HomeSlider images={store?.options.slider_image} />
        </div>
      )}
      {!store?.options.bestProducts && (
        <div className="flex flex-col justify-center items-center  w-full">
          {store?.productIds.length == 0 ? (
            <div className="flex flex-col items-center p-5 justify-center w-full  h-full">
              <Lottie
                animationData={boxProduct}
                style={{
                  width: "200px",
                  height: "200px",
                }}
                loop
              />
              <div className="text-center text-2xl font-bold">
                No Products yet
              </div>
            </div>
          ) : (
            <div className="text-center text-4xl mt-5 font-bold">
              Our best Products
            </div>
          )}
          <div className="max-w-[1000px] w-full flex flex-wrap justify-center">
            {products?.slice(0, 4).map((product: any, i: number) => (
              <ProductComp key={i} product={product} />
            ))}
          </div>
        </div>
      )}
      {
        <div className="flex flex-col justify-center items-center  w-full">
          {store?.productIds.length == 0 ? (
            <div className="flex flex-col items-center p-5 justify-center w-full  h-full">
              <Lottie
                animationData={boxProduct}
                style={{
                  width: "200px",
                  height: "200px",
                }}
                loop
              />
              <div className="text-center text-2xl font-bold">
                No Products yet
              </div>
            </div>
          ) : (
            <div className="text-center text-4xl mt-5 font-bold">
              Our Products
            </div>
          )}
          <div className="max-w-[1000px] w-full flex flex-wrap">
            {products?.map((product: any, i: number) => (
              <ProductComp key={i} product={product} />
            ))}
          </div>
        </div>
      }
      {!store?.options.ourBrands && <div>ourBrands</div>}
      {!store?.options.whatsapp && <div>whatsapp</div>}
      <div className="flex justify-center border-t-2 border-gray-500 border-solid shadow-xl w-full">
        <div className="max-w-[800px]">
          <FooterStore primaryColor={store?.options.primaryColor} store />
          
        </div>
      </div>

      {popup && (
        <PopupStore
          color={store?.options.primaryColor}
          setPopup={setPopup}
          imageSrc={imageSrc}
        />
      )}
    </div>
  );
};

export default Store;
