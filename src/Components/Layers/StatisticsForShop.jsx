import Aos from 'aos';
import "../../index.css";
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const chartConfig = {
    type: 'bar',
    height: 240,
    series: [
        {
            name: 'Sales',
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: '',
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#6B7280'],
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 2,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: '#616161',
                    fontSize: '12px',
                    fontFamily: 'inherit',
                    fontWeight: 400,
                },
            },
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#616161',
                    fontSize: '12px',
                    fontFamily: 'inherit',
                    fontWeight: 400,
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#dddddd',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: 'dark',
        },
    },
};


// for income

// Income data for each month
const incomeData = [12069, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000];

const chartConfigLine = {
    type: 'line',  // We are using a line chart here
    height: 240,
    series: [
        {
            name: 'Income',
            data: incomeData,  // Use the income data
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            background: '#1F2937',  // Dark background for the chart area
        },
        title: {
            text: 'Monthly Income',
            align: 'center',
            style: {
                color: '#fff',  // White color for title text
                fontSize: '16px',
            },
        },
        stroke: {
            curve: 'smooth',  // Smooth curve for the line
            width: 3,  // Line thickness
            colors: ['#34D399'],  // Green color for the line
        },
        dataLabels: {
            enabled: false,  // Disable data labels on the chart
        },
        grid: {
            borderColor: '#2D3748',  // Dark border color for grid lines
        },
        xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],  // Months of the year
            labels: {
                style: {
                    colors: '#CBD5E0',  // Light color for x-axis labels
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#CBD5E0',  // Light color for y-axis labels
                    fontSize: '12px',
                },
            },
        },
        tooltip: {
            theme: 'dark',  // Dark theme for tooltips
            x: {
                show: false,  // Hide x-axis values on hover
            },
        },
    },
};


// pie chart

const productCategoriesData = {
    series: [12000, 8000, 5000, 10000],  // Kategoriyalar bo'yicha daromadlar
    options: {
        chart: {
            type: 'pie', // Pie chart
        },
        labels: ['Clothes', 'Food', 'Accessories', 'Electronics'],  // Kategoriyalar nomlari
        title: {
            text: "Product Categories Revenue",  // Pie chartning sarlavhasi
            align: 'center',
            style: {
                fontSize: '16px',
                color: '#fff',
            },
        },
        tooltip: {
            theme: 'dark',  // Tooltipning rangini o'zgartirish
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        legend: {
            position: 'bottom',  // Legend pastda bo'ladi
        },
    },
};

function ratingFunction(rating = 3.5) {
    // Calculate the number of full stars and half stars based on the rating
    const fullStars = Math.floor(rating); // Full stars (integer part)
    const halfStars = rating % 1 !== 0 ? 1 : 0; // Half star if the rating is a decimal
    const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

    return (
        <div className="stars flex justify-center items-center gap-3" data-aos="fade-up">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, index) => (
                <i key={`full-${index}`} className="fas fa-star text-yellow-500" style={{ fontSize: "40px" }}></i>
            ))}
            {/* Half star */}
            {halfStars === 1 && (
                <i className="fas fa-star-half-alt text-yellow-500" style={{ fontSize: "40px" }}></i>
            )}
            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, index) => (
                <i key={`empty-${index}`} className="fas fa-star text-gray-300" style={{ fontSize: "40px" }}></i>
            ))}
        </div>
    );
}



