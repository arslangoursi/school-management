import { Edit2, Trash2 } from "react-feather";
import { Link, NavLink } from "react-router-dom";

export default function Student() {
  return (
    <div className="dashboard">
      <div className="dashboard__heading">
        <div className="dashboard__logo">
          <svg
            width="21"
            height="27"
            viewBox="0 0 21 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3914 26.7767C8.23057 26.7674 6.09193 26.569 4.00018 25.9971C3.03829 25.7344 2.10473 25.3964 1.25978 24.8523C0.85998 24.5947 0.505 24.2877 0.244304 23.8817C-0.0916124 23.3582 -0.0102092 22.7791 0.0753155 22.2274C0.570947 19.0248 2.38964 16.9485 5.47214 15.966C5.9214 15.8228 6.29596 15.8341 6.72873 16.1298C8.01521 17.0083 9.48613 17.1963 11.0112 17.1098C12.2786 17.0382 13.4259 16.6389 14.4548 15.8975C14.5439 15.8331 14.6228 15.8125 14.7371 15.8362C17.3709 16.3823 19.2092 17.8986 20.2623 20.3664C20.6131 21.1882 20.7589 22.0558 20.794 22.9466C20.8166 23.5241 20.577 23.9734 20.1742 24.3583C19.507 24.9956 18.6888 25.3701 17.8372 25.6715C15.9958 26.3233 14.0844 26.6071 12.1415 26.7226C11.5583 26.7576 10.9756 26.7736 10.3914 26.7767Z"
              fill="#F13A51"
            />
            <path
              d="M3.45648 4.62082C3.42918 4.80321 3.44515 4.90007 3.58941 4.98096C3.86195 5.135 3.89029 5.44619 3.64866 5.64145C3.53222 5.73574 3.52861 5.82487 3.53789 5.94955C3.63372 7.29322 3.71872 8.6374 3.8228 9.98003C3.86453 10.5174 3.63217 10.9831 3.48791 11.4731C3.47452 11.5195 3.44103 11.5787 3.3792 11.5617C3.30398 11.5411 3.29316 11.4602 3.26689 11.3989C2.9861 10.7369 2.92633 10.0553 2.99846 9.33757C3.11078 8.21956 3.16436 7.09589 3.24216 5.97479C3.25143 5.83981 3.25298 5.72955 3.11232 5.62239C2.90006 5.46062 2.93715 5.11697 3.17569 4.99023C3.32923 4.90831 3.35396 4.80372 3.3519 4.66153C3.34984 4.51469 3.2164 4.52809 3.13293 4.48532C3.01856 4.42659 2.89594 4.38537 2.78259 4.32561C2.65173 4.25709 2.52395 4.1762 2.52344 4.00309C2.52292 3.82998 2.6476 3.74445 2.78207 3.68263C3.13242 3.5224 3.48585 3.36887 3.8398 3.21585C5.73422 2.39512 7.62659 1.56975 9.52462 0.757268C10.0831 0.518211 10.6715 0.499663 11.23 0.738205C13.467 1.69392 15.6963 2.66766 17.9287 3.63523C17.9761 3.65584 18.024 3.6749 18.0683 3.70066C18.3708 3.88047 18.3708 4.14116 18.0555 4.30758C17.821 4.43123 17.5722 4.52757 17.329 4.6337C16.8267 4.85318 16.3264 5.07833 15.8184 5.28493C15.6695 5.34572 15.635 5.4297 15.6366 5.57499C15.6427 6.17573 15.6438 6.77698 15.6376 7.37771C15.635 7.6348 15.7561 7.85789 15.8081 8.10003C16.278 10.2814 15.6448 12.1681 14.2465 13.8333C13.4407 14.7931 12.4278 15.4562 11.179 15.6819C9.84611 15.9225 8.63022 15.5809 7.57249 14.7638C5.78626 13.384 4.86713 11.5509 4.846 9.2845C4.84188 8.85378 4.89289 8.42307 5.03302 8.01709C5.16801 7.62501 5.17831 7.22985 5.17368 6.82644C5.16904 6.43179 5.16337 6.0361 5.17677 5.64197C5.18347 5.44619 5.13555 5.33851 4.93462 5.2602C4.44053 5.067 3.96036 4.84082 3.45648 4.62082Z"
              fill="#F13A51"
            />
          </svg>
        </div>
        <div className="dashboard__title">Students</div>
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
                strokeLinecap="round"
              />
              <path
                d="M17.5265 17.2725L14.9355 14.6816"
                stroke="#ED5F5F"
                strokeWidth="2.07273"
                strokeLinecap="round"
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
            Student ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Family ID
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Father/Guardian
          </div>
          <div className="container__main__content__listing__table__header__entry">
            DOB
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Class
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Section
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Fee
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Address
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Note
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
        5
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        A
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        3400
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Active
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Robert Robertson,...
      </div>
      <div className="container__main__content__listing__table__content__list__entry">
        Note
      </div>
    </div>
  );
}
