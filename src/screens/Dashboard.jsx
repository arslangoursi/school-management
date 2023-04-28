import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="container__left">
          <div className="sidebar">
            <div className="sidebar__logo">
              <svg
                width="163"
                height="60"
                viewBox="0 0 163 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.0046C0 5.82236 5.82236 0 13.0046 0H48.7673C55.9496 0 61.7719 5.82236 61.7719 13.0046V46.5999C61.7719 53.7821 55.9495 59.6045 48.7673 59.6045H13.0046C5.82235 59.6045 0 53.7821 0 46.5999V13.0046Z"
                  fill="white"
                />
                <path
                  d="M86.3209 11.4463V17.3877H79.4753V11.4463H75.9879V26.5151H79.4753V20.3369H86.3209V26.5151H89.8082V11.4463H86.3209ZM98.6476 26.6874C102.329 26.6874 104.998 24.2118 104.998 20.7244C104.998 17.237 102.329 14.7614 98.6476 14.7614C94.9665 14.7614 92.2756 17.237 92.2756 20.7244C92.2756 24.2118 94.9665 26.6874 98.6476 26.6874ZM98.6476 23.9319C96.9685 23.9319 95.6769 22.7264 95.6769 20.7244C95.6769 18.7224 96.9685 17.5169 98.6476 17.5169C100.327 17.5169 101.597 18.7224 101.597 20.7244C101.597 22.7264 100.327 23.9319 98.6476 23.9319ZM110.45 16.462V14.9336H107.243V26.5151H110.601V21.0473C110.601 18.83 111.828 17.8182 113.679 17.8182C113.938 17.8182 114.153 17.8398 114.433 17.8613V14.7614C112.646 14.7614 111.268 15.3426 110.45 16.462ZM118.109 13.3191C119.357 13.3191 120.197 12.5011 120.197 11.3817C120.197 10.3484 119.357 9.57341 118.109 9.57341C116.86 9.57341 116.021 10.3914 116.021 11.4463C116.021 12.5011 116.86 13.3191 118.109 13.3191ZM116.43 26.5151H119.788V14.9336H116.43V26.5151ZM126.349 23.9319L132.247 16.9572V14.9336H122.259V17.5169H128.006L122.108 24.4916V26.5151H132.441V23.9319H126.349ZM139.957 26.6874C143.638 26.6874 146.307 24.2118 146.307 20.7244C146.307 17.237 143.638 14.7614 139.957 14.7614C136.276 14.7614 133.585 17.237 133.585 20.7244C133.585 24.2118 136.276 26.6874 139.957 26.6874ZM139.957 23.9319C138.278 23.9319 136.986 22.7264 136.986 20.7244C136.986 18.7224 138.278 17.5169 139.957 17.5169C141.636 17.5169 142.906 18.7224 142.906 20.7244C142.906 22.7264 141.636 23.9319 139.957 23.9319ZM155.591 14.7614C154.02 14.7614 152.663 15.2996 151.759 16.2898V14.9336H148.552V26.5151H151.91V20.789C151.91 18.6578 153.072 17.6675 154.687 17.6675C156.172 17.6675 157.033 18.5286 157.033 20.4015V26.5151H160.392V19.8848C160.392 16.3544 158.325 14.7614 155.591 14.7614ZM84.6589 35.7731C84.5671 34.9985 84.1951 34.3971 83.5428 33.969C82.8904 33.5409 82.0903 33.3269 81.1424 33.3269C80.4493 33.3269 79.8428 33.439 79.323 33.6633C78.8083 33.8875 78.4057 34.1958 78.1152 34.5882C77.8298 34.9807 77.6871 35.4266 77.6871 35.926C77.6871 36.3439 77.7865 36.7032 77.9852 37.0039C78.1891 37.2995 78.449 37.5467 78.765 37.7454C79.0809 37.9391 79.4122 38.0996 79.7587 38.227C80.1053 38.3494 80.4238 38.4487 80.7143 38.5252L82.3044 38.9533C82.7121 39.0603 83.1656 39.2081 83.6651 39.3967C84.1696 39.5852 84.6512 39.8426 85.1099 40.1688C85.5737 40.4898 85.9559 40.9026 86.2566 41.4072C86.5573 41.9117 86.7076 42.5309 86.7076 43.2648C86.7076 44.1108 86.4859 44.8752 86.0425 45.5581C85.6043 46.241 84.9621 46.7838 84.1161 47.1864C83.2752 47.589 82.2534 47.7903 81.0507 47.7903C79.9295 47.7903 78.9586 47.6094 78.1381 47.2476C77.3227 46.8857 76.6805 46.3812 76.2117 45.734C75.7479 45.0867 75.4855 44.335 75.4243 43.4788H77.3813C77.4323 44.07 77.631 44.5593 77.9776 44.9466C78.3292 45.3288 78.7726 45.6142 79.3077 45.8028C79.8479 45.9862 80.4289 46.078 81.0507 46.078C81.7743 46.078 82.4241 45.9608 83 45.7263C83.5759 45.4868 84.032 45.1555 84.3684 44.7325C84.7047 44.3044 84.8729 43.805 84.8729 43.2342C84.8729 42.7144 84.7277 42.2914 84.4372 41.9652C84.1467 41.639 83.7645 41.374 83.2905 41.1702C82.8165 40.9663 82.3044 40.788 81.754 40.6351L79.8275 40.0847C78.6044 39.733 77.6361 39.231 76.9226 38.5787C76.2091 37.9264 75.8524 37.0727 75.8524 36.0178C75.8524 35.1412 76.0894 34.3767 76.5633 33.7244C77.0424 33.067 77.6845 32.5574 78.4897 32.1955C79.3001 31.8286 80.2047 31.6451 81.2036 31.6451C82.2126 31.6451 83.1096 31.826 83.8944 32.1879C84.6793 32.5446 85.301 33.0339 85.7597 33.6556C86.2235 34.2774 86.4681 34.9832 86.4936 35.7731H84.6589ZM90.742 51.9184C90.4362 51.9184 90.1636 51.8929 89.924 51.8419C89.6845 51.7961 89.5189 51.7502 89.4271 51.7043L89.8858 50.1143C90.3241 50.2264 90.7114 50.2672 91.0478 50.2366C91.3841 50.206 91.6823 50.0557 91.9422 49.7856C92.2072 49.5205 92.4493 49.0899 92.6684 48.4936L93.0048 47.5763L88.6627 35.7731H90.6197L93.861 45.13H93.9833L97.2246 35.7731H99.1816L94.1973 49.2275C93.9731 49.834 93.6953 50.336 93.3641 50.7335C93.0328 51.1361 92.648 51.4342 92.2098 51.6279C91.7766 51.8216 91.2873 51.9184 90.742 51.9184ZM109.88 38.4029L108.259 38.8615C108.158 38.5914 108.007 38.329 107.808 38.0742C107.615 37.8142 107.35 37.6002 107.013 37.432C106.677 37.2638 106.246 37.1797 105.721 37.1797C105.003 37.1797 104.404 37.3454 103.925 37.6766C103.451 38.0028 103.214 38.4182 103.214 38.9227C103.214 39.3712 103.377 39.7254 103.703 39.9853C104.029 40.2452 104.539 40.4618 105.232 40.6351L106.975 41.0632C108.025 41.318 108.807 41.7078 109.322 42.2328C109.837 42.7526 110.094 43.4228 110.094 44.2433C110.094 44.916 109.9 45.5174 109.513 46.0474C109.131 46.5774 108.596 46.9953 107.908 47.3011C107.22 47.6069 106.42 47.7598 105.507 47.7598C104.31 47.7598 103.319 47.4998 102.534 46.98C101.749 46.4602 101.252 45.7008 101.043 44.702L102.755 44.2739C102.918 44.9058 103.227 45.3798 103.68 45.6957C104.139 46.0117 104.738 46.1697 105.477 46.1697C106.318 46.1697 106.985 45.9913 107.48 45.6346C107.979 45.2727 108.229 44.8396 108.229 44.335C108.229 43.9273 108.086 43.5859 107.801 43.3106C107.515 43.0304 107.077 42.8214 106.486 42.6838L104.529 42.2251C103.454 41.9703 102.664 41.5753 102.159 41.0402C101.66 40.5 101.41 39.8247 101.41 39.0144C101.41 38.3519 101.596 37.7658 101.968 37.2562C102.345 36.7466 102.857 36.3465 103.505 36.056C104.157 35.7655 104.896 35.6203 105.721 35.6203C106.883 35.6203 107.796 35.8751 108.458 36.3847C109.126 36.8943 109.6 37.5671 109.88 38.4029ZM117.916 35.7731V37.3021H111.831V35.7731H117.916ZM113.605 32.96H115.409V44.1515C115.409 44.6612 115.483 45.0434 115.631 45.2982C115.784 45.5479 115.977 45.7161 116.212 45.8028C116.451 45.8843 116.703 45.9251 116.968 45.9251C117.167 45.9251 117.33 45.9149 117.458 45.8945C117.585 45.869 117.687 45.8486 117.763 45.8333L118.13 47.454C118.008 47.4998 117.837 47.5457 117.618 47.5916C117.399 47.6425 117.121 47.668 116.785 47.668C116.275 47.668 115.776 47.5585 115.287 47.3393C114.803 47.1202 114.4 46.7864 114.079 46.3379C113.763 45.8894 113.605 45.3237 113.605 44.6408V32.96ZM125.427 47.7598C124.296 47.7598 123.32 47.51 122.499 47.0106C121.684 46.5061 121.054 45.8028 120.611 44.9007C120.173 43.9936 119.954 42.9386 119.954 41.7359C119.954 40.5331 120.173 39.4731 120.611 38.5558C121.054 37.6333 121.671 36.9147 122.461 36.4C123.256 35.8802 124.184 35.6203 125.244 35.6203C125.855 35.6203 126.459 35.7222 127.055 35.926C127.652 36.1299 128.194 36.4612 128.684 36.9198C129.173 37.3734 129.563 37.9748 129.853 38.7239C130.144 39.4731 130.289 40.3955 130.289 41.4913V42.2557H121.238V40.6962H128.454C128.454 40.0337 128.322 39.4425 128.057 38.9227C127.797 38.4029 127.425 37.9926 126.941 37.6919C126.462 37.3912 125.896 37.2409 125.244 37.2409C124.525 37.2409 123.903 37.4193 123.378 37.776C122.859 38.1277 122.458 38.5863 122.178 39.152C121.898 39.7177 121.758 40.3242 121.758 40.9714V42.0111C121.758 42.8978 121.911 43.6496 122.216 44.2662C122.527 44.8778 122.958 45.3441 123.508 45.6652C124.059 45.9811 124.698 46.1391 125.427 46.1391C125.901 46.1391 126.329 46.0729 126.711 45.9404C127.099 45.8028 127.433 45.5989 127.713 45.3288C127.993 45.0536 128.21 44.7121 128.363 44.3044L130.106 44.7937C129.922 45.3849 129.614 45.9047 129.181 46.3532C128.747 46.7966 128.212 47.1431 127.575 47.3928C126.938 47.6374 126.222 47.7598 125.427 47.7598ZM133.033 47.5151V35.7731H134.776V37.6078H134.929C135.174 36.981 135.569 36.4943 136.114 36.1477C136.659 35.7961 137.314 35.6203 138.079 35.6203C138.853 35.6203 139.498 35.7961 140.013 36.1477C140.533 36.4943 140.938 36.981 141.228 37.6078H141.351C141.651 37.0014 142.102 36.5198 142.704 36.163C143.305 35.8012 144.026 35.6203 144.867 35.6203C145.917 35.6203 146.776 35.949 147.443 36.6064C148.111 37.2587 148.445 38.2755 148.445 39.6566V47.5151H146.641V39.6566C146.641 38.7902 146.404 38.171 145.93 37.7989C145.456 37.4269 144.898 37.2409 144.256 37.2409C143.43 37.2409 142.79 37.4906 142.337 37.9901C141.883 38.4844 141.656 39.1113 141.656 39.8706V47.5151H139.822V39.4731C139.822 38.8055 139.605 38.2678 139.172 37.8601C138.739 37.4473 138.181 37.2409 137.498 37.2409C137.029 37.2409 136.591 37.3658 136.183 37.6155C135.78 37.8652 135.454 38.2118 135.204 38.6551C134.96 39.0934 134.838 39.6005 134.838 40.1764V47.5151H133.033Z"
                  fill="#1D2853"
                />
                <path
                  d="M30.06 48.65H11.0729C10.9807 48.65 10.8861 48.65 10.794 48.65C10.6346 48.65 10.545 48.601 10.5599 48.4517C10.5599 48.3693 10.5599 48.2846 10.5599 48.2021C10.5599 41.39 10.5798 34.5778 10.5475 27.7656C10.5209 26.996 10.7022 26.232 11.0759 25.5384C11.4495 24.8448 12.0046 24.2421 12.6939 23.7813C13.9739 22.8677 15.458 22.3418 17.0292 21.983C18.7713 21.5959 20.5685 21.4456 22.3605 21.5373C24.472 21.5983 26.5476 22.0425 28.4613 22.8431C28.9665 23.0631 29.4475 23.325 29.8981 23.6253C29.9439 23.6623 30.0033 23.6827 30.0649 23.6827C30.1266 23.6827 30.186 23.6623 30.2318 23.6253C31.8304 22.5913 33.6482 22.0654 35.5681 21.7579C36.8748 21.5547 38.2025 21.48 39.5273 21.5351C41.6479 21.5777 43.7362 22.0093 45.663 22.803C46.8831 23.3245 47.9638 24.013 48.7383 25.0314C49.2882 25.7435 49.5786 26.5903 49.57 27.4559V48.2801C49.57 48.6567 49.57 48.6567 49.1541 48.6567L30.06 48.65ZM32.2512 35.6875C32.2512 38.4106 32.2512 41.1322 32.2512 43.8523C32.2512 44.0952 32.2513 44.0908 32.4878 43.9816C33.3918 43.5743 34.3535 43.2789 35.3465 43.1036C36.9833 42.7975 38.6629 42.7179 40.3267 42.8674C41.8953 42.9848 43.4282 43.3507 44.8537 43.9481C45.16 44.0819 45.16 44.0841 45.16 43.7699C45.16 38.3727 45.16 32.9756 45.16 27.5785C45.1636 27.4728 45.1412 27.3677 45.0943 27.2706C45.0473 27.1735 44.9771 27.0869 44.8885 27.0169C44.4924 26.693 44.0355 26.4343 43.5389 26.2526C42.4167 25.8333 41.2259 25.5797 40.0129 25.5016C38.2673 25.3479 36.505 25.4946 34.821 25.9339C34.0232 26.1258 33.277 26.4601 32.6273 26.9166C32.4987 27.0028 32.3954 27.1154 32.326 27.245C32.2566 27.3746 32.2233 27.5173 32.2288 27.6609C32.2612 30.3372 32.2612 33.0135 32.2612 35.6875H32.2512ZM27.8512 35.6541C27.8512 32.9801 27.8512 30.306 27.8512 27.6319C27.8575 27.4965 27.827 27.3617 27.7624 27.2391C27.6978 27.1165 27.6009 27.0096 27.4802 26.9278C27.1525 26.6861 26.7908 26.4838 26.4045 26.3261C25.2386 25.8608 23.9902 25.5832 22.7166 25.5061C20.972 25.3516 19.2105 25.4976 17.5272 25.9361C16.7291 26.1284 15.9828 26.4634 15.3335 26.9211C15.2032 27.0103 15.0995 27.127 15.0317 27.2608C14.964 27.3945 14.9342 27.5411 14.945 27.6877C14.955 33.0239 14.955 38.3601 14.945 43.6963C14.945 43.7498 14.945 43.8033 14.945 43.8568C14.945 44.0261 14.9898 44.0796 15.1791 43.9883C15.6508 43.7619 16.1462 43.5775 16.6582 43.4379C19.2485 42.7143 22.0024 42.5947 24.6589 43.0902C25.6876 43.2591 26.6838 43.5593 27.6172 43.9816C27.789 44.0618 27.8462 44.0261 27.8388 43.8612C27.8388 43.7944 27.8388 43.7253 27.8388 43.6562L27.8512 35.6541Z"
                  fill="#F13A51"
                />
                <path
                  d="M30.061 9.73145C30.1631 9.7671 30.2652 9.80052 30.3648 9.84063L36.8839 12.4322L49.9694 17.6355C50.5372 17.8584 50.4675 17.7737 50.2409 18.2394C49.7677 19.2154 49.2722 20.1826 48.7991 21.1586C48.6995 21.3614 48.5999 21.3926 48.3783 21.3034C45.1063 19.9946 41.8318 18.691 38.5548 17.3926C35.8007 16.2963 33.0467 15.1999 30.2926 14.1035C30.2213 14.0722 30.1429 14.056 30.0635 14.056C29.9841 14.056 29.9057 14.0722 29.8344 14.1035L18.7759 18.5046C16.4102 19.445 14.0438 20.3861 11.6766 21.3279C11.5172 21.3903 11.4275 21.3747 11.3603 21.2254C10.8341 20.1558 10.3028 19.0869 9.76664 18.0188C9.68447 17.8539 9.74672 17.796 9.90858 17.7269C11.8807 16.9469 13.8521 16.1648 15.8226 15.3804L26.1167 11.2913L29.8643 9.79829C29.9241 9.77378 29.9888 9.75596 30.061 9.73145Z"
                  fill="#F13A51"
                />
              </svg>
            </div>
            <div className="sidebar__entries">
              <NavLink to="/dashboard" className="sidebar__entry" end>
                <div className="sidebar__entry__icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8174 12.5097C13.8174 13.5101 13.8174 14.5132 13.8174 15.5136C13.8174 15.6803 13.8174 15.6803 13.6496 15.6803C12.2815 15.6803 10.9108 15.6803 9.54264 15.6803C9.37485 15.6803 9.37485 15.6803 9.37485 15.5136C9.37485 14.534 9.37485 13.557 9.37485 12.5774C9.37485 12.3169 9.32064 12.0694 9.19674 11.8402C9.05218 11.5666 8.83018 11.3842 8.53848 11.2904C8.19774 11.181 7.84926 11.1732 7.50594 11.2774C6.97159 11.4363 6.62569 11.8923 6.61795 12.4758C6.60762 13.4528 6.61278 14.4324 6.61278 15.412C6.61278 15.7142 6.64634 15.6803 6.34948 15.6803C5.01491 15.6803 3.68035 15.6803 2.34578 15.6803C2.17024 15.6803 2.17024 15.6803 2.17024 15.5006C2.17024 13.5049 2.17024 11.5093 2.17024 9.51364C2.17024 9.3469 2.17024 9.3469 2.00762 9.3469C1.63332 9.3469 1.2616 9.3469 0.887303 9.3469C0.693701 9.3469 0.50526 9.32085 0.321983 9.2505C0.0483579 9.14629 -0.0548969 8.94308 0.027707 8.6591C0.0948226 8.42723 0.231635 8.23184 0.396843 8.0625C2.64005 5.7959 4.88326 3.53191 7.12906 1.26792C7.5937 0.798972 8.39909 0.806788 8.87148 1.27834C9.43938 1.8463 10.0047 2.41946 10.57 2.99001C12.2014 4.63655 13.8329 6.28309 15.4643 7.93223C15.6424 8.112 15.7999 8.30739 15.9109 8.53666C15.9548 8.62784 15.9857 8.72163 15.9909 8.82584C15.9961 8.99779 15.9212 9.12284 15.7715 9.20361C15.596 9.3 15.3998 9.33648 15.2036 9.33908C14.7957 9.3469 14.3879 9.34169 13.98 9.34429C13.82 9.34429 13.82 9.34429 13.82 9.51103C13.8174 10.5141 13.8174 11.5119 13.8174 12.5097Z"
                      fill="#F13A51"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Dashboard</div>
              </NavLink>

              <NavLink to="/dashboard/Student" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.02991 15.2076C4.77604 15.2022 3.53503 15.0871 2.32123 14.7553C1.76306 14.6028 1.22133 14.4067 0.731028 14.091C0.49903 13.9415 0.293042 13.7633 0.141765 13.5277C-0.0531609 13.2239 -0.00592423 12.8879 0.0437042 12.5677C0.33131 10.7093 1.38666 9.50451 3.17538 8.93438C3.43608 8.85126 3.65342 8.85784 3.90456 9.02945C4.65108 9.53919 5.50462 9.64831 6.38956 9.59808C7.12502 9.55653 7.79082 9.32483 8.38786 8.89462C8.43958 8.85724 8.48532 8.84529 8.55169 8.85904C10.08 9.17594 11.1467 10.0558 11.7578 11.4878C11.9614 11.9647 12.046 12.4682 12.0663 12.9851C12.0795 13.3202 11.9405 13.5809 11.7067 13.8042C11.3195 14.1741 10.8448 14.3914 10.3506 14.5663C9.28206 14.9445 8.1729 15.1092 7.0455 15.1762C6.70707 15.1965 6.36894 15.2058 6.02991 15.2076Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M2.00627 2.35157C1.99043 2.4574 1.9997 2.51361 2.08341 2.56055C2.24156 2.64994 2.258 2.83051 2.11779 2.94382C2.05022 2.99853 2.04813 3.05025 2.05351 3.1226C2.10912 3.90231 2.15845 4.68231 2.21884 5.46142C2.24305 5.77324 2.10822 6.0435 2.02451 6.32782C2.01674 6.35473 1.9973 6.38911 1.96143 6.37924C1.91778 6.36729 1.9115 6.32035 1.89625 6.28477C1.73332 5.9006 1.69864 5.50507 1.74049 5.08861C1.80567 4.43985 1.83676 3.7878 1.8819 3.13725C1.88728 3.05892 1.88818 2.99494 1.80656 2.93276C1.68339 2.83888 1.70491 2.63947 1.84334 2.56593C1.93243 2.51839 1.94678 2.4577 1.94558 2.37519C1.94439 2.28998 1.86695 2.29776 1.81852 2.27294C1.75215 2.23886 1.681 2.21494 1.61522 2.18026C1.53929 2.1405 1.46514 2.09356 1.46484 1.99311C1.46455 1.89266 1.5369 1.84303 1.61493 1.80715C1.81822 1.71417 2.02331 1.62508 2.2287 1.53629C3.328 1.06003 4.42611 0.58109 5.5275 0.10962C5.85158 -0.0291004 6.193 -0.0398632 6.51708 0.0985583C7.81519 0.653141 9.10882 1.21819 10.4042 1.77965C10.4317 1.7916 10.4595 1.80267 10.4853 1.81761C10.6608 1.92195 10.6608 2.07323 10.4778 2.1698C10.3418 2.24155 10.1974 2.29746 10.0562 2.35904C9.76475 2.4864 9.47445 2.61705 9.17967 2.73694C9.09327 2.77221 9.07324 2.82095 9.07414 2.90525C9.07772 3.25385 9.07832 3.60274 9.07473 3.95134C9.07324 4.10052 9.1435 4.22997 9.17369 4.37049C9.44635 5.63631 9.07892 6.73113 8.26753 7.69739C7.79994 8.25436 7.21217 8.63913 6.48748 8.77008C5.71405 8.9097 5.00849 8.71148 4.39472 8.23732C3.3582 7.43669 2.82484 6.37297 2.81258 5.05781C2.81019 4.80788 2.83979 4.55794 2.92111 4.32236C2.99944 4.09484 3.00542 3.86553 3.00273 3.63144C3.00004 3.40244 2.99675 3.17283 3.00452 2.94412C3.00841 2.83051 2.9806 2.76803 2.86401 2.72259C2.5773 2.61047 2.29866 2.47923 2.00627 2.35157Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Student</div>
              </NavLink>
              <NavLink to="/dashboard/Staff" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4464 0C8.24853 0.0147747 9.67079 1.40632 9.67274 3.21428C9.67468 5.05101 8.24387 6.4305 6.44718 6.42583C4.69055 6.42117 3.25079 5.08795 3.24029 3.23411C3.22979 1.39699 4.66683 0.026439 6.4464 0Z"
                      fill="#F13A51"
                    />
                    <path
                      d="M9.29814 13.7268C8.60528 13.7268 7.91242 13.7272 7.21996 13.7268C6.98823 13.7268 6.98706 13.7229 7.08504 13.525C8.06795 11.542 9.05163 9.55951 10.0299 7.57426C10.0999 7.43234 10.1819 7.37247 10.3417 7.3818C10.6901 7.40163 11.04 7.3643 11.3888 7.41524C12.1252 7.52294 12.6018 7.9479 12.8713 8.62249C12.9728 8.87638 13.0023 9.14543 13.0008 9.41993C12.9961 10.2485 13.0019 11.0774 12.998 11.906C12.9953 12.4165 12.8483 12.8749 12.4673 13.2349C12.1403 13.544 11.7538 13.7213 11.2989 13.7237C10.6321 13.7272 9.96533 13.7244 9.29853 13.7244C9.29814 13.7256 9.29814 13.7264 9.29814 13.7268Z"
                      fill="#F13A51"
                    />
                    <path
                      d="M3.702 13.7272C3.04764 13.7272 2.39327 13.7361 1.73891 13.7249C0.992396 13.712 0.470227 13.3419 0.151015 12.6755C0.0339836 12.4309 0.00715584 12.165 0.00560061 11.9002C-0.000231513 11.0059 -0.00334198 10.112 0.00560061 9.21779C0.0133768 8.44328 0.351251 7.86707 1.06938 7.53736C1.3155 7.42422 1.57911 7.397 1.84505 7.39C2.09117 7.38378 2.33767 7.39661 2.5834 7.38534C2.73503 7.37834 2.81668 7.43549 2.88395 7.56924C3.37618 8.54982 3.87502 9.52728 4.37192 10.5059C4.8867 11.5195 5.39837 12.5347 5.92015 13.5452C6.00608 13.712 5.96175 13.7334 5.80118 13.7322C5.10132 13.7272 4.40186 13.7299 3.702 13.7299C3.702 13.7287 3.702 13.728 3.702 13.7272Z"
                      fill="#F13A51"
                    />
                    <path
                      d="M6.44157 12.3016C6.07532 11.5305 5.71606 10.7747 5.3568 10.0189C5.25454 9.80346 5.16162 9.583 5.04808 9.37344C4.99015 9.26651 4.99987 9.2008 5.08852 9.12343C5.51232 8.75406 5.93418 8.38236 6.35331 8.00794C6.43185 7.93796 6.4859 7.9434 6.56288 8.01261C6.97696 8.38314 7.39532 8.7494 7.81329 9.11566C7.87978 9.17398 7.93615 9.22491 7.88716 9.32756C7.41593 10.3093 6.9478 11.2922 6.47812 12.2747C6.47618 12.2794 6.46879 12.2817 6.44157 12.3016Z"
                      fill="#F13A51"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Staff</div>
              </NavLink>
              <NavLink to="/dashboard/Classes" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.9349 0C6.19099 0.066863 6.43442 0.153525 6.64605 0.326525C7.35882 0.91044 7.24684 2.07081 6.43053 2.4986C5.70153 2.88063 4.8943 2.63038 4.51422 1.90397C4.20847 1.32006 4.46716 0.507639 5.0501 0.191825C5.21856 0.100619 5.3961 0.0473883 5.57786 0C5.69698 0 5.8161 0 5.9349 0Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M3.25653 7.55617C3.64959 7.55617 4.04298 7.55682 4.43604 7.55617C5.03294 7.55519 5.40199 7.87101 5.51559 8.46076C5.62854 9.0463 5.55843 9.63638 5.57856 10.2239C5.5857 10.429 5.57271 10.6351 5.58213 10.8402C5.58829 10.9697 5.55519 11.0175 5.41464 11.0165C4.4685 11.0103 3.52203 11.0136 2.57556 11.0132C1.77516 11.0129 0.974748 11.0093 0.174664 11.0142C0.0445083 11.0149 -0.00158166 10.9873 4.12231e-05 10.8461C0.00783108 10.2242 -0.00223082 9.6023 0.00426073 8.98041C0.00977855 8.46076 0.186673 8.01901 0.631669 7.71424C0.777729 7.61427 0.938395 7.55747 1.11724 7.55747C1.53789 7.55779 1.95822 7.55747 2.38698 7.54124C1.95952 7.36856 1.60281 7.12415 1.38469 6.70415C1.16333 6.27766 1.14872 5.84792 1.31912 5.40649C1.56548 4.76805 2.26494 4.35096 2.96863 4.41945C3.68724 4.48923 4.29712 5.02706 4.4091 5.68952C4.549 6.51297 4.17281 7.11247 3.25653 7.55617Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M9.61988 7.55699C9.8922 7.55699 10.1645 7.55666 10.4372 7.55731C10.5832 7.55764 10.7293 7.55439 10.875 7.56218C11.4586 7.59269 11.7436 7.91694 11.8679 8.45607C11.9179 8.67256 11.926 8.89555 11.928 9.11658C11.9331 9.7005 11.927 10.2844 11.9322 10.8683C11.9331 10.9823 11.8991 11.0147 11.7855 11.0147C10.0392 11.0118 8.29301 11.0121 6.54678 11.016C6.42247 11.0163 6.39358 10.9767 6.39455 10.8576C6.40007 10.225 6.38904 9.59241 6.39877 8.96014C6.40656 8.46256 6.56463 8.0273 6.98886 7.72382C7.13751 7.61736 7.3011 7.55666 7.48676 7.55731C7.90741 7.55893 8.32774 7.55764 8.80227 7.55764C7.83373 7.14542 7.35693 6.49627 7.66885 5.4758C7.87917 4.78737 8.55267 4.3784 9.2807 4.4154C9.98698 4.4511 10.5855 4.94316 10.7611 5.63841C10.8679 6.06004 10.7845 6.4557 10.5602 6.81857C10.3398 7.17463 10.0094 7.39892 9.61988 7.55699Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M5.76651 2.69426C6.20437 2.69458 6.64222 2.69588 7.08008 2.69393C7.39427 2.69264 7.6786 2.78579 7.92106 2.98119C8.0087 3.05194 8.07134 3.03669 8.15119 2.9919C8.45856 2.81857 8.61566 2.53359 8.72439 2.21518C8.82598 1.9169 8.87434 1.60822 8.89122 1.29403C8.89642 1.19698 8.90356 1.09929 8.91978 1.00386C8.97139 0.702651 9.20671 0.527055 9.52642 0.545231C9.81335 0.561785 10.0581 0.792884 10.0545 1.07916C10.0457 1.81108 9.92955 2.52126 9.55271 3.1649C9.17815 3.80431 8.62247 4.17336 7.88049 4.24444C7.78668 4.25353 7.71723 4.28599 7.65361 4.34733C7.33942 4.65049 7.11124 5.00623 7.01257 5.43434C6.98757 5.54243 6.95447 5.5856 6.83502 5.5843C6.29979 5.57716 5.76424 5.5791 5.22901 5.58332C5.12742 5.58397 5.08068 5.55931 5.05114 5.45155C4.82784 4.63848 4.30234 4.1065 3.50843 3.84067C3.39093 3.80139 3.37373 3.75173 3.38996 3.64365C3.46104 3.17236 3.80704 2.67381 4.4523 2.69134C4.89048 2.70367 5.32866 2.69426 5.76651 2.69426Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Classes</div>
              </NavLink>
              <NavLink to="/dashboard/Reports" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00088127 8.80966C0.00088127 6.82154 -0.00207883 4.83244 0.00384112 2.84432C0.00482778 2.53353 0.0206159 2.21878 0.0640289 1.91095C0.163681 1.21042 0.704369 0.705249 1.40391 0.700315C3.49069 0.686502 5.57846 0.700315 7.66524 0.690449C8.01748 0.688475 8.12601 0.841407 8.11615 1.16602C8.10332 1.60903 8.11121 2.05302 8.11516 2.49702C8.12207 3.48565 8.58185 3.95135 9.55568 3.95925C9.99968 3.96221 10.4437 3.97898 10.8867 3.9553C11.3001 3.93359 11.457 4.11909 11.4333 4.50882C11.4274 4.60748 11.4343 4.70615 11.4343 4.80481C11.4343 8.14071 11.4363 11.4776 11.4313 14.8135C11.4313 15.1243 11.4145 15.439 11.3682 15.7459C11.2646 16.4415 10.718 16.9368 10.0125 16.9397C7.15317 16.9496 4.29284 16.9496 1.43351 16.9407C0.703381 16.9387 0.161708 16.4375 0.061069 15.7094C0.020616 15.4173 0.00384016 15.1203 0.0028535 14.8253C-0.00207979 12.8194 0.00088127 10.8145 0.00088127 8.80966ZM5.69489 7.31783C6.64602 7.31783 7.59618 7.32178 8.54732 7.31487C8.74563 7.31389 9.01499 7.38197 9.02486 7.04946C9.03374 6.72189 8.77524 6.75642 8.56804 6.75642C6.66675 6.75346 4.76546 6.75346 2.86318 6.75642C2.65499 6.75642 2.39748 6.72682 2.4103 7.05341C2.42313 7.38591 2.69446 7.31389 2.89179 7.31487C3.82616 7.32178 4.76052 7.31783 5.69489 7.31783ZM5.66627 9.9897C6.6332 9.9897 7.60012 9.99266 8.56705 9.98773C8.77227 9.98674 9.02979 10.0282 9.02585 9.69765C9.0219 9.40166 8.78905 9.42928 8.59665 9.42829C6.67858 9.42533 4.76151 9.42533 2.84344 9.42829C2.65302 9.42829 2.41721 9.39672 2.40931 9.69272C2.40043 10.0223 2.65499 9.98674 2.86318 9.98773C3.79754 9.99266 4.73191 9.9897 5.66627 9.9897ZM5.72251 12.6616C6.65688 12.6616 7.59124 12.6655 8.52561 12.6586C8.7407 12.6566 9.03473 12.7227 9.02289 12.3597C9.01302 12.0281 8.73676 12.1012 8.54041 12.1002C6.65491 12.0952 4.77039 12.0952 2.88488 12.1002C2.68558 12.1002 2.41721 12.036 2.4103 12.3695C2.4034 12.6981 2.66387 12.6586 2.87009 12.6596C3.82122 12.6635 4.77137 12.6606 5.72251 12.6616Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M10.108 3.39333C9.97682 3.39333 9.84658 3.39629 9.71536 3.39333C8.94281 3.3736 8.73857 3.16541 8.73561 2.38792C8.73363 2.04457 8.73363 1.70121 8.73857 1.35785C8.74251 1.10428 8.85401 1.06087 9.03062 1.23452C9.64629 1.84428 10.259 2.45699 10.8678 3.07464C11.0424 3.25224 10.9822 3.36965 10.7454 3.38544C10.5343 3.39925 10.3202 3.3884 10.108 3.3884C10.108 3.3884 10.108 3.39037 10.108 3.39333Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Reports</div>
              </NavLink>
              <NavLink to="/dashboard/Notifications" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.48187 13.3412C4.62375 13.3412 2.76563 13.3436 0.905084 13.3412C0.304358 13.3412 -0.0580232 12.9472 0.00764325 12.3805C0.0343962 12.1373 0.192482 11.9719 0.34084 11.7993C0.576752 11.5244 0.844282 11.2812 1.05831 10.9869C1.61769 10.2208 1.82441 9.33798 1.92899 8.41622C2.03357 7.49689 1.96061 6.5654 2.08708 5.6485C2.25003 4.46651 2.59539 3.35018 3.43689 2.45031C3.90142 1.95173 4.4608 1.60637 5.11747 1.43369C5.34851 1.37289 5.46282 1.27074 5.47985 1.00564C5.51146 0.451127 5.96626 0.0401004 6.4916 0.0449646C7.02666 0.0473967 7.47902 0.48031 7.49848 1.04212C7.50578 1.26101 7.59577 1.3583 7.79033 1.41181C9.2277 1.80824 10.0497 2.81512 10.5386 4.1625C10.8791 5.10372 10.9545 6.07898 10.9764 7.06398C10.9958 7.99061 11.0396 8.90993 11.3217 9.80494C11.5041 10.3838 11.796 10.897 12.207 11.342C12.3846 11.5342 12.5597 11.7263 12.7348 11.9184C12.9901 12.1957 13.0388 12.5216 12.8953 12.8548C12.7469 13.1977 12.4502 13.3412 12.0805 13.3412C10.2176 13.3412 8.34971 13.3412 6.48187 13.3412Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M6.48993 14.066C7.06877 14.066 7.65004 14.0684 8.22888 14.0636C8.38453 14.0636 8.47695 14.1122 8.45749 14.28C8.37967 15.0242 8.14619 15.6955 7.41899 16.036C6.65532 16.3911 5.89164 16.3546 5.21065 15.8244C4.7218 15.4426 4.55399 14.888 4.50535 14.2898C4.49076 14.1049 4.58804 14.0611 4.74856 14.0636C5.32983 14.0684 5.90866 14.066 6.48993 14.066Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Notifications</div>
              </NavLink>

              <NavLink to="/dashboard/Finances" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5983 9.31314C10.5983 8.10616 10.5911 6.89918 10.6007 5.6922C10.6055 4.93483 10.781 4.76893 11.5312 4.76412C12.0553 4.76172 12.5795 4.75931 13.1036 4.76653C13.6879 4.77615 13.8634 4.93964 13.9211 5.52149C13.9331 5.64652 13.9331 5.77635 13.9331 5.90138C13.9331 8.23599 13.9355 10.5706 13.9331 12.9052C13.9331 13.7708 13.7624 13.9367 12.9041 13.9415C12.4424 13.9439 11.9832 13.9463 11.5216 13.9391C10.8147 13.9295 10.6127 13.7467 10.6055 13.0278C10.5887 11.7896 10.6007 10.5514 10.5983 9.31314C10.6007 9.31314 10.6007 9.31314 10.5983 9.31314Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M2.14254 7.42791C3.08505 7.72365 3.84241 7.22114 4.41705 6.2594C4.65989 5.85307 5.01814 5.51887 5.29945 5.13658C5.51103 4.84806 5.78272 4.75188 6.12413 4.7591C6.55451 4.76871 6.98729 4.72303 7.41046 4.76871C8.05001 4.83844 8.52607 4.63407 8.95404 4.14839C9.47819 3.55212 10.0648 3.01354 10.6323 2.45333C10.8655 2.22252 10.9617 2.04219 10.6731 1.74405C10.3317 1.39061 10.4375 0.965046 10.8968 0.789529C11.6397 0.505817 12.3947 0.250956 13.1568 0.0297564C13.6497 -0.1121 14.02 0.272596 13.8733 0.772699C13.6569 1.52045 13.4069 2.25858 13.1376 2.9895C12.9621 3.46556 12.5413 3.56895 12.1518 3.21551C11.8753 2.96546 11.719 3.01835 11.4882 3.25638C10.7236 4.0426 9.93501 4.80718 9.16803 5.5934C8.9276 5.84105 8.66552 5.95646 8.32411 5.94684C7.75187 5.93241 7.17724 5.96127 6.60741 5.93722C6.28282 5.9228 6.07845 6.05023 5.88851 6.30028C5.386 6.95666 4.85464 7.59141 4.34733 8.24539C4.15498 8.49304 3.92176 8.61085 3.6116 8.61085C2.64024 8.60604 1.67129 8.61806 0.69994 8.60604C0.255137 8.60123 -0.0309794 8.34637 0.0026814 7.99534C0.0435552 7.59381 0.303224 7.42311 0.692727 7.42311C1.10868 7.43032 1.52222 7.42791 2.14254 7.42791Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M9.66654 10.4574C9.66654 11.3614 9.67135 12.2679 9.66414 13.1719C9.65933 13.7009 9.48622 13.9028 8.95967 13.9269C8.32492 13.9533 7.68777 13.9533 7.05543 13.9245C6.55052 13.9004 6.375 13.7009 6.3726 13.2008C6.36538 11.3422 6.36538 9.48364 6.3726 7.62749C6.375 7.11296 6.5385 6.92783 7.05303 6.90379C7.68777 6.87493 8.32252 6.87493 8.95726 6.90138C9.49343 6.92302 9.65933 7.11056 9.66414 7.64673C9.67135 8.58201 9.66654 9.51971 9.66654 10.4574Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M8.03382 14.8694C10.3708 14.8694 12.7055 14.8694 15.0425 14.8694C15.218 14.8694 15.3935 14.8646 15.5642 14.8959C15.8527 14.9488 16.0066 15.1555 16.0259 15.4296C16.0451 15.7109 15.9032 15.9273 15.6219 16.0018C15.456 16.0451 15.2781 16.0547 15.105 16.0547C10.3853 16.0571 5.66555 16.0571 0.945828 16.0571C0.835228 16.0571 0.722224 16.062 0.611624 16.0499C0.253377 16.0091 -0.00629133 15.8311 0.0105391 15.4464C0.0273694 15.0738 0.270208 14.879 0.645285 14.8766C1.66232 14.8718 2.67936 14.8718 3.69639 14.8718C5.1414 14.8694 6.58641 14.8694 8.03382 14.8694Z"
                      fill="#8E8EB3"
                    />
                    <path
                      d="M2.10481 11.7222C2.10481 11.2317 2.08798 10.7388 2.10962 10.2483C2.13126 9.76262 2.34044 9.56066 2.82852 9.54863C3.46326 9.53421 4.09801 9.54383 4.73035 9.54863C5.1463 9.55104 5.38433 9.75781 5.40597 10.1834C5.45646 11.2124 5.45165 12.2439 5.40838 13.273C5.38914 13.7057 5.1439 13.939 4.7015 13.939C4.08358 13.9414 3.46326 13.951 2.84535 13.9366C2.34525 13.9245 2.12645 13.7081 2.10481 13.1984C2.08558 12.7055 2.10241 12.215 2.10481 11.7222C2.10241 11.7222 2.10241 11.7222 2.10481 11.7222Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Finances</div>
              </NavLink>

              <NavLink to="/dashboard/Settings" className="sidebar__entry">
                <div className="sidebar__entry__icon">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5858 13.9283C11.2724 13.8938 10.9644 13.7132 10.643 13.5857C9.86225 13.275 9.30721 13.4981 8.99119 14.2655C8.51316 15.4314 8.51316 15.4314 7.23843 15.4314C6.30894 15.4314 6.2399 15.3756 5.87872 14.5205C5.74063 14.1965 5.68486 13.8167 5.31572 13.6255C4.91471 13.4184 4.54026 13.3865 4.10473 13.5804C2.98137 14.0823 2.9734 14.0637 2.11562 13.2059C2.00939 13.0997 1.90582 12.9908 1.79694 12.8872C1.51543 12.6137 1.44107 12.3003 1.60307 11.9339C1.69868 11.7161 1.78366 11.4957 1.87395 11.2752C2.1767 10.5343 1.94565 9.98724 1.20737 9.68184C0.0123157 9.19053 0.0441841 9.18788 0.00169313 7.91315C-0.022208 7.20939 0.203525 6.7712 0.896659 6.56406C1.34813 6.42862 1.79959 6.26132 1.94565 5.70893C2.00939 5.46727 2.04657 5.25215 1.94565 5.01845C1.82349 4.73164 1.7093 4.43951 1.58714 4.1527C1.4517 3.82871 1.51012 3.53924 1.75179 3.2896C2.03064 3.00279 2.31479 2.72128 2.59895 2.43978C2.84593 2.19546 3.13275 2.13172 3.45939 2.26451C3.67982 2.3548 3.89758 2.44509 4.118 2.53273C4.89878 2.84876 5.45647 2.63365 5.7725 1.8635C6.23724 0.734831 6.15226 0.676409 7.55712 0.692343C8.44412 0.702966 8.50785 0.745457 8.86902 1.56341C9.02571 1.91661 9.08679 2.32293 9.52498 2.5168C9.93661 2.69738 10.2925 2.70269 10.7041 2.51945C11.7797 2.04143 11.785 2.05471 12.6056 2.87531C12.7038 2.97357 12.7941 3.07449 12.8977 3.16479C13.2536 3.47816 13.3412 3.83933 13.1234 4.27221C13.0331 4.45014 12.9694 4.64135 12.895 4.82724C12.6003 5.55225 12.8526 6.14977 13.5855 6.45252C14.7461 6.93054 14.7168 6.93055 14.7593 8.20528C14.7832 8.90903 14.5628 9.34988 13.867 9.55436C13.4129 9.68715 12.9747 9.86773 12.826 10.4201C12.7569 10.6751 12.7251 10.8981 12.8313 11.1425C12.9561 11.4293 13.0703 11.7187 13.1845 12.0109C13.2907 12.2791 13.2642 12.5394 13.073 12.7492C12.7516 13.097 12.4091 13.429 12.0691 13.7583C11.9576 13.8752 11.7982 13.9203 11.5858 13.9283ZM10.2898 8.07249C10.2925 6.46846 9.0204 5.16717 7.43496 5.15655C5.80437 5.14593 4.5137 6.42597 4.49246 8.06984C4.47121 9.61545 5.80702 10.9406 7.39778 10.9539C8.96197 10.9725 10.2872 9.65262 10.2898 8.07249Z"
                      fill="#8E8EB3"
                    />
                  </svg>
                </div>
                <div className="sidebar__entry__name">Settings</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container__right">
          <Outlet />
        </div>
      </div>
    </>
  );
}