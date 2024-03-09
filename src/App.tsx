import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { LoginForm } from './components/login-form/login-form';
import { VerifyUserForm } from './components/verify-user-form/verify-user-form';
import { UserDashboard } from './components/user-dashboard/user-dashboard';
import Userfront from '@userfront/toolkit/react';

Userfront.init('7n88yrpn');

function App() {
    return (
        <div className={styles.App}>
            <Router>
                <div className={styles.navbkg}>
                    <nav className={styles.menu}>
                        <div>
                            <svg
                                width="201"
                                height="39"
                                viewBox="0 0 201 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M51.1949 4.68011C54.8952 7.8022 57.7204 12.3225 58.1884 17.2249C58.5323 22.9889 57.1227 28.1651 53.254 32.5305C50.0632 36.0146 45.3895 38.2304 40.68 38.6679C39.8439 38.698 39.0083 38.6988 38.1718 38.6996C37.9214 38.7005 37.6711 38.7015 37.4132 38.7025C36.729 38.7051 36.0448 38.7064 35.3607 38.7072C34.9317 38.7078 34.5027 38.7086 34.0737 38.7095C32.7271 38.7122 31.3805 38.7141 30.0339 38.7149C28.4878 38.7157 26.9418 38.7192 25.3957 38.7249C24.1954 38.7292 22.9952 38.7311 21.7949 38.7314C21.0805 38.7316 20.3662 38.7327 19.6519 38.7363C13.975 38.7629 9.35042 38.271 5.02371 34.2047C3.27507 32.3679 2.10638 30.2586 1.33513 27.848C1.27249 27.6723 1.20986 27.4966 1.14532 27.3155C-0.0110062 23.5907 0.726314 19.5797 2.46216 16.1849C4.48948 12.4346 7.94309 9.89117 11.9728 8.63899C12.9392 8.37508 13.911 8.24606 14.9091 8.17561C15.0539 8.16496 15.1987 8.15431 15.3479 8.14334C17.9817 8.04628 20.5296 8.86057 22.9748 9.74941C23.0471 9.53829 23.0471 9.53829 23.1208 9.32291C24.7185 5.72563 28.8659 3.0845 32.385 1.64616C38.7032 -0.714459 45.9581 0.43386 51.1949 4.68011Z"
                                    fill="white"
                                />
                                <path
                                    d="M51.1949 4.67987C54.9491 7.84742 57.6288 12.2908 58.1884 17.2247C58.1884 18.0037 58.1884 18.7827 58.1884 19.5854C54.6179 19.5854 51.0473 19.5854 47.3686 19.5854C47.3037 20.2346 47.2388 20.8838 47.1719 21.5526C46.6123 23.7457 45.1345 25.4818 43.2374 26.6674C42.033 27.2501 40.8722 27.6769 39.5271 27.6734C39.3381 27.6734 39.1491 27.6734 38.9544 27.6734C38.7519 27.6723 38.5494 27.6713 38.3408 27.6703C38.1323 27.67 37.9239 27.6697 37.7091 27.6694C37.0436 27.6683 36.3782 27.6659 35.7127 27.6634C35.2614 27.6624 34.81 27.6615 34.3587 27.6607C33.2526 27.6585 32.1466 27.6552 31.0405 27.6511C31.0377 27.3897 31.0377 27.3897 31.0349 27.1231C30.9597 21.452 30.4337 16.7126 26.2899 12.4633C25.1781 11.4118 23.9224 10.672 22.5814 9.9459C22.7761 9.84852 22.7761 9.84852 22.9748 9.74917C23.0311 9.60437 23.0874 9.45957 23.1454 9.31038C24.5593 5.85364 28.6691 3.25703 31.9603 1.8195C38.3428 -0.789231 45.8539 0.349082 51.1949 4.67987Z"
                                    fill="white"
                                />
                                <path
                                    d="M15.3477 8.14322C19.2508 7.99939 23.2775 9.55429 26.1591 12.1469C28.0024 13.876 29.3604 15.8387 30.2534 18.2084C30.3348 18.4197 30.4162 18.6309 30.5001 18.8485C31.3897 21.6722 31.0889 24.735 31.0403 27.6512C27.4698 27.6512 23.8992 27.6512 20.2205 27.6512C20.1556 26.0931 20.0907 24.5351 20.0238 22.9298C19.4505 21.2101 19.2439 20.7155 17.8598 19.7822C16.8094 19.2682 15.6102 19.1755 14.4871 19.5171C13.4324 19.987 12.8105 20.6073 12.1548 21.5527C11.9601 22.2019 11.7653 22.8511 11.5646 23.52C7.9941 23.52 4.42355 23.52 0.744812 23.52C0.744812 19.0686 2.25734 15.6178 5.32864 12.4266C8.0668 9.79149 11.6008 8.41883 15.3477 8.14322Z"
                                    fill="white"
                                />
                                <path
                                    d="M17.876 19.566C19.0771 20.2534 19.6772 21.1022 20.0972 22.3959C20.3269 23.3899 20.2812 24.3864 20.2574 25.4009C20.2534 25.7267 20.2534 25.7267 20.2493 26.0591C20.2424 26.5898 20.2328 27.1203 20.2205 27.6509C20.3382 27.6505 20.4558 27.65 20.577 27.6496C26.7581 27.6278 32.9272 27.6666 39.106 27.8476C39.106 31.3533 39.106 34.8589 39.106 38.4708C32.8089 38.4708 26.5117 38.4708 20.0238 38.4708C20.0238 34.9651 20.0238 31.4595 20.0238 27.8476C18.5956 27.8476 17.1674 27.8476 15.6959 27.8476C13.9375 27.2615 12.9863 26.8224 11.9704 25.3148C11.549 24.0754 11.3915 22.9709 11.9304 21.7461C13.2331 19.4798 15.4069 18.5064 17.876 19.566Z"
                                    fill="white"
                                />
                                <path
                                    d="M43.7783 12.8475C45.4702 14.056 46.5175 15.6552 47.1718 17.6181C47.4168 20.4119 47.234 22.6642 45.3966 24.8769C44.0008 26.3611 42.1201 27.5656 40.03 27.6747C39.781 27.674 39.781 27.674 39.527 27.6734C39.338 27.6733 39.149 27.6733 38.9543 27.6733C38.7518 27.6723 38.5493 27.6713 38.3407 27.6702C38.1322 27.67 37.9237 27.6697 37.7089 27.6694C37.0435 27.6683 36.378 27.6658 35.7126 27.6633C35.2612 27.6623 34.8099 27.6614 34.3586 27.6606C33.2525 27.6585 32.1464 27.6552 31.0404 27.651C31.0203 26.3495 31.0066 25.048 30.9972 23.7463C30.9932 23.3044 30.9879 22.8626 30.981 22.4207C30.892 16.5312 30.892 16.5312 33.2044 14.0771C36.1438 11.0521 40.2203 10.6589 43.7783 12.8475Z"
                                    fill="#F4F4F4"
                                />
                                <path
                                    d="M0.744812 23.5199C4.31536 23.5199 7.8859 23.5199 11.5646 23.5199C11.8243 24.1691 12.084 24.8183 12.3515 25.4871C13.3081 26.7973 14.0762 27.3272 15.6958 27.6511C17.8382 27.7485 17.8382 27.7485 20.0238 27.8478C20.0238 31.3535 20.0238 34.8591 20.0238 38.4709C18.3501 38.4953 18.3501 38.4953 16.6426 38.5201C16.2961 38.5273 15.9497 38.5344 15.5927 38.5418C13.7261 38.5644 12.1392 38.3922 10.3843 37.684C10.1749 37.6006 10.1749 37.6006 9.96121 37.5156C8.34708 36.8238 6.96214 35.905 5.66292 34.7332C5.52826 34.6168 5.3936 34.5004 5.25487 34.3805C2.80053 32.119 1.24463 28.7583 0.744812 25.4871C0.744812 24.8379 0.744812 24.1888 0.744812 23.5199Z"
                                    fill="white"
                                />
                                <path
                                    d="M16.8762 8.17547C16.8762 8.24039 16.8762 8.30531 16.8762 8.3722C16.5516 8.3722 16.227 8.3722 15.8926 8.3722C15.8926 11.9427 15.8926 15.5133 15.8926 19.192C15.2434 19.3868 14.5942 19.5815 13.9253 19.7822C12.4528 20.8106 12.1304 21.8228 11.5646 23.52C7.9941 23.52 4.42355 23.52 0.744812 23.52C0.744812 19.0686 2.25734 15.6178 5.32864 12.4266C8.49386 9.38049 12.5588 8.09435 16.8762 8.17547Z"
                                    fill="white"
                                />
                                <path
                                    d="M39.4996 0.490659C39.6708 0.491546 39.842 0.492434 40.0183 0.493348C40.4356 0.495641 40.8529 0.499168 41.2702 0.502954C41.2702 0.567873 41.2702 0.632792 41.2702 0.699678C40.556 0.699678 39.8419 0.699678 39.1062 0.699678C39.1062 4.2053 39.1062 7.71093 39.1062 11.3228C39.3983 11.4202 39.3983 11.4202 39.6964 11.5195C39.5107 11.5342 39.3251 11.5489 39.1339 11.5641C36.7628 11.8069 34.8041 12.4331 33.1414 14.2475C32.6002 14.9348 32.1892 15.6424 31.8274 16.4376C31.7668 16.568 31.7062 16.6983 31.6437 16.8326C31.0722 18.2709 31.0948 19.8283 31.0405 21.3557C30.9756 21.3557 30.9107 21.3557 30.8438 21.3557C30.786 21.0697 30.786 21.0697 30.727 20.7778C29.905 16.9894 28.1 13.6863 24.942 11.3228C24.1703 10.8344 23.3844 10.3805 22.5814 9.94571C22.7761 9.84834 22.7761 9.84834 22.9748 9.74899C23.0311 9.60419 23.0874 9.45939 23.1454 9.3102C24.5593 5.85346 28.6691 3.25685 31.9603 1.81932C34.3787 0.830866 36.9017 0.464719 39.4996 0.490659Z"
                                    fill="white"
                                />
                                <path
                                    d="M18.2533 19.7821C19.0082 20.3973 19.6586 21.032 20.0238 21.9461C20.0685 22.5591 20.0685 22.5591 20.0622 23.2709C20.061 23.5258 20.0597 23.7806 20.0584 24.0432C20.0551 24.3114 20.0518 24.5796 20.0484 24.8478C20.0464 25.119 20.0446 25.3903 20.043 25.6616C20.0384 26.3248 20.0319 26.9879 20.0238 27.6511C19.1714 27.6799 18.3191 27.6972 17.4664 27.7126C17.2262 27.7208 16.9861 27.7291 16.7387 27.7375C14.9709 27.7614 14.05 27.4664 12.7404 26.3186C12.0185 25.4631 11.5616 24.6891 11.5662 23.5253C11.6858 22.1753 12.1011 21.1356 13.1139 20.2125C14.6529 18.9667 16.4989 18.7623 18.2533 19.7821Z"
                                    fill="#F4F4F4"
                                />
                                <path
                                    d="M70.0192 9.81966C70.4853 9.81966 70.8931 9.99445 71.2427 10.344C71.6117 10.6742 71.7962 11.0917 71.7962 11.5967V28.4344C71.7962 28.9393 71.6117 29.3666 71.2427 29.7161C70.8737 30.0463 70.4464 30.2114 69.9609 30.2114C69.4171 30.2114 68.9802 30.0463 68.65 29.7161C68.3199 29.3666 68.1548 28.9393 68.1548 28.4344V11.5967C68.1548 11.0917 68.3296 10.6742 68.6791 10.344C69.0287 9.99445 69.4754 9.81966 70.0192 9.81966ZM82.9242 9.81966C83.468 9.81966 83.905 9.99445 84.2351 10.344C84.5653 10.6742 84.7303 11.0917 84.7303 11.5967V28.4344C84.7303 28.9393 84.5556 29.3666 84.206 29.7161C83.8758 30.0463 83.4292 30.2114 82.866 30.2114C82.3999 30.2114 81.9823 30.0463 81.6133 29.7161C81.2637 29.3666 81.089 28.9393 81.089 28.4344V11.5967C81.089 11.0917 81.2735 10.6742 81.6425 10.344C82.0114 9.99445 82.4387 9.81966 82.9242 9.81966ZM69.9318 18.2968H82.9242V21.6469H69.9318V18.2968Z"
                                    fill="white"
                                />
                                <path
                                    d="M101.561 14.335C102.066 14.335 102.483 14.5 102.813 14.8302C103.144 15.1603 103.309 15.5876 103.309 16.112V28.4344C103.309 28.9393 103.144 29.3666 102.813 29.7161C102.483 30.0463 102.066 30.2114 101.561 30.2114C101.056 30.2114 100.638 30.0463 100.308 29.7161C99.978 29.3666 99.8129 28.9393 99.8129 28.4344V27.007L100.454 27.2691C100.454 27.5216 100.318 27.8323 100.046 28.2013C99.7741 28.5509 99.4051 28.9005 98.939 29.2501C98.4729 29.5996 97.9194 29.9006 97.2785 30.1531C96.6571 30.3862 95.9773 30.5027 95.2394 30.5027C93.8993 30.5027 92.6855 30.1628 91.598 29.4831C90.5104 28.784 89.6462 27.8323 89.0053 26.6283C88.3839 25.4048 88.0731 24.0065 88.0731 22.4334C88.0731 20.8409 88.3839 19.4426 89.0053 18.2385C89.6462 17.015 90.5007 16.0634 91.5688 15.3837C92.637 14.6845 93.8216 14.335 95.1228 14.335C95.9579 14.335 96.725 14.4612 97.4242 14.7137C98.1233 14.9661 98.7254 15.2866 99.2303 15.675C99.7547 16.0634 100.153 16.4615 100.425 16.8694C100.716 17.2578 100.862 17.5879 100.862 17.8598L99.8129 18.2385V16.112C99.8129 15.607 99.978 15.1895 100.308 14.8593C100.638 14.5098 101.056 14.335 101.561 14.335ZM95.6763 27.2983C96.5308 27.2983 97.2785 27.0846 97.9194 26.6574C98.5603 26.2301 99.0555 25.6475 99.4051 24.9095C99.7741 24.1715 99.9586 23.3462 99.9586 22.4334C99.9586 21.5012 99.7741 20.6661 99.4051 19.9281C99.0555 19.1901 98.5603 18.6075 97.9194 18.1803C97.2785 17.753 96.5308 17.5394 95.6763 17.5394C94.8412 17.5394 94.1032 17.753 93.4624 18.1803C92.8215 18.6075 92.3165 19.1901 91.9475 19.9281C91.598 20.6661 91.4232 21.5012 91.4232 22.4334C91.4232 23.3462 91.598 24.1715 91.9475 24.9095C92.3165 25.6475 92.8215 26.2301 93.4624 26.6574C94.1032 27.0846 94.8412 27.2983 95.6763 27.2983Z"
                                    fill="white"
                                />
                                <path
                                    d="M115.163 14.335C116.522 14.335 117.736 14.6845 118.804 15.3837C119.892 16.0634 120.746 17.0053 121.368 18.2094C122.009 19.4135 122.329 20.8118 122.329 22.4043C122.329 23.9968 122.009 25.4048 121.368 26.6283C120.746 27.8323 119.902 28.784 118.833 29.4831C117.785 30.1628 116.6 30.5027 115.279 30.5027C114.503 30.5027 113.774 30.3765 113.095 30.124C112.415 29.8715 111.813 29.5511 111.289 29.1627C110.784 28.7742 110.385 28.3858 110.094 27.9974C109.822 27.5896 109.686 27.2497 109.686 26.9778L110.589 26.5991V28.7257C110.589 29.2306 110.424 29.6579 110.094 30.0075C109.764 30.3376 109.346 30.5027 108.841 30.5027C108.337 30.5027 107.919 30.3376 107.589 30.0075C107.259 29.6773 107.094 29.2501 107.094 28.7257V10.4314C107.094 9.92647 107.259 9.50893 107.589 9.17878C107.919 8.8292 108.337 8.65442 108.841 8.65442C109.346 8.65442 109.764 8.8292 110.094 9.17878C110.424 9.50893 110.589 9.92647 110.589 10.4314V17.8307L110.094 17.5685C110.094 17.316 110.23 17.015 110.502 16.6654C110.774 16.2965 111.143 15.9372 111.609 15.5876C112.075 15.2186 112.609 14.9176 113.211 14.6845C113.833 14.4515 114.483 14.335 115.163 14.335ZM114.726 17.5394C113.871 17.5394 113.124 17.753 112.483 18.1803C111.842 18.6075 111.337 19.1901 110.968 19.9281C110.618 20.6467 110.444 21.4721 110.444 22.4043C110.444 23.317 110.618 24.1521 110.968 24.9095C111.337 25.6475 111.842 26.2301 112.483 26.6574C113.124 27.0846 113.871 27.2983 114.726 27.2983C115.58 27.2983 116.318 27.0846 116.94 26.6574C117.581 26.2301 118.076 25.6475 118.426 24.9095C118.795 24.1521 118.979 23.317 118.979 22.4043C118.979 21.4721 118.795 20.6467 118.426 19.9281C118.076 19.1901 117.581 18.6075 116.94 18.1803C116.318 17.753 115.58 17.5394 114.726 17.5394Z"
                                    fill="white"
                                />
                                <path
                                    d="M139.951 10.8101C140.456 11.0626 140.748 11.4607 140.825 12.0045C140.922 12.5483 140.786 13.0435 140.417 13.4902C140.165 13.8397 139.835 14.0339 139.427 14.0728C139.039 14.1116 138.64 14.0339 138.233 13.8397C137.767 13.6261 137.271 13.461 136.747 13.3445C136.242 13.228 135.708 13.1697 135.145 13.1697C134.096 13.1697 133.154 13.3348 132.319 13.665C131.503 13.9951 130.804 14.4709 130.222 15.0924C129.639 15.6944 129.192 16.413 128.882 17.2481C128.59 18.0832 128.445 19.0056 128.445 20.0155C128.445 21.2002 128.61 22.2295 128.94 23.1034C129.289 23.9773 129.765 24.7056 130.367 25.2882C130.969 25.8709 131.678 26.3078 132.494 26.5991C133.31 26.871 134.193 27.007 135.145 27.007C135.669 27.007 136.193 26.9584 136.718 26.8613C137.242 26.7642 137.747 26.5894 138.233 26.337C138.64 26.1427 139.039 26.0748 139.427 26.133C139.835 26.1913 140.175 26.3952 140.447 26.7448C140.835 27.2303 140.971 27.7352 140.854 28.2596C140.757 28.7645 140.466 29.1335 139.981 29.3666C139.476 29.619 138.951 29.8327 138.407 30.0075C137.883 30.1628 137.349 30.2794 136.805 30.357C136.261 30.4541 135.708 30.5027 135.145 30.5027C133.746 30.5027 132.416 30.2793 131.154 29.8327C129.911 29.386 128.794 28.7257 127.804 27.8518C126.833 26.9778 126.066 25.8903 125.502 24.5891C124.939 23.2685 124.658 21.744 124.658 20.0155C124.658 18.5201 124.91 17.1413 125.415 15.8789C125.939 14.6166 126.668 13.529 127.6 12.6162C128.551 11.684 129.668 10.9655 130.95 10.4605C132.232 9.93618 133.63 9.674 135.145 9.674C135.999 9.674 136.834 9.77111 137.65 9.96531C138.466 10.1595 139.233 10.4411 139.951 10.8101Z"
                                    fill="white"
                                />
                                <path
                                    d="M147.437 28.4344C147.437 28.9393 147.262 29.3666 146.912 29.7161C146.582 30.0463 146.165 30.2114 145.66 30.2114C145.174 30.2114 144.766 30.0463 144.436 29.7161C144.106 29.3666 143.941 28.9393 143.941 28.4344V10.4314C143.941 9.92647 144.106 9.50893 144.436 9.17878C144.786 8.8292 145.213 8.65442 145.718 8.65442C146.223 8.65442 146.631 8.8292 146.941 9.17878C147.272 9.50893 147.437 9.92647 147.437 10.4314V28.4344Z"
                                    fill="white"
                                />
                                <path
                                    d="M166.336 22.4334C166.336 24.0259 165.977 25.4339 165.258 26.6574C164.559 27.8615 163.607 28.8034 162.403 29.4831C161.219 30.1628 159.888 30.5027 158.412 30.5027C156.936 30.5027 155.596 30.1628 154.392 29.4831C153.208 28.8034 152.256 27.8615 151.537 26.6574C150.838 25.4339 150.489 24.0259 150.489 22.4334C150.489 20.8409 150.838 19.4426 151.537 18.2385C152.256 17.015 153.208 16.0634 154.392 15.3837C155.596 14.6845 156.936 14.335 158.412 14.335C159.888 14.335 161.219 14.6845 162.403 15.3837C163.607 16.0634 164.559 17.015 165.258 18.2385C165.977 19.4426 166.336 20.8409 166.336 22.4334ZM162.84 22.4334C162.84 21.4429 162.636 20.5884 162.228 19.8699C161.84 19.1319 161.306 18.559 160.626 18.1511C159.966 17.7433 159.228 17.5394 158.412 17.5394C157.597 17.5394 156.849 17.7433 156.169 18.1511C155.509 18.559 154.975 19.1319 154.567 19.8699C154.179 20.5884 153.984 21.4429 153.984 22.4334C153.984 23.4044 154.179 24.2589 154.567 24.9969C154.975 25.7155 155.509 26.2787 156.169 26.6865C156.849 27.0944 157.597 27.2983 158.412 27.2983C159.228 27.2983 159.966 27.0944 160.626 26.6865C161.306 26.2787 161.84 25.7155 162.228 24.9969C162.636 24.2589 162.84 23.4044 162.84 22.4334Z"
                                    fill="white"
                                />
                                <path
                                    d="M180.96 14.6263C181.465 14.6263 181.883 14.8011 182.213 15.1506C182.543 15.4808 182.708 15.8983 182.708 16.4033V23.8026C182.708 25.8611 182.135 27.4925 180.989 28.6966C179.844 29.9006 178.193 30.5027 176.037 30.5027C173.882 30.5027 172.231 29.9006 171.085 28.6966C169.959 27.4925 169.395 25.8611 169.395 23.8026V16.4033C169.395 15.8983 169.56 15.4808 169.891 15.1506C170.221 14.8011 170.638 14.6263 171.143 14.6263C171.648 14.6263 172.066 14.8011 172.396 15.1506C172.726 15.4808 172.891 15.8983 172.891 16.4033V23.8026C172.891 24.9872 173.153 25.8709 173.678 26.4535C174.202 27.0167 174.988 27.2983 176.037 27.2983C177.105 27.2983 177.902 27.0167 178.426 26.4535C178.95 25.8709 179.212 24.9872 179.212 23.8026V16.4033C179.212 15.8983 179.378 15.4808 179.708 15.1506C180.038 14.8011 180.455 14.6263 180.96 14.6263Z"
                                    fill="white"
                                />
                                <path
                                    d="M199.252 8.65442C199.757 8.65442 200.175 8.81949 200.505 9.14965C200.835 9.4798 201 9.90705 201 10.4314V28.4344C201 28.9393 200.835 29.3666 200.505 29.7161C200.175 30.0463 199.757 30.2114 199.252 30.2114C198.747 30.2114 198.33 30.0463 197.999 29.7161C197.669 29.3666 197.504 28.9393 197.504 28.4344V27.007L198.145 27.2691C198.145 27.5216 198.009 27.8323 197.737 28.2013C197.465 28.5509 197.096 28.9005 196.63 29.2501C196.164 29.5996 195.611 29.9006 194.97 30.1531C194.348 30.3862 193.669 30.5027 192.931 30.5027C191.591 30.5027 190.377 30.1628 189.289 29.4831C188.202 28.784 187.338 27.8323 186.697 26.6283C186.075 25.4048 185.764 24.0065 185.764 22.4334C185.764 20.8409 186.075 19.4426 186.697 18.2385C187.338 17.015 188.192 16.0634 189.26 15.3837C190.328 14.6845 191.513 14.335 192.814 14.335C193.649 14.335 194.416 14.4612 195.116 14.7137C195.815 14.9661 196.417 15.2866 196.922 15.675C197.446 16.0634 197.844 16.4615 198.116 16.8694C198.407 17.2578 198.553 17.5879 198.553 17.8598L197.504 18.2385V10.4314C197.504 9.92647 197.669 9.50893 197.999 9.17878C198.33 8.8292 198.747 8.65442 199.252 8.65442ZM193.368 27.2983C194.222 27.2983 194.97 27.0846 195.611 26.6574C196.252 26.2301 196.747 25.6475 197.096 24.9095C197.465 24.1715 197.65 23.3462 197.65 22.4334C197.65 21.5012 197.465 20.6661 197.096 19.9281C196.747 19.1901 196.252 18.6075 195.611 18.1803C194.97 17.753 194.222 17.5394 193.368 17.5394C192.533 17.5394 191.795 17.753 191.154 18.1803C190.513 18.6075 190.008 19.1901 189.639 19.9281C189.289 20.6661 189.115 21.5012 189.115 22.4334C189.115 23.3462 189.289 24.1715 189.639 24.9095C190.008 25.6475 190.513 26.2301 191.154 26.6574C191.795 27.0846 192.533 27.2983 193.368 27.2983Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div>
                            <ul className={styles.menuItems}>
                                <li>
                                    <Link to="/" className={styles.link}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="login" className={styles.link}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="reset" className={styles.link}>
                                        Password Reset
                                    </Link>
                                </li>
                                {Userfront.accessToken() && (
                                    <>
                                        <li>
                                            <Link to="dashboard" className={styles.link}>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="changeusername" className={styles.link}>
                                                Change Username
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className={styles.hotel}>
                    <img
                        src="https://images.habbo.com/c_images/reception/background_left_mar24.png"
                        alt=""
                    />
                    <img
                        src="https://images.habbo.com/c_images/reception/background_right_easter2016.png"
                        alt=""
                    />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset" element={<PasswordReset />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/changeusername" element={<ChangeUsername />} />
                </Routes>
            </Router>
        </div>
    );
}

export const Home = () => (
    <div>
        <VerifyUserForm signUp={true} />
    </div>
);
export const Login = () => (
    <div>
        <LoginForm />
    </div>
);
export const PasswordReset = () => (
    <div>
        <VerifyUserForm passwordReset={true} />
    </div>
);
export const ChangeUsername = () => (
    <div>
        <VerifyUserForm changeUsername={true} />
    </div>
);
export const Dashboard = () => {
    return (
        <div>
            <UserDashboard />
        </div>
    );
};
export default App;
