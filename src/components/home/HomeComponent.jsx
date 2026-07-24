import React from 'react'
import Banner from './banner/Banner'
import Layout from '../Layout/Layout'
import SignatureCollection from './signature-collection/SignatureCollection'
import Celebrate from './celebrates/Celebrate'
import Manufacturing from './manufacturing/Manufacturing'

const HomeComponent = () => {
  return (
    <Layout>
      <Banner />
      <SignatureCollection />
      <Celebrate />
      <Manufacturing />
    </Layout>
  )
}

export default HomeComponent