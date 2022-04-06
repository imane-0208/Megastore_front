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

export type Admin = {
  __typename?: 'Admin';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type AdminInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
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

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['ID']>;
  orderIds?: Maybe<Array<Maybe<Order>>>;
  userId: User;
};

export type CartInput = {
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  userId: Scalars['ID'];
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
  addOrderToOrder?: Maybe<Order>;
  addProductToCategory?: Maybe<Store>;
  addProductToStore?: Maybe<Store>;
  addStoreOptionToStore?: Maybe<StoreOptions>;
  createAdmin?: Maybe<SubAdmin>;
  createBrand?: Maybe<Brand>;
  createCart?: Maybe<Cart>;
  createCategory?: Maybe<Category>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  createStore?: Maybe<Store>;
  createStoreOptions?: Maybe<StoreOptions>;
  deleteProduct?: Maybe<Product>;
  deleteStore?: Maybe<Store>;
  deleteStoreOptions?: Maybe<StoreOptions>;
  login?: Maybe<User>;
  loginAdmin?: Maybe<Admin>;
  loginSubAdmin?: Maybe<SubAdmin>;
  register?: Maybe<User>;
  registerAdmin?: Maybe<Admin>;
  registerSubAdmin?: Maybe<SubAdmin>;
  updateCategory?: Maybe<Category>;
  updateOrder?: Maybe<Order>;
  updateProduct?: Maybe<Product>;
  updateStore?: Maybe<Store>;
  updateStoreOptions?: Maybe<StoreOptions>;
  updatebrand?: Maybe<Brand>;
};


export type MutationAddBrandToProductArgs = {
  input?: InputMaybe<BrandProductInput>;
};


export type MutationAddCategoryToProductArgs = {
  input?: InputMaybe<CategoryProductInput>;
};


export type MutationAddOrderToOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationAddProductToCategoryArgs = {
  input?: InputMaybe<ProductCategoryInput>;
};


export type MutationAddProductToStoreArgs = {
  input?: InputMaybe<ProductStoreInput>;
};


export type MutationAddStoreOptionToStoreArgs = {
  input?: InputMaybe<AddOptionToStore>;
};


export type MutationCreateAdminArgs = {
  input?: InputMaybe<CreateAdminInput>;
};


export type MutationCreateBrandArgs = {
  input?: InputMaybe<BrandInput>;
};


export type MutationCreateCartArgs = {
  input?: InputMaybe<CartInput>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<ProductInput>;
};


export type MutationCreateStoreArgs = {
  input?: InputMaybe<StoreInput>;
};


export type MutationCreateStoreOptionsArgs = {
  input?: InputMaybe<StoreOptionsInput>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreOptionsArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationLoginAdminArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationLoginSubAdminArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationRegisterAdminArgs = {
  input?: InputMaybe<AdminInput>;
};


export type MutationRegisterSubAdminArgs = {
  input?: InputMaybe<SubAdminInput>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<CategoryInput>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<OrderInput>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ProductInput>;
};


export type MutationUpdateStoreArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<StoreInput>;
};


export type MutationUpdateStoreOptionsArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<StoreOptionsInput>;
};


export type MutationUpdatebrandArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<BrandInput>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Product>;
  quantity?: Maybe<Scalars['String']>;
  userId?: Maybe<User>;
};

export type OrderInput = {
  productId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  categoryIds?: Maybe<Array<Maybe<Category>>>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  promoPrice?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['String']>;
  storeId?: Maybe<Store>;
  uuid?: Maybe<Scalars['String']>;
};

