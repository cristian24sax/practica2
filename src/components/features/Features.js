import React from "react";
import './features.css'
export const Features = () => {
  return (
    <div className="container-features">
        <div className="content-features"> 
            <span>Features</span>
            <h2>Financial software to fuel your growth</h2>
            <div>
                Spend smarter, lower your bills, get cashback on everything you buy,
                and unlock credit to grow your business.
            </div>
        </div>

        <div className="content-cards">
        <div className="cards">
            <div className="card-unlimited">
            <h3>Unlimited cards</h3>
            <div>
                Give your team the autonomy they need with access to as many cards
                as they need. Authorise purchases with a click. Simple.
            </div>
            <button>Learn more</button>
            </div>

            <div className="card-easy">
            <h3>Easy expense policies</h3>
            <div>
                Every card comes with configurable spending limits, purchase
                restrictions, and cancellations for each employee and team.
            </div>
            <button>Learn more</button>
            </div>

            <div className="card-advanced">
            <h3>advanced analytics</h3>
            <div>
                An all-in-one platform that helps you balance everything your team
                need to be happy and your finances in order.
            </div>
            <button>Learn more</button>
            </div>
        </div>
        <div className="image">
            <img src={require('../../assets/features.jpg')} alt='features'/>
        </div>
      </div>
    </div>
  );
};
