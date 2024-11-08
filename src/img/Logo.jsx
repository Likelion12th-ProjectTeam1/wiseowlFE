import React from 'react';

export const Logo = () => (
    <svg width="303" height="71" viewBox="0 0 303 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.7158 23.6698C36.313 25.9653 32.2451 35.7817 34.683 37.9979C35.6817 38.9058 37.8447 35.9628 38.2728 35.4913C40.6132 32.9135 42.3088 31.253 45.9786 30.8184C49.5821 30.3917 50.022 31.5834 51.3015 34.5938C51.6162 35.3344 55.6844 44.6208 56.6553 44.0324C57.5661 43.4804 57.795 42.2321 58.3264 41.3091C60.4051 37.6989 62.4623 34.0641 64.2373 30.2923C65.7641 27.0479 66.9799 23.6236 68.3532 20.3276" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M85.6197 23.6704C84.035 29.6569 84.0321 36.0642 82.8345 42.0524" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M121.827 21.4434C118.759 21.6048 115.717 21.9368 112.667 22.3099C110.626 22.5594 105.93 22.5258 104.125 24.1666C103.076 25.1203 102.816 27.6045 102.795 28.8704C102.729 32.7565 107.069 32.9602 110.005 33.6671C114.435 34.7336 117.594 36.019 117.464 41.2489C117.396 43.9677 112.436 47.3991 110.686 49.2949" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M140.211 29.2409C144.351 30.2761 150.887 33.7711 155.065 31.3453C157.664 29.8361 150.28 24.5663 148.69 24.2586C141.188 22.8066 135.665 28.9752 135.507 36.5442C135.332 44.914 144.875 47.1912 151.352 47.623" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M176.222 20.1616C175.874 22.4246 174.843 24.5972 174.365 26.846C173.402 31.3778 174.401 35.5328 176.594 39.5958C178.622 43.3535 183.856 48.4599 188.663 48.3226C200.261 47.9912 198.715 32.4629 196.028 24.6797C194.536 20.3556 192.619 17.632 187.827 17.5312C183.774 17.4458 179.687 18.0436 175.665 18.4905" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M213.545 28.5176C213.618 30.0983 212.435 44.3938 216.052 45.1976C219.765 46.0227 222.824 39.2795 224.438 36.9659C227.058 33.2106 235.059 41.8859 237.065 44.1144C237.215 44.2813 237.359 44.3025 237.498 44.0525C238.79 41.7268 239.583 38.8159 240.562 36.3779C241.344 34.4313 242.286 30.3388 244.183 29.0746" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    <path d="M270.921 15.7051C270.112 26.8128 268.136 37.99 268.136 49.1269" stroke="black" stroke-width="9.66895" stroke-linecap="round"/>
    </svg>
);

export const CheckBox = ({ checked }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M8.00342 0C3.58742 0 0.00341797 3.584 0.00341797 8C0.00341797 12.416 3.58742 16 8.00342 16C12.4194 16 16.0034 12.416 16.0034 8C16.0034 3.584 12.4194 0 8.00342 0ZM8.00342 14.4C4.47542 14.4 1.60342 11.528 1.60342 8C1.60342 4.472 4.47542 1.6 8.00342 1.6C11.5314 1.6 14.4034 4.472 14.4034 8C14.4034 11.528 11.5314 14.4 8.00342 14.4ZM11.6754 4.464L6.40342 9.736L4.33142 7.672L3.20342 8.8L6.40342 12L12.8034 5.6L11.6754 4.464Z" 
            fill={checked ? "#5D96E8" : "#D1D1D1"} // 색상 변경
        />
    </svg>
);

export const Arrow = () => (
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_461_598)">
    <path d="M8.23584 15.8988L12.625 11.5L8.23584 7.10125L9.58709 5.75L15.3371 11.5L9.58709 17.25L8.23584 15.8988Z" fill="#DDDBDB"/>
    </g>
    <defs>
    <clipPath id="clip0_461_598">
    <rect width="23" height="23" fill="white" transform="matrix(0 -1 1 0 0.00341797 23)"/>
    </clipPath>
    </defs>
    </svg>
);


