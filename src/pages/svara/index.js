import CollectionsDetail from "@/components/collections/CollectionsDetail/CollectionsDetail";
import Layout from "@/components/Layout/Layout";
import React from "react";
import banner from "@/assets/images/svara/banner.jpg";
import collectionsImages1 from "@/assets/images/svara/1.jpg";
import collectionsImages2 from "@/assets/images/svara/2.jpg";
import collectionsImages3 from "@/assets/images/svara/3.jpg";
import collectionsImages4 from "@/assets/images/svara/4.jpg";
import collectionsImages5 from "@/assets/images/svara/5.jpg";
import collectionsImages6 from "@/assets/images/svara/6.jpg";
import collectionsImages7 from "@/assets/images/svara/7.jpg";
import collectionsImages8 from "@/assets/images/svara/8.jpg";
import collectionsImages9 from "@/assets/images/svara/9.jpg";
import collectionsImages10 from "@/assets/images/svara/10.jpg";
import collectionsImages11 from "@/assets/images/svara/11.jpg";
import collectionsImages12 from "@/assets/images/svara/12.jpg";
import collectionsImages13 from "@/assets/images/svara/13.jpg";
import collectionsImages14 from "@/assets/images/svara/14.jpg";
import logo from "@/assets/images/svara/logo.png";

const SvaraCollections = () => {
  return (
    <Layout>
      <CollectionsDetail
        title="Radiance of diamonds, reimagined to attain everyday luxury."
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
        ]}
      />
    </Layout>
  );
};

export default SvaraCollections;