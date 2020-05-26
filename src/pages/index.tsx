import Head from "next/head";
import TableRow from "components/TableRow";
import { FindAllCountriesDocument, FindAllCountriesQuery } from "generated/graphql";
import { NextPage, GetServerSideProps } from "next"
import { createApolloClient } from "lib/apollo/createApolloClient";
import { withApollo } from "lib/apollo";

type IndexPageProps = {
  data: FindAllCountriesQuery
}

const IndexPage: NextPage<IndexPageProps> = ({ data }) => {
  const { findAllCountries: countries } = data || {}
  return (
    <main>
      <Head>
        <title>Samaritan</title>
      </Head>
      <h1>Countries list</h1>
      <hr />
      <div className="container-scroll">
        <div className="container">
          <h2>Countries Data</h2>
          <div className="table">
            <h4>code</h4>
            <h4 className="telephone">name</h4>
          </div>
          {countries?.data.length > 0 ? (
            countries?.data.map((d) => (
              <TableRow
                key={d?.code}
                code={d?.code}
                name={d?.name}
                loading={false}
              />
            ))
          ) : (
            <>
              No data...
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: {} }> => {
  const { data } = await createApolloClient()?.query({ query: FindAllCountriesDocument })
  return { props: { data } }
}

export default withApollo({ ssr: false })(IndexPage)