export type ProductCategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ProductInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  promoPrice?: InputMaybe<Scalars['String']>;
  stock?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type ProductStoreInput = {
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  storeId?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  getAdminById?: Maybe<Admin>;
  getAllAdmins: Array<Maybe<Admin>>;
  getAllBrands?: Maybe<Array<Maybe<Brand>>>;
  getAllCarts?: Maybe<Array<Maybe<Cart>>>;
  getAllCategories?: Maybe<Array<Maybe<Category>>>;
  getAllOrders?: Maybe<Array<Maybe<Order>>>;
  getAllProducts?: Maybe<Array<Maybe<Product>>>;
  getAllStoreOptions?: Maybe<Array<Maybe<StoreOptions>>>;
  getAllStores?: Maybe<Array<Maybe<Store>>>;
  getAllSubAdmins: Array<Maybe<SubAdmin>>;
  getAllUsers?: Maybe<Array<Maybe<User>>>;
  getBrandById?: Maybe<Brand>;
  getCartById?: Maybe<Cart>;
  getCategoryById?: Maybe<Category>;
  getLastCartByUserId?: Maybe<Cart>;
  getLastOrderByUserId?: Maybe<Order>;
  getOrderById?: Maybe<Order>;
  getProductById?: Maybe<Product>;
  getProductByUuid?: Maybe<Product>;
  getStoreById?: Maybe<Store>;
  getStoreOptionsById?: Maybe<StoreOptions>;
  getStoreOptionsByStoreId?: Maybe<StoreOptions>;
  getSubAdminById?: Maybe<SubAdmin>;
  getUserById?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCartByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLastCartByUserIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetLastOrderByUserIdArgs = {
  userId: Scalars['ID'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByUuidArgs = {
  uuid: Scalars['String'];
};


export type QueryGetStoreByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreOptionsByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetStoreOptionsByStoreIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetSubAdminByIdArgs = {
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
  options?: Maybe<StoreOptions>;
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

export type StoreOptions = {
  __typename?: 'StoreOptions';
  bestProducts?: Maybe<Scalars['Boolean']>;
  bgColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  ourBrands?: Maybe<Scalars['Boolean']>;
  popup?: Maybe<Scalars['Boolean']>;
  popupImage?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  slider?: Maybe<Scalars['Boolean']>;
  slider_image?: Maybe<Array<Maybe<Scalars['String']>>>;
  storeId?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['Boolean']>;
};

export type StoreOptionsInput = {
  bestProducts?: InputMaybe<Scalars['Boolean']>;
  bgColor?: InputMaybe<Scalars['String']>;
  ourBrands?: InputMaybe<Scalars['Boolean']>;
  popup?: InputMaybe<Scalars['Boolean']>;
  popupImage?: InputMaybe<Scalars['String']>;
  primaryColor?: InputMaybe<Scalars['String']>;
  slider?: InputMaybe<Scalars['Boolean']>;
  slider_image?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  storeId?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['Boolean']>;
};

export type SubAdmin = {
  __typename?: 'SubAdmin';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type SubAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  productAdded?: Maybe<Product>;
  productDeleted?: Maybe<Product>;
  productUpdated?: Maybe<Product>;
  userAdded?: Maybe<User>;
  userDeleted?: Maybe<User>;
  userLoggedIn?: Maybe<User>;
  userUpdated?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  store?: Maybe<Store>;
  token?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};

export type AddOptionToStore = {
  optionId?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['String']>;
};

export type CreateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type CreateStoreOptionsMutationVariables = Exact<{
  input?: InputMaybe<StoreOptionsInput>;
}>;


export type CreateStoreOptionsMutation = { __typename?: 'Mutation', createStoreOptions?: { __typename?: 'StoreOptions', id?: string | null, slider?: boolean | null, slider_image?: Array<string | null> | null, bestProducts?: boolean | null, ourBrands?: boolean | null, whatsapp?: boolean | null, popup?: boolean | null, primaryColor?: string | null, bgColor?: string | null, popupImage?: string | null, storeId?: string | null } | null };

export type CreateProductMutationVariables = Exact<{
  input?: InputMaybe<ProductInput>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id?: string | null, uuid?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, promoPrice?: string | null, stock?: string | null, status?: string | null, createdAt?: string | null } | null };

export type CreateStoreMutationVariables = Exact<{
  input?: InputMaybe<StoreInput>;
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, phone?: string | null, description?: string | null, image?: string | null } | null };

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['ID'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null } | null };

export type LoginMutationVariables = Exact<{
  input?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: Role | null, token?: string | null, store?: { __typename?: 'Store', id?: string | null } | null } | null };

export type UpdateOptionsMutationVariables = Exact<{
  input?: InputMaybe<StoreOptionsInput>;
  updateStoreOptionsId: Scalars['ID'];
}>;


export type UpdateOptionsMutation = { __typename?: 'Mutation', updateStoreOptions?: { __typename?: 'StoreOptions', id?: string | null, slider?: boolean | null, slider_image?: Array<string | null> | null, bestProducts?: boolean | null, ourBrands?: boolean | null, whatsapp?: boolean | null, primaryColor?: string | null, bgColor?: string | null, storeId?: string | null, popup?: boolean | null, popupImage?: string | null } | null };

