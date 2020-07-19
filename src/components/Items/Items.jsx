import React from 'react';
import ItemSingle from './ItemSingle';
import CONSTANTS from '../../core/constants';

const Items = () => {
  const {characteristics} = CONSTANTS.items.itemsSingle;

  return (
    <section className="items d-flex flex-wrap justify-content-md-between">
      <ItemSingle
        characteristics={characteristics}
      />
    </section>
  );
};

export default Items;
