import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Chevrolet from '../../../public/images/chevrolet.jpg';
import Status from '../../../public/images/status-down.svg';
import Heart from '../../../public/images/heart.svg';

import Award from '../../../public/images/award.svg';

const ItemSingle = ({characteristics}) => {
  return (
    <Link to="/" className="items__item">

      <div className="items__item-inner">

        {/* Front */}
        <div className="items__item-front">

          {/* Heart */}
          <button className="items__item-heart-container d-flex justify-content-center align-items-center">
            <img src={Heart} alt="Heart" className="items__item-heart" />
          </button>

          {/* Image */}
          <div style={{
            backgroundImage: `url( ${Chevrolet} )`,
          }} alt="Chevrolet" className="items__item-img w-100"></div>

          {/* Content */}
          <div className="items__item-content">

            <h2 className="items__item-title">Chevrolet S10</h2>
            <h4 className="items__item-copy">2.4 Ls Cab. Dupla 4x2 Flex 4p</h4>
            <p className="items__item-specs">2014/2015 . 120.000 Km</p>

            <div className="items__item-price-container d-flex align-items-end">

              <h3 className="items__item-price">R$1.157.899</h3>
              <img src={Status} alt="status" className="items__item-price-status"/>
              <h6 className="items__item-price-status-copy">Bom preco</h6>

            </div>

            <p className="items__item-location">S.P. Libertade</p>

          </div>

        </div>

        {/* Back */}
        <div className="items__item-back">
          <div className="items__item-back-container">

            <div className="items__item-back-main-img-container d-flex justify-content-center">
              <img src={Award} alt="Trust" className="items__item-back-main-img"/>
            </div>

            <div className="items__item-back-content">
              <ul>
                {
                  characteristics.map((singleChar) => (
                    <li
                      key={singleChar.copy}
                      className="items__item-back-item d-flex align-items-center"
                    >
                      <img
                        src={singleChar.icon}
                        alt={singleChar.copy}
                        className="items__item-back-item-img"
                      />

                      <h4 className="items__item-back-item-copy">
                        {singleChar.copy}
                      </h4>

                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
        </div>

      </div>

    </Link>
  );
};

ItemSingle.propTypes = {
  characteristics: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
  })),
};

export default ItemSingle;
