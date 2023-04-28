import { Edit2, Trash2 } from "react-feather";
import { NavLink } from "react-router-dom";

export default function Staff() {
  return (
    <div className="dashboard">
      <div className="dashboard__heading">
        <div className="dashboard__logo">
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1922 0.887695C14.3214 0.91335 16.791 3.32963 16.7944 6.46897C16.7978 9.65827 14.3133 12.0536 11.1935 12.0455C8.14332 12.0374 5.64333 9.72241 5.6251 6.5034C5.60687 3.31343 8.10214 0.933604 11.1922 0.887695Z"
              fill="#F13A51"
            />
            <path
              d="M16.1451 24.7226C14.942 24.7226 13.7389 24.7233 12.5365 24.7226C12.1342 24.7226 12.1321 24.7159 12.3023 24.3723C14.009 20.9291 15.7171 17.4866 17.4157 14.0394C17.5372 13.793 17.6797 13.689 17.9571 13.7052C18.5621 13.7397 19.1697 13.6749 19.7753 13.7633C21.054 13.9503 21.8817 14.6882 22.3495 15.8596C22.5257 16.3004 22.577 16.7676 22.5743 17.2443C22.5662 18.683 22.5764 20.1223 22.5696 21.561C22.5649 22.4475 22.3097 23.2434 21.6481 23.8686C21.0803 24.4053 20.4092 24.7132 19.6193 24.7172C18.4615 24.7233 17.3036 24.7186 16.1458 24.7186C16.1451 24.7206 16.1451 24.722 16.1451 24.7226Z"
              fill="#F13A51"
            />
            <path
              d="M6.42816 24.7234C5.29192 24.7234 4.15568 24.739 3.01944 24.7194C1.7232 24.6971 0.816502 24.0544 0.262222 22.8972C0.0590092 22.4726 0.0124254 22.0108 0.00972491 21.551C-0.000401999 19.9982 -0.00580302 18.4461 0.00972491 16.8933C0.0232275 15.5485 0.609913 14.5479 1.85687 13.9754C2.28423 13.779 2.74196 13.7317 3.20375 13.7195C3.63111 13.7087 4.05914 13.731 4.48582 13.7114C4.74912 13.6993 4.89089 13.7985 5.00769 14.0308C5.8624 15.7334 6.72859 17.4307 7.5914 19.13C8.48527 20.8901 9.37374 22.6528 10.2798 24.4075C10.429 24.6971 10.352 24.7342 10.0732 24.7322C8.85794 24.7234 7.64339 24.7282 6.42816 24.7282C6.42816 24.7261 6.42816 24.7248 6.42816 24.7234Z"
              fill="#F13A51"
            />
            <path
              d="M11.1859 22.2482C10.55 20.9094 9.92614 19.597 9.30232 18.2845C9.12476 17.9105 8.96341 17.5277 8.76627 17.1638C8.66568 16.9781 8.68255 16.864 8.83648 16.7297C9.57237 16.0883 10.3049 15.4429 11.0327 14.7928C11.169 14.6712 11.2629 14.6807 11.3966 14.8009C12.1156 15.4443 12.842 16.0802 13.5678 16.7162C13.6832 16.8175 13.7811 16.9059 13.696 17.0841C12.8778 18.7888 12.0649 20.4956 11.2494 22.2016C11.246 22.2097 11.2332 22.2138 11.1859 22.2482Z"
              fill="#F13A51"
            />
          </svg>
        </div>
        <div className="dashboard__title">Staff</div>
        <div className="dashboard__left__textbox__textbox__area">
          <div className="dashboard__left__textbox__textbox__area__svg">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.75444"
                cy="9.50004"
                r="6.04545"
                stroke="#ED5F5F"
                strokeWidth="2.07273"
              />
              <path
                d="M9.75302 6.90869C9.41278 6.90869 9.07586 6.97571 8.76152 7.10591C8.44718 7.23612 8.16156 7.42696 7.92097 7.66755C7.68038 7.90814 7.48954 8.19376 7.35933 8.5081C7.22913 8.82245 7.16211 9.15936 7.16211 9.4996"
                stroke="#ED5F5F"
                strokeWidth="2.07273"
                stroke-linecap="round"
              />
              <path
                d="M17.5265 17.2725L14.9355 14.6816"
                stroke="#ED5F5F"
                strokeWidth="2.07273"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <input
            type="text"
            className="dashboard__left__textbox__textbox__area__input"
            placeholder="Enter Family Name "
          />
        </div>
        <NavLink to="/dashboard/reports" className="dashboard__headerbutton">
          Add Student
        </NavLink>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry"></div>
          <div className="container__main__content__listing__table__header__entry">
            Teacher ID
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Role
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Pay ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Address
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry({}) {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <button className="container__main__content__listing__table__content__list__entry__button">
          <Edit2 size={20} color="currentColor" />
        </button>
        <button className="container__main__content__listing__table__content__list__entry__button">
          <Trash2 size={20} color="currentColor" />
        </button>
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        4543
      </div>

      <div className="container__main__content__listing__table__content__list__entry">
        Mehfooz ur Rehmaan
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Ijaaz Ahmed
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        24 - 11 - 1996
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Mehfooz ijaz@gmail.com
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        03001234567
      </div>

      <div className="container__main__content__listing__table__content__list__entry">
        Robert Robertson,...
      </div>
    </div>
  );
}
