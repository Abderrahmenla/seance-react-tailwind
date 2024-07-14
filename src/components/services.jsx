import React from 'react'
import Title from './title'
import ServiceCard from './service-card'
import { serviceData } from '../data/service'
export default function Services() {
  return (
    <section className="relative flex items-center justify-center bg-white pt-[210px] pb-[140px]">
      <div className="flex flex-col items-center w-full gap-[80px]">
        <div className="flex flex-col gap-[30px]">
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
        <div className="flex items-start justify-center gap-10">
          <div className="flex flex-col gap-10">
            <ServiceCard
              cardTitle={serviceData[0].title}
              imgSrc={serviceData[0].imgSrc}
              layerClassName={serviceData[0].layerClassName}
            />
            <ServiceCard
              cardTitle={serviceData[2].title}
              imgSrc={serviceData[2].imgSrc}
              layerClassName={serviceData[2].layerClassName}
            />
          </div>
          <div className="flex flex-col gap-10 pt-20">
            <ServiceCard
              cardTitle={serviceData[1].title}
              imgSrc={serviceData[1].imgSrc}
              layerClassName={serviceData[1].layerClassName}
            />
            <ServiceCard
              cardTitle={serviceData[3].title}
              imgSrc={serviceData[3].imgSrc}
              layerClassName={serviceData[3].layerClassName}
            />
          </div>
        </div>
        <button className="cursor-pointer flex items-center justify-center border border-[#25A4AD] text-center text-lg text-[#25A4AD] capitalize px-[65px] py-[18px]">
          explore All
        </button>
      </div>
      <div className="absolute top-[40%] left-[-13%] border border-[#25A4AD] w-[45vw] h-[39.5vw] z-0 rotate-[64.766deg] "></div>
    </section>
  )
}
