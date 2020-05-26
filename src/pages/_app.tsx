import { AppProps } from 'next/app'
import React from 'react'
import './index.css'

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default CustomApp;