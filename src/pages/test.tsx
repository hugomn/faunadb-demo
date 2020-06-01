import { NextPage } from "next"
import { withApollo } from "lib/apollo"

const Test: NextPage = () => {
    return <div>Test</div>
}

export default withApollo({ ssr: true })(Test)