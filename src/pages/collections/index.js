import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";

const Collections = dynamic(
  () => import("@/components/collections/Collections"),
  { ssr: false }
);

const CollectionsPage = () => {
  return (
    <Layout>
      <Collections />
    </Layout>
  );
};

export default CollectionsPage;
