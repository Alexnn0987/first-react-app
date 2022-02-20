import React from 'react';
import { Link } from 'react-router-dom';
import { OneProductType } from '../../store/Products/types';

type ProductListPropsType = {
  data: OneProductType[];
};

const ProductList: React.FC<ProductListPropsType> = (props) => {
  const { data } = props;
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/characters/${el.id}`}>{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
