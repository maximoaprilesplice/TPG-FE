import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isTop, setIsTop] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    };
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="">
            <div
                className={`fixed w-full z-[999] ${
                    isTop ? 'bg-white ' : 'bg-transparent text-white'
                } h-[109px]`}
            >
                <header className=" transition-all duration-300 active group  ">
                    <div className="h-[60px] w-[144px] ml-[19%] absolute pt-7">
                        <a className="flex" href="/">
                            <img
                                className="h-[60px] w-[144px] "
                                src="https://www.tpg.com/images/tpg.svg"
                                alt="TPG"
                            />
                        </a>
                    </div>
                    <div className="grid grid-cols-12 group ml-[20%] w-[75%] gap-x-[20px] pt-11 text-[18px] xxl:invisible ">
                        <p className=" col-end-4">
                            <a className="" href="#">
                                Approach
                            </a>
                        </p>
                        <p className=" col-end-5 ">
                            <a className="" href="#">
                                Platforms
                            </a>
                        </p>
                        <p className="  col-end-6">
                            <a className="" href="#">
                                Portfolio
                            </a>
                        </p>
                        <p className="  col-end-7">
                            <a className="" href="#">
                                Engagement
                            </a>
                        </p>
                        <p className=" col-end-8 ">
                            <a
                                className=""
                                href="https://press.tpg.com/news-releases?c=254315&amp;nyo=0&amp;p=irol-news"
                            >
                                Press Room
                            </a>
                        </p>
                        <p className=" col-end-9">
                            <a className="" href="/about-us/">
                                About
                            </a>
                        </p>

                        <p
                            className={`${
                                isTop ? 'bg-white ' : ' text-white'
                            } col-end-10 border border-r-0 border-t-0 border-b-0 border-gray-3`}
                        >
                            <a
                                className=""
                                href="https://services.sungarddx.com/LogIn/1964272"
                            >
                                LP Login
                            </a>
                        </p>
                        <p className={`${isTop ?? ' text-white'} col-end-11">`}>
                            <a className="" href="http://shareholders.tpg.com/">
                                Shareholders
                            </a>
                        </p>
                    </div>
                    <div className=" lg:hidden">
                        <span>
                            <i>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 14H20"
                                        stroke="#1E1E1E"
                                        stroke-width="2"
                                    ></path>
                                    <path
                                        d="M0 6H20"
                                        stroke="#1E1E1E"
                                        stroke-width="2"
                                    ></path>
                                </svg>
                            </i>
                        </span>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
