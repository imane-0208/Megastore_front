import Image from "next/image";
import { type } from "os";
import React, { FC, useEffect } from "react";
import HomeSlider from "../HomeSlider";
import { ProductComp } from "../Product";
import { ProductWithStar } from "../ProductWithStar";
import { useGetAllProductsQuery, Product } from "@/graphql/generated/graphql";
import {
  useGetAllCategoriesQuery,
  Category,
} from "@/graphql/generated/graphql";
import { useGetAllBrandsQuery, Brand } from "@/graphql/generated/graphql";

export const HomeComp = ({
  products,
  categories,
  brands,
}: {
  products: Product[];
  categories: Category[];
  brands: Brand[];
}) => {
  useEffect(() => {
    console.log(products);
  }, [products]);

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
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="#"
              >
                Best products
              </a>

              <div className="flex items-center" id="store-nav-content">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
                  </svg>
                </a>

                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          {products?.map((product) => (
            <ProductComp key={product.id} product={product} />
          ))}
        </div>
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
              href="#"
            >
              Stores
            </a>

            <div className="flex items-center" id="store-nav-content">
              <a
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
                </svg>
              </a>

              <a
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div className="mt-4 mb-5 font-extrabold w-full border-b-2 border-black ">
          <h3>By category</h3>
          <hr />
        </div>
        {categories?.map((category: any) => (
          <div key={category.id}>
            <h1 className="text-3xl capitalize mb-3">{category.name}</h1>
            <div className="flex gap-4">
              {(category.productIds || []).map((product: any) => (
                <ProductWithStar
                  key={product.id}
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
        <h3>All brands</h3>
        <hr />
      </div>

      <div className="w-full p-3 bg-white flex gap-3">
        {(brands || []).map((brand: any) => (
          <div
            key={brand.id}
            className="flex flex-col items-center p-3 rounded-md shadow-md px-5 cursor-pointer hover:bg-slate-200"
          >
            <p className="text-sm text-gray-600">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComp;
