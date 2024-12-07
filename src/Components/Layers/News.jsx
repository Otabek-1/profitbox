import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function News() {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsforsecond = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,  // 6 ta karta ko'rsatiladi
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,  // Kichikroq ekranlar uchun
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,  // Mobil ekranlar uchun
                },
            },
        ],
    };

    return (
        <div className='w-full px-5'>
            {/* Slider uchun containerning o'zi */}
            <Slider {...settings} className="h-[60vh] overflow-hidden"> {/* Carouselning balandligini qisqartirdik */}
                <div className='h-[60vh]'>
                    <img
                        src="https://picsum.photos/1200/600" // Rasmni o'zgartirishingiz mumkin
                        alt="carousel-item"
                        className="w-full h-[60vh] object-cover rounded-lg" // Rasmni to'liq qamrab olish uchun
                    />
                </div>
                <div>
                    <img
                        src="https://picsum.photos/1200/600" // Yana bir rasm
                        alt="carousel-item"
                        className="w-full h-[60vh] object-cover rounded-lg"
                    />
                </div>
            </Slider>

            {/* Boshqa kontent */}
            <div className="mt-8">
                <h1 className='text-white text-4xl font-bold'>Whats new</h1>

                <h2 className="text-white text-2xl mt-5">Latest news</h2>
                <Slider {...settingsforsecond}>
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="my-3"> {/* marginni kichraytirdik */}
                            <div
                                style={{ flexDirection: "column" }}
                                className="card relative flex p-3 w-[200px] h-[300px] gap-3 rounded-md border-2 border-cyan-900 transition-all transform hover:scale-105 hover:shadow-lg hover:border-cyan-500 duration-300"
                            >
                                <img
                                    src="https://picsum.photos/200/200"
                                    alt="carousel-item"
                                    className="rounded-lg object-cover w-full h-2/4"
                                />
                                <h4 className="text-white font-bold mt-3">Big news: added telegram bot!</h4>
                                <a
                                    href="#"
                                    className="text-cyan-400 absolute bottom-5"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>



                <h2 className="text-white text-2xl mt-5">Featured</h2>
                <Slider {...settingsforsecond}>
                    {[...Array(20)].map((_, index) => (
                        <div key={index} className="my-3"> {/* marginni kichraytirdik */}
                            <div
                                style={{ flexDirection: "column" }}
                                className="card relative flex p-3 w-[200px] h-[300px] gap-3 rounded-md border-2 border-cyan-900 transition-all transform hover:scale-105 hover:shadow-lg hover:border-cyan-500 duration-300"
                            >
                                <img
                                    src="https://picsum.photos/200/200"
                                    alt="carousel-item"
                                    className="rounded-lg object-cover w-full h-2/4"
                                />
                                <h4 className="text-white font-bold mt-3">Big news: added telegram bot!</h4>
                                <a
                                    href="#"
                                    className="text-cyan-400 absolute bottom-5"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>


            



            <footer className="w-full h-[100px] bg-transparent flex items-center justify-center">
                <span className='text-slate-500'>&copy; ProfitBox 2024-2025</span>
            </footer>
        </div>
    );
}
