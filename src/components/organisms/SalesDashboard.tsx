'use client';
import React from 'react';
import { StatCard } from '@/components/molecules/StatCard';
import { salesData } from '@/data/salesData';

export const SalesDashboard: React.FC = () => {
  const totalSales2024 = salesData.reduce((sum, item) => sum + item.sales2024, 0);
  const totalSales2023 = salesData.reduce((sum, item) => sum + item.sales2023, 0);
  const totalSales2022 = salesData.reduce((sum, item) => sum + item.sales2022, 0);

  const avgMonthly2024 = totalSales2024 / 12;
  const growthRate = ((totalSales2024 - totalSales2023) / totalSales2023) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Sales 2024"
        value={totalSales2024}
        change={growthRate}
      />
      <StatCard
        title="Total Sales 2023"
        value={totalSales2023}
      />
      <StatCard
        title="Total Sales 2022"
        value={totalSales2022}
      />
      <StatCard
        title="Avg Monthly (2024)"
        value={Math.round(avgMonthly2024)}
        change={growthRate / 12}
      />
    </div>
  );
};