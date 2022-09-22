import './index.css';
import burger from './burger.svg';
import settings from './settings.svg';
import CompanyUpdates from '../company-updates';

function Layout() {
  return (
    <div className="container">
      <div className='header'>
        <div>
          <img src={burger} className="menu" alt="menu" />
        </div>
        <div className='right-buttons'>
          <img src={settings} className="settings" alt="settings" />
          <button className="filter">Last Month</button>
        </div>
      </div>
      <CompanyUpdates/>
    </div>
  );
}

export default Layout;
