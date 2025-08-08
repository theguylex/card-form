import { useState } from "react";
import "./App.css";

export default function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const formatCardNumber = (value) =>
    value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const validate = () => {
    let newErrors = {};

    if (!cardName.trim()) {
      newErrors.cardName = "Can't be blank";
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(cardName.trim())) {
      newErrors.cardName = "Must contain first and last name";
    }

    const cleanCardNum = cardNumber.replace(/\D/g, "");
    if (!cleanCardNum) {
      newErrors.cardNumber = "Can't be blank";
    } else if (!/^\d{16}$/.test(cleanCardNum)) {
      newErrors.cardNumber = "Must be 16 digits";
    }

    if (!expMonth) {
      newErrors.expMonth = "Can't be blank";
    } else if (parseInt(expMonth) < 1 || parseInt(expMonth) > 12) {
      newErrors.expMonth = "Invalid month";
    }

    if (!expYear) {
      newErrors.expYear = "Can't be blank";
    } else if (!/^\d{2}$/.test(expYear)) {
      newErrors.expYear = "Invalid year";
    }

    if (!cvc) {
      newErrors.cvc = "Can't be blank";
    } else if (!/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = "Must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="form-submitted-content">
        <img src="/images/icon-complete.svg" alt="complete-tick" />
        <h3>THANK YOU!</h3>
        <p>We've added your card details</p>
        <button onClick={() => setSubmitted(false)}>Continue</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="bodyA">
        <div className="cards">
          <div className="card-container">
            <div className="cardFront">
              <div className="cardFrontContent">
                <div className="cardFrontLogo">
                  <img src="/images/card-logo.svg" alt="logo" />
                </div>
                <div className="cardNumber">
                  {cardNumber || "0000 0000 0000 0000"}
                </div>
                <div className="nameExpDate">
                  <h5>{cardName || "JANE APPLESEED"}</h5>
                  <h5>
                    {expMonth.padStart(2, "0") || "00"}/
                    {expYear.padStart(2, "0") || "00"}
                  </h5>
                </div>
              </div>
            </div>
            <div className="cardBack">
              <div className="cardBackContent">
                <h5 className="cardCVC">{cvc || "000"}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bodyB">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardholder">CARDHOLDER NAME</label>
            <input
              type="text"
              id="cardholder"
              placeholder="e.g. Jane Appleseed"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              autoFocus
            />
            {errors.cardName && <h4 className="error-msg">{errors.cardName}</h4>}
          </div>

          <div className="form-group">
            <label htmlFor="cardnumber">CARD NUMBER</label>
            <input
              type="text"
              id="cardnumber"
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
            {errors.cardNumber && (
              <h4 className="error-msg">{errors.cardNumber}</h4>
            )}
          </div>

          <div className="dateCvc">
            <div className="form-group">
              <label>EXP. DATE (MM/YY)</label>
              <div className="exp-date">
                <div className="monthInput">
                  <input
                    type="text"
                    placeholder="MM"
                    value={expMonth}
                    onChange={(e) =>
                      setExpMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
                    }
                  />
                  {errors.expMonth && (
                    <h4 className="error-msg">{errors.expMonth}</h4>
                  )}
                </div>

                <div className="yearInput">
                  <input
                    type="text"
                    placeholder="YY"
                    value={expYear}
                    onChange={(e) =>
                      setExpYear(e.target.value.replace(/\D/g, "").slice(0, 2))
                    }
                  />
                  {errors.expYear && (
                    <h4 className="error-msg">{errors.expYear}</h4>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="cvc">
                <label>CVC</label>
                <input
                  type="text"
                  placeholder="e.g. 123"
                  value={cvc}
                  onChange={(e) =>
                    setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
                  }
                />
                {errors.cvc && <h4 className="error-msg">{errors.cvc}</h4>}
              </div>
            </div>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}
