import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/ProductLists';
import { fetchProductsDataAction } from '../../store/Products/actions';
import { getProductData } from '../../store/Products/selectors';

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getProductData);

  useEffect(() => {
    dispatch(fetchProductsDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProductList data={data} />
    </>
  );
};

export default ProductPage;
