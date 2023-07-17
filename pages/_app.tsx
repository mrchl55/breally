import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import {GetStaticProps} from "next";
import useSWR from 'swr'

import {getData} from "@/lib/helpers";
export type Page = {
    id: string,
    url: string,
}

const fetcher = (url:string) => fetch(url, {
    headers: new Headers({
        "Authorization": `Basic ${btoa('adchitects:jsrulezzz')}`
    }),
}).then(res => res.json())


export default function App({ Component, pageProps }: AppProps) {

  return <Layout>
          <Head>
              <title>Create Next App</title>
              <meta name="title" content="Breally" />
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="@/public/images/logo.svg" sizes="any" type="image/svg+xml"/>
          </Head>
          <Component {...pageProps} />
      </Layout>


}
