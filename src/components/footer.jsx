import React from 'react'
export default function Footer() {
  return (
    <footer className="relative pt-[175px] pb-[27px] bg-[#313131] flex items-center justify-center ">
      <div className="flex flex-col items-center">
        <span className="text-white text-[65px] leading-[76px] font-semibold max-w-[796px] mb-[62px] text-center">
          People who are <br /> ready took these courses!
        </span>
        <button className="flex items-center justify-center w-[218px] h-[65px] border border-solid border-white text-lg leading-[22px] text-white font-medium mb-[182px]">
          Schedule demo
        </button>
        <div className="flex items-start justify-between mb-[83px] w-[71.31vw]">
          <div className="flex flex-col">
            <img src="/assets/logo.svg" className="w-[118px] mb-[23px]" />
            <p className="text-white max-w-[198px] text-sm font-medium leading-[15px]">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="w-[57.25%] flex items-start justify-between">
            <div className="flex flex-col gap-[36px]">
              <span className="text-white font-bold text-sm leading-[17px]">
                Links
              </span>
              <ul className="flex flex-col gap-[26px]">
                <li className="text-white font-medium text-xs leading-[15px]">
                  Overons
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  Social Media
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  Counters
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[36px]">
              <span className="text-white font-bold text-sm leading-[17px]">
                Company
              </span>
              <ul className="flex flex-col gap-[26px]">
                <li className="text-white font-medium text-xs leading-[15px]">
                  Terms & Conditions
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  Privacy Policy
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[36px]">
              <span className="text-white font-bold text-sm leading-[17px]">
                Get in touch
              </span>
              <ul className="flex flex-col gap-[26px]">
                <li className="text-white max-w-[116px]">
                  Crechterwoord K12 182 DK Alknjkcb
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  085-132567
                </li>
                <li className="text-white font-medium text-xs leading-[15px]">
                  info@payme.net
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="text-white font-medium text-xs leading-[15px]">
          © 2021 Payme. All rights reserved
        </span>
      </div>
      <div className="absolute left-0 top-0">
        <img
          src="/assets/footer/triangle-top-left.svg"
          className="w-[26.59vw] h-[26.59vw]"
        />
      </div>
      <div className="absolute right-0 top-0">
        <img
          src="/assets/footer/triangle-top-right.svg"
          className="w-[26.59vw] h-[26.59vw]"
        />
      </div>
      <div className="absolute right-0 bottom-0">
        <img
          src="/assets/footer/triangle-bottom-right.svg"
          className="w-[26.59vw] h-[26.59vw]"
        />
      </div>
      <div className="absolute left-0 bottom-0">
        <img
          src="/assets/footer/triangle-bottom-left.svg"
          className="w-[26.59vw] h-[26.59vw]"
        />
      </div>
    </footer>
  )
}
