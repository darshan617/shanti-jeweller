import Layout from '@/components/Layout/Layout'
import CollectionsDetail from '@/components/collections/CollectionsDetail/CollectionsDetail'
import React from 'react'
import banner from '@/assets/images/swaarniim/banner.jpg'
import collectionsImages1 from '@/assets/images/swaarniim/1.jpg'
import collectionsImages2 from '@/assets/images/swaarniim/2.jpg'
import collectionsImages3 from '@/assets/images/swaarniim/3.jpg'
import collectionsImages4 from '@/assets/images/swaarniim/4.jpg'
import collectionsImages5 from '@/assets/images/swaarniim/5.jpg'
import collectionsImages6 from '@/assets/images/swaarniim/6.jpg'
import collectionsImages7 from '@/assets/images/swaarniim/7.jpg'
import collectionsImages8 from '@/assets/images/swaarniim/8.jpg'
import collectionsImages9 from '@/assets/images/swaarniim/9.jpg'
import collectionsImages10 from '@/assets/images/swaarniim/10.jpg'
import collectionsImages11 from '@/assets/images/swaarniim/11.jpg'
import collectionsImages12 from '@/assets/images/swaarniim/12.jpg'
import collectionsImages13 from '@/assets/images/swaarniim/13.jpg'
import logo from '@/assets/images/swaarniim/logo.png'

const SwaarniimCollections = () => {
  return (
    <Layout>
        <CollectionsDetail
        title="Bold style meets refined craftsmanship."
        logo={logo}
        image={banner}
        images={[
          collectionsImages1,
          collectionsImages2,
          collectionsImages3,
          collectionsImages4,
          collectionsImages5,
          collectionsImages6,
          collectionsImages7,
          collectionsImages8,
          collectionsImages9,
          collectionsImages10,
          collectionsImages11,
          collectionsImages12,
          collectionsImages13,
        ]}
        /> 
    </Layout>
  )
}

export default SwaarniimCollections