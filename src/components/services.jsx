import React from 'react'
import Title from './title'
export default function Services() {
  return (
    <section className="relative flex items-center justify-center bg-white pt-[210px] pb-[140px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[30px] mb-[80px]">
          <Title
            className={'text-[#313131] leading-[100%] text-[65px] text-center'}
            text={'Best'}
          >
            <span className="text-[#25A4AD]">Services</span>
          </Title>
          <p className="text-center text-base leading-[147%] max-w-[620px]">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
        </div>
        <div className="flex gap-10 mb-[80px]">
          <div className="flex flex-col gap-10">
            <div className="relative flex items-center justify-center w-[33.5vw] h-[37.5vh] z-10">
              <div className="z-20 flex flex-col items-center gap-4">
                <span className="text-white font-semibold text-[36px] leading-[100%] max-w-[225px] text-center">
                  Web Development
                </span>
                <img src="/assets/stars.svg" />
              </div>
              <img
                className="z-0 absolute w-full top-0 left-0 object-cover"
                src="/assets/top-right-card.png"
              />
              <div className="absolute top-0 left-0 left-top-dark-layer z-1 inset-0"></div>
            </div>
            <div className="relative w-[33.5vw] flex items-center justify-center h-[37.5vh] z-10">
              <div className="z-20 flex flex-col items-center gap-4">
                <span className="text-white font-semibold text-[36px] leading-[100%] max-w-[225px] text-center">
                  Web Development
                </span>
                <img src="/assets/stars.svg" />
              </div>
              <img
                className="z-0 absolute w-full top-0 left-0 object-cover"
                src="/assets/bottom-right-card.png"
              />
              <div className="absolute top-0 left-0 left-bottom-dark-layer z-1 inset-0"></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-20">
            <div className="relative w-[33.5vw] flex items-center justify-center h-[37.5vh]">
              <div className="z-20 flex flex-col items-center gap-4">
                <span className="text-white font-semibold text-[36px] leading-[100%] max-w-[225px] text-center">
                  Web Development
                </span>
                <img src="/assets/stars.svg" />
              </div>
              <img
                className="z-0 absolute w-full top-0 left-0 object-cover"
                src="/assets/top-left-card.png"
              />
              <div className="absolute top-0 left-0 right-top-dark-layer  z-1 inset-0"></div>
            </div>
            <div className="relative w-[33.5vw] flex items-center justify-center h-[37.5vh]">
              <div className="absolute top-0 left-0 right-bottom-dark-layer z-1 inset-0"></div>
              <div className="z-20 flex flex-col items-center gap-4">
                <span className="text-white font-semibold text-[36px] leading-[100%] max-w-[225px] text-center">
                  Web Development
                </span>
                <img src="/assets/stars.svg" />
              </div>
              <img
                className="z-0 absolute w-full top-0 left-0 object-cover"
                src="/assets/bottom-left-card.png"
              />
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center border border-[#25A4AD] text-center text-lg text-[#25A4AD] capitalize px-[65px] py-[18px]">
          explore All
        </button>
      </div>
      <div className="absolute top-[40%] left-[-13%] border border-[#25A4AD] w-[45vw] h-[39.5vw] z-0 rotate-[64.766deg] "></div>
    </section>
  )
}
