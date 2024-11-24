import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import "../Main.css"

export default function LandingPageStatistics() {
  const [visitorData, setVisitorData] = useState({
    options: {
      chart: {
        id: "visitor-chart",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      colors: ["#008FFB"],
      title: {
        text: "Visitors per Week",
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    series: [{
      name: "Visitors",
      data: [100, 200, 150, 300, 250, 400, 500],
    }],
  });

  const [ratingData, setRatingData] = useState({
    options: {
      chart: {
        id: "rating-chart",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: {
        categories: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
      },
      colors: ["#00E396"],
      title: {
        text: "Customer Ratings",
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    series: [{
      name: "Ratings",
      data: [20, 30, 50, 100, 200],
    }],
  });

  const [entryData, setEntryData] = useState({
    options: {
      chart: {
        id: "entry-chart",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: {
        categories: ["Landing Page", "Product Page", "Checkout"],
      },
      colors: ["#FF4560"],
      title: {
        text: "Page Entries",
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    series: [{
      name: "Entries",
      data: [400, 300, 150],
    }],
  });

  return (
    <div className="landing-statistics-container">
      <h2 className="page-title">Landing Page Statistics</h2>

      {/* Visitor Statistics */}
      <div className="chart-container">
        <h3>Weekly Visitors</h3>
        <Chart options={visitorData.options} series={visitorData.series} type="line" height={350} />
      </div>

      {/* Customer Rating Statistics */}
      <div className="chart-container">
        <h3>Customer Ratings</h3>
        <Chart options={ratingData.options} series={ratingData.series} type="bar" height={350} />
      </div>

      {/* Page Entry Statistics */}
      <div className="chart-container">
        <h3>Page Entries</h3>
        <Chart options={entryData.options} series={entryData.series} type="bar" height={350} />
      </div>
    </div>
  );
}
