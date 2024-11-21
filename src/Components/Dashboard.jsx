import React from 'react'
import { Link } from 'react-router-dom'
import "./fontawesome-free-5.15.4-web/css/all.css"
import "./Main.css"

export default function Dashboard() {
    return (
        <div className='bg-gray-900 w-full' style={{ height: "100vh" }}>
            <nav className='w-full flex justify-between items-center bg-gray-500 fixed top-0 left-0 px-10' style={{ height: "50px", zIndex:"999" }}>
                <h3 className="text-white font-bold" style={{ fontSize: "27px", fontFamily: "sans-serif" }}>Dashboard</h3>
                <Link className="text-white flex items-center" style={{ columnGap: "10px" }}>
                    <img src="https://picsum.photos/50/50" alt="" className='rounded-full' style={{ objectFit: "cover", width: "45px", height: "45px" }} />
                    <div className="descs">
                        <h5 className="name" >Otabek Burhonov</h5>
                        <p style={{ fontSize: "11px" }}>Business manager</p>
                    </div>
                </Link>
            </nav>

            <main className="main w-full flex justify-between items-center" style={{ height: "100%" }}>
                <div
                    className="menus bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ width: "60px", height: "100%", position: "relative" }}>

                    {/* Iconlar va menyular */}
                    <ul className="menu-items text-white">
                        <li className="menu-item">
                            <i className="fas fa-user"></i>
                        </li>
                        <li className="menu-item">
                            <i className="fas fa-chart-bar"></i>
                        </li>
                        <li className="menu-item">
                            <i className="fas fa-cogs"></i>
                        </li>
                        <li className="menu-item">
                            <i className="fas fa-sign-out-alt"></i>
                        </li>
                    </ul>
                </div>
            </main>

        </div>

    )
}
