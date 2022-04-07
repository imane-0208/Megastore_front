import { GetAllProductsDashboardDocument } from "@/graphql/generated/graphql";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";

export function Products() {
  const { data, loading } = useQuery(GetAllProductsDashboardDocument);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    // console.log(data);
    setProducts(data?.getAllProducts);
  }, [data]);

  const [paginationedProducts, setPaginationedProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setPaginationedProducts(products?.slice(pagination, pagination + 5));
    }
  }, [products, pagination]);

  //filtre function of product by name

  const hundleFliter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    const filteredProducts = products?.filter((product) => {
      return product?.name?.toLowerCase().includes(value.toLowerCase());
    });
      setPaginationedProducts(filteredProducts);
  };

  return (
    <div className="w-full gap-4">
      <div className="hadow overflow-hidden p-5">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          All products
        </h1>
        <div className="block sm:flex items-center md:divide-x md:divide-gray-100 mb-5">
          <form className="sm:pr-3 mb-4 sm:mb-0" action="#" method="GET">
            <label htmlFor="products-search" className="sr-only">
              Search
            </label>
            <div className="mt-1 relative sm:w-64 xl:w-96">
              <input
                onChange={(e)=>hundleFliter(e)}
                type="text"
                name="email"
                id="products-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Search for products"
              />
            </div>
          </form>
          <div className="flex items-center sm:justify-end w-full">
            <div className="hidden md:flex pl-2 space-x-1">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <table className="table-fixed min-w-full divide-y divide-gray-200">
          {loading && (
            <div className="w-full flex justify-center">
              <CircularProgress />
            </div>
          )}
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Product Name
              </th>

              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Price
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginationedProducts?.map((product, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-194556"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                    />
                    <label htmlFor="checkbox-194556" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>

                <div className="flex items-center text-sm">
                  <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src={product?.image}
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>

                  <div>
                    <Link
                      href="/product/[uuid]"
                      passHref
                      as={`/product/${product.uuid}`}
                    >
                      <p className="font-semibold cursor-pointer text-black">
                        {product?.uuid}
                      </p>
                    </Link>
                    <p className="text-xs  mt-2 text-gray-600">
                      {product?.name}
                      {"  "}৹{"  "}
                      <Link href={`/store/${product.storeId.id}`}>
                        <span className="cursor-pointer bg-blue-100 p-1 rounded-full hover:text-blue-600">
                          {product.storeId.name}
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>

                <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                  {product?.price}
                </td>
                <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                  {product?.quantity}
                </td>
                <td className="p-4 whitespace-nowrap space-x-2 flex justify-end ">
                  <button
                    type="button"
                    data-modal-toggle="product-modal"
                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Edit item
                  </button>
                  <button
                    type="button"
                    data-modal-toggle="delete-product-modal"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Delete item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4 mt-1">
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              onClick={() => setPagination(0)}
              className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => {
                if (products) {
                  setPagination(~~(products?.length / 5) * 5);
                }
              }}
              className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <span className="text-sm font-normal text-gray-500">
              Showing{" "}
              <span className="text-gray-900 font-semibold">
                {pagination + paginationedProducts?.length}
              </span>{" "}
              of
              <span className="text-gray-900 font-semibold">
                {products?.length}
              </span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (pagination != 0) {
                  setPagination(pagination - 5);
                }
              }}
              className="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
            >
              <svg
                className="-ml-1 mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </button>
            <button
              onClick={() => {
                if (
                  pagination + paginationedProducts?.length <
                  products?.length
                ) {
                  setPagination(pagination + 5);
                }
              }}
              className="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center"
            >
              Next
              <svg
                className="-mr-1 ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* ////// */}
      </div>

      <p className="text-center text-sm text-gray-500 my-10">
        &copy; 2022{" "}
        <Link
          href="https://www.linkedin.com/in/zineb-belbhiriya-b6881820a/"
          passHref
        >
          @Zaineb
        </Link>
        . All rights reserved to TEAM <Link href="/">MEGASTORE</Link>.
      </p>
    </div>
  );
}

export default Products;
