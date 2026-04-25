"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

import { salesData } from "../../data/salesData";
import Button from "../atoms/Button";
import ChartCard from "../molecules/ChartCard";

export default function SalesChart() {
  const [type, setType] = useState("bar");
  const [threshold, setThreshold] = useState(0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filtered = salesData.filter(
    (item) => Number(item.sales) > threshold
  );

  return (
    <ChartCard>
      <h2 className="text-xl mb-4">Sales Chart</h2>

      <input
        type="number"
        placeholder="Filter sales > ..."
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="border p-2 mb-4"
      />

      <div className="mb-4">
        <Button label="Bar" onClick={() => setType("bar")} />
        <Button label="Line" onClick={() => setType("line")} />
      </div>

      {type === "bar" && (
        <BarChart width={500} height={300} data={filtered}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="sales"
            fill="#3b82f6"
            isAnimationActive={false}
          />
        </BarChart>
      )}

      {type === "line" && (
        <LineChart width={500} height={300} data={filtered}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#10b981"
            isAnimationActive={false}
          />
        </LineChart>
      )}
    </ChartCard>
  );
}