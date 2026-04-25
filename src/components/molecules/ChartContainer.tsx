'use client';
import React from 'react';
import { Card } from '@/components/atoms/Card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartProps, ChartType } from '@/types';

interface ChartContainerProps extends ChartProps {
  chartType: ChartType;
  title?: string;
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B'];

export const ChartContainer: React.FC<ChartContainerProps> = ({
  data,
  threshold = 0,
  chartType,
  title,
}) => {
  const filteredData = data.filter(
    (item) =>
      item.sales2024 >= threshold ||
      item.sales2023 >= threshold ||
      item.sales2022 >= threshold
  );

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales2024" fill={COLORS[0]} name="2024" />
              <Bar dataKey="sales2023" fill={COLORS[1]} name="2023" />
              <Bar dataKey="sales2022" fill={COLORS[2]} name="2022" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales2024"
                stroke={COLORS[0]}
                strokeWidth={2}
                name="2024"
              />
              <Line
                type="monotone"
                dataKey="sales2023"
                stroke={COLORS[1]}
                strokeWidth={2}
                name="2023"
              />
              <Line
                type="monotone"
                dataKey="sales2022"
                stroke={COLORS[2]}
                strokeWidth={2}
                name="2022"
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'pie':
        const pieData = [
          {
            name: '2024',
            value: filteredData.reduce((sum, item) => sum + item.sales2024, 0),
          },
          {
            name: '2023',
            value: filteredData.reduce((sum, item) => sum + item.sales2023, 0),
          },
          {
            name: '2022',
            value: filteredData.reduce((sum, item) => sum + item.sales2022, 0),
          },
        ];

        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Card title={title || `Sales Data ${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart`}>
      {renderChart()}
    </Card>
  );
};