export default function StatisticsForShop() {
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration (ms)
            easing: 'ease-in-out', // Animation easing
            once: true, // Animation happens only once
        });
    }, []);

    const [showChart, setShowChart] = useState("visitors")

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div
                style={{ width: '60%', height: '180px', borderRadius: '10px' }}
                className='bg-gray-600 flex items-center justify-around'
                data-aos='fade-left'
            >
                <div
                    className='total-info flex'
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => setShowChart("visitors")}
                >
                    <i className='fas fa-users' style={{ fontSize: '55px' }}></i>
                    <span style={{ textAlign: 'center', color: 'white' }}>
                        Total visitors: <br /> <b>22 045</b>
                    </span>
                </div>

                <div
                    className='total-info flex'
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => setShowChart("income")}
                >
                    <i
                        className='fas fa-money-bill-wave'
                        style={{ fontSize: '55px', color: 'lightgreen' }}
                    ></i>
                    <span style={{ textAlign: 'center', color: 'white' }}>
                        Total income: <br /> <b className='text-green-600'>+12 069</b>
                    </span>
                </div>

                <div
                    className='total-info flex'
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={() => setShowChart("rating")}
                >
                    <i className='fas fa-star' style={{ fontSize: '55px', color: 'yellow' }}></i>
                    <span style={{ textAlign: 'center', color: 'white' }}>
                        Rating: <br /> <b>4.5</b>
                    </span>
                </div>
            </div>

            <div className='chart mt-8' style={{ borderRadius: "10px" }}>
                <div className='shadow-lg rounded-lg p-4' style={{ width: "60%", height: "140px" }} data-aos="fade-left">
                    {showChart == 'visitors' ? <Chart {...chartConfig} /> : showChart == "income" ? <Chart {...chartConfigLine} /> : showChart == "rating" ? ratingFunction() : null}
                </div>
            </div>

            <div className="bestselled bg-gray-600 rounded-lg" style={{ width: "60%", height: "310px", padding: "10px", transform: "translateY(130px)" }}>
                <h4 className='text-white' style={{ fontSize: "20px" }}>Top selled products</h4>
                <div className="bestselled-cards" style={{ display: "flex", alignItems: "center", justifyContent: "center", columnGap: "10px" }}>
                    <div className="card-group" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="best-card bg-gray-400 rounded-lg">
                            <img src="https://picsum.photos/100/100" alt="" />
                            <div className="texts">
                                <span className="product-name text-white" style={{ textAlign: "start", fontWeight: "600", fontSize: "20px" }}>All in One group</span>
                                <span className="desc text-gray-300" style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</span>
                            </div>
                        </div>

                        <div className="infos bg-gray-500 rounded-lg" >
                            <span><b>Total sold:</b> 1203</span>
                            <span><b>Total income:</b> 769 $</span>
                            <span><b>Total rating:</b> 4 <i className="fas fa-star" style={{ fontSize: "17px" }}></i></span>

                            <button className='bg-blue-300 text-white py-2 px-12 rounded-md absolute bottom-5'>View in shop</button>
                        </div>
                    </div>



                    <div className="card-group" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="best-card bg-gray-400 rounded-lg">
                            <img src="https://picsum.photos/100/100" alt="" />
                            <div className="texts">
                                <span className="product-name text-white" style={{ textAlign: "start", fontWeight: "600", fontSize: "20px" }}>All in One group</span>
                                <span className="desc text-gray-300" style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</span>
                            </div>
                        </div>

                        <div className="infos bg-gray-500 rounded-lg" >
                            <span><b>Total sold:</b> 1203</span>
                            <span><b>Total income:</b> 769 $</span>
                            <span><b>Total rating:</b> 4 <i className="fas fa-star" style={{ fontSize: "17px" }}></i></span>

                            <button className='bg-blue-300 text-white py-2 px-12 rounded-md absolute bottom-5'>View in shop</button>
                        </div>
                    </div>



                    <div className="card-group" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="best-card bg-gray-400 rounded-lg">
                            <img src="https://picsum.photos/100/100" alt="" />
                            <div className="texts">
                                <span className="product-name text-white" style={{ textAlign: "start", fontWeight: "600", fontSize: "20px" }}>All in One group</span>
                                <span className="desc text-gray-300" style={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</span>
                            </div>
                        </div>

                        <div className="infos bg-gray-500 rounded-lg" >
                            <span><b>Total sold:</b> 1203</span>
                            <span><b>Total income:</b> 769 $</span>
                            <span><b>Total rating:</b> 4 <i className="fas fa-star" style={{ fontSize: "17px" }}></i></span>

                            <button className='bg-blue-300 text-white py-2 px-12 rounded-md absolute bottom-5'>View in shop</button>
                        </div>
                    </div>

                </div>
            </div>

            <div data-aos="fade-left" className="pie-chart absolute" style={{top:"150px", right:"150px", transform:"scale(1.4)", width:"max-content"}}>
                <div className="error absolute top-0 left-0" style={{width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"999", textAlign:"center", backdropFilter:"blur(10px)"}}>
                    <span className='text-white'>This type of statistics is not available for single category.</span>
                </div>
                <Chart options={productCategoriesData.options} series={productCategoriesData.series} type="pie" height={280} />

            </div>


        </div>
    );
}
