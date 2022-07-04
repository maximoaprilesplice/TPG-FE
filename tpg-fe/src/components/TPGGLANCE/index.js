import React from 'react';

const TPGGLANCE = () => {
    return (
        <section
            style={{
                backgroundImage: `url(https://cms.tpg.com/wp-content/uploads/2021/12/52849b5da0f453ac01f893cc6d1287b5.jpeg)`
            }}
            className="scroll-mt-28  bg-cover bg-left bg-no-repeat h-auto"
        >
            <div
                style={{
                    background: `linear-gradient(270deg,rgba(0,9,26,.851) 0,rgba(0,9,26,.851) 100%)`
                }}
                className="w-full  bg-cover bg-left bg-no-repeat h-auto "
            >
                <div className="py-[128px] grid grid-cols-1   container  xl:grid-cols-3 lg:grid-cols-2  text-white gap-[105px] text-left">
                    <h2 className="text-[64px] leading-[48px] font-tpg  text-left">
                        TPG at
                        <p className="mt-[30px]"> a Glance </p>
                    </h2>

                    <div
                        data-aos="fade-up"
                        className="border border-gray-3   border-r-0 border-t-0 border-b-0 text-white"
                    >
                        <p className="text-[80px] leading-[80px] ml-[45px] ">
                            $120 B
                        </p>
                        <p className="text-[16px] leading-[24px] mt-[20px] text-left ml-[55px] text-gray-3 ">
                            AUM
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="border border-gray-3   border-r-0 border-t-0 border-b-0 text-white"
                    >
                        <div>
                            <p className="text-[80px] leading-[80px] text-left ml-[48px]">
                                280 +
                            </p>
                            <p className="text-[16px]  leading-[24px] mt-[20px] text-left ml-[55px] text-gray-3 mr-[50px]">
                                Active Portfolio Companies Headquartered in more
                                than 30 countries
                            </p>
                        </div>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="col-start-2 border border-gray-3   border-r-0 border-t-0 border-b-0 text-white"
                    >
                        <p className="text-[80px] leading-[24px]  mt-[20px] ml-[48px]">
                            900 +
                        </p>
                        <p className="text-[16px] leading-[24px] mt-[40px] text-left ml-[55px] text-gray-3 ">
                            Employees working in 12 offices across 8 countries
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="border border-gray-3   border-r-0 border-t-0 border-b-0 text-white"
                    >
                        <p className="text-[80px] leading-[24px]  mt-[20px] ml-[48px]">
                            54
                        </p>
                        <p className="text-[16px] leading-[24px] mt-[40px] text-left ml-[55px] text-gray-3 ">
                            In-house operations professionals with specialized
                            sector knowledge and experience
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="col-start-2 border border-gray-3  border-r-0 border-t-0 border-b-0 text-white "
                    >
                        <p className="text-[80px] leading-[24px]  mt-[20px] ml-[48px]">
                            500
                        </p>
                        <p className="text-[16px] leading-[24px] mt-[40px] text-left ml-[55px] text-gray-3 ">
                            C-Suite executives recruited to portfolio companies
                            with help from TPG’s Human Capital team
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="border border-gray-3   border-r-0 border-t-0 border-b-0 text-white"
                    >
                        <p className="text-[80px] leading-[24px]  mt-[20px] ml-[48px]">
                            70%
                        </p>
                        <p className="text-[16px] leading-[24px] mt-[40px] text-left ml-[55px] text-gray-3 ">
                            of TPG’s investors are invested across three or more
                            of our products
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TPGGLANCE;
