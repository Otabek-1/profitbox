import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Overview() {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animatsiya davomiyligi (ms)
          easing: 'ease-in-out', // Animatsiya xarakteri
          once: true, // Sahifada faqat bir marta bajariladi
        });
      }, []);
    return (
        <div className='p-5  items-start justify-center gap-3' style={{ width: "100%", height: "100%", zIndex: "9999", overflowY:"scroll" }}>
            <div className="business-card rounded-lg">
                <div className="curtn">
                    <img src="https://picsum.photos/1000/500" className="card-back" alt="Background" />
                    <div className="c"></div>
                </div>
                <div className="column" data-aos="fade-left">
                    <h3 className="business-title text-white">Shop store | Online shop store</h3>
                    <i className="fas fa-store" data-aos="fade-left"></i>
                </div>

                <div className="column" data-aos="fade-left" style={{ width: "max-content", columnGap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-users text-white" style={{ fontSize: "15px" }}></i>
                        : 22k
                    </span>
                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-money-bill-wave text-white" style={{ fontSize: "15px" }}></i>
                        : <span className="profit" style={{ color: "lightgreen" }}>+2k</span>
                    </span>

                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-star text-white" style={{ fontSize: "15px" }}></i>
                        : 4.5
                    </span>
                </div>

                <div className="column" style={{bottom:"40px", position:"absolute"}}>
                    <Link className='card-button'>Manage</Link>
                </div>
            </div>

            <div className="business-card rounded-lg" >
                <div className="curtn">
                    <img src="https://picsum.photos/1000/500" className="card-back" alt="Background" />
                    <div className="c"></div>
                </div>
                <div className="column" data-aos="fade-left">
                    <h3 className="business-title text-white">MedCom | Consulting center</h3>
                    <i className="fas fa-headset" data-aos="fade-left"></i>
                </div>

                <div className="column" data-aos="fade-left" style={{ width: "max-content", columnGap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-users text-white" style={{ fontSize: "15px" }}></i>
                        : 22k
                    </span>
                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-money-bill-wave text-white" style={{ fontSize: "15px" }}></i>
                        : <span className="profit" style={{ color: "lightgreen" }}>+2k</span>
                    </span>

                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-star text-white" style={{ fontSize: "15px" }}></i>
                        : 4.5
                    </span>
                </div>

                <div className="column" style={{bottom:"40px", position:"absolute"}}>
                    <Link className='card-button'>Manage</Link>
                </div>
            </div>

            <div className="business-card rounded-lg" >
                <div className="curtn">
                    <img src="https://picsum.photos/1000/500" className="card-back" alt="Background" />
                    <div className="c"></div>
                </div>
                <div className="column" data-aos="fade-left">
                    <h3 className="business-title text-white">Bull Trade | Education center</h3>
                    <i className="fas fa-user-graduate" data-aos="fade-left"></i>
                </div>

                <div className="column" data-aos="fade-left" style={{ width: "max-content", columnGap: "10px" }}>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-users text-white" style={{ fontSize: "15px" }}></i>
                        : 22k
                    </span>
                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-money-bill-wave text-white" style={{ fontSize: "15px" }}></i>
                        : <span className="profit" style={{ color: "lightgreen" }}>+2k</span>
                    </span>

                    <div className="dot"></div>
                    <span style={{ display: "flex", alignItems: "center", columnGap: "5px", fontSize: "15px" }} className='text-white'>
                        <i className="fas fa-star text-white" style={{ fontSize: "15px" }}></i>
                        : 4.5
                    </span>
                </div>

                <div className="column" style={{bottom:"40px", position:"absolute"}}>
                    <Link className='card-button'>Manage</Link>
                </div>
            </div>

            

            <div className="create-card">
                    <div className="plus">
                    <i className="fas fa-plus"></i>
                    </div>
                    <Link className='card-link-c'>Add your business cluster</Link>
            </div>

        </div>
    )
}
