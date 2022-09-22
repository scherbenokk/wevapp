import './index.css';

function CompanyUpdates() {
  return (
    <div>
      <h2 className='header'>Company Updates</h2>
      <div className='blocks'>
        <div className='block'>
          <span>Shares Price</span>
          <span>201.3</span>
        </div>
        <div className='block'>
          Company Valuation

          500.000.000
        </div>
      </div>
      <div className='blocks'>
        <div className='block'>
          New Stakeholders
        </div>
        <div className='block'>
          Cash Flow
        </div>
      </div>
    </div>
  );
}

export default CompanyUpdates;
