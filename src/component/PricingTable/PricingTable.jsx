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
    <h1 className="plan-title">Choose a plan</h1>
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
            <div className="plan-options-div">
              <div>
                <p className="plan-name">Free</p>
              </div>
              <div>
                <p className="plan-name">
                  {" "}
                  0€{" "}
                  <span className="plan-price-heading-span">
                    {monthly ? "/monthly" : "/yearly"}
                  </span>
                </p>
              </div>
            </div>

            <div className="plan-price">
              <p className="plan-name">Choir Members</p>

              <div className="plan-price-left">
                <button className="plan-price-left-decrement">-</button>
                <input
                  type="text"
                  disabled
                  className="plan-price-left-text"
                  placeholder={1}
                />
                <button className="plan-price-left-increment">+</button>
              </div>
            </div>

            <ul className="plan-details">
              <h4 className="plan-free-try">Try for Free</h4> 
              <li>
                <div className="list-item" style={{
                  margin:"0px !important"
                }}>
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Try all features with our demo songs
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                  Try all features with our demo songs
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Become a member of a choir for free and signall their songs.
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Full access to our classical (Copyright free) sheet music
                    catalog
                  </div>
                </div>
              </li>
            </ul>

            <a className="button" href="#">
              Choose
            </a>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-options">
            <div className="plan-options-div">
              <div>
                <p className="plan-name">Choir</p>
              </div>
              <div>
                <p className="plan-name">
                  {" "}
                  {standard.toFixed(2)}€{" "}
                  <span className="plan-price-heading-span">
                    {monthly ? "/monthly" : "/yearly"}
                  </span>
                </p>
              </div>
            </div>

            <div className="plan-price">
              <p className="plan-name">Choir Members</p>

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
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Invite your choir members
                    <strong> (with free account)</strong>.
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Each singer can practice individually and unlimited with all
                    your scores and rehearse tracks.
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    XGb space to upload your own rehearsal tracks.
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Buy and unlock new songs from our catalog.
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Send in-app messages to your choir members
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    Full acces to our copyright free(classical)catalog with
                    sheet music and rehearsal tracks.
                  </div>
                </div>
              </li>
            </ul>

            <a className="button" href="#">
              Choose
            </a>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-options">
            <div className="plan-options-div">
              <div>
                <p className="plan-name">Pro</p>
              </div>
              <div>
                <p className="plan-name">
                  {" "}
                  {pro.toFixed(2)}€{" "}
                  <span className="plan-price-heading-span">
                    {monthly ? "/monthly" : "/yearly"}
                  </span>
                </p>
              </div>
            </div>

            <div className="plan-price">
              <p className="plan-name">Choir Members</p>

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
                <div className="list-item">
                  <div className="list-icon">✔</div>
                  <div className="list content">
                    <strong>Unlimited </strong>space to upload your own
                    rehearsal tracks.
                  </div>
                </div>
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