export type GetAllCartsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCartsQuery = { __typename?: 'Query', getAllCarts?: Array<{ __typename?: 'Cart', id?: string | null, userId: { __typename?: 'User', firstName?: string | null, lastName?: string | null }, orderIds?: Array<{ __typename?: 'Order', id?: string | null, quantity?: string | null, userId?: { __typename?: 'User', id?: string | null, lastName?: string | null } | null, productId?: { __typename?: 'Product', id?: string | null, name?: string | null, price?: string | null, image?: Array<string | null> | null, uuid?: string | null } | null } | null> | null } | null> | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null, storeId?: { __typename?: 'Store', options?: { __typename?: 'StoreOptions', primaryColor?: string | null } | null } | null } | null> | null };

export type GetAllBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBrandsQuery = { __typename?: 'Query', getAllBrands?: Array<{ __typename?: 'Brand', id?: string | null, name?: string | null, description?: string | null, image?: string | null } | null> | null };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories?: Array<{ __typename?: 'Category', image?: string | null, description?: string | null, name?: string | null, id?: string | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null, storeId?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, userId?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null } | null> | null } | null> | null };

export type GetAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrdersQuery = { __typename?: 'Query', getAllOrders?: Array<{ __typename?: 'Order', id?: string | null, quantity?: string | null, userId?: { __typename?: 'User', firstName?: string | null, id?: string | null, lastName?: string | null } | null, productId?: { __typename?: 'Product', name?: string | null, id?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null } | null } | null> | null };

export type GetAllStoresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStoresQuery = { __typename?: 'Query', getAllStores?: Array<{ __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, phone?: string | null, description?: string | null, image?: string | null, userId?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null> | null };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers?: Array<{ __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: Role | null, createdAt?: string | null } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  getProductByIdId: Scalars['ID'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', getProductById?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null, storeId?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null } | null> | null, options?: { __typename?: 'StoreOptions', primaryColor?: string | null } | null } | null } | null };

export type GetProductByUuidQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type GetProductByUuidQuery = { __typename?: 'Query', getProductByUuid?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, storeId?: { __typename?: 'Store', id?: string | null, name?: string | null, address?: string | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null } | null> | null, options?: { __typename?: 'StoreOptions', primaryColor?: string | null } | null } | null } | null };

export type GetStoreByIdQueryVariables = Exact<{
  getStoreByIdId: Scalars['ID'];
}>;


export type GetStoreByIdQuery = { __typename?: 'Query', getStoreById?: { __typename?: 'Store', id?: string | null, name?: string | null, phone?: string | null, image?: string | null, description?: string | null, userId?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null } | null, options?: { __typename?: 'StoreOptions', id?: string | null, slider?: boolean | null, bgColor?: string | null, primaryColor?: string | null, whatsapp?: boolean | null, ourBrands?: boolean | null, bestProducts?: boolean | null, slider_image?: Array<string | null> | null, popup?: boolean | null, popupImage?: string | null } | null, productIds?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null, uuid?: string | null, categoryIds?: Array<{ __typename?: 'Category', id?: string | null, name?: string | null, description?: string | null } | null> | null } | null> | null } | null };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };

export type UserLoggedInSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UserLoggedInSubscription = { __typename?: 'Subscription', userLoggedIn?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email?: string | null, store?: { __typename?: 'Store', id?: string | null, name?: string | null } | null } | null };

export type ProductAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ProductAddedSubscription = { __typename?: 'Subscription', productAdded?: { __typename?: 'Product', id?: string | null, name?: string | null, description?: string | null, image?: Array<string | null> | null, price?: string | null } | null };


export const CreateStoreOptionsDocument = gql`
    mutation CreateStoreOptions($input: StoreOptionsInput) {
  createStoreOptions(input: $input) {
    id
    slider
    slider_image
    bestProducts
    ourBrands
    whatsapp
    popup
    primaryColor
    bgColor
    popupImage
    storeId
  }
}
    `;
export type CreateStoreOptionsMutationFn = Apollo.MutationFunction<CreateStoreOptionsMutation, CreateStoreOptionsMutationVariables>;

