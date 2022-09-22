import React from 'react';
import './index.css';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react' 

function CompanyUpdates() {
  const [sliderRef, _] = useKeenSlider(
    {
      slides: {
        perView: 2,
        spacing: 10,
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
  )

  return (
    <div>
      <h2 className='header'>Company Updates</h2>
      <div ref={sliderRef} className="keen-slider carousel">
        <div className='block keen-slider__slide'>
          <span>Shares Price</span>
          <span>201.3</span>
        </div>
        <div className='block keen-slider__slide'>
          Company Valuation

          500.000.000
        </div>
        <div className='block keen-slider__slide'>
          New Stakeholders
        </div>
        <div className='block keen-slider__slide'>
          Cash Flow
        </div>
      </div>
    </div>
  );
}

export default CompanyUpdates;
