import React from 'react';

const OurPlatform = () => {
    return (
        <section className="scroll-mt-28 bg-gray-1 min-h-[1430px]">
            <div className=" font-tpg container grid gap-y-[32px] grid-cols-12 lg:gap-y-0 lg:gap-x-[42px] lg:grid-cols-12 ">
                <div className="col-span-full lg:col-span-6">
                    <div className="py-14 lg:py-32 font-tpg">
                        <p className="text-left">
                            <small className="text-base text-left">
                                What we Do
                            </small>
                        </p>
                        <h2 className="text-mh2 lg:text-h2 pt-5 lg:pt-8 text-left">
                            Our Platforms and Products
                        </h2>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-6 pt-48">
                    <p className={`text-mh5 lg:text-h5 text-left `}>
                        TPG puts capital to work through five platforms that are
                        made up of 17 distinctive products—all of which were
                        created by growing organically into opportunities we
                        identified through deep thematic work in key sectors and
                        geographies.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-[48px]  container  lg:gap-x-[42px] xl:grid-cols-3 lg:grid-cols-2   ">
                <div className="h-[384px] w-[384px] bg-navy-1 rounded-10 p-[48px] text-white font-tpg text-left font-normal flex flex-col justify-between bg-opacity-[0.9] hover:bg-opacity-100 transition-all duration-500">
                    <div className="h-[40px] w-[40px] bg-gray-1" />
                    <h2 className="text-[36px] leading-[48px]">Capital</h2>
                    <p className="text-[16px] leading-[24px]">$57B AUM</p>
                    <p className="text-[16px] leading-[24px]">
                        Large-scale control-oriented private equity investing
                    </p>
                    <img
                        src="/assets/plusIcon.svg"
                        className="h-[24px] w-[24px] mt-[40px] self-end "
                    />
                </div>
                <div className="h-[384px] w-[384px] bg-teals-2 rounded-10 p-[48px] text-white font-tpg text-left font-normal flex flex-col justify-between bg-opacity-[0.9] hover:bg-opacity-100 transition-all duration-500">
                    <div className="h-[40px] w-[40px] bg-gray-1" />
                    <h2 className="text-[36px] leading-[48px]">Growth</h2>
                    <p className="text-[16px] leading-[24px]">$22B AUM</p>
                    <p className="text-[16px] leading-[24px]">
                        Growth equity and middle market private equity investing
                    </p>
                    <img
                        src="/assets/plusIcon.svg"
                        className="h-[24px] w-[24px] mt-[40px] self-end "
                    />
                </div>
                <div className="h-[384px] w-[384px] bg-olive-2 rounded-10 p-[48px] text-white font-tpg text-left font-normal flex flex-col justify-between bg-opacity-[0.9] hover:bg-opacity-100 transition-all duration-500">
                    <div className="h-[40px] w-[40px] bg-gray-1" />
                    <h2 className="text-[36px] leading-[48px]">Impact</h2>
                    <p className="text-[16px] leading-[24px]">$14B AUM</p>
                    <p className="text-[16px] leading-[24px]">
                        Private equity investing focused on both societal and
                        financial outcomes
                    </p>
                    <img
                        src="/assets/plusIcon.svg"
                        className="h-[24px] w-[24px] mt-[40px] self-end "
                    />
                </div>

                <div className="h-[384px] w-[384px] bg-purple-2 rounded-10 p-[48px] text-white font-tpg text-left font-normal flex flex-col justify-between bg-opacity-[0.9] hover:bg-opacity-100 transition-all duration-500">
                    <div className="h-[40px] w-[40px] bg-gray-1" />
                    <h2 className="text-[36px] leading-[48px]">Real Estate</h2>
                    <p className="text-[16px] leading-[24px]">$18B AUM</p>
                    <p className="text-[16px] leading-[24px]">
                        Diversified, thematic Real Estate Investing platform
                    </p>
                    <img
                        src="/assets/plusIcon.svg"
                        className="h-[24px] w-[24px] mt-[40px] self-end "
                    />
                </div>
                <div className="h-[384px] w-[384px] bg-rust-2 rounded-10 p-[48px] text-white font-tpg text-left font-normal flex flex-col justify-between bg-opacity-[0.9] hover:bg-opacity-100 transition-all duration-500">
                    <div className="h-[40px] w-[40px] bg-gray-1" />
                    <h2 className="text-[36px] leading-[48px]">
                        Market Solutions
                    </h2>
                    <p className="text-[16px] leading-[24px]">$10B AUM</p>
                    <p className="text-[16px] leading-[24px]">
                        Differentiated strategies built to address specific
                        market opportunities
                    </p>
                    <img
                        src="/assets/plusIcon.svg"
                        className="h-[24px] w-[24px] mt-[40px] self-end "
                    />
                </div>
            </div>
        </section>
    );
};

export default OurPlatform;
