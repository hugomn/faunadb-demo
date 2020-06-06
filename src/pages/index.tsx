import Head from "next/head";
import TableRow from "components/TableRow";
import { FindAllCountriesDocument, FindAllCountriesQuery } from "generated/graphql";
import { NextPage, GetServerSideProps } from "next"
import { getApolloClientFromContext } from "lib/apollo";
import BaseTemplate from "templates/Base";

type IndexPageProps = {
  data: FindAllCountriesQuery
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { findAllCountries: countries } = data || {}
  return (
    <BaseTemplate>
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
    </BaseTemplate>
  );
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<{ props: {} }> => {
  const { data } = await getApolloClientFromContext(context).query({ query: FindAllCountriesDocument })
  return { props: { data } }
}

export default IndexPage
