'use client';
import React from 'react';
import { Input } from '@/components/atoms/Input';

interface FilterInputProps {
  threshold: number;
  onThresholdChange: (value: number) => void;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  threshold,
  onThresholdChange,
}) => {
  return (
    <Input
      label="Sales Threshold ($)"
      type="number"
      value={threshold}
      onChange={(e) => onThresholdChange(Number(e.target.value))}
      placeholder="Enter minimum sales value"
      className="w-full max-w-xs"
    />
  );
};