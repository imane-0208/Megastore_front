import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductComp } from "../Product";
import { PrimaryBtn } from "../PrimaryBtn";
import Link from "next/link";
import {Product} from "@/graphql/generated/graphql";

type Props = {
  products: Product[];
};

const DashboardProducts: FC<Props> = ({ products }) => {
  return (
    <>
      <div className="flex justify-between w-full">
        <span className="text-3xl font-black">My products</span>
        <Link href="/Seller/products/new" passHref>
          <PrimaryBtn className="text-white bg-green-700 hover:text-black">
            <span >Add new product</span>
          </PrimaryBtn>
        </Link>
      </div>
      <div className="flex flex-wrap">
        {(products || [])?.map((product, index) => {
          return <ProductComp onDashboard key={index} product={product} />;
        })}
      </div>
    </>
  );
};

export default DashboardProducts;
