

const Footer = () => {
  return (
    <footer className=" text-white px-8 bg-footerBg md:h-[393px] relative flex flex-col md:flex-row items-center justify-center">
       <section className=" flex flex-col md:flex-row space-y-4 md:space-y-0">
       <div className=" w-full md:w-1/2 flex flex-col justify-between">
        <div className="">
            <svg width="170" height="32" viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.144 22.984C3.744 22.984 0.72 19.888 0.72 14.704C0.72 9.592 3.96 6.496 9.324 6.496C12.996 6.496 15.444 7.972 15.948 11.104H16.308V6.856H22.644V21.94C22.644 28.42 18.792 31.48 11.808 31.48C5.472 31.48 1.8 28.816 1.8 24.064H8.568C8.568 25.54 8.748 25.9 12.276 25.9C15.192 25.9 15.876 25.468 15.876 22.408V18.592H15.516C15.048 21.22 13.14 22.984 9.144 22.984ZM7.56 14.704C7.56 16.504 8.424 17.188 11.592 17.188C14.616 17.188 15.876 16.828 15.876 14.92V14.668C15.876 12.724 14.616 12.328 11.592 12.328C8.424 12.328 7.56 12.94 7.56 14.704ZM34.9265 25.36C28.7705 25.36 24.4505 22.732 24.4505 15.928C24.4505 10.024 28.7345 6.496 34.7825 6.496C41.0465 6.496 45.0425 9.628 45.0425 15.46C45.0425 16.072 45.0065 16.54 44.9345 17.188H30.7145C30.8225 19.384 31.7945 19.996 34.6745 19.996C37.4105 19.996 38.1305 19.528 38.1305 18.448V18.052H44.8985V18.484C44.8985 22.516 41.0465 25.36 34.9265 25.36ZM34.6385 11.68C32.1545 11.68 31.1105 12.22 30.8225 13.768H38.4905C38.2385 12.22 37.1585 11.68 34.6385 11.68ZM60.4254 25H55.6734C51.1374 25 48.4374 22.804 48.4374 18.088V12.4H45.7734V6.856H48.4374V3.724H55.2054V6.856H60.4254V12.4H55.2054V17.116C55.2054 18.556 55.6374 18.916 57.1854 18.916H60.4254V25Z" fill="white"/>
            <path d="M68.8089 25H62.0409V0.879999H68.8089V25ZM77.7386 5.2H70.9706V0.879999H77.7386V5.2ZM77.7386 25H70.9706V6.856H77.7386V25ZM86.6683 25H79.9003V6.856H86.2363V12.364H86.5963C86.9923 9.34 88.9723 6.496 93.8323 6.496C98.7283 6.496 101.032 9.448 101.032 13.372V25H94.2643V15.856C94.2643 13.336 93.3283 12.544 90.3763 12.544C87.3883 12.544 86.6683 13.3 86.6683 15.64V25ZM109.801 25H103.033V0.879999H109.801V13.156H113.005L117.001 6.856H124.993L118.549 15.676L124.885 25H116.893L113.077 19.204H109.801V25ZM135.825 25.36C129.669 25.36 125.349 22.732 125.349 15.928C125.349 10.024 129.633 6.496 135.681 6.496C141.945 6.496 145.941 9.628 145.941 15.46C145.941 16.072 145.905 16.54 145.833 17.188H131.613C131.721 19.384 132.693 19.996 135.573 19.996C138.309 19.996 139.029 19.528 139.029 18.448V18.052H145.797V18.484C145.797 22.516 141.945 25.36 135.825 25.36ZM135.537 11.68C133.053 11.68 132.009 12.22 131.721 13.768H139.389C139.137 12.22 138.057 11.68 135.537 11.68ZM155.996 25.36C150.452 25.36 147.392 21.796 147.392 15.928C147.392 10.024 150.38 6.496 155.708 6.496C159.992 6.496 162.008 8.512 162.548 11.536H162.908V0.879999H169.676V25H163.34V20.104H162.98C162.404 23.704 160.244 25.36 155.996 25.36ZM154.232 15.928C154.232 18.34 155.312 19.168 158.444 19.168C161.468 19.168 162.908 18.592 162.908 15.964V15.712C162.908 13.156 161.468 12.652 158.444 12.652C155.312 12.652 154.232 13.516 154.232 15.928Z" fill="#D434FE"/>
            </svg>
            <p className=" md:w-3/4  my-2  text-[12px] leading-[172%]">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
        </div>
            <div className=" flex space-x-4 text-[12px]">
                <p className=" border-r-2 border-buttonGradient2 pr-4">Terms of Use</p>
                <p className="">Privacy Policy</p>
            </div>
        </div>
        <div className=" md:w-1/4">
            <ul className=" text-[12px] space-y-4">
                <li className=" text-sm text-buttonGradient2 font-semibold">Useful Links</li>
                <li className="">Overview</li>
                <li className="">Timeline</li>
                <li className="">FAQs</li>
                <li className="">Register</li>
                <li className="">Follow us </li>
                
            </ul>
        </div>
        <div className="md:w-1/4"> 
            <ul className=" text-[12px] space-y-4">
                <li className=" text-buttonGradient2 font-semibold text-sm">Contact us</li>
                <li className=" flex space-x-2 items-center"><svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z" fill="#F8F8F8"/>
                                </svg>
                                <span className="">+234 679 81819</span>
</li>
                <li className=" flex space-x-2 items-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z" fill="#F8F8F8"/>
                    <path d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z" fill="#F8F8F8"/>
                    </svg>
                    <span className="">27,Alara Street Yaba 100012 Lagos State</span>
                    </li>
            </ul>
        </div>
       </section>
       <div className="   md:absolute bottom-2 my-4 left-[50%] ">
        <p className=" text-[12px]">All rights reserved. &copy; getlinked Ltd.</p>
       </div>
    </footer>
  )
}

export default Footer
