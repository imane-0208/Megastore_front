import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Brand = {
  __typename?: 'Brand';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
};

export type BrandInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BrandProductInput = {
  brandId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
};

export type CategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CategoryProductInput = {
  categoryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  productIds?: InputMaybe<Scalars['ID']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBrandToProduct?: Maybe<Product>;
  addCategoryToProduct?: Maybe<Product>;
  addProductToBrand?: Maybe<Brand>;
  addProductToCategory?: Maybe<Store>;
  addProductToStore?: Maybe<Store>;
  createBrand?: Maybe<Brand>;
  createCategory?: Maybe<Category>;
  createProduct?: Maybe<Product>;
  createStore?: Maybe<Store>;
  deleteProduct?: Maybe<Product>;
  deleteStore?: Maybe<Store>;
  login?: Maybe<User>;
  register?: Maybe<User>;
  updateCategory?: Maybe<Category>;
  updateProduct?: Maybe<Product>;
  updateStore?: Maybe<Store>;
  updatebrand?: Maybe<Brand>;
};


export type MutationAddBrandToProductArgs = {
  input?: InputMaybe<BrandProductInput>;
};


export type MutationAddCategoryToProductArgs = {
  input?: InputMaybe<CategoryProductInput>;
};


export type MutationAddProductToBrandArgs = {
  input?: InputMaybe<BrandProductInput>;
};


export type MutationAddProductToCategoryArgs = {
  input?: InputMaybe<ProductCategoryInput>;
};


export type MutationAddProductToStoreArgs = {
  input?: InputMaybe<ProductStoreInput>;
};


export type MutationCreateBrandArgs = {
  input?: InputMaybe<BrandInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationCreateStoreArgs = {
  input?: InputMaybe<StoreInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<StoreInput>;
};


export type MutationUpdatebrandArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<BrandInput>;
};

export type Product = {
  __typename?: 'Product';
  categoryIds?: Maybe<Array<Maybe<Category>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  storeId?: Maybe<Store>;
};

export type ProductCategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type ProductStoreInput = {
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  getAllBrands?: Maybe<Array<Maybe<Brand>>>;
  getAllCategories?: Maybe<Array<Maybe<Category>>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllStores?: Maybe<Array<Maybe<Store>>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getBrandById?: Maybe<Brand>;
  getCategoryById?: Maybe<Category>;
  getProductById?: Maybe<Product>;
  getStoreById?: Maybe<Store>;
  getUserById?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export enum Role {
  Seller = 'SELLER',
  User = 'USER'
}

export type Store = {
  __typename?: 'Store';
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  productIds?: Maybe<Array<Maybe<Product>>>;
  userId?: Maybe<User>;
};

export type StoreInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  token?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type CreateStoreMutationVariables = Exact<{
  input?: InputMaybe<StoreInput>;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, phone?: string | null, description?: string | null, image?: string | null } | null };

export type LoginMutationVariables = Exact<{
  input?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: Role | null, token?: string | null } | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null } | null> | null };

export type GetAllBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBrandsQuery = { __typename?: 'Query', getAllBrands?: Array<{ __typename?: 'Brand', id?: string | null, name?: string | null, description?: string | null, image?: string | null } | null> | null };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories?: Array<{ __typename?: 'Category', image?: string | null, description?: string | null, name?: string | null, id?: string | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: string | null, price?: string | null, storeId?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, userId?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null } | null> | null } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  getProductByIdId: Scalars['ID'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProductById?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: string | null, price?: string | null, storeId?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: string | null, price?: string | null } | null> | null } | null } | null };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };


export const CreateStoreDocument = gql`
    mutation CreateStore($input: StoreInput) {
  createStore(input: $input) {
    id
    name
    address
    phone
    description
    image
  }
}
    `;
export type CreateStoreMutationFn = Apollo.MutationFunction<CreateStoreMutation, CreateStoreMutationVariables>;

/**
 * __useCreateStoreMutation__
 *
 * To run a mutation, you first call `useCreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoreMutation, { data, loading, error }] = useCreateStoreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoreMutation, CreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoreMutation, CreateStoreMutationVariables>(CreateStoreDocument, options);
      }
export type CreateStoreMutationHookResult = ReturnType<typeof useCreateStoreMutation>;
export type CreateStoreMutationResult = Apollo.MutationResult<CreateStoreMutation>;
export type CreateStoreMutationOptions = Apollo.BaseMutationOptions<CreateStoreMutation, CreateStoreMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput) {
  login(input: $input) {
    id
    firstName
    lastName
    email
    role
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    id
    name
    description
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetAllBrandsDocument = gql`
    query GetAllBrands {
  getAllBrands {
    id
    name
    description
    image
  }
}
    `;

/**
 * __useGetAllBrandsQuery__
 *
 * To run a query within a React component, call `useGetAllBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBrandsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBrandsQuery, GetAllBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBrandsQuery, GetAllBrandsQueryVariables>(GetAllBrandsDocument, options);
      }
export function useGetAllBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBrandsQuery, GetAllBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBrandsQuery, GetAllBrandsQueryVariables>(GetAllBrandsDocument, options);
        }
export type GetAllBrandsQueryHookResult = ReturnType<typeof useGetAllBrandsQuery>;
export type GetAllBrandsLazyQueryHookResult = ReturnType<typeof useGetAllBrandsLazyQuery>;
export type GetAllBrandsQueryResult = Apollo.QueryResult<GetAllBrandsQuery, GetAllBrandsQueryVariables>;
export const GetAllCategoriesDocument = gql`
    query getAllCategories {
  getAllCategories {
    image
    description
    name
    id
    productIds {
      id
      name
      description
      image
      price
      storeId {
        id
        name
        address
        userId {
          id
          firstName
          lastName
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($getProductByIdId: ID!) {
  getProductById(id: $getProductByIdId) {
    id
    name
    description
    image
    price
    storeId {
      id
      name
      address
      productIds {
        id
        name
        description
        image
        price
      }
    }
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      getProductByIdId: // value for 'getProductByIdId'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;