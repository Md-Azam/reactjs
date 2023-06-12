import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import AuthUser from "./AuthUser";
import Chart from "react-apexcharts";

const Home = () => {
  const { http } = AuthUser();
  const { user } = AuthUser();
  const[mdata,setMdata] =([]);
  const[mVal,setMval] =([]);

  const [monthlyData, setMonthlyData] = useState({});
const incomming = [];
const inData =[];
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await http.get("/api/v1/payment/get-GraphDataByMonthName");
        console.log(response);
        console.log(response.data);
        console.log(response.data.JANUARY);
        setMonthlyData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Monthly Data Bar Graph</h1>
      <Chart
        type="bar"
        width={1380}
        height={700}
        series={[
          {
    
            data: [monthlyData.JANUARY, monthlyData.FEBRUARY, monthlyData.MARCH,monthlyData.APRIL,monthlyData.MAY, 
                monthlyData.JUNE, monthlyData.JULY, monthlyData.AUGUST, monthlyData.SEPTEMBER, monthlyData.OCTOBER, monthlyData.NOVEMBER, monthlyData.DECEMBER ],
          },
        ]}
        options={{
          title: {
            text: "Transaction Chart",
            style: { fontSize: 30 },
          },
          subtitle:{
            text:"This is Bar Chart",
            style:{fontSize:14}
          },
          colors: ["#f90000"],
          theme: { mode: "light" },
          xaxis: {
            categories: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            title: {
              text: "Bar Graph Payment",
              style: { color: "#f90087", fontSize: 20 }
            }
          },
        yaxis:{
            labels:{
                formatter:(val)=>{return  `$${val}`},
                style:{ fontSize:'13',colors:["green"]}
            },
            title:{
                text:"Reupees in Million",style:{
                    fontSize:'16',color:"#f90000"
                }
            }
        },
        legend:{
            show:true,
            position:"left",   
        },
        //formatter ,data lables
        dataLabels:{
            formatter:(val)=> {
            return `$${val}`
            },
            style:{
                colors:['#f4f4f4'],fontSize:13
            }
        }
        }}
      >

      </Chart>
    </div>
  );
};

export default Home;
