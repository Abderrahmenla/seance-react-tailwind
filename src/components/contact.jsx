import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formValidationSchema } from '../schema/contact'
import { useToast } from './ui/use-toast'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Toaster } from './ui/toaster'
import emailjs from '@emailjs/browser'
export default function Contact() {
  const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
      subject: '',
    },
  })

  function onSubmit(data) {
    emailjs
      .send(
        'service_xz2w9bp',
        'template_lazq1ia',
        {
          to_name: 'Abderrahmen',
          from_name: data.fullName,
          message: data.message,
          reply_to: data.email,
          name: data.subject,
        },
        'U_0Fwg4n_xWhxnamC'
      )
      .then(
        (result) => {
          toast({
            title: 'Thanks for reaching out!',
            description:
              "Your form has been submitted, we'll reach out to you soon",
          })
        },
        (error) => {
          console.error(error)
          toast({
            title: 'Oups an error has been occured',
            description: 'Please re-fill the form and reach out to us',
          })
        }
      )
  }
  return (
    <section className="flex flex-col items-center justify-center p-20 gap-20">
      <div className="flex flex-col items-center gap-[30px]">
        <h2 className="text-[#313131] text-[65px] leading-[65px] text-center">
          {' '}
          Contact{' '}
          <span className="text-[#25A4AD] font-semibold leading-[65px] text-[65px] ">
            Us{' '}
          </span>{' '}
        </h2>
      </div>
      <div className="mx-auto w-full max-w-[550px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#313131]"
              >
                Full Name
              </label>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#25A4AD] focus:shadow-md"
                        type="text"
                        placeholder="Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#313131]"
              >
                Email Address
              </label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#25A4AD] focus:shadow-md"
                        type="text"
                        placeholder="example@domain.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#313131]"
              >
                Subject
              </label>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#25A4AD] focus:shadow-md"
                        type="text"
                        placeholder="Enter your subject"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-[#313131]"
              >
                Message
              </label>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#25A4AD] focus:shadow-md"
                      ></Textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-[#25A4AD] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </Form>
      </div>
      <Toaster />
    </section>
  )
}
