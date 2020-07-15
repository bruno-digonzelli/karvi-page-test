import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import carIcon from '../../public/images/car.svg';
import user from '../../public/images/user.svg';

const Header = ({brand, city}) => {
  return (
    <header>
      <Navbar
        items={['Novos', 'Usados', 'Venda seu carro']}
        userSpecs={[
          {
            icon: carIcon,
            name: 'Meus carros',
          },
          {
            icon: user,
            name: 'Pedro Gomez',
          },
        ]}
      />

      <h1>
        Carros usados {brand} à venda em{' '}
        <a href="#" className="link">
          {city}
        </a>
      </h1>
    </header>
  );
};

Header.propTypes = {
  brand: PropTypes.string,
  city: PropTypes.string.isRequired,
};

export default Header;