export const Char = () => (
    <svg width="268" height="270" viewBox="0 0 268 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M126.122 67.6571C130.184 77.9638 142.74 83.3307 146.354 93.803C150.783 106.636 117.586 125.75 101.495 125.75C84.296 125.75 50.6103 109.052 58.0591 93.9064C62.0043 85.8845 69.4623 79.6895 72.0546 71.1341C76.324 57.0438 83.1931 45 98.9767 45C113.613 45 121.078 54.86 126.122 67.6571Z" fill="#5D96E8"/>
    <line x1="86.5" y1="228.429" x2="86.5" y2="240.429" stroke="black"/>
    <path d="M134.5 195.661C134.5 216.096 134.5 228.161 100.5 228.161C66.5 228.161 63 219.863 63 199.429C63 178.994 73.5655 154.161 94 154.161C114.435 154.161 134.5 175.227 134.5 195.661Z" fill="#F7DA3A"/>
    <path d="M91 185.711C91 188.717 88.5631 191.879 85.5571 191.879C82.551 191.879 81 188.717 81 185.711C81 182.705 82.551 178.816 85.5571 178.816C88.5631 178.816 91 182.705 91 185.711Z" fill="white"/>
    <path d="M88.2023 183.841C88.7506 189.367 86.5971 191.879 84.617 191.879C81.0317 190.428 81.0317 187.888 81.0317 183.841C81.0317 181.066 82.6369 178.816 84.617 178.816C86.5971 178.816 88.2023 181.066 88.2023 183.841Z" fill="black"/>
    <path d="M113 185.323C113 188.329 110.563 191.492 107.557 191.492C104.551 191.492 103 188.329 103 185.323C103 182.317 104.551 178.429 107.557 178.429C110.563 178.429 113 182.317 113 185.323Z" fill="white"/>
    <path d="M110.202 183.453C110.751 188.98 108.597 191.492 106.617 191.492C103.032 190.04 103.032 187.5 103.032 183.453C103.032 180.678 104.637 178.429 106.617 178.429C108.597 178.429 110.202 180.678 110.202 183.453Z" fill="black"/>
    <line x1="91.3549" y1="197.173" x2="97.4941" y2="205.691" stroke="black" stroke-width="0.875"/>
    <line y1="-0.4375" x2="10.5" y2="-0.4375" transform="matrix(-0.584679 0.811265 0.811265 0.584679 103.139 197.429)" stroke="black" stroke-width="0.875"/>
    <path d="M106.176 151.814C107.487 149.541 110.124 148.383 112.685 148.956L140.078 155.089C141.515 155.411 141.987 157.222 140.89 158.204C140.518 158.538 140.3 159.011 140.288 159.511L140.182 164.154C140.096 167.94 136.568 170.699 132.873 169.872L107.969 164.297C104.019 163.413 102.06 158.951 104.083 155.444L106.176 151.814Z" fill="black"/>
    <path d="M115.749 134.33C117.147 133.303 118.92 132.931 120.612 133.31L156.495 141.344C158.836 141.868 159.516 144.877 157.628 146.357L144.764 156.444C143.348 157.555 141.508 157.971 139.751 157.578L100.565 148.805C99.212 148.502 98.8441 146.747 99.9617 145.926L115.749 134.33Z" fill="black"/>
    <rect x="86.5" y="240.429" width="13" height="2" rx="1" transform="rotate(-90 86.5 240.429)" fill="black"/>
    <rect x="107" y="240.429" width="13" height="2" rx="1" transform="rotate(-90 107 240.429)" fill="black"/>
    <line x1="86.5" y1="228.429" x2="86.5" y2="240.429" stroke="black"/>
    <path d="M134.5 195.661C134.5 216.096 134.5 228.161 100.5 228.161C66.5 228.161 63 219.863 63 199.429C63 178.994 73.5655 154.161 94 154.161C114.435 154.161 134.5 175.227 134.5 195.661Z" fill="#EEE8A9"/>
    <line x1="93" y1="190.667" x2="101" y2="190.667" stroke="black" stroke-width="0.666667"/>
    <path d="M106.176 151.814C107.487 149.541 110.124 148.383 112.685 148.956L140.078 155.089C141.515 155.411 141.987 157.222 140.89 158.204C140.518 158.538 140.3 159.011 140.288 159.511L140.182 164.154C140.096 167.94 136.568 170.699 132.873 169.872L107.969 164.297C104.019 163.413 102.06 158.951 104.083 155.444L106.176 151.814Z" fill="black"/>
    <path d="M115.749 134.33C117.147 133.303 118.92 132.931 120.612 133.31L156.495 141.344C158.836 141.868 159.516 144.877 157.628 146.357L144.764 156.444C143.348 157.555 141.508 157.971 139.751 157.578L100.565 148.805C99.212 148.502 98.8441 146.747 99.9617 145.926L115.749 134.33Z" fill="black"/>
    <rect x="86.5" y="240.429" width="13" height="2" rx="1" transform="rotate(-90 86.5 240.429)" fill="black"/>
    <rect x="107" y="240.429" width="13" height="2" rx="1" transform="rotate(-90 107 240.429)" fill="black"/>
    <path d="M148.066 212.476C148.342 211.856 148.334 211.147 148.045 210.533L145.471 205.062C144.835 203.711 143.856 202.549 142.633 201.693L136.273 197.241C135.339 196.587 134.042 196.916 133.532 197.936C133.208 198.585 133.289 199.363 133.74 199.932L144.102 212.98C145.193 214.355 147.353 214.08 148.066 212.476Z" fill="black"/>
    <path d="M50.434 208.476C50.1584 207.856 50.1661 207.147 50.455 206.533L53.0294 201.062C53.6654 199.711 54.6438 198.549 55.8674 197.693L62.2271 193.241C63.1611 192.587 64.4579 192.916 64.9678 193.936C65.2925 194.585 65.2114 195.363 64.76 195.932L54.3979 208.98C53.3067 210.355 51.1466 210.08 50.434 208.476Z" fill="black"/>
    <path d="M96 85C100.104 88.3125 106.5 85 106.5 85" stroke="black" stroke-width="0.875"/>
    <path d="M96 73.8944C96 76.9005 93.5631 80.0631 90.5571 80.0631C87.551 80.0631 86 76.9005 86 73.8944C86 70.8883 87.551 67 90.5571 67C93.5631 67 96 70.8883 96 73.8944Z" fill="white"/>
    <path d="M93.1705 74.6454C93.7188 78.4531 91.5654 80.1838 89.5853 80.1838C86 79.1838 86 77.4338 86 74.6454C86 72.7336 87.6052 71.1838 89.5853 71.1838C91.5654 71.1838 93.1705 72.7336 93.1705 74.6454Z" fill="black"/>
    <path d="M118 73.8944C118 76.9005 115.563 80.0631 112.557 80.0631C109.551 80.0631 108 76.9005 108 73.8944C108 70.8883 109.551 67 112.557 67C115.563 67 118 70.8883 118 73.8944Z" fill="white"/>
    <path d="M115.171 74.6454C115.719 78.4531 113.565 80.1838 111.585 80.1838C108 79.1838 108 77.4338 108 74.6454C108 72.7336 109.605 71.1838 111.585 71.1838C113.565 71.1838 115.171 72.7336 115.171 74.6454Z" fill="black"/>
    <path d="M215.698 87.2967C222.288 100.516 243.265 110.961 238.088 124.795C233.566 136.876 207.266 150.875 193.495 150.875C177.999 150.875 149.12 137.32 149 123.558C148.897 111.639 161.472 102.999 165.532 91.792C169.906 79.7152 176.892 70.125 190.977 70.125C203.439 70.125 210.702 77.2734 215.698 87.2967Z" fill="#C3D3D9"/>
    <path d="M75 105.375C75 99.0928 80.0928 94 86.375 94H118.625C124.907 94 130 99.0928 130 105.375V118.625C130 124.907 124.907 130 118.625 130H86.375C80.0928 130 75 124.907 75 118.625V105.375Z" fill="#5D96E8"/>
    <rect x="91.5" y="139" width="13" height="2" rx="1" transform="rotate(-90 91.5 139)" fill="black"/>
    <rect x="91.5" y="139" width="13" height="2" rx="1" transform="rotate(-90 91.5 139)" fill="black"/>
    <rect x="111" y="141" width="13" height="2" rx="1" transform="rotate(-90 111 141)" fill="black"/>
    <rect x="111" y="141" width="13" height="2" rx="1" transform="rotate(-90 111 141)" fill="black"/>
    <line x1="91.5" y1="127" x2="91.5" y2="139" stroke="black"/>
    <line x1="91.5" y1="127" x2="91.5" y2="139" stroke="black"/>
    <path d="M93.5 139C93.5 140.381 92.3807 141.5 91 141.5C89.6193 141.5 86 141.881 86 140.5C86 139.119 91.3125 138 92.1562 137C93.537 137 93.5 137.619 93.5 139Z" fill="black"/>
    <path d="M110.5 241C110.5 242.381 109.381 243.5 108 243.5C106.619 243.5 103 243.881 103 242.5C103 241.119 108.312 240 109.156 239C110.537 239 110.5 239.619 110.5 241Z" fill="black"/>
    <path d="M89.5 240C89.5 241.381 88.3807 242.5 87 242.5C85.6193 242.5 82 242.881 82 241.5C82 240.119 87.3125 239 88.1562 238C89.537 238 89.5 238.619 89.5 240Z" fill="black"/>
    <circle cx="112.5" cy="143.5" r="2.5" fill="black"/>
    <circle cx="112.5" cy="143.5" r="2.5" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.7607 44.3982C100.649 42.7241 101.812 40.9447 103.205 39.1855C107.854 33.3129 113.313 29.8896 115.396 31.5395C117.48 33.1893 115.4 39.2874 110.751 45.16C106.439 50.606 101.432 53.9455 99.065 53.0863C96.4553 52.8957 92.1935 49.7573 88.4548 45.035C83.8052 39.1624 81.7253 33.0643 83.8091 31.4145C85.893 29.7646 91.3514 33.1879 96.001 39.0605C97.5915 40.8023 98.85 42.6434 99.7607 44.3982Z" fill="#2A3438"/>
    <path d="M90.9402 184.968C91.318 187.592 89.8343 188.784 88.4701 188.784C86 188.095 86 186.89 86 184.968C86 183.651 87.1059 182.583 88.4701 182.583C89.8343 182.583 90.9402 183.651 90.9402 184.968Z" fill="black"/>
    <path d="M106.812 184.385C107.19 187.008 105.706 188.201 104.342 188.201C101.872 187.512 101.872 186.306 101.872 184.385C101.872 183.068 102.978 182 104.342 182C105.706 182 106.812 183.068 106.812 184.385Z" fill="black"/>
    <line x1="186.478" y1="111.188" x2="196.978" y2="111.188" stroke="black" stroke-width="0.875"/>
    <path d="M167.082 130.375C167.082 124.093 172.175 119 178.457 119H210.707C216.989 119 222.082 124.093 222.082 130.375V143.625C222.082 149.907 216.989 155 210.707 155H178.457C172.175 155 167.082 149.907 167.082 143.625V130.375Z" fill="#C3D3D9"/>
    <path d="M185.082 100.894C185.082 103.9 182.645 107.063 179.639 107.063C176.633 107.063 175.082 103.9 175.082 100.894C175.082 97.8883 176.633 94 179.639 94C182.645 94 185.082 97.8883 185.082 100.894Z" fill="white"/>
    <path d="M182.253 101.645C182.801 105.453 180.647 107.184 178.667 107.184C175.082 106.184 175.082 104.434 175.082 101.645C175.082 99.7336 176.687 98.1838 178.667 98.1838C180.647 98.1838 182.253 99.7336 182.253 101.645Z" fill="black"/>
    <path d="M207.082 100.894C207.082 103.9 204.645 107.063 201.639 107.063C198.633 107.063 197.082 103.9 197.082 100.894C197.082 97.8883 198.633 94 201.639 94C204.645 94 207.082 97.8883 207.082 100.894Z" fill="white"/>
    <path d="M204.253 101.645C204.801 105.453 202.647 107.184 200.667 107.184C197.082 106.184 197.082 104.434 197.082 101.645C197.082 99.7336 198.687 98.1838 200.667 98.1838C202.647 98.1838 204.253 99.7336 204.253 101.645Z" fill="black"/>
    <path d="M183.5 168C183.5 169.381 182.381 170.5 181 170.5C179.619 170.5 176 170.881 176 169.5C176 168.119 181.312 167 182.156 166C183.537 166 183.5 166.619 183.5 168Z" fill="black"/>
    <path d="M203.5 169C203.5 170.381 202.381 171.5 201 171.5C199.619 171.5 196 171.881 196 170.5C196 169.119 201.312 168 202.156 167C203.537 167 203.5 167.619 203.5 169Z" fill="black"/>
    <rect x="182.5" y="168" width="13" height="2" rx="1" transform="rotate(-90 182.5 168)" fill="black"/>
    <rect x="182.5" y="168" width="13" height="2" rx="1" transform="rotate(-90 182.5 168)" fill="black"/>
    <line x1="182.5" y1="156" x2="182.5" y2="168" stroke="black"/>
    <line x1="182.5" y1="156" x2="182.5" y2="168" stroke="black"/>
    <rect x="202.5" y="168" width="13" height="2" rx="1" transform="rotate(-90 202.5 168)" fill="black"/>
    <rect x="202.5" y="168" width="13" height="2" rx="1" transform="rotate(-90 202.5 168)" fill="black"/>
    <line x1="202.5" y1="156" x2="202.5" y2="168" stroke="black"/>
    <line x1="202.5" y1="156" x2="202.5" y2="168" stroke="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M192.761 69.3982C193.649 67.7241 194.812 65.9447 196.205 64.1855C200.854 58.3129 206.313 54.8896 208.396 56.5395C210.48 58.1893 208.4 64.2874 203.751 70.16C199.439 75.606 194.432 78.9455 192.065 78.0863C189.455 77.8957 185.193 74.7573 181.455 70.035C176.805 64.1624 174.725 58.0643 176.809 56.4145C178.893 54.7646 184.351 58.1879 189.001 64.0605C190.591 65.8023 191.85 67.6434 192.761 69.3982Z" fill="#2A3438"/>
    <rect x="195.653" y="130.537" width="23" height="14" rx="7" fill="#F06C56"/>
    <path d="M227.455 102C226.31 112.308 219.138 121.7 214.684 130.608" stroke="#F06C56" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M159 106.598C162.148 108.66 164.106 110.248 166.379 113.239C169.889 117.857 173.919 123.184 178.81 126.408C181.206 127.987 182.204 130.858 184.77 132.141C188.82 134.166 192.592 137.76 197.315 137.76" stroke="#F06C56" stroke-width="1.2" stroke-linecap="round"/>
    </svg>
);

export const GoogleLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="27px" height="27px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>   
);