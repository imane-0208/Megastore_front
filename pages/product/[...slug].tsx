import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
// import { GetAllProductsDocument, GetAllProductsQueryVariables } from '@/graphql/generated/graphql';
import { GetProductByIdDocument,
  GetProductByIdQueryVariables,
} from '@/graphql/generated/graphql';
import { ProductComp } from '@/components/Product';

export const Product: NextPage=() => {

  const { query, isReady } = useRouter();

  const productId: any = query.slug || [];

   const { data, loading, error } = useQuery(GetProductByIdDocument, {
    variables: {
      getProductByIdId: productId[0],
    },
  });


  useEffect(
    () => {
      console.log(productId[0]);
      console.log(data);
    },
  )


  return (
    <div>Product number: {productId[0]}
      <div>{data?.getProductById?.name}</div>
      store: {data?.getProductById?.storeId?.name}
      <div>
      all products:
      </div>
      {
        data?.getProductById?.storeId?.productIds?.map((product: any) => {
          return (
            <ProductComp key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

export default Product
