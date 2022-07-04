import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="md:h-[80.5vh] xl:h-[40vw] relative ">
                <div className="absolute h-full w-full  z-[2] flex justify-center items-center pt-[10%]">
                    <div className="w-[50%]">
                        <div className="flex  w-full justify-end ">
                            <div className="text-white text-[23px] text-left w-[32%]  border-cobalt border-r-0 border-t-0 border-b-0 pl-[18px] border-[2px] ">
                                A leader in the alternative asset space, TPG
                                manages $120 billion in assets through a
                                principled focus on innovation.
                            </div>
                        </div>

                        <section className="text-white pt-[60px]">
                            <div className="  font-tpg  grid grid-cols-12 ">
                                <div className="col-span-11">
                                    <div className=" font-tpg">
                                        <p className="text-left ">
                                            <small className="text-base  ">
                                                Meet TPG
                                            </small>
                                        </p>
                                        <div className="flex justify-between items-end">
                                            <h2 className=" text-[170px] font-light pt-5 text-left font-tpg">
                                                Focused on Innovation
                                            </h2>
                                            <div className="">
                                                <img
                                                    src="/assets/downArrow.svg"
                                                    className="h-[80px] w-[80px] mb-[45px]"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <video
                    className="absolute object-cover w-full h-full"
                    autoPlay={true}
                    muted={true}
                    controls={false}
                    playsInline={true}
                    loop={true}
                >
                    <source
                        src={
                            'https://cms.tpg.com/wp-content/uploads/2021/12/GettyImages-90037018.mp4'
                        }
                        type="video/mp4"
                    />
                </video>
            </div>
        </>
    );
};

export default Hero;
