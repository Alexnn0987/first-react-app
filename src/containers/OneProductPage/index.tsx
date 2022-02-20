import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OneProduct from '../../components/OneProduct';
import { getOneProductData } from '../../store/Products/selectors';
import { fetchOneProductAction } from '../../store/Products/actions';

const OneProductPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getOneProductData);

  useEffect(() => {
    dispatch(fetchOneProductAction(id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OneProduct characters={product} />
    </>
  );
};

export default OneProductPage;
