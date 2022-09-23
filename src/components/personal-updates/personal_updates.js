import './personal_updates.css'
import arrowUp from './arrow-up.svg';
import arrowDown from './arrow-down.svg';

function PersonalUpdates() {
    return (
        <div>
            <h3 className="personal-stats">My core metrics</h3>
            <div className="stats-flex">
                <p className="p">Shares amount:</p>
                <div className="">
                <p className="self-end p">2000,00 
                    <img src={arrowUp} className="up-arrow" alt="menu" />
                    <span className="green-text">4,3%</span>
                </p>
                </div>
            </div>
            <div className="stats-flex">
                <p className="p">Investment:</p>
                <div className="">
                <p className="self-end p">
                    <span>€350.000,00</span>
                    <img src={arrowUp} className="up-arrow" alt="menu" />
                    <span className="green-text">2,1%</span>
                </p>
                </div>
            </div>
            <div className="stats-flex">
                <p className="p">Slicing pie contribution:</p>
                <div className="">
                <p className="self-end p">
                    <span>€25.750,00</span>
                    &nbsp;
                    <img src={arrowDown} className="down-arrow" alt="menu" />
                    <span className="red-text">6,4%</span>
                </p>
                </div>
            </div>
        </div>
    );
}

export default PersonalUpdates;