import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Title from '../components/Title/Title';
import Filter from '../components/Filter/Filter';
import Items from '../components/Items/Items';
import {getProductsActions} from '../actions/products/getProductsActions';

const UsedCars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsActions());
  }, []);

  return (
    <main className="used-cars">
      <Title
        city="Sao Paulo"
      />

      <div className="used-cars__content container">
        <Filter />
        <Items />
      </div>
    </main>
  );
};

export default UsedCars;
