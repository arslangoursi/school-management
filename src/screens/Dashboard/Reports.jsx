import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Reports() {
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
              d="M10.3914 26.2078C8.23057 26.1985 6.09193 26.0002 4.00018 25.4283C3.03829 25.1655 2.10473 24.8276 1.25978 24.2835C0.85998 24.0259 0.505 23.7188 0.244304 23.3128C-0.0916124 22.7894 -0.0102092 22.2103 0.0753155 21.6585C0.570947 18.456 2.38964 16.3797 5.47214 15.3972C5.9214 15.2539 6.29596 15.2653 6.72873 15.561C8.01521 16.4394 9.48613 16.6275 11.0112 16.5409C12.2786 16.4693 13.4259 16.07 14.4548 15.3286C14.5439 15.2642 14.6228 15.2436 14.7371 15.2673C17.3709 15.8135 19.2092 17.3297 20.2623 19.7976C20.6131 20.6193 20.7589 21.4869 20.794 22.3777C20.8166 22.9553 20.577 23.4045 20.1742 23.7894C19.507 24.4267 18.6888 24.8013 17.8372 25.1027C15.9958 25.7544 14.0844 26.0383 12.1415 26.1537C11.5583 26.1887 10.9756 26.2047 10.3914 26.2078Z"
              fill="#F13A51"
            />
            <path
              d="M3.45648 4.05246C3.42918 4.23485 3.44515 4.33171 3.58941 4.4126C3.86195 4.56664 3.89029 4.87783 3.64866 5.07309C3.53222 5.16738 3.52861 5.25651 3.53789 5.38119C3.63372 6.72486 3.71872 8.06904 3.8228 9.41167C3.86453 9.94904 3.63217 10.4148 3.48791 10.9048C3.47452 10.9511 3.44103 11.0104 3.3792 10.9934C3.30398 10.9728 3.29316 10.8919 3.26689 10.8306C2.9861 10.1685 2.92633 9.48689 2.99846 8.76921C3.11078 7.6512 3.16436 6.52753 3.24216 5.40644C3.25143 5.27145 3.25298 5.1612 3.11232 5.05403C2.90006 4.89226 2.93715 4.54861 3.17569 4.42187C3.32923 4.33995 3.35396 4.23536 3.3519 4.09317C3.34984 3.94633 3.2164 3.95973 3.13293 3.91696C3.01856 3.85823 2.89594 3.81701 2.78259 3.75725C2.65173 3.68873 2.52395 3.60784 2.52344 3.43473C2.52292 3.26162 2.6476 3.17609 2.78207 3.11427C3.13242 2.95404 3.48585 2.80051 3.8398 2.64749C5.73422 1.82676 7.62659 1.00139 9.52462 0.188908C10.0831 -0.0501487 10.6715 -0.0686963 11.23 0.169846C13.467 1.12556 15.6963 2.09931 17.9287 3.06687C17.9761 3.08748 18.024 3.10654 18.0683 3.1323C18.3708 3.31211 18.3708 3.5728 18.0555 3.73922C17.821 3.86287 17.5722 3.95921 17.329 4.06535C16.8267 4.28482 16.3264 4.50997 15.8184 4.71657C15.6695 4.77736 15.635 4.86134 15.6366 5.00663C15.6427 5.60737 15.6438 6.20862 15.6376 6.80935C15.635 7.06644 15.7561 7.28953 15.8081 7.53167C16.278 9.71307 15.6448 11.5998 14.2465 13.2649C13.4407 14.2248 12.4278 14.8878 11.179 15.1135C9.84611 15.3541 8.63022 15.0125 7.57249 14.1954C5.78626 12.8157 4.86713 10.9825 4.846 8.71614C4.84188 8.28543 4.89289 7.85471 5.03302 7.44873C5.16801 7.05665 5.17831 6.66149 5.17368 6.25808C5.16904 5.86343 5.16337 5.46775 5.17677 5.07361C5.18347 4.87783 5.13555 4.77015 4.93462 4.69184C4.44053 4.49864 3.96036 4.27246 3.45648 4.05246Z"
              fill="#F13A51"
            />
          </svg>
        </div>
        <div className="dashboard__title">Student Add Student</div>
        <NavLink to="/dashboard/reports" className="dashboard__headerbutton">
          Add Student
        </NavLink>
      </div>
      <div className="addstudent__form">
        <div className="addstudent__form__content">
          <div className="addstudent__form__content__allheading">
            <div className="addstudent__form__content__heading">
              Fill out the following admission form to add a student
            </div>
            <button className="addstudent__form__content__all__button">
              Add Student
            </button>
          </div>
          <div className="addstudent__form__content__all">
            <div className="addstudent__form__content__left">
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Name"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Father/Guardian Name"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Name"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="DOB"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Family ID"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Class"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Date of admission"
              />
            </div>
            <div className="addstudent__form__content__mid">
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Phone No."
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Name"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Father/Guardian Name"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Address"
              />

              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Status"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Section"
              />
              <input
                type="text"
                className="addstudent__form__content__input"
                placeholder="Notes"
              />
            </div>
            <div className="addstudent__form__content__right">
              <ImageUploader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageUploader({}) {
  const [file, setFile] = useState(null);
  console.log(file);
  return (
    <div className="addstudent__form__content__right__file__picker">
      <input
        type="file"
        name="file"
        accept="image/"
        id="file"
        onChange={(e) => {
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
        onAbort={(e) => {
          setFile(null);
        }}
        className="addstudent__form__content__right__file__picker__input"
      />
      {file === null || undefined ? (
        <div className="addstudent__form__content__right__file__picker__empty">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-camera"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          Upload Image
        </div>
      ) : (
        <img
          className="addstudent__form__content__right__file__picker__file"
          src={file}
        />
      )}
    </div>
  );
}
