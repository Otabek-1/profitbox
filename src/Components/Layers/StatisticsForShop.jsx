import Aos from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const chartConfig = {
  series: [{ name: "Sales", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] }],
  options: {
    chart: { toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: "40%", borderRadius: 4 } },
    colors: ["#1D4ED8"],
    xaxis: { categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"] },
    tooltip: { theme: "dark" },
  },
};

const chartConfigLine = {
  series: [{ name: "Income", data: [12000, 13000, 14000, 15000, 16000] }],
  options: {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth", width: 3, colors: ["#22C55E"] },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    tooltip: { theme: "dark" },
  },
};

export default function StatisticsForShop() {
  useEffect(() => Aos.init({ duration: 1000, once: true }), []);

  const [activeTab, setActiveTab] = useState("visitors");

  return (
    <div className="p-4 lg:p-8">
      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        {["visitors", "income", "rating"].map((item, idx) => (
          <div
            key={idx}
            className={`bg-gray-700 p-4 rounded-xl text-center text-white shadow-lg transition-transform transform ${
              activeTab === item ? "scale-105" : "scale-100"
            } hover:scale-105 cursor-pointer`}
            onClick={() => setActiveTab(item)}
          >
            <i
              className={`fas ${
                item === "visitors"
                  ? "fa-users"
                  : item === "income"
                  ? "fa-dollar-sign"
                  : "fa-star"
              } text-5xl`}
            />
            <p className="mt-2 text-lg">
              {item === "visitors"
                ? "Total Visitors: 22,045"
                : item === "income"
                ? "Total Income: $12,069"
                : "Rating: 4.5"}
            </p>
          </div>
        ))}
      </div>

      <div className="relative bg-gray-800 p-6 rounded-xl shadow-lg">
        {activeTab === "visitors" && <Chart {...chartConfig} />}
        {activeTab === "income" && <Chart {...chartConfigLine} />}
        {activeTab === "rating" && (
          <div className="flex justify-center items-center gap-2">
            {[...Array(4)].map((_, idx) => (
              <i key={idx} className="fas fa-star text-yellow-400 text-3xl" />
            ))}
            <i className="fas fa-star-half-alt text-yellow-400 text-3xl" />
          </div>
        )}
      </div>

      <div className="mt-8">
        <h4 className="text-white text-xl font-semibold mb-4">
          Top Selling Products
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-700 rounded-xl shadow-lg p-4 text-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/80/80"
                  alt="Product"
                  className="rounded-lg"
                />
                <div>
                  <h5 className="font-semibold">Product Name {idx + 1}</h5>
                  <p className="text-sm text-gray-300">
                    Short description goes here...
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p>Total Sold: 1203</p>
                <p>Total Income: $769</p>
                <p>
                  Rating: 4 <i className="fas fa-star text-yellow-400" />
                </p>
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  View in Shop
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
