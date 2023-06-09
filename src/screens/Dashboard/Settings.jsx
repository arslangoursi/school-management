import { Edit2, Trash2 } from "react-feather";
import AmountEntry from "../../components/AmountEntry";
import FinanceButtonEntry from "../../components/FinanceButtonEntry";
import ChangeClassFee from "../../models/ChangeClassFee";
import AddFunds from "../../models/AddFunds";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Settings() {
  const [isChangeClassFee, setIsChangeClassFee] = useState(false);
  const [isAddFunds, setIsAddFunds] = useState(false);
  return (
    <>
      {createPortal(
        isChangeClassFee && (
          <ChangeClassFee onClose={() => setIsChangeClassFee(false)} />
        ),
        document.body
      )}
      {createPortal(
        isAddFunds && <AddFunds onClose={() => setIsAddFunds(false)} />,
        document.body
      )}
      <div className="dashboard__heading">
        <div className="dashboard__logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6498 21.3091C18.1454 21.2536 17.6495 20.9629 17.1322 20.7577C15.8754 20.2575 14.9819 20.6166 14.4732 21.852C13.7037 23.7287 13.7037 23.7287 11.6518 23.7287C10.1556 23.7287 10.0444 23.6389 9.46305 22.2624C9.24076 21.7409 9.15099 21.1296 8.55678 20.8218C7.91127 20.4883 7.30851 20.437 6.60743 20.7491C4.79915 21.5571 4.78633 21.5271 3.40554 20.1464C3.23454 19.9754 3.06782 19.8001 2.89255 19.6334C2.43941 19.1931 2.31972 18.6886 2.58048 18.0987C2.73438 17.7481 2.87118 17.3933 3.01652 17.0385C3.50386 15.8458 3.13194 14.9652 1.94352 14.4736C0.0198247 13.6827 0.0711237 13.6784 0.00272546 11.6265C-0.0357485 10.4937 0.327617 9.78829 1.44336 9.45485C2.17009 9.23683 2.89683 8.96752 3.13194 8.07835C3.23454 7.68933 3.29439 7.34306 3.13194 6.96687C2.9353 6.50518 2.75148 6.03495 2.55483 5.57326C2.33681 5.05172 2.43086 4.58576 2.81988 4.18392C3.26874 3.72223 3.72615 3.26909 4.18357 2.81595C4.58113 2.42266 5.04282 2.32007 5.56863 2.53381C5.92345 2.67916 6.27399 2.8245 6.6288 2.96558C7.88562 3.47429 8.78335 3.12802 9.29206 1.8883C10.0402 0.0714737 9.90337 -0.0225688 12.1648 0.00308049C13.5926 0.02018 13.6952 0.0885778 14.2766 1.40524C14.5288 1.9738 14.6271 2.62786 15.3325 2.93993C15.9951 3.23062 16.5679 3.23917 17.2305 2.9442C18.9619 2.17472 18.9704 2.19609 20.2913 3.51703C20.4495 3.6752 20.5949 3.83765 20.7616 3.983C21.3344 4.48744 21.4755 5.06882 21.125 5.76563C20.9796 6.05205 20.877 6.35984 20.7573 6.65908C20.2828 7.82612 20.6889 8.78797 21.8688 9.27531C23.7369 10.0448 23.6899 10.0448 23.7583 12.0967C23.7968 13.2296 23.4419 13.9392 22.3219 14.2684C21.5909 14.4821 20.8856 14.7728 20.6462 15.662C20.535 16.0724 20.4837 16.4315 20.6547 16.8248C20.8556 17.2865 21.0395 17.7524 21.2233 18.2227C21.3943 18.6544 21.3515 19.0734 21.0437 19.4111C20.5265 19.9711 19.975 20.5054 19.4278 21.0355C19.2483 21.2236 18.9918 21.2963 18.6498 21.3091ZM16.5636 11.883C16.5679 9.30096 14.5202 7.20627 11.9681 7.18917C9.34336 7.17207 7.26576 9.23256 7.23156 11.8787C7.19736 14.3667 9.34763 16.4999 11.9083 16.5213C14.4262 16.5512 16.5594 14.4266 16.5636 11.883Z"
              fill="#F13A51"
            />
          </svg>
          <div className="dashboard__title">Settings</div>{" "}
        </div>
      </div>
      <div className="setting__content">
        <div
          className="setting__content__entries"
          onClick={() => setIsChangeClassFee(true)}
        >
          <div className="setting__content__entry">
            <div className="setting__content__entry__heading">
              Change Classes Fee
            </div>
            <div className="setting__content__entry__subheading">
              Click here to Change Classes Fee{" "}
            </div>
          </div>
        </div>
        <div
          className="setting__content__entries"
          onClick={() => setIsAddFunds(true)}
        >
          {" "}
          <div className="setting__content__entry">
            <div className="setting__content__entry__heading">
              Add Extra Fund{" "}
            </div>
            <div className="setting__content__entry__subheading">
              Click here to Change Staff Pay{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
