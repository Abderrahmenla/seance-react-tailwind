import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'

import { cn } from '../../utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center font-medium transition-all [&[data-state=open]>.plus]:hidden [&[data-state=open]>.minus]:block',
          className
        )}
        {...props}
      >
        <Plus
          className="h-[26px] w-[26px] shrink-0 plus mr-[31px]"
          color="#313131"
        />
        <Minus
          className="h-[26px] w-[26px] shrink-0 minus hidden mr-[31px]"
          color="#25A4AD"
        />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('flex items-center justify-center', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
