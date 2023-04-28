import { PngBackground, PngHome } from "@assets";

export default function HomeSection() {
  return (
    <>
      <div className="home__container">
        <div className="home__container__img">
          <img src={PngBackground}></img>
        </div>
        <div className="home__container__navbar">
          <div className="home__container__left__content__header">
            <svg
              width="161.87"
              height="53.03"
              viewBox="0 0 205 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M107.778 13.6367V33.6938H103.137V25.4704H94.0249V33.6938H89.3831V13.6367H94.0249V21.5449H103.137V13.6367H107.778ZM119.544 33.9231C117.92 33.9231 116.459 33.5888 115.16 32.9202C113.88 32.2325 112.877 31.287 112.151 30.0836C111.425 28.8801 111.062 27.5143 111.062 25.9862C111.062 24.458 111.425 23.0922 112.151 21.8888C112.877 20.6854 113.88 19.7494 115.16 19.0808C116.459 18.3931 117.92 18.0493 119.544 18.0493C121.167 18.0493 122.619 18.3931 123.899 19.0808C125.179 19.7494 126.182 20.6854 126.908 21.8888C127.634 23.0922 127.996 24.458 127.996 25.9862C127.996 27.5143 127.634 28.8801 126.908 30.0836C126.182 31.287 125.179 32.2325 123.899 32.9202C122.619 33.5888 121.167 33.9231 119.544 33.9231ZM119.544 30.2555C120.69 30.2555 121.626 29.8734 122.352 29.1094C123.097 28.3262 123.469 27.2851 123.469 25.9862C123.469 24.6872 123.097 23.6557 122.352 22.8916C121.626 22.1085 120.69 21.7169 119.544 21.7169C118.398 21.7169 117.452 22.1085 116.707 22.8916C115.962 23.6557 115.59 24.6872 115.59 25.9862C115.59 27.2851 115.962 28.3262 116.707 29.1094C117.452 29.8734 118.398 30.2555 119.544 30.2555ZM135.254 20.3129C135.788 19.5679 136.505 19.0044 137.402 18.6223C138.319 18.2403 139.37 18.0493 140.554 18.0493V22.1753C140.058 22.1371 139.723 22.118 139.551 22.118C138.272 22.118 137.269 22.4809 136.543 23.2068C135.817 23.9136 135.454 24.9833 135.454 26.416V33.6938H130.984V18.2785H135.254V20.3129ZM143.212 18.2785H147.682V33.6938H143.212V18.2785ZM145.447 16.1295C144.626 16.1295 143.957 15.8907 143.441 15.4132C142.926 14.9356 142.668 14.3435 142.668 13.6367C142.668 12.9299 142.926 12.3378 143.441 11.8602C143.957 11.3827 144.626 11.1439 145.447 11.1439C146.268 11.1439 146.937 11.3731 147.453 11.8316C147.969 12.29 148.226 12.8631 148.226 13.5507C148.226 14.2957 147.969 14.9165 147.453 15.4132C146.937 15.8907 146.268 16.1295 145.447 16.1295ZM164.524 30.2555V33.6938H150.77V31.0005L158.621 21.7169H150.971V18.2785H164.266V20.9719L156.415 30.2555H164.524ZM174.527 33.9231C172.904 33.9231 171.442 33.5888 170.144 32.9202C168.864 32.2325 167.861 31.287 167.135 30.0836C166.409 28.8801 166.046 27.5143 166.046 25.9862C166.046 24.458 166.409 23.0922 167.135 21.8888C167.861 20.6854 168.864 19.7494 170.144 19.0808C171.442 18.3931 172.904 18.0493 174.527 18.0493C176.151 18.0493 177.603 18.3931 178.883 19.0808C180.163 19.7494 181.165 20.6854 181.891 21.8888C182.617 23.0922 182.98 24.458 182.98 25.9862C182.98 27.5143 182.617 28.8801 181.891 30.0836C181.165 31.287 180.163 32.2325 178.883 32.9202C177.603 33.5888 176.151 33.9231 174.527 33.9231ZM174.527 30.2555C175.674 30.2555 176.61 29.8734 177.335 29.1094C178.08 28.3262 178.453 27.2851 178.453 25.9862C178.453 24.6872 178.08 23.6557 177.335 22.8916C176.61 22.1085 175.674 21.7169 174.527 21.7169C173.381 21.7169 172.436 22.1085 171.691 22.8916C170.946 23.6557 170.573 24.6872 170.573 25.9862C170.573 27.2851 170.946 28.3262 171.691 29.1094C172.436 29.8734 173.381 30.2555 174.527 30.2555ZM195.337 18.0493C197.248 18.0493 198.785 18.6223 199.951 19.7685C201.135 20.9146 201.727 22.6147 201.727 24.8687V33.6938H197.257V25.5564C197.257 24.3338 196.99 23.4265 196.455 22.8343C195.92 22.2231 195.146 21.9174 194.134 21.9174C193.007 21.9174 192.109 22.2708 191.441 22.9776C190.772 23.6653 190.438 24.6968 190.438 26.0721V33.6938H185.968V18.2785H190.237V20.0836C190.829 19.4342 191.565 18.9375 192.443 18.5937C193.322 18.2307 194.287 18.0493 195.337 18.0493ZM100.924 46.0649C100.802 45.0338 100.307 44.2334 99.4388 43.6636C98.5706 43.0938 97.5056 42.8089 96.2439 42.8089C95.3213 42.8089 94.5141 42.9581 93.8222 43.2566C93.1371 43.555 92.6012 43.9654 92.2145 44.4878C91.8347 45.0101 91.6447 45.6036 91.6447 46.2684C91.6447 46.8246 91.777 47.3029 92.0416 47.7031C92.3129 48.0965 92.6588 48.4255 93.0794 48.6901C93.5 48.9478 93.9409 49.1615 94.4022 49.3311C94.8634 49.4939 95.2874 49.6262 95.6741 49.7279L97.7905 50.2977C98.3332 50.4402 98.9369 50.6369 99.6016 50.8879C100.273 51.1389 100.914 51.4814 101.525 51.9156C102.142 52.3429 102.651 52.8924 103.051 53.5639C103.451 54.2355 103.651 55.0597 103.651 56.0365C103.651 57.1625 103.356 58.18 102.766 59.089C102.183 59.998 101.328 60.7204 100.202 61.2563C99.0827 61.7922 97.7226 62.0602 96.1218 62.0602C94.6294 62.0602 93.3372 61.8193 92.2451 61.3377C91.1597 60.8561 90.305 60.1845 89.6809 59.3231C89.0636 58.4616 88.7143 57.461 88.6329 56.3214H91.2377C91.3056 57.1083 91.5701 57.7595 92.0314 58.275C92.4994 58.7838 93.0896 59.1636 93.8018 59.4146C94.5209 59.6588 95.2942 59.7809 96.1218 59.7809C97.085 59.7809 97.9499 59.6249 98.7164 59.3129C99.4829 58.9941 100.09 58.5531 100.538 57.9901C100.985 57.4203 101.209 56.7555 101.209 55.9958C101.209 55.3039 101.016 54.7409 100.629 54.3067C100.243 53.8726 99.7339 53.5199 99.1031 53.2485C98.4722 52.9772 97.7905 52.7398 97.0579 52.5363L94.4938 51.8037C92.8657 51.3356 91.5769 50.6674 90.6272 49.7992C89.6775 48.9309 89.2027 47.7947 89.2027 46.3905C89.2027 45.2238 89.5181 44.2063 90.149 43.338C90.7866 42.4629 91.6413 41.7846 92.7131 41.303C93.7917 40.8146 94.9957 40.5704 96.3253 40.5704C97.6684 40.5704 98.8623 40.8112 99.9069 41.2928C100.952 41.7676 101.779 42.4188 102.39 43.2464C103.007 44.074 103.333 45.0135 103.366 46.0649H100.924ZM109.021 67.5547C108.614 67.5547 108.251 67.5208 107.933 67.453C107.614 67.3919 107.393 67.3308 107.271 67.2698L107.882 65.1534C108.465 65.3026 108.981 65.3569 109.428 65.3162C109.876 65.2755 110.273 65.0754 110.619 64.7159C110.971 64.3631 111.294 63.7899 111.585 62.9963L112.033 61.7752L106.254 46.0649H108.858L113.173 58.5192H113.335L117.65 46.0649H120.255L113.62 63.9731C113.322 64.7803 112.952 65.4485 112.511 65.9776C112.07 66.5135 111.558 66.9103 110.975 67.168C110.398 67.4258 109.747 67.5547 109.021 67.5547ZM134.495 49.5651L132.337 50.1756C132.202 49.8161 132.002 49.4668 131.737 49.1276C131.479 48.7817 131.127 48.4968 130.679 48.2729C130.231 48.049 129.658 47.9371 128.959 47.9371C128.003 47.9371 127.206 48.1576 126.568 48.5985C125.937 49.0326 125.622 49.5855 125.622 50.257C125.622 50.854 125.839 51.3254 126.273 51.6714C126.707 52.0173 127.386 52.3056 128.308 52.5363L130.628 53.1061C132.025 53.4452 133.067 53.9642 133.752 54.6629C134.437 55.3548 134.779 56.2468 134.779 57.3389C134.779 58.2343 134.522 59.0348 134.006 59.7402C133.497 60.4457 132.785 61.0019 131.869 61.4089C130.954 61.8159 129.889 62.0195 128.674 62.0195C127.08 62.0195 125.761 61.6735 124.716 60.9816C123.672 60.2897 123.01 59.279 122.732 57.9494L125.011 57.3796C125.228 58.2207 125.639 58.8516 126.243 59.2722C126.853 59.6927 127.65 59.903 128.634 59.903C129.753 59.903 130.642 59.6656 131.3 59.1908C131.964 58.7092 132.297 58.1326 132.297 57.461C132.297 56.9183 132.107 56.4638 131.727 56.0975C131.347 55.7245 130.764 55.4463 129.977 55.2632L127.372 54.6527C125.941 54.3135 124.889 53.7878 124.218 53.0755C123.553 52.3565 123.221 51.4577 123.221 50.3791C123.221 49.4973 123.468 48.7172 123.963 48.0389C124.465 47.3605 125.147 46.828 126.009 46.4414C126.877 46.0547 127.86 45.8614 128.959 45.8614C130.506 45.8614 131.72 46.2006 132.602 46.8789C133.491 47.5573 134.121 48.4527 134.495 49.5651ZM145.191 46.0649V48.0999H137.092V46.0649H145.191ZM139.452 42.3205H141.854V57.2168C141.854 57.8951 141.952 58.4039 142.149 58.7431C142.352 59.0755 142.61 59.2993 142.922 59.4146C143.241 59.5232 143.577 59.5774 143.929 59.5774C144.194 59.5774 144.411 59.5639 144.581 59.5367C144.75 59.5028 144.886 59.4757 144.988 59.4553L145.476 61.6124C145.313 61.6735 145.086 61.7345 144.794 61.7956C144.503 61.8634 144.133 61.8973 143.685 61.8973C143.007 61.8973 142.342 61.7515 141.691 61.4598C141.046 61.1681 140.511 60.7238 140.083 60.1269C139.663 59.5299 139.452 58.777 139.452 57.868V42.3205ZM155.188 62.0195C153.682 62.0195 152.383 61.6871 151.291 61.0223C150.206 60.3507 149.368 59.4146 148.778 58.214C148.194 57.0065 147.903 55.6024 147.903 54.0015C147.903 52.4006 148.194 50.9896 148.778 49.7686C149.368 48.5408 150.189 47.5844 151.24 46.8993C152.298 46.2074 153.533 45.8614 154.944 45.8614C155.758 45.8614 156.562 45.9971 157.355 46.2684C158.149 46.5397 158.872 46.9807 159.523 47.5912C160.174 48.1949 160.693 48.9953 161.08 49.9925C161.466 50.9896 161.66 52.2174 161.66 53.6759V54.6934H149.612V52.6177H159.218C159.218 51.7358 159.041 50.9489 158.688 50.257C158.342 49.5651 157.847 49.0191 157.203 48.6189C156.565 48.2186 155.812 48.0185 154.944 48.0185C153.988 48.0185 153.16 48.2559 152.461 48.7308C151.769 49.1988 151.237 49.8093 150.864 50.5623C150.491 51.3153 150.304 52.1225 150.304 52.984V54.3678C150.304 55.5481 150.508 56.5486 150.915 57.3694C151.328 58.1834 151.902 58.8041 152.634 59.2315C153.367 59.652 154.218 59.8623 155.188 59.8623C155.819 59.8623 156.389 59.7741 156.898 59.5978C157.413 59.4146 157.857 59.1433 158.231 58.7838C158.604 58.4175 158.892 57.963 159.095 57.4203L161.415 58.0715C161.171 58.8584 160.761 59.5503 160.184 60.1472C159.608 60.7374 158.895 61.1987 158.047 61.531C157.199 61.8566 156.246 62.0195 155.188 62.0195ZM165.312 61.6938V46.0649H167.632V48.5069H167.836C168.161 47.6726 168.687 47.0248 169.413 46.5635C170.139 46.0954 171.01 45.8614 172.028 45.8614C173.059 45.8614 173.917 46.0954 174.602 46.5635C175.294 47.0248 175.833 47.6726 176.22 48.5069H176.383C176.783 47.6997 177.383 47.0587 178.184 46.5838C178.984 46.1022 179.944 45.8614 181.063 45.8614C182.461 45.8614 183.604 46.2989 184.492 47.174C185.381 48.0423 185.825 49.3956 185.825 51.2339V61.6938H183.424V51.2339C183.424 50.0807 183.109 49.2565 182.478 48.7613C181.847 48.2661 181.104 48.0185 180.249 48.0185C179.151 48.0185 178.299 48.3509 177.695 49.0157C177.092 49.6737 176.79 50.508 176.79 51.5188V61.6938H174.348V50.9896C174.348 50.101 174.06 49.3854 173.483 48.8427C172.906 48.2933 172.164 48.0185 171.255 48.0185C170.631 48.0185 170.047 48.1847 169.505 48.5171C168.969 48.8495 168.535 49.3108 168.202 49.9009C167.877 50.4843 167.714 51.1592 167.714 51.9258V61.6938H165.312Z"
                fill="white"
              />
              <path
                d="M34.9883 66.9885H2.31192C2.15336 66.9885 1.99051 66.9885 1.83195 66.9885C1.55768 66.9885 1.40341 66.9041 1.42913 66.6471C1.42913 66.5052 1.42913 66.3594 1.42913 66.2175C1.42913 54.4921 1.46341 42.7667 1.4077 31.0414C1.36205 29.7166 1.67399 28.4016 2.31705 27.2078C2.96011 26.0139 3.91534 24.9764 5.10174 24.1833C7.30445 22.6107 9.85857 21.7056 12.5627 21.088C15.5607 20.4217 18.6537 20.1631 21.7378 20.3209C25.3715 20.4258 28.9436 21.1905 32.2371 22.5686C33.1065 22.9472 33.9344 23.3979 34.7098 23.9148C34.7885 23.9785 34.8908 24.0137 34.9969 24.0137C35.103 24.0137 35.2053 23.9785 35.284 23.9148C38.0353 22.1351 41.1637 21.2299 44.4677 20.7006C46.7166 20.3508 49.0014 20.2222 51.2816 20.3171C54.9311 20.3905 58.5249 21.1333 61.8409 22.4995C63.9407 23.397 65.8006 24.5822 67.1334 26.3351C68.0797 27.5608 68.5797 29.0184 68.5647 30.5082V66.3518C68.5647 67 68.5647 67 67.849 67L34.9883 66.9885ZM38.7595 44.6769C38.7595 49.364 38.7595 54.0485 38.7595 58.7304C38.7595 59.1485 38.7595 59.1409 39.1666 58.9529C40.7224 58.2519 42.3775 57.7435 44.0863 57.4417C46.9033 56.9149 49.7938 56.7778 52.6572 57.0351C55.3568 57.2372 57.9948 57.8671 60.4481 58.8954C60.9752 59.1255 60.9752 59.1294 60.9752 58.5885C60.9752 49.2987 60.9752 40.009 60.9752 30.7192C60.9815 30.5372 60.9429 30.3563 60.8621 30.1893C60.7814 30.0222 60.6605 29.8731 60.5081 29.7526C59.8264 29.1952 59.0401 28.7498 58.1854 28.437C56.2541 27.7153 54.2047 27.2788 52.1172 27.1444C49.1131 26.8798 46.0801 27.1324 43.1821 27.8885C41.8091 28.2188 40.5249 28.7942 39.4066 29.58C39.1854 29.7283 39.0076 29.9222 38.8882 30.1453C38.7688 30.3683 38.7114 30.6139 38.721 30.8611C38.7767 35.4676 38.7767 40.0742 38.7767 44.6769H38.7595ZM31.1872 44.6193C31.1872 40.0166 31.1872 35.4139 31.1872 30.8112C31.1979 30.5781 31.1454 30.3461 31.0342 30.135C30.923 29.9239 30.7564 29.7401 30.5486 29.5992C29.9846 29.1832 29.3622 28.8351 28.6973 28.5636C26.691 27.7627 24.5425 27.2849 22.3506 27.1521C19.3482 26.8862 16.3166 27.1375 13.4198 27.8923C12.0462 28.2232 10.7618 28.7999 9.6443 29.5877C9.42006 29.7413 9.24169 29.9421 9.12507 30.1723C9.00844 30.4025 8.95715 30.6549 8.97577 30.9071C8.99291 40.0921 8.99291 49.277 8.97577 58.462C8.97577 58.554 8.97577 58.6461 8.97577 58.7381C8.97577 59.0296 9.0529 59.1217 9.3786 58.9644C10.1904 58.5747 11.043 58.2574 11.9241 58.017C16.3821 56.7716 21.1215 56.5657 25.6932 57.4187C27.4636 57.7094 29.1781 58.2261 30.7843 58.9529C31.08 59.091 31.1786 59.0296 31.1657 58.7458C31.1657 58.6307 31.1657 58.5118 31.1657 58.3929L31.1872 44.6193Z"
                fill="white"
              />
              <path
                d="M34.9885 0C35.1642 0.0613694 35.3399 0.118899 35.5113 0.18794L46.7306 4.64873L69.2505 13.6048C70.2276 13.9884 70.1076 13.8426 69.7177 14.6443C68.9034 16.3242 68.0506 17.9889 67.2364 19.6689C67.065 20.0179 66.8936 20.0716 66.5122 19.9182C60.8811 17.6654 55.2458 15.4216 49.6061 13.1867C44.8664 11.2996 40.1268 9.41252 35.3871 7.52542C35.2643 7.47157 35.1295 7.44357 34.9928 7.44357C34.8561 7.44357 34.7213 7.47157 34.5985 7.52542L15.5669 15.1007C11.4958 16.7193 7.4232 18.3392 3.34918 19.9604C3.07491 20.0678 2.92063 20.0409 2.80493 19.784C1.89927 17.9429 0.985049 16.1031 0.0622529 14.2645C-0.0791664 13.9807 0.027966 13.881 0.306519 13.7621C3.70058 12.4196 7.09322 11.0733 10.4844 9.72321L28.2004 2.68491L34.65 0.115063C34.7528 0.0728714 34.8642 0.0421914 34.9885 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="home__container__right__content__header">
            <div className="home__container__right__whatsapp">
              0300-1234567
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.3175 3.48155C19.0756 1.23771 16.0951 0.00099815 12.92 0C6.37716 0 1.05203 5.32413 1.04903 11.87C1.04804 13.9621 1.59502 16.0043 2.6341 17.805L0.949219 23.9556L7.24156 22.3047C8.97534 23.2509 10.9277 23.749 12.914 23.75H12.919C19.4609 23.75 24.787 18.4249 24.79 11.879C24.792 8.70786 23.5583 5.72439 21.3175 3.48155ZM12.92 21.7447H12.916C11.1453 21.7447 9.40954 21.2686 7.89435 20.3692L7.53402 20.1556L3.79994 21.1348L4.79709 17.4936L4.56252 17.1203C3.57435 15.5492 3.05332 13.7335 3.05432 11.87C3.05631 6.43008 7.48311 2.00429 12.925 2.00429C15.5601 2.00429 18.0375 3.03238 19.9001 4.89692C21.7626 6.76247 22.7877 9.24087 22.7867 11.877C22.7838 17.3189 18.358 21.7447 12.92 21.7447ZM18.332 14.3554C18.0356 14.2067 16.5773 13.489 16.3048 13.3902C16.0333 13.2914 15.8356 13.2415 15.637 13.5379C15.4384 13.8344 14.8714 14.5031 14.6977 14.7018C14.5251 14.8994 14.3514 14.9243 14.0549 14.7756C13.7585 14.6269 12.8023 14.3145 11.6694 13.3033C10.788 12.5168 10.1921 11.5456 10.0194 11.2482C9.84673 10.9507 10.0014 10.791 10.1492 10.6433C10.2829 10.5105 10.4456 10.2969 10.5943 10.1232C10.7441 9.95156 10.793 9.82779 10.8928 9.62916C10.9916 9.43152 10.9427 9.25784 10.8678 9.10912C10.793 8.96139 10.2001 7.5011 9.95353 6.9072C9.71298 6.32827 9.46843 6.40713 9.28577 6.39814C9.11309 6.38916 8.91546 6.38816 8.71682 6.38816C8.51919 6.38816 8.19779 6.46202 7.92629 6.75947C7.65479 7.05692 6.88821 7.77459 6.88821 9.23389C6.88821 10.6942 7.95124 12.1046 8.09897 12.3022C8.24669 12.4998 10.1901 15.4963 13.1656 16.7809C13.8733 17.0863 14.4262 17.269 14.8564 17.4057C15.5671 17.6313 16.2139 17.5994 16.725 17.5235C17.2949 17.4387 18.4797 16.8059 18.7273 16.1131C18.9748 15.4204 18.9748 14.8255 18.9 14.7028C18.8261 14.578 18.6285 14.5041 18.332 14.3554Z"
                    fill="#28BB36"
                  />
                </svg>
              </span>
            </div>
            <div className="home__container__right__login">Login</div>
          </div>
        </div>
        <div className="home__container__content">
          <div className="home__container__left">
            <div className="home__container__left__content">
              <div className="home__container__left__content__text">
                <div className="home__container__left__content__text__header">
                  <span>FOR YOUR SCHOOL</span>
                  Best School Software
                </div>
                <div className="home__container__left__content__text__info">
                  <div className="home__container__left__content__text__info__entry">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15.1503"
                        cy="15.3247"
                        r="13.6731"
                        stroke="#FF4D6B"
                        strokeWidth="1.6086"
                      />
                      <path
                        d="M20.0473 11.618L12.8234 18.8413C12.7749 18.8901 12.7171 18.9288 12.6536 18.9552C12.59 18.9816 12.5219 18.9952 12.4531 18.9952C12.3842 18.9952 12.3161 18.9816 12.2525 18.9552C12.189 18.9288 12.1313 18.8901 12.0827 18.8413L9.28911 16.0451C9.24054 15.9964 9.18282 15.9577 9.11926 15.9313C9.05571 15.9049 8.98756 15.8913 8.91874 15.8913C8.84992 15.8913 8.78177 15.9049 8.71822 15.9313C8.65466 15.9577 8.59694 15.9964 8.54837 16.0451C8.49961 16.0937 8.46092 16.1514 8.43452 16.215C8.40812 16.2785 8.39453 16.3467 8.39453 16.4155C8.39453 16.4843 8.40812 16.5525 8.43452 16.616C8.46092 16.6796 8.49961 16.7373 8.54837 16.7859L11.343 19.58C11.6378 19.8742 12.0373 20.0395 12.4538 20.0395C12.8704 20.0395 13.2699 19.8742 13.5647 19.58L20.7881 12.3582C20.8367 12.3096 20.8754 12.2519 20.9017 12.1884C20.9281 12.1249 20.9416 12.0568 20.9416 11.9881C20.9416 11.9193 20.9281 11.8512 20.9017 11.7877C20.8754 11.7242 20.8367 11.6665 20.7881 11.618C20.7395 11.5692 20.6818 11.5305 20.6182 11.5041C20.5546 11.4777 20.4865 11.4641 20.4177 11.4641C20.3489 11.4641 20.2807 11.4777 20.2172 11.5041C20.1536 11.5305 20.0959 11.5692 20.0473 11.618Z"
                        fill="#FF4D6B"
                      />
                    </svg>
                    Easy to <span>Install</span>
                  </div>
                  <div className="home__container__left__content__text__info__entry">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15.1503"
                        cy="15.3247"
                        r="13.6731"
                        stroke="#FF4D6B"
                        strokeWidth="1.6086"
                      />
                      <path
                        d="M20.0473 11.618L12.8234 18.8413C12.7749 18.8901 12.7171 18.9288 12.6536 18.9552C12.59 18.9816 12.5219 18.9952 12.4531 18.9952C12.3842 18.9952 12.3161 18.9816 12.2525 18.9552C12.189 18.9288 12.1313 18.8901 12.0827 18.8413L9.28911 16.0451C9.24054 15.9964 9.18282 15.9577 9.11926 15.9313C9.05571 15.9049 8.98756 15.8913 8.91874 15.8913C8.84992 15.8913 8.78177 15.9049 8.71822 15.9313C8.65466 15.9577 8.59694 15.9964 8.54837 16.0451C8.49961 16.0937 8.46092 16.1514 8.43452 16.215C8.40812 16.2785 8.39453 16.3467 8.39453 16.4155C8.39453 16.4843 8.40812 16.5525 8.43452 16.616C8.46092 16.6796 8.49961 16.7373 8.54837 16.7859L11.343 19.58C11.6378 19.8742 12.0373 20.0395 12.4538 20.0395C12.8704 20.0395 13.2699 19.8742 13.5647 19.58L20.7881 12.3582C20.8367 12.3096 20.8754 12.2519 20.9017 12.1884C20.9281 12.1249 20.9416 12.0568 20.9416 11.9881C20.9416 11.9193 20.9281 11.8512 20.9017 11.7877C20.8754 11.7242 20.8367 11.6665 20.7881 11.618C20.7395 11.5692 20.6818 11.5305 20.6182 11.5041C20.5546 11.4777 20.4865 11.4641 20.4177 11.4641C20.3489 11.4641 20.2807 11.4777 20.2172 11.5041C20.1536 11.5305 20.0959 11.5692 20.0473 11.618Z"
                        fill="#FF4D6B"
                      />
                    </svg>
                    Get a free trail for <span>7 days</span>
                  </div>
                  <div className="home__container__left__content__text__info__entry">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15.1503"
                        cy="15.3247"
                        r="13.6731"
                        stroke="#FF4D6B"
                        strokeWidth="1.6086"
                      />
                      <path
                        d="M20.0473 11.618L12.8234 18.8413C12.7749 18.8901 12.7171 18.9288 12.6536 18.9552C12.59 18.9816 12.5219 18.9952 12.4531 18.9952C12.3842 18.9952 12.3161 18.9816 12.2525 18.9552C12.189 18.9288 12.1313 18.8901 12.0827 18.8413L9.28911 16.0451C9.24054 15.9964 9.18282 15.9577 9.11926 15.9313C9.05571 15.9049 8.98756 15.8913 8.91874 15.8913C8.84992 15.8913 8.78177 15.9049 8.71822 15.9313C8.65466 15.9577 8.59694 15.9964 8.54837 16.0451C8.49961 16.0937 8.46092 16.1514 8.43452 16.215C8.40812 16.2785 8.39453 16.3467 8.39453 16.4155C8.39453 16.4843 8.40812 16.5525 8.43452 16.616C8.46092 16.6796 8.49961 16.7373 8.54837 16.7859L11.343 19.58C11.6378 19.8742 12.0373 20.0395 12.4538 20.0395C12.8704 20.0395 13.2699 19.8742 13.5647 19.58L20.7881 12.3582C20.8367 12.3096 20.8754 12.2519 20.9017 12.1884C20.9281 12.1249 20.9416 12.0568 20.9416 11.9881C20.9416 11.9193 20.9281 11.8512 20.9017 11.7877C20.8754 11.7242 20.8367 11.6665 20.7881 11.618C20.7395 11.5692 20.6818 11.5305 20.6182 11.5041C20.5546 11.4777 20.4865 11.4641 20.4177 11.4641C20.3489 11.4641 20.2807 11.4777 20.2172 11.5041C20.1536 11.5305 20.0959 11.5692 20.0473 11.618Z"
                        fill="#FF4D6B"
                      />
                    </svg>
                    Instant download the software now
                  </div>
                </div>
                <button className="home__container__left__content__text__btn">
                  Signup Now
                </button>
              </div>
            </div>
          </div>
          <div className="home__container__right">
            <div className="home__container__right__content__text">
              <img src={PngHome}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
