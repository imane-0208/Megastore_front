import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  DeleteProductDocument,
  GetProductByIdDocument,
  useDeleteProductMutation,
} from "@/graphql/generated/graphql";

const Edit = () => {
  const { query, isReady , back } = useRouter();

  const productId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetProductByIdDocument, {
    variables: {
      getProductByIdId: productId[0],
    },
  });

  const [DeletedProduct , setDeletedProduct] = useState<any>(null);

  const [deleteProduct, { loading: deleteLoading }] =
    useDeleteProductMutation();

  const hundleDeleteProduct = async () => {
    const { data: deletedProduct } = await deleteProduct({
      variables: {
        deleteProductId: productId[0],
      },
    });
    setDeletedProduct(deletedProduct);
  };

  useEffect(() => {
    if (DeletedProduct) {
      setTimeout(() => {
        back()
      }, 10);
    }
  }, [DeletedProduct]);

    

  return (
    <div>
      {data?.getProductById?.name}
      <button
        onClick={hundleDeleteProduct}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        delite
      </button>
    </div>
  );
};

export default Edit;
