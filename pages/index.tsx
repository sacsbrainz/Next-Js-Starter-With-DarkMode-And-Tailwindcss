import type { NextPage } from 'next'
import Head from 'next/head'
import Homepage from './Homepage'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage/>
      
    </div>
    
    
  )
}

export default Home
