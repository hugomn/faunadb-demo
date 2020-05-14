const faunadb = require("faunadb");
const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });
const countries = require("../data/countries.json");

const printCountries = async () => {
  try {
    const result = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index("all_countries") // specify source
          )
        ),
        (ref) => q.Get(ref)
      )
    );
    console.log(result.data);
  } catch (e) {
    console.log(e.message);
  }
};

const insertCountries = async () => {
  try {
    for (const country of countries) {
      const result = await client.query(
        q.Create(q.Collection("Country"), {
          data: {
            code: country.code,
            name: country.name,
          },
        })
      );
      console.log(result.data);
    }
  } catch (e) {
    console.log(e.message);
  }
};

// printCountries();
insertCountries();
