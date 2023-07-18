import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return <Layout>
        <Head>
            <title>Create Next App</title>
            <meta name="title" content="Breally"/>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" href="/images/logo.svg" sizes="any" type="image/svg+xml"/>
        </Head>
        <Component {...pageProps} />
    </Layout>
}
