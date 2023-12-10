import './BottomRooter.css'
import { useNavigate } from 'react-router-dom'



export default function InitPage() {
    const navigate = useNavigate()

    const Account = () => {
        navigate('/MySelf')
    }
    const Friends = () => {
        navigate('/MyFriend')
    }
    const Store = () => {
        navigate('/MyStore')
    }
    const MakingGood = () => {
        navigate('/MakingGood')
    }

    return (
        <>
            <div className='bottom' onClick={MakingGood}>
                <div className='element'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_241_722)">
                            <path d="M24.4548 8.62064C23.9962 7.44699 23.2589 6.36075 22.286 5.42553L24.8796 2.76543L30 1.97125L29.5529 0L23.5525 0.92962L20.5179 4.05118C19.0814 3.16166 17.4088 2.56839 15.639 2.3207C13.8692 2.07302 12.0535 2.17807 10.3427 2.62711C8.63198 3.07616 7.07563 3.85623 5.80312 4.90247C4.5306 5.9487 3.57869 7.23087 3.02649 8.64238C2.22671 8.71744 1.48412 9.02196 0.928035 9.50291C0.371947 9.98387 0.0375952 10.6108 -0.0167941 11.2745C-0.0711835 11.9382 0.157836 12.5967 0.630379 13.1352C1.10292 13.6737 1.78904 14.0582 2.56928 14.2217L4.6935 27.2212C4.82208 27.9892 5.28164 28.6931 5.98777 29.2036C6.69389 29.7141 7.59917 29.9969 8.53731 30H19.2171C20.1552 29.9969 21.0605 29.7141 21.7666 29.2036C22.4727 28.6931 22.9323 27.9892 23.0609 27.2212L25.1831 14.2351C26.0055 14.0813 26.7308 13.6832 27.2214 13.1164C27.7119 12.5496 27.9334 11.8536 27.8437 11.1607C27.7541 10.4678 27.3596 9.82625 26.7352 9.35796C26.1108 8.88968 25.2999 8.62729 24.4568 8.62064H24.4548ZM21.8066 8.59891H19.2777L20.7283 7.11253C21.1586 7.57044 21.5206 8.06949 21.8066 8.59891ZM13.7386 4.28524C15.6253 4.28252 17.4633 4.78006 18.9824 5.70473L16.1501 8.59891H5.6585C6.3549 7.31199 7.48785 6.21955 8.92017 5.45394C10.3525 4.68832 12.0227 4.28236 13.7285 4.28524H13.7386ZM3.57271 10.6053H24.1675C24.4267 10.6011 24.6786 10.6763 24.8747 10.8165C25.0708 10.9566 25.1972 11.1518 25.2296 11.3643C25.2426 11.4804 25.226 11.5974 25.1811 11.7079C25.1361 11.8184 25.0636 11.9199 24.9684 12.0058C24.8731 12.0918 24.7571 12.1604 24.6279 12.2071C24.4987 12.2538 24.3591 12.2777 24.2181 12.2772H3.62531C3.36635 12.2813 3.1147 12.2061 2.91894 12.0659C2.72318 11.9257 2.59718 11.7306 2.56523 11.5181C2.55228 11.4024 2.56871 11.2856 2.61346 11.1754C2.65821 11.0651 2.73031 10.9638 2.82513 10.8779C2.91994 10.792 3.03539 10.7234 3.16412 10.6764C3.29285 10.6295 3.43201 10.6052 3.57271 10.6053ZM22.3447 16.5441C18.6668 17.9769 15.4946 17.059 12.3002 15.897C9.57716 14.9072 6.72667 15.5392 5.30041 15.989L5.02326 14.2836H22.7149L22.3447 16.5441ZM19.209 27.9937H8.52921C8.17728 27.9928 7.83758 27.8869 7.57256 27.6955C7.30754 27.5042 7.13503 27.2401 7.08677 26.952L5.63827 18.0906C6.24519 17.8582 8.96014 16.9203 11.3231 17.7763C13.5687 18.5939 15.9316 19.3362 18.513 19.3362C19.6891 19.3365 20.8575 19.179 21.9725 18.8698L20.6514 26.9537C20.6036 27.2421 20.4313 27.5065 20.1662 27.6982C19.9012 27.89 19.5612 27.9961 19.209 27.997V27.9937Z" fill="#FFF7ED" />
                        </g>
                        <defs>
                            <clipPath id="clip0_241_722">
                                <rect width="30" height="30" fill="white" className='svg' />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='TimeToMaking'>制作</p>
                </div>

                <div className='element' onClick={(e) => { e.stopPropagation(); Store(); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className='svg'>
                        <path d="M30 16.8749H28.3338V30H1.66622V16.8749H0L15 0L30 16.8749ZM4.87435 16.5739V26.3793H24.9251V16.5739L14.8997 5.25911L4.87435 16.5739ZM11.8921 13.0278H18.5089V16.8749H11.8921V13.0278Z" fill="#FFF7ED" />
                    </svg>
                    <p>仓库</p>

                </div>

                <div className='element' onClick={(e) => { e.stopPropagation(); Friends(); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clip-path="url(#clip0_241_724)">
                            <path d="M11.2061 0.0194702C9.73057 0.0194702 8.28814 0.548099 7.06127 1.53851C5.83439 2.52892 4.87817 3.93662 4.31351 5.58361C3.74884 7.2306 3.6011 9.04292 3.88896 10.7914C4.17683 12.5398 4.88737 14.1458 5.93074 15.4064C6.97412 16.6669 8.30344 17.5254 9.75064 17.8731C11.1978 18.2209 12.6979 18.0424 14.0611 17.3602C15.4244 16.678 16.5895 15.5227 17.4093 14.0405C18.2291 12.5582 18.6666 10.8156 18.6666 9.03291C18.6666 6.6424 17.8806 4.34981 16.4815 2.65946C15.0824 0.969113 13.1848 0.0194702 11.2061 0.0194702ZM11.2061 14.9017C10.2454 14.9017 9.3062 14.5575 8.50736 13.9126C7.70853 13.2678 7.08592 12.3512 6.71825 11.2788C6.35059 10.2064 6.25438 9.02641 6.44181 7.88798C6.62925 6.74955 7.09189 5.70382 7.77124 4.88306C8.45059 4.0623 9.31615 3.50336 10.2584 3.27691C11.2007 3.05046 12.1774 3.1667 13.065 3.61089C13.9527 4.05508 14.7113 4.80729 15.2451 5.77241C15.7788 6.73752 16.0638 7.87218 16.0638 9.03291C16.0633 10.5892 15.5514 12.0817 14.6405 13.1822C13.7296 14.2827 12.4943 14.9012 11.2061 14.9017Z" fill="#FFF6ED" className='svg' />
                            <path d="M11.1901 17.9763C13.4742 17.9768 15.6647 19.0732 17.2798 21.0246C18.8949 22.9759 19.8025 25.6223 19.8029 28.3819H22.3816C22.3816 24.7964 21.2027 21.3577 19.1042 18.8224C17.0056 16.2871 14.1594 14.8627 11.1917 14.8627C8.22392 14.8627 5.3777 16.2871 3.27917 18.8224C1.18065 21.3577 0.00170898 24.7964 0.00170898 28.3819H2.58041C2.58084 25.623 3.48796 22.9772 5.1024 21.0259C6.71683 19.0747 8.90648 17.9778 11.1901 17.9763Z" fill="#FFF6ED" />
                            <path d="M0.0224609 28.4404C0.0224609 29.5911 1.05395 30.4498 2.06125 29.741C2.2268 29.6188 2.36346 29.4471 2.45804 29.2424C2.55262 29.0378 2.60191 28.8071 2.60117 28.5727V28.3975C2.60458 28.1244 2.54463 27.8557 2.42813 27.6217C2.31163 27.3877 2.14324 27.1978 1.94199 27.0734C1.74414 26.9448 1.52208 26.8801 1.29743 26.8858C1.07278 26.8915 0.853177 26.9673 0.659956 27.1059C0.466735 27.2444 0.306473 27.4411 0.194765 27.6766C0.0830581 27.9122 0.0236993 28.1786 0.0224609 28.4501V28.4404Z" fill="#FFF6ED" />
                            <path d="M19.8464 28.4403C19.8464 29.5931 20.8811 30.4537 21.8901 29.7371C22.0557 29.6155 22.1922 29.4437 22.286 29.2388C22.3799 29.0339 22.4278 28.803 22.4251 28.5688V28.3741C22.4285 28.1021 22.3687 27.8343 22.2525 27.6013C22.1363 27.3683 21.9683 27.1793 21.7676 27.0559C21.5706 26.9267 21.3493 26.8612 21.1251 26.8657C20.901 26.8702 20.6817 26.9447 20.4884 27.0819C20.2951 27.219 20.1344 27.4142 20.0219 27.6484C19.9094 27.8827 19.849 28.1481 19.8464 28.4189V28.4403Z" fill="#FFF6ED" />
                            <path d="M18.3958 16.4906C18.3958 17.6433 19.4289 18.5039 20.4362 17.7913C20.6014 17.6688 20.7377 17.497 20.832 17.2923C20.9263 17.0877 20.9754 16.8572 20.9745 16.623V16.4419C20.9778 16.1691 20.9178 15.9007 20.8012 15.667C20.6847 15.4333 20.5164 15.2438 20.3153 15.1198C20.1175 14.9911 19.8956 14.9265 19.6711 14.9321C19.4466 14.9377 19.2271 15.0133 19.0339 15.1517C18.8407 15.29 18.6805 15.4864 18.5686 15.7216C18.4568 15.9569 18.3973 16.2231 18.3958 16.4944V16.4906Z" fill="#FFF6ED" />
                            <path d="M17.7512 1.58303C17.7512 2.73575 18.7843 3.59446 19.7916 2.8818C19.9577 2.7605 20.0948 2.5889 20.1892 2.384C20.2836 2.1791 20.3321 1.94799 20.3299 1.7135V1.5324C20.3332 1.25964 20.2732 0.991206 20.1567 0.75753C20.0402 0.523854 19.8719 0.334271 19.6707 0.210269C19.473 0.0816598 19.2511 0.0170198 19.0266 0.0226122C18.8021 0.0282046 18.5826 0.103845 18.3894 0.242191C18.1962 0.380538 18.0359 0.576893 17.9241 0.812175C17.8123 1.04746 17.7527 1.31368 17.7512 1.58498V1.58303Z" fill="#FFF6ED" />
                            <path d="M30 28.3819C29.9967 25.7824 29.3734 23.2391 28.2046 21.0566C27.0358 18.8741 25.3711 17.1448 23.4098 16.0758C24.6135 14.9347 25.4972 13.3735 25.9407 11.6044C26.3842 9.83525 26.366 7.94402 25.8887 6.18779C25.4114 4.43156 24.498 2.89551 23.2728 1.78841C22.0475 0.681317 20.5698 0.0568887 19.0405 0V3.11547C20.284 3.20755 21.4517 3.86846 22.3062 4.96373C23.1607 6.059 23.6377 7.50639 23.6403 9.01149C23.6403 12.0082 21.8674 14.5901 19.4499 14.9484C19.3486 14.9721 19.2555 15.0319 19.1826 15.12C19.1096 15.2082 19.0602 15.3206 19.0405 15.443V17.7465C19.0405 16.9871 19.1388 17.7231 19.2694 17.7348L19.4306 18.0015C23.9707 18.3326 27.4084 22.8539 27.4084 28.3878H27.4245V28.4033C27.4237 28.6079 27.4562 28.8107 27.5202 29C27.5842 29.1894 27.6785 29.3617 27.7976 29.5071C27.9167 29.6525 28.0584 29.7681 28.2145 29.8473C28.3706 29.9265 28.5381 29.9678 28.7074 29.9689C28.8768 29.9699 29.0446 29.9306 29.2014 29.8533C29.3581 29.7759 29.5007 29.662 29.621 29.5181C29.7414 29.3742 29.8371 29.203 29.9026 29.0144C29.9682 28.8258 30.0024 28.6235 30.0032 28.4189V28.3819H30Z" fill="#FFF6ED" />
                        </g>
                        <defs>
                            <clipPath id="clip0_241_724">
                                <rect width="30" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>好友</p>
                </div>
                <div className='element' onClick={(e) => { e.stopPropagation(); Account(); }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M11.2061 0.0194702C9.73057 0.0194702 8.28814 0.548099 7.06127 1.53851C5.83439 2.52892 4.87817 3.93662 4.31351 5.58361C3.74884 7.2306 3.6011 9.04292 3.88896 10.7914C4.17683 12.5398 4.88737 14.1458 5.93074 15.4064C6.97412 16.6669 8.30344 17.5254 9.75064 17.8731C11.1978 18.2209 12.6979 18.0424 14.0611 17.3602C15.4244 16.678 16.5895 15.5227 17.4093 14.0405C18.2291 12.5582 18.6666 10.8156 18.6666 9.03291C18.6666 6.6424 17.8806 4.34981 16.4815 2.65946C15.0824 0.969113 13.1848 0.0194702 11.2061 0.0194702ZM11.2061 14.9017C10.2454 14.9017 9.3062 14.5575 8.50736 13.9126C7.70853 13.2678 7.08592 12.3512 6.71825 11.2788C6.35059 10.2064 6.25438 9.02641 6.44181 7.88798C6.62925 6.74955 7.09189 5.70382 7.77124 4.88306C8.45059 4.0623 9.31615 3.50336 10.2584 3.27691C11.2007 3.05046 12.1774 3.1667 13.0651 3.61089C13.9527 4.05508 14.7113 4.80729 15.2451 5.77241C15.7788 6.73752 16.0638 7.87218 16.0638 9.03291C16.0633 10.5892 15.5514 12.0817 14.6405 13.1822C13.7296 14.2827 12.4943 14.9012 11.2061 14.9017Z" fill="#FFF6ED" />
                        <path d="M11.1899 17.9763C13.4741 17.9768 15.6645 19.0732 17.2797 21.0246C18.8948 22.9759 19.8024 25.6223 19.8028 28.3819H22.3815C22.3815 24.7964 21.2026 21.3577 19.104 18.8224C17.0055 16.2871 14.1593 14.8627 11.1916 14.8627C8.2238 14.8627 5.37758 16.2871 3.27905 18.8224C1.18053 21.3577 0.00158691 24.7964 0.00158691 28.3819H2.58029C2.58072 25.623 3.48784 22.9772 5.10228 21.0259C6.71671 19.0747 8.90636 17.9778 11.1899 17.9763Z" fill="#FFF6ED" />
                        <path d="M0.022583 28.4404C0.022583 29.5911 1.05407 30.4498 2.06138 29.741C2.22692 29.6188 2.36358 29.4471 2.45816 29.2424C2.55274 29.0378 2.60203 28.8071 2.60129 28.5727V28.3975C2.6047 28.1244 2.54476 27.8557 2.42825 27.6217C2.31175 27.3877 2.14336 27.1978 1.94211 27.0734C1.74426 26.9448 1.52221 26.8801 1.29755 26.8858C1.0729 26.8915 0.853299 26.9673 0.660078 27.1059C0.466857 27.2444 0.306595 27.4411 0.194887 27.6766C0.0831802 27.9122 0.0238214 28.1786 0.022583 28.4501V28.4404Z" fill="#FFF6ED" />
                        <path d="M19.8463 28.4403C19.8463 29.5931 20.881 30.4537 21.8899 29.7371C22.0556 29.6155 22.1921 29.4437 22.2859 29.2388C22.3797 29.0339 22.4277 28.803 22.425 28.5688V28.3741C22.4284 28.1021 22.3686 27.8343 22.2524 27.6013C22.1361 27.3683 21.9681 27.1793 21.7675 27.0559C21.5705 26.9267 21.3492 26.8612 21.125 26.8657C20.9009 26.8702 20.6815 26.9447 20.4882 27.0819C20.2949 27.219 20.1343 27.4142 20.0218 27.6484C19.9093 27.8827 19.8489 28.1481 19.8463 28.4189V28.4403Z" fill="#FFF6ED" />
                    </svg>
                    <p>我的</p>
                </div>


            </div>

        </>
    )
}