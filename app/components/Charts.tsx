"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  { name: "Jan", projects: 20 },
  { name: "Feb", projects: 25 },
  { name: "Mar", projects: 30 },
  { name: "Apr", projects: 35 },
];

const pieData = [
  { name: "On Track", value: 24 },
  { name: "At Risk", value: 8 },
  { name: "Delayed", value: 10 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function Charts() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Line Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <h3 className="mb-4 font-medium">Project Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="projects" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <h3 className="mb-4 font-medium">Risk Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}