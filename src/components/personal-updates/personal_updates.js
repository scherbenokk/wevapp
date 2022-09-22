import './personal_updates.css'
import arrow from './arrow.svg';

function PersonalUpdates() {
    return (
        <div>
            <h3 className="personal-stats">Personal statistics</h3>
            <div className="stats-flex">
                <p>My stock worth:</p>
                <div className="">
                <p className="self-end">$2000,00 
                    <span className="green-text">
                        <img src={arrow} className="up-arrow" alt="menu" />
                            up 2%
                    </span>
                </p>
                </div>
            </div>
        </div>
    );
}

export default PersonalUpdates;