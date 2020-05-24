import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

/** 'Continent' input values */
export type ContinentInput = {
  code: Scalars['ID'];
  name: Scalars['String'];
  countries: Array<Scalars['ID']>;
};

/** Allow manipulating the relationship between the types 'Country' and 'Continent' using the field 'Country.continent'. */
export type CountryContinentRelation = {
  /** Create a document of type 'Continent' and associate it with the current document. */
  create?: Maybe<ContinentInput>;
  /** Connect a document of type 'Continent' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Continent' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** 'Country' input values */
export type CountryInput = {
  code: Scalars['ID'];
  name: Scalars['String'];
  native?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  continent?: Maybe<CountryContinentRelation>;
  capital?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  states?: Maybe<Array<Scalars['ID']>>;
};


/** 'Language' input values */
export type LanguageInput = {
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
  countries: Array<Scalars['ID']>;
};

export type Mutation = {
  /** Create a new document in the collection of 'Language' */
  createLanguage: Language;
  /** Delete an existing document in the collection of 'State' */
  deleteState?: Maybe<State>;
  /** Create a new document in the collection of 'Continent' */
  createContinent: Continent;
  /** Create a new document in the collection of 'State' */
  createState: State;
  /** Delete an existing document in the collection of 'Country' */
  deleteCountry?: Maybe<Country>;
  /** Delete an existing document in the collection of 'Language' */
  deleteLanguage?: Maybe<Language>;
  /** Update an existing document in the collection of 'Country' */
  updateCountry?: Maybe<Country>;
  /** Update an existing document in the collection of 'State' */
  updateState?: Maybe<State>;
  /** Create a new document in the collection of 'Country' */
  createCountry: Country;
  /** Update an existing document in the collection of 'Continent' */
  updateContinent?: Maybe<Continent>;
  /** Update an existing document in the collection of 'Language' */
  updateLanguage?: Maybe<Language>;
  /** Delete an existing document in the collection of 'Continent' */
  deleteContinent?: Maybe<Continent>;
};


export type MutationCreateLanguageArgs = {
  data: LanguageInput;
};


export type MutationDeleteStateArgs = {
  id: Scalars['ID'];
};


export type MutationCreateContinentArgs = {
  data: ContinentInput;
};


export type MutationCreateStateArgs = {
  data: StateInput;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLanguageArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCountryArgs = {
  id: Scalars['ID'];
  data: CountryInput;
};


export type MutationUpdateStateArgs = {
  id: Scalars['ID'];
  data: StateInput;
};


export type MutationCreateCountryArgs = {
  data: CountryInput;
};


export type MutationUpdateContinentArgs = {
  id: Scalars['ID'];
  data: ContinentInput;
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  data: LanguageInput;
};


export type MutationDeleteContinentArgs = {
  id: Scalars['ID'];
};

/** Allow manipulating the relationship between the types 'State' and 'Country' using the field 'State.country'. */
export type StateCountryRelation = {
  /** Create a document of type 'Country' and associate it with the current document. */
  create?: Maybe<CountryInput>;
  /** Connect a document of type 'Country' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
};

/** 'State' input values */
export type StateInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  country?: Maybe<StateCountryRelation>;
};


export type Continent = {
  name: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  code: Scalars['ID'];
  countries: Array<Country>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type Country = {
  name: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  native?: Maybe<Scalars['String']>;
  continent?: Maybe<Continent>;
  code: Scalars['ID'];
  languages?: Maybe<Array<Maybe<Language>>>;
  capital?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  states?: Maybe<Array<State>>;
  phone?: Maybe<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** The pagination object for elements of type 'Country'. */
export type CountryPage = {
  /** The elements of type 'Country' in this page. */
  data: Array<Maybe<Country>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Language = {
  name?: Maybe<Scalars['String']>;
  /** The document's ID. */
  _id: Scalars['ID'];
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
  code: Scalars['ID'];
  countries: Array<Country>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

export type Query = {
  /** Find a document from the collection of 'Language' by its id. */
  findLanguageByID?: Maybe<Language>;
  /** Find a document from the collection of 'State' by its id. */
  findStateByID?: Maybe<State>;
  /** Find a document from the collection of 'Continent' by its id. */
  findContinentByID?: Maybe<Continent>;
  /** Find a document from the collection of 'Country' by its id. */
  findCountryByID?: Maybe<Country>;
  findAllCountries: CountryPage;
};


export type QueryFindLanguageByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindStateByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindContinentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindCountryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAllCountriesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type State = {
  name: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  country: Country;
  code: Scalars['String'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type FindAllCountriesQueryVariables = {
  size?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
};


export type FindAllCountriesQuery = { findAllCountries: (
    Pick<CountryPage, 'after' | 'before'>
    & { data: Array<Maybe<Pick<Country, 'code' | 'name'>>> }
  ) };


export const FindAllCountriesDocument = gql`
    query findAllCountries($size: Int, $cursor: String) {
  findAllCountries(_size: $size, _cursor: $cursor) {
    data {
      code
      name
    }
    after
    before
  }
}
    `;
export type FindAllCountriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FindAllCountriesQuery, FindAllCountriesQueryVariables>, 'query'>;

    export const FindAllCountriesComponent = (props: FindAllCountriesComponentProps) => (
      <ApolloReactComponents.Query<FindAllCountriesQuery, FindAllCountriesQueryVariables> query={FindAllCountriesDocument} {...props} />
    );
    
export type FindAllCountriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<FindAllCountriesQuery, FindAllCountriesQueryVariables>
    } & TChildProps;
export function withFindAllCountries<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindAllCountriesQuery,
  FindAllCountriesQueryVariables,
  FindAllCountriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, FindAllCountriesQuery, FindAllCountriesQueryVariables, FindAllCountriesProps<TChildProps, TDataName>>(FindAllCountriesDocument, {
      alias: 'findAllCountries',
      ...operationOptions
    });
};

/**
 * __useFindAllCountriesQuery__
 *
 * To run a query within a React component, call `useFindAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCountriesQuery({
 *   variables: {
 *      size: // value for 'size'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFindAllCountriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindAllCountriesQuery, FindAllCountriesQueryVariables>) {
        return ApolloReactHooks.useQuery<FindAllCountriesQuery, FindAllCountriesQueryVariables>(FindAllCountriesDocument, baseOptions);
      }
export function useFindAllCountriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAllCountriesQuery, FindAllCountriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindAllCountriesQuery, FindAllCountriesQueryVariables>(FindAllCountriesDocument, baseOptions);
        }
export type FindAllCountriesQueryHookResult = ReturnType<typeof useFindAllCountriesQuery>;
export type FindAllCountriesLazyQueryHookResult = ReturnType<typeof useFindAllCountriesLazyQuery>;
export type FindAllCountriesQueryResult = ApolloReactCommon.QueryResult<FindAllCountriesQuery, FindAllCountriesQueryVariables>;
export function refetchFindAllCountriesQuery(variables?: FindAllCountriesQueryVariables) {
      return { query: FindAllCountriesDocument, variables: variables }
    }

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    