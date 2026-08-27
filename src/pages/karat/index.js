import CollectionsDetail from '@/components/collections/CollectionsDetail/CollectionsDetail'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import banner from '@/assets/images/karat5/banner.jpg'
import collectionsImages1 from '@/assets/images/karat5/1.jpg'
import collectionsImages2 from '@/assets/images/karat5/2.jpg'
import collectionsImages3 from '@/assets/images/karat5/3.jpg'
import collectionsImages4 from '@/assets/images/karat5/4.jpg'
import collectionsImages5 from '@/assets/images/karat5/5.jpg'
import collectionsImages6 from '@/assets/images/karat5/6.jpg'
import collectionsImages7 from '@/assets/images/karat5/7.jpg'
import collectionsImages8 from '@/assets/images/karat5/8.jpg'
import collectionsImages9 from '@/assets/images/karat5/9.jpg'
import collectionsImages10 from '@/assets/images/karat5/10.jpg'
import collectionsImages11 from '@/assets/images/karat5/11.jpg'
import collectionsImages12 from '@/assets/images/karat5/12.jpg'
import collectionsImages13 from '@/assets/images/karat5/13.jpg'
import collectionsImages14 from '@/assets/images/karat5/14.jpg'
import collectionsImages15 from '@/assets/images/karat5/15.jpg'
import logo from '@/assets/images/karat5/logo.png'
const karat = () => {
  return (
    <Layout>
        <CollectionsDetail
        title="A statement in diamonds, designed to command attention."
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
          collectionsImages14,
          collectionsImages15,
        ]}
        /> 
    </Layout>
  )
}

export default karat