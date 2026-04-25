'use client';
import React, { useState } from 'react';
import { ChartContainer } from '@/components/molecules/ChartContainer';
import { FilterInput } from '@/components/molecules/FilterInput';
import { Button } from '@/components/atoms/Button';
import { salesData } from '@/data/salesData';
import { ChartType } from '@/types';

export const SalesChart: React.FC = () => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [threshold, setThreshold] = useState<number>(0);

  const chartTypes: ChartType[] = ['bar', 'line', 'pie'];

  const handleThresholdChange = (value: number) => {
    setThreshold(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2">
          {chartTypes.map((type) => (
            <Button
              key={type}
              onClick={() => setChartType(type)}
              variant={chartType === type ? 'primary' : 'outline'}
              active={chartType === type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Chart
            </Button>
          ))}
        </div>
        <FilterInput
          threshold={threshold}
          onThresholdChange={handleThresholdChange}
        />
      </div>
      <ChartContainer
        data={salesData}
        chartType={chartType}
        threshold={threshold}
        title={`Sales Comparison (2022-2024)`}
      />
    </div>
  );
};