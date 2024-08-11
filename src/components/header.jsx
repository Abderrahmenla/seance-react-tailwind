import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signup')
  }
  const handleSignIn = () => {
    navigate('/signin')
  }
  return (
    <header className="relative w-full pt-[104px]">
      <div className="relative w-[78%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[50px]">
          <span className="text-[#25A4AD] text-[22px] leading-normal capitalize">
            {' '}
            Payme{' '}
          </span>
          <ul className="flex items-center gap-[50px]">
            <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
              Home
            </li>
            <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
              About
            </li>
            <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
              Testimonial
            </li>
            <li className="text-[#313131] text-lg leading-normal capitalize cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-7">
          <button
            onClick={handleSignIn}
            className="text-[#313131] text-lg leading-normal cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={handleSignUp}
            className="border shadow-cta border-[#25A4AD] w-[152px] h-[58px] text-center text-[#25A4AD] text-lg leading-normal"
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="w-[130.066px] h-[130.066px] border vorder-solid border-[#25A4AD] absolute top-0 -left-[110px] bg-transparent -rotate-[19.523deg]"></div>
      <img
        src="/assets/right-top-shape.png"
        className="absolute top-0 right-0"
      />
      <img
        src="/assets/orange-shape.png"
        className="absolute bottom-[-49px] left-[38%] overflow-auto"
      />
    </header>
  )
}
