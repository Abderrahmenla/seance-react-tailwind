import './App.css'

function App() {
  return (
    <>
      <header className="relative w-full pt-[104px]">
        <div className="relative w-[78%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <span className="text-[#25A4AD] text-[22px] leading-normal capitalize">
              {' '}
              Payme{' '}
            </span>
            <ul className="flex items-center gap-[50px]">
              <li className="text-[#313131] text-lg leading-normal capitalize">
                Home
              </li>
              <li className="text-[#313131] text-lg leading-normal capitalize">
                About
              </li>
              <li className="text-[#313131] text-lg leading-normal capitalize">
                Testimonial
              </li>
              <li className="text-[#313131] text-lg leading-normal capitalize">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-7">
            <span className="text-[#313131] text-lg leading-normal">
              Sign in
            </span>
            <button className="border shadow-cta border-[#25A4AD] w-[152px] h-[58px] text-center text-[#25A4AD] text-lg leading-normal">
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
      <main className="w-full mt-[14px]">
        <section className="relative w-full">
          <div className="relative flex items-center justify-end max-w-[81.45vw] mx-auto">
            <div className="absolute top-[52%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
              <div className="flex flex-col mb-[30px] max-w-[623px] ">
                <h1 className="text-[100px] text-[#313131] leading-[100%]">
                  Providing Best
                </h1>
                <h2 className="text-[100px] text-[#25A4AD] leading-[100%]">
                  WEB Services
                </h2>
              </div>
              <p className="mb-10 max-w-[426px] text-base leading-[147%] text-[#313131] ">
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
              </p>
              <div className="flex items-center gap-5">
                <button className="w-[215px] h-[58px] flex items-center justify-center text-lg leading-normal text-white bg-[#25A4AD] shadow-btn">
                  Get started
                </button>
                <button className="w-[215px] h-[58px] flex items-center justify-center text-[#25A4AD] text-lg leading-normal border border-[#25A4AD]">
                  {' '}
                  Explore{' '}
                </button>
              </div>
            </div>
            <img src="/assets/hero-img.png" />
          </div>
          <div className="absolute top-[32%] left-[44%] w-[29px] h-[29px] bg-[#D4CCC9]"></div>
        </section>
      </main>
    </>
  )
}

export default App

// img h 79vh 34.7vw
