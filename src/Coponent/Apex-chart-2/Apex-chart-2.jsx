import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [series] = useState([
    {
      data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80,100],
      color: '#ff0000'
    },
  ]);

  const [options] = useState({
    chart: {
      type: 'line',
      height:'100%',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      },
      
    },
    stroke: {
        curve: 'stepline',
        background: '#ff0000',
        width: 3,
    },
    dataLabels: {
      enabled: false
    },
    markers: {
        size: 4,
        colors: ['#ffffff'],
        strokeWidth: 2,
        strokeColors: ['#ff0000'], 
      },
      tooltip: {
        theme: 'dark',
        colors: ['#FF0000'],
        strokeColors: '#fff', 
      x: {
        format: 'dd MMM yyyy'
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: true
      }
    },
    grid: {
      show: true,
      

    },
    title: {
      text: '',
      align: 'left'
    }
  });

  return (
    <div className="dashed-border">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" height={'70%'} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
