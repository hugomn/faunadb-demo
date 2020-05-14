import { useEffect, useState } from "react";
import Head from "next/head";
import TableRow from "../components/TableRow";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api");
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);
  return (
    <main>
      <Head>
        <title>Next.js, FaunaDB and Node.js</title>
      </Head>
      <h1>Next.js, FaunaDB and Node.js</h1>
      <hr />
      <div className="container-scroll">
        <div className="container">
          <h2>Countries Data</h2>
          <div className="table">
            <h4>code</h4>
            <h4 className="telephone">name</h4>
          </div>
          {data.length > 0 ? (
            data.map((d) => (
              <TableRow
                key={d.data.code}
                code={d.data.code}
                name={d.data.name}
              />
            ))
          ) : (
            <>
              <TableRow loading />
              <TableRow loading />
              <TableRow loading />
            </>
          )}
        </div>
      </div>
    </main>
  );
};
