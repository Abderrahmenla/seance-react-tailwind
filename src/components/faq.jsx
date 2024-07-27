import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
export default function FAQ() {
  const qa = [
    {
      question:
        'she met humoured sir breeding her. Six curiosity day assurance bed necessary.',
      answer:
        'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
    },
    {
      question:
        'And excellence partiality estimating terminated day everything?',
      answer:
        'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
    },
    {
      question: 'Latter person am secure of estate genius at?',
      answer:
        'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
    },
    {
      question: 'Whatever landlord yourself at by pleasure of children be?',
      answer:
        'Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.',
    },
  ]
  return (
    <div className="flex flex-col items-center gap-20">
      <h2 className="text-[#25A4AD] font-semibold leading-[65px] text-[65px] text-center">
        FAQs
      </h2>
      <div>
        <Accordion type="single" collapsible className="flex flex-col gap-5">
          {qa.map((item, index) => (
            <AccordionItem key={index} value={`question-${index + 1}`}>
              <div className="faq-shadow">
                <AccordionTrigger className="h-[100px] flex items-center  text-left !text-xl md:!text-2xl pl-10 rounded-[10px]">
                  <span className="max-w-[530px] text-[#313131] text-xl font-medium">
                    {item.question}{' '}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-white pb-8 pl-10 rounded-b-[10px]">
                  <p className="max-w-[490px] text-[#313131] leading-6 text-base">
                    {item.answer}{' '}
                  </p>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
