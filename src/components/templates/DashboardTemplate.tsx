import React from 'react';
import { SalesDashboard } from '@/components/organisms/SalesDashboard';
import { SalesChart } from '@/components/organisms/SalesChart';

export const DashboardTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Sales Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Comprehensive overview of sales performance across 2022-2024
          </p>
        </header>

        <SalesDashboard />
        <SalesChart />

        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Sales Analytics Dashboard. Data is for demonstration purposes.</p>
        </footer>
      </div>
    </div>
  );
};