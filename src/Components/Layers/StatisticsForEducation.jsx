import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './StatisticsForEducation.css';

export default function StatisticsForEducation() {
  const [educationData, setEducationData] = useState({
    options: {
      chart: {
        id: "education-chart",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      xaxis: {
        categories: ["Math", "Science", "English", "History", "Geography"],
      },
      colors: ["#00E396"],
      title: {
        text: "Student Performance by Subject",
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
        },
      },
    },
    series: [{
      name: "Scores",
      data: [80, 70, 85, 90, 88],
    }],
  });

  const [enrollmentData, setEnrollmentData] = useState({
    options: {
      chart: {
        id: "enrollment-chart",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      labels: ["2020", "2021", "2022", "2023", "2024"],
      colors: ["#FF4560"],
      title: {
        text: "Student Enrollment Over Time",
        align: 'center',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
        },
      },
    },
    series: [{
      name: "Enrollment",
      data: [200, 250, 300, 350, 400],
    }],
  });

  return (
    <div className="education-statistics-container">
      <h2 className="page-title">Education Statistics</h2>

      {/* Performance by Subject */}
      <div className="chart-container">
        <h3>Student Performance by Subject</h3>
        <Chart options={educationData.options} series={educationData.series} type="bar" height={350} />
      </div>

      {/* Enrollment Over Time */}
      <div className="chart-container">
        <h3>Student Enrollment Over Time</h3>
        <Chart options={enrollmentData.options} series={enrollmentData.series} type="line" height={350} />
      </div>
    </div>
  );
}
