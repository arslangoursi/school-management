import { NavLink } from "react-router-dom";

export default function ConfirmClass() {
  return (
    <>
      <div className="model__container">
        <div className="model__content">
          <div className="add__school__header">
            <div
              className="add__school__header__svg"
              // style={{ backgroundColor: "red" }}
            >
              <svg
                width="62"
                height="60"
                viewBox="0 0 62 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.0046C0 5.82236 5.82236 0 13.0046 0H48.7673C55.9496 0 61.7719 5.82236 61.7719 13.0046V46.5999C61.7719 53.7821 55.9495 59.6045 48.7673 59.6045H13.0046C5.82235 59.6045 0 53.7821 0 46.5999V13.0046Z"
                  fill="#F13A51"
                />
                <path
                  d="M30.9238 43.6097H16.856C16.7877 43.6097 16.7176 43.6097 16.6494 43.6097C16.5313 43.6097 16.4649 43.5733 16.476 43.4627C16.476 43.4016 16.476 43.3389 16.476 43.2778C16.476 38.2306 16.4907 33.1834 16.4667 28.1362C16.4471 27.5659 16.5814 26.9999 16.8582 26.486C17.1351 25.9721 17.5463 25.5255 18.0571 25.1841C19.0054 24.5072 20.105 24.1175 21.2691 23.8517C22.5598 23.5649 23.8914 23.4536 25.2192 23.5215C26.7836 23.5667 28.3214 23.8958 29.7393 24.489C30.1136 24.652 30.47 24.846 30.8038 25.0685C30.8377 25.0959 30.8818 25.1111 30.9274 25.1111C30.9731 25.1111 31.0172 25.0959 31.0511 25.0685C32.2355 24.3025 33.5823 23.9128 35.0048 23.685C35.973 23.5344 36.9566 23.479 37.9383 23.5199C39.5094 23.5515 41.0567 23.8712 42.4842 24.4593C43.3882 24.8457 44.189 25.3558 44.7627 26.1103C45.1702 26.638 45.3854 27.2654 45.3789 27.9067V43.3356C45.3789 43.6146 45.3789 43.6146 45.0708 43.6146L30.9238 43.6097ZM32.5473 34.0056C32.5473 36.0232 32.5473 38.0396 32.5473 40.055C32.5473 40.2349 32.5473 40.2316 32.7226 40.1507C33.3924 39.849 34.1049 39.6301 34.8406 39.5002C36.0533 39.2735 37.2978 39.2144 38.5305 39.3252C39.6927 39.4122 40.8284 39.6833 41.8846 40.126C42.1115 40.225 42.1115 40.2267 42.1115 39.9939C42.1115 35.9951 42.1115 31.9963 42.1115 27.9975C42.1142 27.9192 42.0976 27.8413 42.0629 27.7694C42.0281 27.6975 41.9761 27.6333 41.9104 27.5814C41.6169 27.3415 41.2784 27.1498 40.9105 27.0151C40.079 26.7045 39.1967 26.5165 38.298 26.4587C37.0047 26.3448 35.699 26.4535 34.4513 26.779C33.8602 26.9212 33.3073 27.1689 32.8259 27.5071C32.7307 27.5709 32.6541 27.6544 32.6027 27.7504C32.5513 27.8464 32.5266 27.9522 32.5307 28.0586C32.5547 30.0415 32.5547 32.0244 32.5547 34.0056H32.5473ZM29.2873 33.9808C29.2873 31.9996 29.2873 30.0183 29.2873 28.0371C29.2919 27.9367 29.2693 27.8369 29.2214 27.746C29.1736 27.6552 29.1018 27.576 29.0124 27.5154C28.7696 27.3363 28.5016 27.1865 28.2154 27.0696C27.3516 26.7249 26.4266 26.5192 25.483 26.462C24.1904 26.3476 22.8853 26.4557 21.6381 26.7807C21.0468 26.9231 20.4938 27.1713 20.0127 27.5104C19.9162 27.5766 19.8394 27.663 19.7892 27.7621C19.739 27.8612 19.7169 27.9698 19.7249 28.0784C19.7323 32.0321 19.7323 35.9857 19.7249 39.9394C19.7249 39.979 19.7249 40.0187 19.7249 40.0583C19.7249 40.1838 19.7581 40.2234 19.8983 40.1557C20.2478 39.988 20.6149 39.8514 20.9942 39.7479C22.9134 39.2118 24.9538 39.1231 26.9221 39.4903C27.6842 39.6155 28.4223 39.8379 29.1139 40.1507C29.2412 40.2102 29.2836 40.1838 29.2781 40.0616C29.2781 40.0121 29.2781 39.9609 29.2781 39.9097L29.2873 33.9808Z"
                  fill="white"
                />
                <path
                  d="M30.9245 14.7744C31.0001 14.8008 31.0758 14.8256 31.1496 14.8553L35.9796 16.7755L45.6748 20.6306C46.0955 20.7957 46.0438 20.733 45.8759 21.0781C45.5254 21.8012 45.1583 22.5178 44.8077 23.2409C44.7339 23.3912 44.6601 23.4143 44.4959 23.3482C42.0717 22.3785 39.6455 21.4127 37.2176 20.4507C35.1771 19.6384 33.1366 18.8261 31.0961 18.0137C31.0432 17.9906 30.9852 17.9785 30.9263 17.9785C30.8675 17.9785 30.8094 17.9906 30.7566 18.0137L22.5632 21.2745C20.8105 21.9713 19.0571 22.6686 17.3032 23.3664C17.1851 23.4126 17.1187 23.4011 17.0689 23.2905C16.679 22.498 16.2854 21.706 15.8881 20.9146C15.8272 20.7924 15.8734 20.7495 15.9933 20.6983C17.4545 20.1205 18.9151 19.541 20.375 18.9598L28.0021 15.9301L30.7787 14.8239C30.823 14.8058 30.871 14.7926 30.9245 14.7744Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="add__school__header__heading">
              Welcome to the <span>Horizon School System</span>
            </div>
            <div className="school__header__sub__heading">
              Hello Education School
            </div>
          </div>
          <div className="signal__input__entry__wraper">
            <div className="signal__input__entry__wraper__conf__heading">
              Class Name
            </div>
            <div className="signal__input__entry__wraper__conf__heading">
              Class Fee
            </div>
            <div className="signal__input__entry__wraper__conf__heading">
              Class Section
            </div>
          </div>
          <div className="signal__input__entry__wraper">
            <div className="signal__input__entry__wraper__confclass">One</div>
            <div className="signal__input__entry__wraper__confclass">2300</div>
            <div className="signal__input__entry__wraper__confclass">5</div>
            <div className="signal__input__entry__wraper__svg">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0904 9.28084C9.92879 9.51072 9.8354 9.74418 9.65941 9.8663C9.30023 10.1249 8.98415 9.93814 8.71477 9.66875C7.78092 8.74208 6.80037 7.85492 5.93475 6.86718C5.24154 6.077 4.75306 6.14165 4.09218 6.89592C3.26248 7.83696 2.33222 8.6882 1.43787 9.57178C1.0787 9.92736 0.694378 10.247 0.231041 9.72622C-0.149685 9.29521 0.130472 8.94681 0.428588 8.63792C1.34808 7.69688 2.24243 6.72351 3.21938 5.85072C3.94492 5.20061 3.88027 4.75164 3.19424 4.13745C2.30708 3.34008 1.48097 2.47087 0.654868 1.60167C0.31006 1.24249 -0.293356 0.861766 0.263367 0.265534C0.830865 -0.341472 1.22237 0.233209 1.58873 0.592384C2.49026 1.46877 3.40615 2.33079 4.24663 3.26465C4.84286 3.92553 5.2595 3.86088 5.83059 3.23951C6.71776 2.26974 7.68035 1.3682 8.6142 0.441531C8.97338 0.0859466 9.3577 -0.23372 9.82103 0.287085C10.2018 0.718096 9.9216 1.0665 9.62349 1.37539C8.704 2.31643 7.80965 3.28979 6.83269 4.16259C6.10356 4.8127 6.1754 5.26526 6.86143 5.87586C7.75218 6.66964 8.5711 7.54962 9.40439 8.40446C9.64145 8.65229 9.8354 8.9504 10.0904 9.28084Z"
                  fill="#090909"
                />
              </svg>
            </div>
          </div>
          <div className="signal__input__entry__wraper">
            <div className="signal__input__entry__wraper__confclass">Two</div>
            <div className="signal__input__entry__wraper__confclass">3300</div>
            <div className="signal__input__entry__wraper__confclass">5</div>
            <div className="signal__input__entry__wraper__svg">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0904 9.28084C9.92879 9.51072 9.8354 9.74418 9.65941 9.8663C9.30023 10.1249 8.98415 9.93814 8.71477 9.66875C7.78092 8.74208 6.80037 7.85492 5.93475 6.86718C5.24154 6.077 4.75306 6.14165 4.09218 6.89592C3.26248 7.83696 2.33222 8.6882 1.43787 9.57178C1.0787 9.92736 0.694378 10.247 0.231041 9.72622C-0.149685 9.29521 0.130472 8.94681 0.428588 8.63792C1.34808 7.69688 2.24243 6.72351 3.21938 5.85072C3.94492 5.20061 3.88027 4.75164 3.19424 4.13745C2.30708 3.34008 1.48097 2.47087 0.654868 1.60167C0.31006 1.24249 -0.293356 0.861766 0.263367 0.265534C0.830865 -0.341472 1.22237 0.233209 1.58873 0.592384C2.49026 1.46877 3.40615 2.33079 4.24663 3.26465C4.84286 3.92553 5.2595 3.86088 5.83059 3.23951C6.71776 2.26974 7.68035 1.3682 8.6142 0.441531C8.97338 0.0859466 9.3577 -0.23372 9.82103 0.287085C10.2018 0.718096 9.9216 1.0665 9.62349 1.37539C8.704 2.31643 7.80965 3.28979 6.83269 4.16259C6.10356 4.8127 6.1754 5.26526 6.86143 5.87586C7.75218 6.66964 8.5711 7.54962 9.40439 8.40446C9.64145 8.65229 9.8354 8.9504 10.0904 9.28084Z"
                  fill="#090909"
                />
              </svg>
            </div>
          </div>
          <div className="signal__input__entry__wraper">
            <div className="signal__input__entry__wraper__confclass">Three</div>
            <div className="signal__input__entry__wraper__confclass">4500</div>
            <div className="signal__input__entry__wraper__confclass">5</div>
            <div className="signal__input__entry__wraper__svg">
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0904 9.28084C9.92879 9.51072 9.8354 9.74418 9.65941 9.8663C9.30023 10.1249 8.98415 9.93814 8.71477 9.66875C7.78092 8.74208 6.80037 7.85492 5.93475 6.86718C5.24154 6.077 4.75306 6.14165 4.09218 6.89592C3.26248 7.83696 2.33222 8.6882 1.43787 9.57178C1.0787 9.92736 0.694378 10.247 0.231041 9.72622C-0.149685 9.29521 0.130472 8.94681 0.428588 8.63792C1.34808 7.69688 2.24243 6.72351 3.21938 5.85072C3.94492 5.20061 3.88027 4.75164 3.19424 4.13745C2.30708 3.34008 1.48097 2.47087 0.654868 1.60167C0.31006 1.24249 -0.293356 0.861766 0.263367 0.265534C0.830865 -0.341472 1.22237 0.233209 1.58873 0.592384C2.49026 1.46877 3.40615 2.33079 4.24663 3.26465C4.84286 3.92553 5.2595 3.86088 5.83059 3.23951C6.71776 2.26974 7.68035 1.3682 8.6142 0.441531C8.97338 0.0859466 9.3577 -0.23372 9.82103 0.287085C10.2018 0.718096 9.9216 1.0665 9.62349 1.37539C8.704 2.31643 7.80965 3.28979 6.83269 4.16259C6.10356 4.8127 6.1754 5.26526 6.86143 5.87586C7.75218 6.66964 8.5711 7.54962 9.40439 8.40446C9.64145 8.65229 9.8354 8.9504 10.0904 9.28084Z"
                  fill="#090909"
                />
              </svg>
            </div>
          </div>
          <div className="add__section__btn__wraper">
            <div className="add__section__btn__entry">Add Section</div>
          </div>
          <div className="add__school__button">
            <button className="add__school__button__entry">
              <NavLink
                className="add__school__button__entry__text"
                to="/dashboard"
              >
                Continue
              </NavLink>
              <div className="add__school__button__entry__svg">
                <svg width="19" height="14" viewBox="0 0 19 14" fill="none">
                  <path
                    d="M18.5972 7.59725C18.9271 7.2674 18.9271 6.7326 18.5972 6.40275L13.222 1.0275C12.8921 0.69765 12.3574 0.69765 12.0275 1.0275C11.6977 1.35735 11.6977 1.89215 12.0275 2.222L16.8055 7L12.0275 11.778C11.6977 12.1079 11.6977 12.6426 12.0275 12.9725C12.3574 13.3023 12.8921 13.3023 13.222 12.9725L18.5972 7.59725ZM1 6.15536C0.53352 6.15536 0.155361 6.53352 0.155361 7C0.155361 7.46648 0.53352 7.84464 1 7.84464V6.15536ZM18 6.15536L1 6.15536V7.84464L18 7.84464V6.15536Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
