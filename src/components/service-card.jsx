import React from 'react'

export default function ServiceCard({
  cardTitle = 'Web Development',
  imgSrc = '/assets/right-bottom-card.png',
  layerClassName,
}) {
  return (
    <div className={`relative w-[32.7vw] z-10`}>
      <div className="z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        <span className="text-white font-semibold text-[36px] leading-[36px] max-w-[225px] text-center">
          {cardTitle}
        </span>
        <img src="/assets/stars.svg" />
      </div>
      <img className="w-full" src={imgSrc} />
      <div
        className={`absolute w-full h-full top-0 left-0 z-20 inset-0 object-cover ${layerClassName}`}
      ></div>
    </div>
  )
}
