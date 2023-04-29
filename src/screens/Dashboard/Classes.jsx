import { NavLink } from "react-router-dom";

export default function Classes() {
  return (
    <div className="dashboard">
      <div className="dashboard__heading">
        <div className="dashboard__logo">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7833 0C11.2486 0.121486 11.6909 0.278946 12.0754 0.593276C13.3705 1.65421 13.167 3.76252 11.6838 4.5398C10.3593 5.23392 8.89259 4.77923 8.20201 3.4594C7.64648 2.39846 8.1165 0.922349 9.17567 0.348535C9.48174 0.182819 9.80433 0.0861017 10.1346 0C10.351 0 10.5674 0 10.7833 0Z"
              fill="#F13A51"
            />
            <path
              d="M5.91691 13.7292C6.63108 13.7292 7.34584 13.7303 8.06002 13.7292C9.14454 13.7274 9.81507 14.3012 10.0215 15.3728C10.2267 16.4366 10.0993 17.5088 10.1359 18.5762C10.1489 18.9489 10.1253 19.3234 10.1424 19.6961C10.1536 19.9314 10.0934 20.0181 9.83807 20.0164C8.11899 20.0051 6.39932 20.011 4.67964 20.0105C3.22535 20.0099 1.77106 20.0034 0.317354 20.0122C0.0808689 20.0134 -0.00287379 19.9633 7.48999e-05 19.7067C0.0142286 18.5768 -0.00405326 17.4469 0.00774149 16.3169C0.017767 15.3728 0.339174 14.5701 1.1477 14.0164C1.41309 13.8347 1.70501 13.7315 2.02995 13.7315C2.79425 13.7321 3.55796 13.7315 4.337 13.702C3.56032 13.3883 2.9122 12.9442 2.51589 12.1811C2.11369 11.4062 2.08716 10.6254 2.39677 9.82333C2.84438 8.66332 4.11526 7.9055 5.39381 8.02994C6.69949 8.15673 7.80761 9.13393 8.01107 10.3376C8.26525 11.8337 7.58174 12.923 5.91691 13.7292Z"
              fill="#F13A51"
            />
            <path
              d="M17.4794 13.7308C17.9742 13.7308 18.469 13.7302 18.9644 13.7314C19.2297 13.732 19.4951 13.7261 19.7599 13.7403C20.8203 13.7957 21.3381 14.3848 21.5639 15.3644C21.6547 15.7578 21.6695 16.1629 21.673 16.5645C21.6825 17.6255 21.6713 18.6864 21.6807 19.7473C21.6825 19.9543 21.6205 20.0133 21.4141 20.0133C18.2413 20.008 15.0686 20.0086 11.8958 20.0157C11.6699 20.0162 11.6174 19.9443 11.6192 19.7279C11.6292 18.5785 11.6092 17.4291 11.6268 16.2803C11.641 15.3762 11.9282 14.5854 12.699 14.034C12.9691 13.8405 13.2663 13.7302 13.6036 13.7314C14.3679 13.7344 15.1317 13.732 15.9939 13.732C14.2341 12.983 13.3678 11.8036 13.9345 9.94943C14.3166 8.6986 15.5403 7.95553 16.8631 8.02276C18.1464 8.08763 19.2339 8.98167 19.5529 10.2449C19.7469 11.011 19.5954 11.7298 19.1879 12.3892C18.7874 13.0361 18.1871 13.4436 17.4794 13.7308Z"
              fill="#F13A51"
            />
            <path
              d="M10.4779 4.89527C11.2734 4.89586 12.069 4.89822 12.8645 4.89468C13.4354 4.89232 13.952 5.06157 14.3926 5.4166C14.5518 5.54516 14.6656 5.51744 14.8107 5.43606C15.3692 5.12114 15.6546 4.60335 15.8522 4.02482C16.0367 3.48285 16.1246 2.92201 16.1553 2.35114C16.1647 2.17481 16.1777 1.9973 16.2072 1.82392C16.3009 1.27664 16.7285 0.957592 17.3094 0.990618C17.8307 1.02069 18.2754 1.44059 18.2689 1.96074C18.253 3.29059 18.0419 4.58094 17.3572 5.75039C16.6766 6.91217 15.667 7.5827 14.3188 7.71185C14.1484 7.72837 14.0222 7.78734 13.9066 7.8988C13.3357 8.44961 12.9212 9.09597 12.7419 9.87383C12.6965 10.0702 12.6363 10.1486 12.4193 10.1463C11.4468 10.1333 10.4738 10.1369 9.50127 10.1445C9.31669 10.1457 9.23176 10.1009 9.1781 9.90509C8.77236 8.42779 7.81757 7.46122 6.37508 6.97822C6.16159 6.90686 6.13034 6.81663 6.15982 6.62025C6.28898 5.76395 6.91764 4.85811 8.09003 4.88996C8.88618 4.91237 9.68232 4.89527 10.4779 4.89527Z"
              fill="#F13A51"
            />
          </svg>
          <div className="dashboard__title">Classes</div>   </div>
     
        <NavLink to="/dashboard/reports" className="dashboard__headerbutton">
          Add Student
        </NavLink>
      </div>
      <div className="classes__content">
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
      </div>
      <div className="classes__content">
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
      </div>
      <div className="classes__content">
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
        <div className="classes__content__card">
          <div className="classes__content__card__name">Ten</div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              Sections
            </div>
            <div className="classes__content__card__info__number">6</div>
          </div>
          <div className="classes__content__card__info">
            <div className="classes__content__card__info__heading">
              T.Students
            </div>
            <div className="classes__content__card__info__number">129</div>
          </div>
        </div>
      </div>
    </div>
  );
}
