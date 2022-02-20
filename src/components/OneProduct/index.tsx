import React from 'react';
import { OneProductType } from '../../store/Products/types';

type OneProductPropsType = {
  characters: OneProductType;
};

const OneProduct: React.FC<OneProductPropsType> = (props) => {
  const {
    characters: { name, image, gender, occupation, firstEpisode },
  } = props;
  return (
    <>
      <img src={image} alt={name} />
      <h1>name: {name}</h1>
      <span>gender: {gender}</span>
      <span>occupation: {occupation}</span>
      <span>firstEpisode: {firstEpisode}</span>
    </>
  );
};

export default OneProduct;
