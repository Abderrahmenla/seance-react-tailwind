import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { cn } from '../utils'
export default function Features() {
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
  ]
  return (
    <div className="py-20 bg-[#F8F8F8] pl-[135px] flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-[#313131] text-[65px] leading-[65px] text-center">
          {' '}
          Our{' '}
          <span className="text-[#25A4AD] leading-[65px] text-[65px] ">
            Features{' '}
          </span>{' '}
        </h2>
        <p className="text-center max-w-[620px] leading-6 text-base text-[#313131]">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent className="px-4">
            {cards.map((option, index) => (
              <CarouselItem key={index} className="pl-[10px] sm:pl-[16px]">
                <div
                  className={cn(
                    'group relative flex h-[78px] w-[78px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] sm:h-[84px] sm:w-[84px]'
                  )}
                >
                  <span
                    className={`text-sm capitalize  leading-[21px] sm:text-base sm:leading-6`}
                  >
                    {option.title}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div></div>
    </div>
  )
}
