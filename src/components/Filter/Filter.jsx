import React from 'react';
import LocationIcon from '../../../public/images/icon-location.svg';
import Settings from '../../../public/images/icons-dark-setting.svg';

const Filter = () => {
  return (
    <section className="filter">

      {/* Ipad - General */}
      <div className="filter__results-ipad-general justify-content-between">

        <h6 className="filter__results-ipad-general-results">4.324 resultados</h6>

        <div className="filter__results-ipad-general-filters d-flex align-items-center">
          <h6 className="filter__results-ipad-general-filters-name">Filtro (4)</h6>
          <img src={Settings} alt="Settings" />
        </div>

      </div>

      <div className="filter__container">

        {/* Top - Ipad */}
        <div className="filter__top-ipad-fixed w-100 align-items-center justify-content-between">
          <button className="h6 link">Limpiar filtros</button>

          <div className="filter__top-cross-container">
            <span className="filter__top-cross d-block"></span>
            <span className="filter__top-cross d-block"></span>
          </div>

        </div>

        <div className="filter__content">

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

        </div>

      </div>

    </section>
  );
};

export default Filter;
