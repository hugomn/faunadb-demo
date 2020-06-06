import { NextPage } from "next"
import { useFindAllCountriesQuery } from "generated/graphql"
import BaseTemplate from "templates/Base"

const Test: NextPage = () => {
    const { data, loading } = useFindAllCountriesQuery()
    if (loading) {
        return <div>Loading...</div>
    }
    return <BaseTemplate>
    <ul>{data?.findAllCountries.data.map(country => <li key={country?.code}>{country?.name}</li>)}</ul>
    </BaseTemplate>
}

export default Test