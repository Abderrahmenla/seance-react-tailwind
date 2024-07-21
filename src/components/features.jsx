import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { cn } from '../utils'
export default function Features() {
  const [selectedCard, setSelectedCard] = useState(0)
  const cards = [
    {
      title: 'Work Load',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Time Tracking',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Collaborations',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Work Load',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Work Load',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Work Load',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
    {
      title: 'Work Load',
      description:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.',
    },
  ]
  return (
    <div className="py-20 bg-[#F8F8F8] pl-[135px] flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-[#313131] text-[65px] leading-[65px] text-center">
          {' '}
          Our{' '}
          <span className="text-[#25A4AD] font-semibold leading-[65px] text-[65px] ">
            Features{' '}
          </span>{' '}
        </h2>
        <p className="text-center max-w-[620px] leading-6 text-base text-[#313131]">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="px-4 gap-10">
          {cards.map((option, index) => (
            <CarouselItem
              key={index}
              className={`w-[350px] py-[38px] px-[33px] cursor-pointer ${
                selectedCard === index
                  ? 'bg-white shadow-card-selected'
                  : 'bg-transparent border border-solid border-[#D8D8D8]'
              } `}
              onClick={() => setSelectedCard(index)}
            >
              <div
                className={cn(
                  'flex w-full flex-col items-center justify-center'
                )}
              >
                <span
                  className={`text-[22px] font-semibold capitalize leading-[27px] ${
                    selectedCard === index ? 'text-[#25A4AD]' : 'text-[#313131]'
                  } `}
                >
                  {option.title}
                </span>
                <p className="mt-[25px] mb-[49px] text-center text-base text-[#313131] leading-[23px]">
                  {option.description}
                </p>
                <a
                  className={`text-base font-medium leading-[19px]  underline ${
                    selectedCard === index ? 'text-[#25A4AD]' : 'text-[#313131]'
                  } `}
                >
                  Learn More
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button className="w-[215px] py-[18px] filter-drop-btn border border-solid border-[#25A4AD] text-lg leading-[22px] font-medium text-[#25A4AD]">
        Explore All
      </button>
    </div>
  )
}
