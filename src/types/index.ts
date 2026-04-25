export interface SalesData {
  month: string;
  sales2024: number;
  sales2023: number;
  sales2022: number;
}

export interface ChartProps {
  data: SalesData[];
  threshold?: number;
}

export type ChartType = 'bar' | 'line' | 'pie';