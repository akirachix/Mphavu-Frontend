"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaArrowLeft } from 'react-icons/fa';

const data = [
  {
    day: '2024-08-01',
    users: 10,
  },
  {
    day: '2024-08-01',
    users: 35,
  },
  {
    day: '2024-08-01',
    users: 5,
  },
  {
    day: '2024-08-01',
    users: 40,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '300px',
          height: '100vh',
          backgroundColor: '#5AA2D6',
          padding: '20px',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: '24px' }}>Spot Us</h1>
        <div>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>Dashboard</p>
          <p style={{ fontSize: '18px', color: '#4B60A2' }}>Product Metrics</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaArrowLeft style={{ marginRight: '10px' }} />
          <p>This shows the number of active users</p>
        </div>
        <div style={{ marginTop: '40px' }}>
          {/* Adjusted width and height */}
          <ResponsiveContainer width="80%" height={700}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Day", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: 'No of users', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
