import { AppProps } from 'next/app'
import React from 'react'
// import { withApollo } from 'lib/apollo';
import './index.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

// export default withApollo({ ssr: true })(MyApp);
export default CustomApp;