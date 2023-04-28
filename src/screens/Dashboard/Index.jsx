import React from "react";
import Select from "react-select";
import CountUp from "react-countup";

export default function Index() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__heading">
          <div className="dashboard__logo">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3699 17.0852C20.3699 18.56 20.3699 20.0387 20.3699 21.5136C20.3699 21.7594 20.3699 21.7594 20.1225 21.7594C18.1056 21.7594 16.0849 21.7594 14.068 21.7594C13.8206 21.7594 13.8206 21.7594 13.8206 21.5136C13.8206 20.0695 13.8206 18.6292 13.8206 17.185C13.8206 16.801 13.7407 16.4361 13.558 16.0981C13.3449 15.6948 13.0176 15.426 12.5876 15.2877C12.0853 15.1264 11.5715 15.1149 11.0654 15.2685C10.2777 15.5028 9.76773 16.1749 9.75631 17.0353C9.74109 18.4755 9.7487 19.9197 9.7487 21.3638C9.7487 21.8093 9.79817 21.7594 9.36054 21.7594C7.39309 21.7594 5.42564 21.7594 3.45819 21.7594C3.19942 21.7594 3.19942 21.7594 3.19942 21.4944C3.19942 18.5524 3.19942 15.6103 3.19942 12.6683C3.19942 12.4225 3.19942 12.4225 2.95967 12.4225C2.40787 12.4225 1.85988 12.4225 1.30808 12.4225C1.02267 12.4225 0.744865 12.3841 0.474674 12.2804C0.0712902 12.1268 -0.0809301 11.8272 0.0408462 11.4085C0.139789 11.0667 0.341481 10.7787 0.585034 10.529C3.89202 7.18755 7.19901 3.84993 10.5098 0.51231C11.1948 -0.179027 12.3821 -0.167504 13.0785 0.527673C13.9157 1.36496 14.7491 2.20993 15.5825 3.05105C17.9876 5.47841 20.3927 7.90577 22.7978 10.337C23.0604 10.602 23.2925 10.89 23.4561 11.228C23.5208 11.3625 23.5665 11.5007 23.5741 11.6544C23.5817 11.9078 23.4714 12.0922 23.2506 12.2113C22.9919 12.3534 22.7027 12.4071 22.4134 12.411C21.8122 12.4225 21.2109 12.4148 20.6096 12.4187C20.3737 12.4187 20.3737 12.4187 20.3737 12.6645C20.3699 14.1432 20.3699 15.6142 20.3699 17.0852Z"
                fill="#F13A51"
              />
            </svg>
          </div>
          <div className="dashboard__title">Dashboard</div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__left">
            <div className="dashboard__left__Cards">
              <div className="dashboard__left__card">
                <div className="dashboard__left__card__heading">
                  <div className="dashboard__left__card__heading__name">
                    Total Students
                  </div>
                  <div className="dashboard__left__card__heading__number">
                    <CountUp end={2400} />
                  </div>
                </div>
                <div className="dashboard__left__card__svg">
                  <svg
                    width="124"
                    height="123"
                    viewBox="0 0 124 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M55.3065 110.215C46.1649 113.834 37.0217 117.453 27.8802 121.072C25.8735 121.867 25.002 121.462 24.1199 119.422C21.4191 113.164 19.4428 106.69 18.7324 99.8596C18.2605 95.3223 18.4005 90.8259 20.1908 86.5445C21.1681 84.2042 22.6556 82.2659 24.6769 80.7881C25.8759 79.9134 26.6708 79.9101 27.8748 80.8094C31.8087 83.7421 36.1784 85.1661 41.0299 84.7083C47.9342 84.0569 52.3384 79.875 55.2616 73.7106C55.9012 72.3609 56.256 70.9049 56.589 69.4444C56.9402 67.9049 57.4936 67.3707 59.0332 67.2048C62.9866 66.7778 66.42 68.1251 69.5224 70.5547C73.3538 73.5564 76.1437 77.4572 78.5243 81.6994C81.0872 86.2639 83.0948 91.0821 84.6185 96.1146C85.0668 97.5943 84.5134 98.6495 82.9677 99.2613C73.7498 102.916 64.5278 106.565 55.3065 110.215Z"
                      fill="url(#paint0_linear_140_78)"
                    />
                    <path
                      d="M51.1669 54.3966C53.0253 60.0383 52.6931 66.1226 48.5066 71.5433C44.0779 77.2769 36.3798 78.6917 30.1578 75.1284C22.2214 70.5829 18.6614 60.9945 21.63 52.1643C24.8075 42.7153 35.5757 39.0659 43.8053 44.6448C47.0636 46.8541 49.3275 49.7402 51.1669 54.3966Z"
                      fill="url(#paint1_linear_140_78)"
                    />
                    <path
                      d="M93.9442 102.78C80.4349 108.128 66.9219 113.456 53.4305 118.852C52.2215 119.334 51.764 119.156 51.3351 117.888C50.2382 114.644 49.0672 111.426 47.7807 108.258C46.2719 104.546 46.5175 100.936 48.0108 97.3263C49.9485 92.6365 53.0863 88.8516 56.6391 85.4269C63.8493 78.4808 71.9608 72.8236 81.1913 69.2559C93.0423 64.6749 105.338 62.861 117.978 64.9473C121.606 65.5464 125.033 66.7808 127.952 69.2305C129.611 70.6201 130.794 72.3426 131.558 74.3862C132.832 77.7908 134.057 81.2181 135.406 84.5897C135.892 85.8051 135.722 86.2931 134.485 86.7795C120.958 92.0792 107.458 97.4439 93.9487 102.792C93.9475 102.789 93.9464 102.786 93.9442 102.78Z"
                      fill="url(#paint2_linear_140_78)"
                    />
                    <path
                      d="M52.8071 48.4311C48.8361 36.8823 51.4308 27.7198 58.6942 19.6762C59.5752 18.6995 60.6222 17.8814 61.5422 16.9375C62.1081 16.3547 62.5566 16.436 63.1537 16.8896C64.996 18.289 66.8804 19.6304 68.734 21.015C69.2531 21.4029 69.6985 21.6199 70.4281 21.4587C78.6244 19.6425 87.5826 23.9625 90.4629 34.7114C92.6172 42.7461 90.6496 49.9353 84.7418 55.5447C75.8811 63.9618 62.6781 62.3847 55.5627 53.1019C54.2809 51.4289 53.1321 49.61 52.8071 48.4311Z"
                      fill="url(#paint3_linear_140_78)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_140_78"
                        x1="41.7643"
                        y1="73.8539"
                        x2="56.043"
                        y2="109.924"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#797CE9" />
                        <stop offset="1" stopColor="#6D6CEE" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_140_78"
                        x1="30.2189"
                        y1="42.989"
                        x2="43.213"
                        y2="75.8136"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#797CE9" />
                        <stop offset="1" stopColor="#6D6CEE" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_140_78"
                        x1="97.6154"
                        y1="66.223"
                        x2="98.5223"
                        y2="116.334"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ACB0FF" />
                        <stop offset="1" stopColor="#7070EC" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_140_78"
                        x1="70.4777"
                        y1="17.6931"
                        x2="49.8418"
                        y2="59.8342"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ACB0FF" />
                        <stop offset="1" stopColor="#7070EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="dashboard__left__card">
                <div className="dashboard__left__card__heading">
                  <div className="dashboard__left__card__heading__name">
                    Total Staff
                  </div>
                  <div className="dashboard__left__card__heading__number">
                    <CountUp end={160} />
                  </div>
                </div>
                <div className="dashboard__left__card__svg">
                  <svg
                    width="112"
                    height="130"
                    viewBox="0 0 112 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.4374 41.6369C4.19679 40.6346 5.28046 39.824 6.1897 40.3094C9.88745 42.2836 13.4592 43.737 17.2615 44.6148C26.3013 46.7069 34.8393 45.0952 43.0404 41.0624C52.0509 36.629 59.6054 30.1485 67.31 23.8721C74.0636 18.3716 80.7046 12.7001 88.2949 8.33386C95.6895 4.08199 103.486 1.31299 112.218 1.97979C113.454 2.0748 113.972 2.44322 114.262 3.65385C119.42 25.2946 124.624 46.9199 129.818 68.5521C130.044 69.4959 130.474 70.4962 128.745 70.3469C119.117 69.5247 110.676 72.9075 102.714 77.8515C94.1816 83.1516 86.7213 89.8664 78.9136 96.117C72.0007 101.656 65.0186 107.047 56.7724 110.593C45.4722 115.454 34.535 114.652 23.6416 109.277C21.0569 108.002 19.8816 106.317 19.2369 103.562C14.398 82.8976 9.3918 62.2734 4.4374 41.6369ZM91.5493 45.8892C90.4367 41.0094 88.3654 36.6798 83.876 34.068C78.0777 30.688 72.3055 31.8379 67.0803 35.2488C57.1757 41.7123 50.2014 50.6269 46.5661 61.9409C44.3725 68.7685 44.4286 75.6162 47.4724 82.2773C52.2343 92.7084 63.549 97.3291 73.7718 89.5594C81.3874 83.7719 86.3797 76.0576 89.5871 67.1544C92.0705 60.253 93.1955 53.1849 91.5493 45.8892Z"
                      fill="url(#paint0_linear_142_79)"
                      fillOpacity="0.62"
                    />
                    <path
                      d="M26.4374 51.6369C26.1968 50.6346 27.2805 49.824 28.1897 50.3094C31.8874 52.2836 35.4592 53.737 39.2615 54.6148C48.3013 56.7069 56.8393 55.0952 65.0404 51.0624C74.0509 46.629 81.6054 40.1485 89.31 33.8721C96.0636 28.3716 102.705 22.7001 110.295 18.3339C117.69 14.082 125.486 11.313 134.218 11.9798C135.454 12.0748 135.972 12.4432 136.262 13.6539C141.42 35.2946 146.624 56.9199 151.818 78.5521C152.044 79.4959 152.474 80.4962 150.745 80.3469C141.117 79.5247 132.676 82.9075 124.714 87.8515C116.182 93.1516 108.721 99.8664 100.914 106.117C94.0007 111.656 87.0186 117.047 78.7724 120.593C67.4722 125.454 56.535 124.652 45.6416 119.277C43.0569 118.002 41.8816 116.317 41.2369 113.562C36.398 92.8976 31.3918 72.2734 26.4374 51.6369ZM113.549 55.8892C112.437 51.0094 110.365 46.6798 105.876 44.068C100.078 40.688 94.3055 41.8379 89.0803 45.2488C79.1757 51.7123 72.2014 60.6269 68.5661 71.9409C66.3725 78.7685 66.4286 85.6162 69.4724 92.2773C74.2343 102.708 85.549 107.329 95.7718 99.5594C103.387 93.7719 108.38 86.0576 111.587 77.1544C114.07 70.253 115.196 63.1849 113.549 55.8892Z"
                      fill="url(#paint1_linear_142_79)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_142_79"
                        x1="66.8594"
                        y1="40"
                        x2="4.35938"
                        y2="46.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0563735" stopColor="#8587EA" />
                        <stop offset="1" stopColor="#7678EA" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_142_79"
                        x1="23.8594"
                        y1="63.5"
                        x2="102.859"
                        y2="71"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ABAFFF" />
                        <stop offset="1" stopColor="#7273EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="dashboard__left__card">
                <div className="dashboard__left__card__heading">
                  <div className="dashboard__left__card__heading__name">
                    Pending Fees
                  </div>
                  <div className="dashboard__left__card__heading__number">
                    <CountUp end={200} />
                  </div>
                </div>
                <div className="dashboard__left__card__svg">
                  <svg
                    width="117"
                    height="105"
                    viewBox="0 0 117 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.716797"
                      y="27.9541"
                      width="74.623"
                      height="65.0782"
                      rx="8.67709"
                      transform="rotate(-22 0.716797 27.9541)"
                      fill="url(#paint0_linear_34_481)"
                    />
                    <path
                      d="M30.5226 52.8634C28.906 49.823 27.2823 46.7878 25.6822 43.7386C25.4587 43.3129 25.2704 43.196 24.8386 43.4696C24.3462 43.781 23.82 44.0423 23.2936 44.2953C22.206 44.8183 21.1425 44.7598 20.1648 44.0387C19.1718 43.3045 18.7508 42.2889 18.9871 41.0769C19.7184 37.3312 20.4655 33.5886 21.2423 29.8513C21.6293 27.9919 23.5483 26.9787 25.3068 27.6987C28.8197 29.1366 32.3206 30.605 35.8187 32.0764C36.9838 32.5659 37.6133 33.4805 37.6662 34.7401C37.7191 35.9813 37.1416 36.8982 36.0689 37.5054C35.6514 37.7416 35.2204 37.9551 34.7993 38.1847C33.9643 38.6414 33.9961 38.4799 34.4341 39.3064C35.9199 42.1086 37.4111 44.9079 38.9002 47.7084C40.5462 50.8041 42.1491 53.9227 43.8553 56.985C44.7509 58.5921 44.2115 60.5622 42.5179 61.3805C41.4857 61.8797 40.4749 62.4271 39.4775 62.9943C37.8758 63.9055 35.9657 63.215 35.1773 61.6602C33.6792 58.7014 32.0816 55.7927 30.5226 52.8634Z"
                      fill="#6B6ADE"
                    />
                    <path
                      d="M59.5226 40.8619C57.906 37.8215 56.2823 34.7863 54.6822 31.7371C54.4587 31.3114 54.2704 31.1946 53.8386 31.4681C53.3462 31.7796 52.82 32.0409 52.2936 32.2938C51.206 32.8168 50.1425 32.7583 49.1648 32.0372C48.1718 31.3031 47.7508 30.2874 47.9871 29.0754C48.7184 25.3298 49.4655 21.5871 50.2423 17.8498C50.6293 15.9905 52.5483 14.9772 54.3068 15.6972C57.8197 17.1351 61.3206 18.6036 64.8187 20.0749C65.9838 20.5644 66.6133 21.4791 66.6662 22.7387C66.7191 23.9798 66.1416 24.8967 65.0689 25.5039C64.6514 25.7401 64.2204 25.9537 63.7993 26.1833C62.9643 26.64 62.9961 26.4784 63.4341 27.3049C64.9199 30.1071 66.4111 32.9065 67.9002 35.707C69.5462 38.8026 71.1491 41.9213 72.8553 44.9835C73.7509 46.5906 73.2115 48.5608 71.5179 49.379C70.4857 49.8782 69.4749 50.4256 68.4775 50.9928C66.8758 51.904 64.9657 51.2136 64.1773 49.6587C62.6792 46.6999 61.0816 43.7912 59.5226 40.8619Z"
                      fill="#6B6ADE"
                    />
                    <rect
                      x="24.1445"
                      y="34.9771"
                      width="81.4737"
                      height="71.0527"
                      rx="9.47369"
                      transform="rotate(-10 24.1445 34.9771)"
                      fill="url(#paint1_linear_34_481)"
                    />
                    <path
                      d="M49.8686 68.1891C49.2115 64.8089 48.5461 61.4316 47.9075 58.0478C47.8182 57.5753 47.6723 57.4085 47.1794 57.5439C46.6174 57.6978 46.0379 57.7938 45.4605 57.8818C44.2675 58.064 43.2676 57.6971 42.5435 56.7217C41.8084 55.7293 41.7029 54.6349 42.2832 53.545C44.0776 50.1768 45.8863 46.8161 47.7219 43.4692C48.6356 41.8043 50.7669 41.3963 52.2381 42.599C55.1771 45.0012 58.0957 47.429 61.0108 49.8588C61.9818 50.6676 62.3165 51.7263 61.9987 52.9463C61.6865 54.1487 60.8661 54.8567 59.6628 55.1237C59.1944 55.2275 58.7198 55.3058 58.25 55.4022C57.318 55.5948 57.3956 55.4496 57.5729 56.3681C58.1744 59.4823 58.782 62.5953 59.3872 65.7087C60.0562 69.1504 60.6773 72.6014 61.4136 76.0287C61.8003 77.8274 60.7084 79.5538 58.8496 79.8411C57.7165 80.0167 56.5898 80.2447 55.4701 80.4955C53.6721 80.8986 52.0473 79.6798 51.7479 77.9624C51.1804 74.6949 50.503 71.4462 49.8686 68.1891Z"
                      fill="#6B6ADE"
                    />
                    <path
                      d="M76.8686 65.1891C76.2115 61.8089 75.5461 58.4316 74.9075 55.0478C74.8182 54.5753 74.6723 54.4085 74.1794 54.5439C73.6174 54.6978 73.0379 54.7938 72.4605 54.8818C71.2675 55.064 70.2676 54.6971 69.5435 53.7217C68.8084 52.7293 68.7029 51.6349 69.2832 50.545C71.0776 47.1768 72.8863 43.8161 74.7219 40.4692C75.6356 38.8043 77.7669 38.3963 79.2381 39.599C82.1771 42.0012 85.0957 44.429 88.0108 46.8588C88.9818 47.6676 89.3165 48.7263 88.9987 49.9463C88.6865 51.1487 87.8661 51.8567 86.6628 52.1237C86.1944 52.2275 85.7198 52.3058 85.25 52.4022C84.318 52.5948 84.3956 52.4496 84.5729 53.3681C85.1744 56.4823 85.782 59.5953 86.3872 62.7087C87.0562 66.1504 87.6773 69.6014 88.4136 73.0287C88.8003 74.8274 87.7084 76.5538 85.8496 76.8411C84.7165 77.0167 83.5898 77.2447 82.4701 77.4955C80.6721 77.8986 79.0473 76.6798 78.7479 74.9624C78.1804 71.6949 77.503 68.4462 76.8686 65.1891Z"
                      fill="#6B6ADE"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_34_481"
                        x1="6.23241"
                        y1="33.2023"
                        x2="73.478"
                        y2="82.8335"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6E70E6" />
                        <stop offset="1" stopColor="#9B9FE9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_34_481"
                        x1="30.1665"
                        y1="40.7071"
                        x2="103.586"
                        y2="94.8946"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#A9ABF9" />
                        <stop offset="1" stopColor="#7273EC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="dashboard__left__textbox">
              <div className="dashboard__left__textbox__heading">Sumit Fee</div>
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
                  placeholder="Enter Family Name or Family ID Here"
                />
              </div>
            </div>
            <div className="container__main__content__listing">
              <div className="container__main__content__listing__headers">
                <div className="container__main__content__listing__header__headings">
                  <div className="container__main__content__listing__header__heading__text">
                    Family ID
                  </div>
                  <div className="container__main__content__listing__header__heading__text">
                    Family Name
                  </div>
                  <div className="container__main__content__listing__header__heading__text">
                    Students
                  </div>
                  <div className="container__main__content__listing__header__heading__text">
                    Pending Fee
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
              <div className="container__main__content__listing__header">
                <div className="container__main__content__listing__header__heading">
                  <div className="container__main__content__listing__header__heading__texts">
                    4543
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    Hussain Ahmed
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    5
                  </div>
                  <div className="container__main__content__listing__header__heading__texts">
                    6500
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__right">
            <div className="dashboard__right__content">
              <div className="dashboard__right__svg">
                <svg
                  width="104"
                  height="112"
                  viewBox="0 0 104 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M83.9897 103.54C67.6597 103.48 54.6597 90.2998 54.6797 73.8398C54.7097 57.2698 68.0297 44.1798 84.6997 44.3498C100.9 44.5198 113.97 57.9498 113.83 74.2998C113.7 90.5598 100.39 103.6 83.9897 103.54ZM83.4497 53.4898C83.4797 53.9398 83.5197 54.3898 83.5497 54.8398C81.7497 56.1298 80.0797 57.6998 78.1097 58.6498C74.6097 60.3298 71.7797 62.3498 71.4997 66.5998C71.2197 70.8898 73.6797 73.4198 77.2397 75.0698C79.7897 76.2598 82.5497 77.0298 85.0197 78.3598C86.1197 78.9498 86.8497 80.3898 87.4797 81.5898C87.6097 81.8298 86.4897 83.2298 85.9897 83.1998C84.4297 83.1098 81.8597 83.0198 81.5197 82.1898C79.0497 76.0598 74.5497 79.5098 70.7197 78.8898C69.8297 85.1598 73.2997 87.5098 77.6697 89.5298C79.6997 90.4698 81.3597 92.1998 83.1797 93.5798C83.3097 94.2298 83.4397 94.8798 83.5797 95.5298C84.9397 94.3098 86.2797 93.0498 87.6897 91.8798C88.6397 91.0898 89.5997 90.1998 90.7197 89.7798C94.6797 88.2698 97.8797 86.2498 98.0897 81.4398C98.3097 76.3098 94.7797 74.1598 90.9097 72.3398C88.5097 71.2198 85.8497 70.5798 83.5997 69.2298C82.7897 68.7398 82.8497 66.8098 82.5197 65.5398C83.9797 65.5398 86.4997 65.0798 86.7197 65.5998C89.3597 71.8698 94.0197 68.1398 97.9697 68.8398C98.3597 63.6498 95.8697 61.1398 92.3197 59.0798C90.2797 57.8998 88.5397 56.2098 86.6597 54.7498C86.8897 54.3298 87.1197 53.9098 87.3497 53.4998C86.0497 53.4898 84.7497 53.4898 83.4497 53.4898Z"
                    fill="url(#paint0_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M40.1211 25.3496C44.7311 25.3496 48.9911 25.3496 53.9411 25.3496C52.5311 38.9596 55.5411 52.2796 51.7611 65.6596C50.0811 71.6096 51.4811 78.4196 51.4811 85.1296C48.0211 85.1296 44.2711 85.1296 40.1211 85.1296C40.1211 65.3396 40.1211 45.4996 40.1211 25.3496Z"
                    fill="url(#paint1_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M20.1289 36.9097C24.5089 36.9097 28.7589 36.9097 33.3889 36.9097C33.3889 52.9097 33.3889 68.8997 33.3889 85.1497C29.0289 85.1497 24.7689 85.1497 20.1289 85.1497C20.1289 69.1497 20.1289 53.1697 20.1289 36.9097Z"
                    fill="url(#paint2_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M93.3802 40.92C88.8302 40.59 84.5602 40.28 79.9902 39.94C79.9902 26.71 79.9902 13.5 79.9902 0C84.5302 0 88.7802 0 93.3802 0C93.3802 13.71 93.3802 27.28 93.3802 40.92Z"
                    fill="url(#paint3_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M13.44 85.1498C8.75 85.1498 4.5 85.1498 0 85.1498C0 73.1698 0 61.4498 0 49.2998C4.38 49.2998 8.74 49.2998 13.44 49.2998C13.44 61.1298 13.44 72.9698 13.44 85.1498Z"
                    fill="url(#paint4_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M59.9395 49.4997C59.9395 37.5797 59.9395 25.8097 59.9395 13.7397C64.4195 13.7397 68.6795 13.7397 73.7295 13.7397C73.7295 22.5497 73.7695 31.4597 73.6595 40.3697C73.6495 41.0897 72.7795 42.0297 72.0595 42.4697C68.1395 44.8297 64.1395 47.0797 59.9395 49.4997Z"
                    fill="url(#paint5_linear_38_96)"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M100.99 111.54C84.6597 111.48 71.6597 98.2998 71.6797 81.8398C71.7097 65.2698 85.0297 52.1798 101.7 52.3498C117.9 52.5198 130.97 65.9498 130.83 82.2998C130.7 98.5598 117.39 111.6 100.99 111.54ZM100.45 61.4898C100.48 61.9398 100.52 62.3898 100.55 62.8398C98.7497 64.1298 97.0797 65.6998 95.1097 66.6498C91.6097 68.3298 88.7797 70.3498 88.4997 74.5998C88.2197 78.8898 90.6797 81.4198 94.2397 83.0698C96.7897 84.2598 99.5497 85.0298 102.02 86.3598C103.12 86.9498 103.85 88.3898 104.48 89.5898C104.61 89.8298 103.49 91.2298 102.99 91.1998C101.43 91.1098 98.8597 91.0198 98.5197 90.1898C96.0497 84.0598 91.5497 87.5098 87.7197 86.8898C86.8297 93.1598 90.2997 95.5098 94.6697 97.5298C96.6997 98.4698 98.3597 100.2 100.18 101.58C100.31 102.23 100.44 102.88 100.58 103.53C101.94 102.31 103.28 101.05 104.69 99.8798C105.64 99.0898 106.6 98.1998 107.72 97.7798C111.68 96.2698 114.88 94.2498 115.09 89.4398C115.31 84.3098 111.78 82.1598 107.91 80.3398C105.51 79.2198 102.85 78.5798 100.6 77.2298C99.7897 76.7398 99.8497 74.8098 99.5197 73.5398C100.98 73.5398 103.5 73.0798 103.72 73.5998C106.36 79.8698 111.02 76.1398 114.97 76.8398C115.36 71.6498 112.87 69.1398 109.32 67.0798C107.28 65.8998 105.54 64.2098 103.66 62.7498C103.89 62.3298 104.12 61.9098 104.35 61.4998C103.05 61.4898 101.75 61.4898 100.45 61.4898Z"
                    fill="#5556CC"
                  />
                  <path
                    d="M57.1211 33.3496C61.7311 33.3496 65.9911 33.3496 70.9411 33.3496C69.5311 46.9596 72.5411 60.2796 68.7611 73.6596C67.0811 79.6096 68.4811 86.4196 68.4811 93.1296C65.0211 93.1296 61.2711 93.1296 57.1211 93.1296C57.1211 73.3396 57.1211 53.4996 57.1211 33.3496Z"
                    fill="#5556CC"
                  />
                  <path
                    d="M37.1289 44.9097C41.5089 44.9097 45.7589 44.9097 50.3889 44.9097C50.3889 60.9097 50.3889 76.8997 50.3889 93.1497C46.0289 93.1497 41.7689 93.1497 37.1289 93.1497C37.1289 77.1497 37.1289 61.1697 37.1289 44.9097Z"
                    fill="#5556CC"
                  />
                  <path
                    d="M110.38 48.92C105.83 48.59 101.56 48.28 96.9902 47.94C96.9902 34.71 96.9902 21.5 96.9902 8C101.53 8 105.78 8 110.38 8C110.38 21.71 110.38 35.28 110.38 48.92Z"
                    fill="#5556CC"
                  />
                  <path
                    d="M30.44 93.1498C25.75 93.1498 21.5 93.1498 17 93.1498C17 81.1698 17 69.4498 17 57.2998C21.38 57.2998 25.74 57.2998 30.44 57.2998C30.44 69.1298 30.44 80.9698 30.44 93.1498Z"
                    fill="#5556CC"
                  />
                  <path
                    d="M76.9395 57.4997C76.9395 45.5797 76.9395 33.8097 76.9395 21.7397C81.4195 21.7397 85.6795 21.7397 90.7295 21.7397C90.7295 30.5497 90.7695 39.4597 90.6595 48.3697C90.6495 49.0897 89.7795 50.0297 89.0595 50.4697C85.1395 52.8297 81.1395 55.0797 76.9395 57.4997Z"
                    fill="#5556CC"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_38_96"
                      x1="57.7975"
                      y1="62.6419"
                      x2="121.04"
                      y2="97.5793"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_38_96"
                      x1="40.8495"
                      y1="43.8252"
                      x2="59.8249"
                      y2="46.2502"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_38_96"
                      x1="20.8278"
                      y1="51.8187"
                      x2="38.9141"
                      y2="54.567"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_38_96"
                      x1="80.696"
                      y1="12.6467"
                      x2="98.7892"
                      y2="15.9197"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_38_96"
                      x1="0.708418"
                      y1="60.3796"
                      x2="18.6911"
                      y2="64.1064"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_38_96"
                      x1="60.6667"
                      y1="24.7917"
                      x2="79.0823"
                      y2="28.7195"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9FA0F7" stopOpacity="0" />
                      <stop offset="1" stopColor="#5F60ED" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="dashboard__right__card">
                <div className="dashboard__right__card__content">
                  <div className="dashboard__right__card__content__heading__info">
                    <div className="dashboard__right__card__heading">
                      Revenue
                    </div>
                    <div className="dashboard__right__card__number">23000</div>
                  </div>
                  <div className="container__main__content__listing__header__left__filter">
                    <Select
                      placeholder="Month"
                      options={[
                        { value: "January", label: "January" },
                        { value: "Feb", label: "Feb" },
                        { value: "Mar", label: "Mar" },
                        { value: "Apr", label: "Apr" },
                        { value: "May", label: "May" },
                        { value: "Jun", label: "Jun" },
                        { value: "Jul", label: "Jul" },
                        { value: "Aug", label: "Aug" },
                        { value: "Sep ", label: "Sep" },
                        { value: "Oct", label: "Oct " },
                        { value: "Nov", label: "Nov" },
                        { value: "Dec", label: "Dec" },
                      ]}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary75: "#2a5e59",
                          primary25: "#2a5e595e",
                          primary50: "#2a5e595e",
                          primary: "#2a5e59",
                        },
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard__right__card__two">
              <div className="dashboard__right__card__two__heading">
                Hussain Ahmed
              </div>
              <div className="dashboard__right__card__two__card">
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__name">
                    Months
                  </div>
                  <div className="dashboard__right__card__two__card__content__name">
                    Fees
                  </div>
                </div>
                <div className="line"></div>
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__name">
                    June
                  </div>
                  <div className="dashboard__right__card__two__card__content__name">
                    2400
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__name">
                    July
                  </div>
                  <div className="dashboard__right__card__two__card__content__name">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__name">
                    August
                  </div>
                  <div className="dashboard__right__card__two__card__content__name">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__name">
                    Sept
                  </div>
                  <div className="dashboard__right__card__two__card__content__name">
                    2700
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__content">
                  <div className="dashboard__right__card__two__card__content__nametotal">
                    Total Pending Fee
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametotalnbr">
                    52532
                  </div>
                </div>
                <button className="dashboard__right__card__two__card__contentbutton">
                  Collect
                </button>
              </div>
              <div className="dashboard__right__card__two__heading">June</div>
              <div className="dashboard__right__card__two__cardtwo">
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Months
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Fees
                  </div>
                </div>
                <div className="linetwo"></div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    June
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2400
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    July
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    August
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Sept
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2700
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametotaltwo">
                    Total Pending Fee
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametotalnbrtwo">
                    52532
                  </div>
                </div>
                <button className="dashboard__right__card__two__card__contentbuttontwo">
                  Collect
                </button>
              </div>
              <div className="dashboard__right__card__two__heading">June</div>
              <div className="dashboard__right__card__two__cardtwo">
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Months
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Fees
                  </div>
                </div>
                <div className="linetwo"></div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    June
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2400
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    July
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    August
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Sept
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2700
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametotaltwo">
                    Total Pending Fee
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametotalnbrtwo">
                    52532
                  </div>
                </div>
                <button className="dashboard__right__card__two__card__contentbuttontwo">
                  Collect
                </button>
              </div>
              <div className="dashboard__right__card__two__heading">June</div>
              <div className="dashboard__right__card__two__cardtwo">
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Months
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Fees
                  </div>
                </div>
                <div className="linetwo"></div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    June
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2400
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    July
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    August
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2500
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    Sept
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametwo">
                    2700
                    <div className="dashboard__right__card__two__card__content__name__cross">
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 7 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.24072L6.24064 1.00009"
                          stroke="white"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 1.17578L6.24064 6.41642"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="dashboard__right__card__two__card__contenttwo">
                  <div className="dashboard__right__card__two__card__content__nametotaltwo">
                    Total Pending Fee
                  </div>
                  <div className="dashboard__right__card__two__card__content__nametotalnbrtwo">
                    52532
                  </div>
                </div>
                <button className="dashboard__right__card__two__card__contentbuttontwo">
                  Collect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