/**
 * __useCreateStoreOptionsMutation__
 *
 * To run a mutation, you first call `useCreateStoreOptionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoreOptionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoreOptionsMutation, { data, loading, error }] = useCreateStoreOptionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStoreOptionsMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoreOptionsMutation, CreateStoreOptionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoreOptionsMutation, CreateStoreOptionsMutationVariables>(CreateStoreOptionsDocument, options);
      }
export type CreateStoreOptionsMutationHookResult = ReturnType<typeof useCreateStoreOptionsMutation>;
export type CreateStoreOptionsMutationResult = Apollo.MutationResult<CreateStoreOptionsMutation>;
export type CreateStoreOptionsMutationOptions = Apollo.BaseMutationOptions<CreateStoreOptionsMutation, CreateStoreOptionsMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: ProductInput) {
  createProduct(input: $input) {
    id
    uuid
    name
    description
    image
    price
    promoPrice
    stock
    status
    createdAt
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
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
export const DeleteProductDocument = gql`
    mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
    name
    description
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      deleteProductId: // value for 'deleteProductId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput) {
  login(input: $input) {
    id
    firstName
    lastName
    email
    role
    token
    store {
      id
    }
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
export const UpdateOptionsDocument = gql`
    mutation UpdateOptions($input: StoreOptionsInput, $updateStoreOptionsId: ID!) {
  updateStoreOptions(input: $input, id: $updateStoreOptionsId) {
    id
    slider
    slider_image
    bestProducts
    ourBrands
    whatsapp
    primaryColor
    bgColor
    storeId
    popup
    popupImage
  }
}
    `;
export type UpdateOptionsMutationFn = Apollo.MutationFunction<UpdateOptionsMutation, UpdateOptionsMutationVariables>;

/**
 * __useUpdateOptionsMutation__
 *
 * To run a mutation, you first call `useUpdateOptionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOptionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOptionsMutation, { data, loading, error }] = useUpdateOptionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updateStoreOptionsId: // value for 'updateStoreOptionsId'
 *   },
 * });
 */
export function useUpdateOptionsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOptionsMutation, UpdateOptionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOptionsMutation, UpdateOptionsMutationVariables>(UpdateOptionsDocument, options);
      }
export type UpdateOptionsMutationHookResult = ReturnType<typeof useUpdateOptionsMutation>;
export type UpdateOptionsMutationResult = Apollo.MutationResult<UpdateOptionsMutation>;
export type UpdateOptionsMutationOptions = Apollo.BaseMutationOptions<UpdateOptionsMutation, UpdateOptionsMutationVariables>;
export const GetAllCartsDocument = gql`
    query GetAllCarts {
  getAllCarts {
    id
    userId {
      firstName
      lastName
    }
    orderIds {
      id
      userId {
        id
        lastName
      }
      productId {
        id
        name
        price
        image
        uuid
      }
      quantity
    }
  }
}
    `;

