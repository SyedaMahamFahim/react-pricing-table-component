import React, { useState, useEffect } from "react";
import "./pricingtable.css";

const PricingTable = () => {
  const [standard, setStandard] = useState(1.1);
  const [pro, setPro] = useState(1.5);
  const [increment, setIncrement] = useState(1);
  const [monthly, setMonthly] = useState(true);

  const setValues = () => {
    if (increment === 1) {
      if (monthly) {
        setStandard(1.1);
        setPro(1.5);
      } else {
        setStandard(0.9);
        setPro(1.1);
      }
    } else {
      if (monthly) {
        setStandard(1.1 * increment);
        setPro(1.5 * increment);
      } else {
        setStandard(0.9 * increment);
        setPro(1.1 * increment);
      }
    }
  };

  useEffect(() => {
    setValues();
  }, [increment, setValues]);

  return (
    <>
      <div className="pricing-btn-div">
        <button onClick={() => setMonthly(true)} className="pricing-btn">
          Monthly
        </button>
        <button onClick={() => setMonthly(false)} className="pricing-btn">
          Yearly
        </button>
      </div>
      <div className="plans">
        <div className="plan-box">
          <div className="plan-options">
            <p className="plan-name">Free</p>
            <strong className="plan-name-sub-heading">Individual</strong>
            <div className="plan-price">
              <div className="plan-price-right">
                <strong className="plan-price-heading">0€</strong>
              </div>
            </div>
            <ul className="plan-details">
              <li>Try all features with our demo songs</li>
              <li>
                Become a member of a choir for free and signall their songs.
              </li>
              <li>
                Full access to our classical (Copyright free) sheet music
                catalog
              </li>
            </ul>

            <a className="button" href="#">
              Choose
            </a>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-options">
            <p className="plan-name">Choir</p>
            <strong className="plan-name-sub-heading">
              Starting from a one-man-choir ;-)
            </strong>
            <div className="plan-price">
              <div className="plan-price-right">
                <strong className="plan-price-heading">
                  ${standard.toFixed(2)}{" "}
                  <span className="plan-price-heading-span">
                    {monthly ? "/monthly" : "yearly"}
                  </span>
                </strong>
                <br/>
                <strong className="plan-choir-member">Choir Members</strong>
              </div>
              <div className="plan-price-left">
                <button
                  onClick={() => setIncrement(increment - 1)}
                  className="plan-price-left-decrement"
                >
                  -
                </button>
                <input
                  type="text"
                  className="plan-price-left-text"
                  placeholder={increment}
                />
                <button
                  onClick={() => setIncrement(increment + 1)}
                  className="plan-price-left-increment"
                >
                  +
                </button>
              </div>
            </div>
            <ul className="plan-details">
                <h4 className="plan-free-try">Try 14 days for Free</h4>
              <li>
                Invite your choir
                members 
                <strong> (with free account)</strong>.
              </li>
              <li>
              Each singer can practice individually and unlimited with
all your scores and rehearse tracks.
              </li>
              <li>
              XGb space to upload your own rehearsal tracks.
              </li>
              <li>
              Buy and unlock new songs from our catalog.
              </li>
              <li>
              Send in-app messages to your choir members
              </li>
              <li>
              Full acces to our copyright free(classical)catalog with
sheet music and rehearsal tracks.
              </li>
            </ul>

            <a className="button" href="#">
              Choose
            </a>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-options">
            <p className="plan-name">Pro</p>
            <strong className="plan-name-sub-heading">
            With premium features

            </strong>
            <div className="plan-price">
              <div className="plan-price-right">
                <strong className="plan-price-heading">
                  ${pro.toFixed(2)}{" "}
                  <span className="plan-price-heading-span">
                    {monthly ? "/monthly" : "yearly"}
                  </span>
                </strong>
                <br/>
                <strong className="plan-choir-member">Choir Members</strong>

              </div>
              <div className="plan-price-left">
                <button
                  onClick={() => setIncrement(increment - 1)}
                  className="plan-price-left-decrement"
                >
                  -
                </button>
                <input
                  type="text"
                  className="plan-price-left-text"
                  placeholder={increment}
                />
                <button
                  onClick={() => setIncrement(increment + 1)}
                  className="plan-price-left-increment"
                >
                  +
                </button>
              </div>
            </div>
            <ul className="plan-details">
            <h4 className="plan-free-try">Try 14 days for Free</h4>
              <li>
                <strong>Unlimited </strong>space to upload your own rehearsal tracks.

              </li>
             
            </ul>

            <a className="button" href="#">
              Choose
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
