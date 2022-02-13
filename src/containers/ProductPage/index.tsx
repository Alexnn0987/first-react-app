import React from "react";
import PageWrapper from "../../components/common/PageWrapper";
import ProductLists from "../../components/ProductLists";



const ProductPage: React.FC = () => {
  return (
    <PageWrapper>
        <ProductLists />
    </PageWrapper>
  );
};

export default ProductPage;