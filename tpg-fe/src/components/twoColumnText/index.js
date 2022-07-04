import React from "react";

const TwoColumn = () => {
  return (
    <section className="scroll-mt-28 bg-white ">
     <div className="py-14 lg:py-32 font-tpg container grid gap-y-[32px] grid-cols-12 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-12 ">
      <div className="col-span-full lg:col-span-6">
        <div className="py-14 lg:py-32 font-tpg" >
          <p className="text-left">
          <small className="text-base text-left">Overview</small>
          </p>
          <h2 className="text-mh2 lg:text-h2 pt-5 lg:pt-8 text-left">Built for a distinctive approach</h2>
        </div>
          
      
       </div>
        <div className="col-span-full lg:col-span-6 pt-48">
          <p className={`text-mh5 lg:text-h5 text-left `}>
          Through TPG’s family office roots, entrepreneurial heritage, and West Coast base, we have developed a differentiated approach to alternative investments based on innovation, organic growth, and a culture of openness and collaboration. Since our founding in 1992, we have developed a distinct position in the industry, executing some of the most notable and interesting transactions in private equity.
          </p>

          <a className="text-base text-black btn--primary btn--primary-hover group group flex items-center mt-8 " >
            <i className="icon--left origin-left duration-300 group-hover:scale-125 scale-100 trasnform transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" className="transition-all duration-300 inline" fill="none" xmlns="http://www.w3.org/2000/svg " >
                <circle cx="8" cy="8" r="6" stroke-width="2" stroke="#0055FF" fill="#0055FF"></circle>
              </svg>
            </i>
            <span className="group-hover:translate-x-1 transition-all duration-300 block  max-w-[198px] !leading-24 !font-normal mx-4">Our Portfolio Companies</span>
            <i className="icon--right">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 delay-150 inline">
                <path className="transition-all duration-300   arrow " d="M6 1L11 6L6 11" stroke="#1E1E1E" stroke-width="2"></path>
                <path className="transition-all duration-300  arrow-line" d="M11 6L0 6" stroke="#1E1E1E" stroke-width="2"></path>
              </svg>
            </i>
          </a>
        </div>
        </div>
    </section>
  );
};

export default TwoColumn;