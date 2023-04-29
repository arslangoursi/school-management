import React from "react";
export default function AddExpense({ onClose }) {
  return (
    <>
      <div className="model__container">
        <div className="model__content">
          <div className="signal__input__entry__wraper__svg" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 11 10" fill="none">
              <path
                d="M10.0904 9.28084C9.92879 9.51072 9.8354 9.74418 9.65941 9.8663C9.30023 10.1249 8.98415 9.93814 8.71477 9.66875C7.78092 8.74208 6.80037 7.85492 5.93475 6.86718C5.24154 6.077 4.75306 6.14165 4.09218 6.89592C3.26248 7.83696 2.33222 8.6882 1.43787 9.57178C1.0787 9.92736 0.694378 10.247 0.231041 9.72622C-0.149685 9.29521 0.130472 8.94681 0.428588 8.63792C1.34808 7.69688 2.24243 6.72351 3.21938 5.85072C3.94492 5.20061 3.88027 4.75164 3.19424 4.13745C2.30708 3.34008 1.48097 2.47087 0.654868 1.60167C0.31006 1.24249 -0.293356 0.861766 0.263367 0.265534C0.830865 -0.341472 1.22237 0.233209 1.58873 0.592384C2.49026 1.46877 3.40615 2.33079 4.24663 3.26465C4.84286 3.92553 5.2595 3.86088 5.83059 3.23951C6.71776 2.26974 7.68035 1.3682 8.6142 0.441531C8.97338 0.0859466 9.3577 -0.23372 9.82103 0.287085C10.2018 0.718096 9.9216 1.0665 9.62349 1.37539C8.704 2.31643 7.80965 3.28979 6.83269 4.16259C6.10356 4.8127 6.1754 5.26526 6.86143 5.87586C7.75218 6.66964 8.5711 7.54962 9.40439 8.40446C9.64145 8.65229 9.8354 8.9504 10.0904 9.28084Z"
                fill="#090909"
              />
            </svg>
          </div>
          <div className="add__class__heading">Add Custom Expense</div>
          <div className="input__multi__entry__wraper">
            <input
              className="input__multi__entry"
              type="text"
              placeholder="Expense Name"
            />
            <input
              className="input__multi__entry"
              type="text"
              placeholder="Expense Amount"
            />
          </div>
          <div className="input__multi__entry__wraper">
            <select className="input__multi__entry" placeholder="Month">
              <option value="volvo">Month</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select className="input__multi__entry" placeholder="Month">
              <option value="volvo">Year</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="add__school__button">
            <button className="add__school__button__entry">
              <div className="add__school__button__entry__text">Pay Now</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
