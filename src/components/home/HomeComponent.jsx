import React from 'react'
import Banner from './banner/Banner'
import Layout from '../Layout/Layout'
import SignatureCollection from './signature-collection/SignatureCollection'

const HomeComponent = () => {
  return (
    <Layout>
      <Banner />
      <SignatureCollection />
    </Layout>
  )
}

export default HomeComponent