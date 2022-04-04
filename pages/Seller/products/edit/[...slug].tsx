import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { GetProductByIdDocument } from '@/graphql/generated/graphql';

const Edit = () => {

    const { query, isReady } = useRouter();

  const productId: any = query.slug || [];

  const { data, loading, error } = useQuery(GetProductByIdDocument, {
    variables: {
      getProductByIdId: productId[0],
    },
  });

  useEffect(() => {
    console.log(productId[0]);
    console.log(data);
  });

  return (
    <div>{
        data?.getProductById?.name
        }</div>
  )
}

export default Edit