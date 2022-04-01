import Image from "next/image";
import { type } from "os";
import React from "react";
import HomeSlider from "../HomeSlider";
import { ProductComp } from "../Product";
import { ProductWithStar } from "../ProductWithStar";

export type product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

interface category {
  id: string;
  name: string;
  products: product[];
}


type categories = {
  id: string;
};

type brands = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export const HomeComp = ({
  products,
  categories,
  brands
}: {
  products: product[];
  categories: category[];
  brands: brands[];
}) => {
  return (
    <div className="mx-auto container px-6 xl:px-0 py-12">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center">
          <div className="relative">
            <img
              className="hidden sm:block w-full"
              src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
              alt="sofa"
            />
            <img
              className="sm:hidden w-full"
              src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
              alt="sofa"
            />
            <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
              <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
                Range Comfort Sofas
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
          {(products || []).map((product: product) => (
            <ProductComp key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-4 mb-5 font-extrabold w-full border-b-2 border-black ">
          <h3 >By category</h3>
          <hr />
        </div>
          {(categories).map((category: any) => (
              <div key={category.id}>
              <h1 className="text-3xl capitalize mb-3">{category.name}</h1>
              <div className="flex gap-4">
                {(category.productIds || []).map((product: any) => (
                  <ProductWithStar key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  />
                  ))}
                  </div>
            </div>
          ))}
      </div>
      <div className="mt-4 mb-5 font-extrabold w-full border-b-2 border-black ">
          <h3 >All brands</h3>
          <hr />
        </div>

      <div className="w-full p-3 bg-white flex gap-3">
        {
          (brands || []).map((brand: any) => (
            <div key={brand.id} className="flex flex-col items-center p-3 rounded-md shadow-md px-5 cursor-pointer hover:bg-slate-200">
              <p className="text-sm text-gray-600">{brand.name}</p>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default HomeComp;
