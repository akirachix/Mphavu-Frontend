import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [agents, setAgents] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [users, setUsers] = useState([]);
  const [videoRecords, setVideoRecords] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentResponse = await axios.get('http://127.0.0.1:8000/api/agents/');
        setAgents(agentResponse.data);

        const coachResponse = await axios.get('http://127.0.0.1:8000/api/coaches/');
        setCoaches(coachResponse.data);

        const userResponse = await axios.get('http://127.0.0.1:8000/api/users/');
        setUsers(userResponse.data);

        const videoRecordsResponse = await axios.get('http://127.0.0.1:8000/api/video_records/');
        setVideoRecords(videoRecordsResponse.data);

        const playersResponse = await axios.get('http://127.0.0.1:8000/api/teams/1/players/');
        setPlayers(playersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Spot Us Dashboard</h1>
      <div className="metrics-container">
        <div className="metrics-item">
          <h2>Agents</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={agents}>
              <XAxis dataKey="week" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="metrics-item">
          <h2>Coaches</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={coaches}>
              <XAxis dataKey="week" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="metrics-item">
          <h2>Users</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={users}>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="metrics-item">
          <h2>Video Uploads</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={videoRecords}>
              <XAxis dataKey="week" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="metrics-item">
          <h2>Players</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={players}>
              <XAxis dataKey="week" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;