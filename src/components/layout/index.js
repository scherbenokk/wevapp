import './index.css';
import burger from './burger.svg';
import CompanyUpdates from '../company-updates';
import PersonalUpdates from '../personal-updates/personal_updates';
import Feed from '../feed/index';

function Layout() {
  return (
    <div className="container">
      <img src={burger} className="menu" alt="menu" />
      <CompanyUpdates/>
      <PersonalUpdates />
      <Feed />
    </div>
  );
}

export default Layout;
