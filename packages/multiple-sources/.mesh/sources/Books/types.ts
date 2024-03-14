// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BooksTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  AppController_books?: Maybe<Array<Maybe<Book>>>;
  AppController_categories?: Maybe<Array<Maybe<Category>>>;
  AppController_book?: Maybe<Book>;
};


export type QueryAppController_bookArgs = {
  id: Scalars['String']['input'];
};

export type Book = {
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  authorId: Scalars['String']['output'];
  categoryId: Scalars['String']['output'];
};

export type Category = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** undefined **/
  AppController_books: InContextSdkMethod<Query['AppController_books'], {}, MeshContext>,
  /** undefined **/
  AppController_categories: InContextSdkMethod<Query['AppController_categories'], {}, MeshContext>,
  /** undefined **/
  AppController_book: InContextSdkMethod<Query['AppController_book'], QueryAppController_bookArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Books"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
