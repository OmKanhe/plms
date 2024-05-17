import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Table } from "antd";

function Dashboard() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setDataSource(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "Sr.No",
      dataIndex: "id",
      width : '150',
      fixed:'left'
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "title",
      className: 'font-bold w-[200px]',
      fixed:'left'
    },
    {
      key: "3",
      title: "Age",
      dataIndex: "userId",
      className: 'w-[80px]',
      sorter:(record1, record2)=> {
        return record1.userId > record2.userId
      }, 
    },   
    {
      key: "4",
      title: "Gender",
      dataIndex: "completed",
      render: (completed) => {
        const statusStyle = {
          backgroundColor: completed ? "#67C6E3" : "#FF71CD",
          color: "white" ,
          padding: '10px',
          
        }
        return <p style={statusStyle}>{completed ? "Male" : "Female"}</p>;
      },
      filters:[
        {text:'Male', value:true},
        {text:'Female', value:false}
      ], 
      onFilter:(value, record) => {
        return record.completed === value
      }
    },
    {
      key: "2",
      title: "Test Name",
      dataIndex: "title",
      className: 'font-bold w-[900px]'
    }, 
    {
      key: "4",
      title: "Test Status",
      dataIndex: "completed",
      render: (completed) => {
        const statusStyle = {
          backgroundColor: completed ? "#0D9276" : "#FFAF45",
          color: "white" ,
          padding: '10px',
          
        }
        return <p style={statusStyle}>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters:[
        {text:'Complete', value:true},
        {text:'In Progress', value:false}
      ], 
      onFilter:(value, record) => {
        return record.completed === value
      }
    },
    {
      key: "4",
      title: "Report Status",
      dataIndex: "completed",
      render: (completed) => {
        const statusStyle = {
          backgroundColor: completed ? "#0D9276" : "#FFAF45",
          color: "white" ,
          padding: '10px',
          
        }
        return <p style={statusStyle}>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters:[
        {text:'Complete', value:true},
        {text:'In Progress', value:false}
      ], 
      onFilter:(value, record) => {
        return record.completed === value
      }
    },
    {
      key: "4",
      title: "Payment Status",
      dataIndex: "completed",
      render: (completed) => {
        const statusStyle = {
          backgroundColor: completed ? "#0D9276" : "#FFAF45",
          color: "white" ,
          padding: '10px',
          
        }
        return <p style={statusStyle}>{completed ? "Complete" : "Incomplete"}</p>;
      },
      filters:[
        {text:'Complete', value:true},
        {text:'In Progress', value:false}
      ], 
      onFilter:(value, record) => {
        return record.completed === value
      }
    },
    
    
  ];

  return (
    <>
    <div className="bg-white mb-5">
      <Navbar />
      <div className="flex justify-center items-center flex-col h-screen mt-[120px] bg-white">
        <div className="mt-12"> 
          <p className="text-3xl font-bold align  text-[#007F73] sticky">Patient Information Dashboard</p>
        </div>
        <div className="mt-12">
      <Table
      bordered
      virtual scroll={{ x: 2000, y: 1000 }}
        style={{maxWidth: 1400, marginBottom:120}}
        loading={loading}
        columns={columns}
        dataSource={dataSource}
      ></Table>
      </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
