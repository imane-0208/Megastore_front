import { type } from "os";
import React from "react";
import { ProductComp } from "../Product";

type products = {
  
};
type categories = {};

export const HomeComp = ({
  products,
  categories,
}: {
  products: products;
  categories: categories;
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
          {(products || []).map((product: products) => (
            <ProductComp key={product.id} product={product} />
          ))}
        </div>
          <h3>By category</h3>
          {(categories || []).map((category: any) => (
              <div key={category.id}>
              <h1>{category.name}</h1>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 items-center">
                <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                {(category.productIds || []).map((product: any) => (
                  <ProductComp key={product.id} product={product} />
                ))}
              </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeComp;
