import React from 'react';
import './index.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react' 
import arrowDown from './arrow-down.svg';
import arrowUp from './arrow-up.svg';
import stakeholder from './stakeholder.png';

function CompanyUpdates() {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 2,
        spacing: 10,
      },
    },
  );

  return (
    <div>
      <h2 className='header'>Company Metrics</h2>
      <div ref={sliderRef} className="keen-slider carousel">
        <div className='block keen-slider__slide'>
          <span>Shares Price</span>
          <span>€201,30</span>
          <div className='difference-block'>
            <img src={arrowUp} className="menu" alt="menu" />
            &nbsp;<span className='green-color'>3.1%</span>
          </div>
        </div>
        <div className='block keen-slider__slide'>
          <span>Valuation</span>
          <span>€50.400.000,00</span>
          <div className='difference-block'>
            <img src={arrowDown} className="menu" alt="menu" />
            &nbsp;<span className='red-color'>3.4%</span>
          </div>
        </div>
        <div className='block keen-slider__slide'>
          <span>New Stakeholders</span>
          <img src={stakeholder} className="stakeholder" alt="menu" />
          <span>Day Ralio</span>
        </div>
        <div className='block keen-slider__slide'>
          <span>Cash Flow</span>
          <span>€35.560,00</span>
          <div className='difference-block'>
            <img src={arrowDown} className="menu" alt="menu" />
            &nbsp;<span className='red-color'>6.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyUpdates;