/**
 * __useGetAllCartsQuery__
 *
 * To run a query within a React component, call `useGetAllCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCartsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCartsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCartsQuery, GetAllCartsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCartsQuery, GetAllCartsQueryVariables>(GetAllCartsDocument, options);
      }
export function useGetAllCartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCartsQuery, GetAllCartsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCartsQuery, GetAllCartsQueryVariables>(GetAllCartsDocument, options);
        }
export type GetAllCartsQueryHookResult = ReturnType<typeof useGetAllCartsQuery>;
export type GetAllCartsLazyQueryHookResult = ReturnType<typeof useGetAllCartsLazyQuery>;
export type GetAllCartsQueryResult = Apollo.QueryResult<GetAllCartsQuery, GetAllCartsQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    id
    name
    description
    image
    price
    uuid
    storeId {
      options {
        primaryColor
      }
    }
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
      uuid
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
export const GetAllOrdersDocument = gql`
    query getAllOrders {
  getAllOrders {
    id
    userId {
      firstName
      id
      lastName
    }
    productId {
      name
      id
      image
      price
      uuid
    }
    quantity
  }
}
    `;

/**
 * __useGetAllOrdersQuery__
 *
 * To run a query within a React component, call `useGetAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
      }
export function useGetAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
        }
export type GetAllOrdersQueryHookResult = ReturnType<typeof useGetAllOrdersQuery>;
export type GetAllOrdersLazyQueryHookResult = ReturnType<typeof useGetAllOrdersLazyQuery>;
export type GetAllOrdersQueryResult = Apollo.QueryResult<GetAllOrdersQuery, GetAllOrdersQueryVariables>;
export const GetAllStoresDocument = gql`
    query GetAllStores {
  getAllStores {
    id
    name
    address
    phone
    description
    image
    userId {
      id
      firstName
      lastName
    }
  }
}
    `;

/**
 * __useGetAllStoresQuery__
 *
 * To run a query within a React component, call `useGetAllStoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStoresQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStoresQuery, GetAllStoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStoresQuery, GetAllStoresQueryVariables>(GetAllStoresDocument, options);
      }
export function useGetAllStoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStoresQuery, GetAllStoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStoresQuery, GetAllStoresQueryVariables>(GetAllStoresDocument, options);
        }
export type GetAllStoresQueryHookResult = ReturnType<typeof useGetAllStoresQuery>;
export type GetAllStoresLazyQueryHookResult = ReturnType<typeof useGetAllStoresLazyQuery>;
export type GetAllStoresQueryResult = Apollo.QueryResult<GetAllStoresQuery, GetAllStoresQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    id
    firstName
    lastName
    email
    role
    createdAt
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($getProductByIdId: ID!) {
  getProductById(id: $getProductByIdId) {
    id
    name
    description
    image
    price
    uuid
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
      options {
        primaryColor
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
export const GetProductByUuidDocument = gql`
    query GetProductByUuid($uuid: String!) {
  getProductByUuid(uuid: $uuid) {
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
        uuid
      }
      options {
        primaryColor
      }
    }
  }
}
    `;

/**
 * __useGetProductByUuidQuery__
 *
 * To run a query within a React component, call `useGetProductByUuidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByUuidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByUuidQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useGetProductByUuidQuery(baseOptions: Apollo.QueryHookOptions<GetProductByUuidQuery, GetProductByUuidQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByUuidQuery, GetProductByUuidQueryVariables>(GetProductByUuidDocument, options);
      }
export function useGetProductByUuidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByUuidQuery, GetProductByUuidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByUuidQuery, GetProductByUuidQueryVariables>(GetProductByUuidDocument, options);
        }
export type GetProductByUuidQueryHookResult = ReturnType<typeof useGetProductByUuidQuery>;
export type GetProductByUuidLazyQueryHookResult = ReturnType<typeof useGetProductByUuidLazyQuery>;
export type GetProductByUuidQueryResult = Apollo.QueryResult<GetProductByUuidQuery, GetProductByUuidQueryVariables>;
export const GetStoreByIdDocument = gql`
    query GetStoreById($getStoreByIdId: ID!) {
  getStoreById(id: $getStoreByIdId) {
    id
    name
    phone
    image
    description
    userId {
      id
      firstName
      lastName
    }
    options {
      id
      slider
      bgColor
      primaryColor
      whatsapp
      ourBrands
      bestProducts
      slider_image
      popup
      popupImage
    }
    productIds {
      id
      name
      description
      image
      price
      uuid
      categoryIds {
        id
        name
        description
      }
    }
  }
}
    `;

/**
 * __useGetStoreByIdQuery__
 *
 * To run a query within a React component, call `useGetStoreByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoreByIdQuery({
 *   variables: {
 *      getStoreByIdId: // value for 'getStoreByIdId'
 *   },
 * });
 */
export function useGetStoreByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStoreByIdQuery, GetStoreByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoreByIdQuery, GetStoreByIdQueryVariables>(GetStoreByIdDocument, options);
      }
export function useGetStoreByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoreByIdQuery, GetStoreByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoreByIdQuery, GetStoreByIdQueryVariables>(GetStoreByIdDocument, options);
        }
export type GetStoreByIdQueryHookResult = ReturnType<typeof useGetStoreByIdQuery>;
export type GetStoreByIdLazyQueryHookResult = ReturnType<typeof useGetStoreByIdLazyQuery>;
export type GetStoreByIdQueryResult = Apollo.QueryResult<GetStoreByIdQuery, GetStoreByIdQueryVariables>;
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
export const UserLoggedInDocument = gql`
    subscription UserLoggedIn {
  userLoggedIn {
    firstName
    lastName
    email
    store {
      id
      name
    }
  }
}
    `;

/**
 * __useUserLoggedInSubscription__
 *
 * To run a query within a React component, call `useUserLoggedInSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserLoggedInSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLoggedInSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUserLoggedInSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UserLoggedInSubscription, UserLoggedInSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserLoggedInSubscription, UserLoggedInSubscriptionVariables>(UserLoggedInDocument, options);
      }
export type UserLoggedInSubscriptionHookResult = ReturnType<typeof useUserLoggedInSubscription>;
export type UserLoggedInSubscriptionResult = Apollo.SubscriptionResult<UserLoggedInSubscription>;
export const ProductAddedDocument = gql`
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

/**
 * __useProductAddedSubscription__
 *
 * To run a query within a React component, call `useProductAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProductAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useProductAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ProductAddedSubscription, ProductAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ProductAddedSubscription, ProductAddedSubscriptionVariables>(ProductAddedDocument, options);
      }
export type ProductAddedSubscriptionHookResult = ReturnType<typeof useProductAddedSubscription>;
export type ProductAddedSubscriptionResult = Apollo.SubscriptionResult<ProductAddedSubscription>;