import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
export default function Testimonials() {
  const testimonials = [
    {
      title: 'Best Developers',
      review:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
      reviewerName: 'Robert Johnson',
      reviewerPosition: 'Director at Behance',
    },
    {
      title: 'Best Developers',
      review:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
      reviewerName: 'Robert Johnson',
      reviewerPosition: 'Director at Behance',
    },
    {
      title: 'Best Developers',
      review:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
      reviewerName: 'Robert Johnson',
      reviewerPosition: 'Director at Behance',
    },
    {
      title: 'Best Developers',
      review:
        'Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.',
      reviewerName: 'Robert Johnson',
      reviewerPosition: 'Director at Behance',
    },
  ]
  return (
    <div className="relative py-[140px] bg-white flex flex-col items-center gap-20 overflow-hidden">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-[#313131] text-[65px] leading-[65px] text-center">
          What{' '}
          <span className="text-[#25A4AD] font-semibold leading-[65px] text-[65px] ">
            Clients
          </span>{' '}
          Say
        </h2>
        <p className="text-center max-w-[620px] leading-6 text-base text-[#313131]">
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>
      <Carousel>
        <CarouselContent className="relative w-[81.25vw] z-10">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className={` w-[81.25vw] max-w-[1170px] pl-0 cursor-pointer z-20`}
            >
              <div className={'flex w-full items-stretch flex-stretch gap-5'}>
                <img
                  className="w-[42%]"
                  src={'/assets/testimonial.png'}
                  width={482}
                  height={472}
                />

                <div className="flex flex-col justify-center px-10 bg-[#F8F8F8] border border-bl flex-grow">
                  <span className="mb-6 text-[22px] text-[#313131] leading-[27px] font-semibold">
                    {testimonial.title}
                  </span>
                  <p className="mb-[10px] text-base leading-[23px] text-[#313131] max-w-[588px]">
                    {' '}
                    {testimonial.review}{' '}
                  </p>
                  <img className="mb-5 w-[72px]" src="/assets/stars.svg" />
                  <span className="mb-[6px] leading-[19px] text-base text-[#313131]">
                    {testimonial.reviewerName}
                  </span>
                  <span className="text-sm leading-[17px]">
                    {testimonial.reviewerPosition}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-[78px]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="w-[656px] h-[569px] border border-solid border-[#25A4AD] z-0 rotate-[64.766deg] absolute right-[-450px] top-[200px]"></div>
    </div>
  )
}
