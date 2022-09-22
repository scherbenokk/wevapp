import './index.css';
import burger from './burger.svg';
import CompanyUpdates from '../company-updates';

function Layout() {
  return (
    <div className="container">
      <img src={burger} className="menu" alt="menu" />
      <CompanyUpdates/>
    </div>
  );
}

export default Layout;
