import React from 'react';
import LocationIcon from '../../../public/images/icon-location.svg';

const Filter = () => {
  return (
    <section className="filter">

      <div className="filter__results-total-container">
        <h6 className="filter__results-total">4.324 resultados</h6>
      </div>

      <ul className="filter__results-container">

        <li className="filter__results-item d-flex align-items-center justify-content-between">

          <h5 className="filter__results-title">Localização</h5>
          <div className="filter__results-geo-container">

            <button className="link filter__results-geo d-flex align-items-end">

              <h6 className="filter__results-geo-text">São Paulo</h6>
              <img src={LocationIcon} alt="Location"/>

            </button>


          </div>

        </li>

      </ul>

    </section>
  );
};

export default Filter;
