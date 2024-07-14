import './App.css'
import Header from './components/header'
import Services from './components/services'
import Features from './components/features'
function App() {
  return (
    <>
      <Header />
      <main className="w-full mt-[14px] ">
        <section className="relative w-full mb-[140px]">
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
          <div className="absolute left-0 top-[35%] w-[37px] h-[68px] bg-[#D7FCFF] "></div>
          <div className="absolute left-0 bottom-[16%] bg-[#D7FCFF]">
            <img src="/assets/green-shape.png" alt="shape" />
          </div>
          <div className="absolute right-5 border-radius-shapre bottom-[21%] p-10 ">
            <img src="/assets/grey-shape.png" alt="shape" />
          </div>
          <div className="absolute left-0 -bottom-[105px] w-full bg-[#F8F8F8] py-[75px] flex items-center justify-center ">
            <div className="flex items-center justif gap-[100px]">
              <img src="/assets/planday.svg" />
              <img src="/assets/umbraco.svg" />
              <img src="/assets/fisher.svg" />
              <img src="/assets/bright.svg" />
              <img src="/assets/plandayy.svg" />
            </div>
          </div>
        </section>
        <Services />
        <Features />
      </main>
    </>
  )
}

export default App

// img h 79vh 34.7vw
