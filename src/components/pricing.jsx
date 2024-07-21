import React from 'react'
export default function Pricing() {
  return (
    <div className="relative pb-[140px] bg-white flex flex-col items-center gap-20 overflow-hidden">
      <h2 className="text-[#313131] text-[65px] leading-[65px] text-center">
        Our{' '}
        <span className="text-[#25A4AD] font-semibold leading-[65px] text-[65px] ">
          Pricing Plan
        </span>{' '}
      </h2>
      <div className="flex items-stretch gap-[42px]">
        <div className="relative !z-20 bg-white w-[362px] py-[50px] px-[42px] flex flex-col items-center border border-solid border-[#D8D8D8] mt-10">
          <span className="mb-[17px] text-[#313131] leading-[30px] text-[30px]">
            For Starter
          </span>
          <span className="mb-[34px] text-[#313131] font-bold text-[60px] leading-[72px]">
            $59
          </span>
          <div className="flex flex-col gap-4 mb-[49px]">
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Feedback Categorization
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Features prioritization
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Real-time collaboration
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Feedback loop notifications
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Essential dev tools integrations
              </span>
            </div>
          </div>
          <button className="border w-[278px] border-[#25A4AD] border-solid flex items-center justify-center py-[19px] text-[#25A4AD] text-lg leading-[22px] font-medium">
            Request Demo
          </button>
        </div>
        <div className="w-[362px] py-[50px] px-[42px] flex flex-col items-center border border-solid border-[#D8D8D8] pricing-shadow">
          <span className="mb-[17px] text-[#25A4AD] leading-[30px] text-[30px]">
            For Starter
          </span>
          <span className="mb-[34px] text-[#25A4AD] font-bold text-[60px] leading-[72px]">
            $59
          </span>
          <div className="flex flex-col gap-4 mb-[49px]">
            <div className="flex items-center gap-4">
              <img src="/assets/green-tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4 text-[#25A4AD]">
                Feedback Categorization
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/green-tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4 text-[#25A4AD]">
                Features prioritization
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/green-tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4 text-[#25A4AD]">
                Real-time collaboration
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/green-tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4 text-[#25A4AD]">
                Feedback loop notifications
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/green-tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4 text-[#25A4AD]">
                Essential dev tools integrations
              </span>
            </div>
          </div>
          <button className=" w-[278px] bg-[#25A4AD] flex items-center justify-center py-[19px] text-white text-lg leading-[22px] font-medium">
            Request Demo
          </button>
        </div>
        <div className="w-[362px] py-[50px] px-[42px] flex flex-col items-center border border-solid border-[#D8D8D8] flex-grow mt-10">
          <span className="mb-[36px] text-[#313131] leading-[30px] text-[30px]">
            For Company
          </span>
          <span className="mb-[44px] text-[#313131] font-bold text-[60px] leading-[72px]">
            Custom
          </span>
          <div className="flex flex-col gap-4 mb-[84px]">
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Feedback Categorization
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Feedback loop notifications
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/tick.svg" className="w-3" />
              <span className="font-medium text-base leading-4">
                Essential dev tools integrations
              </span>
            </div>
          </div>
          <button className="border w-[278px] border-[#25A4AD] border-solid flex items-center justify-center py-[19px] text-[#25A4AD] text-lg leading-[22px] font-medium">
            Contact US
          </button>
        </div>
      </div>
      <div className="w-[523px] h-[650px] bg-[#F3F3F3] z-0 rotate-[64.766deg] absolute left-[-250px] top-[250px]"></div>
    </div>
  )
}
