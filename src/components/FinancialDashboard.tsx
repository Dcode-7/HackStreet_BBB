import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react';

// Sample data - In a real app, this would come from your backend
const monthlyIncome = [
  { month: 'Jan', amount: 4200 },
  { month: 'Feb', amount: 4500 },
  { month: 'Mar', amount: 4100 },
  { month: 'Apr', amount: 4800 },
  { month: 'May', amount: 5200 },
  { month: 'Jun', amount: 4900 },
];

const expenseBreakdown = [
  { name: 'Equipment', value: 1200 },
  { name: 'Software', value: 800 },
  { name: 'Marketing', value: 600 },
  { name: 'Insurance', value: 400 },
];

const projectRevenue = [
  { project: 'Web Dev', revenue: 2500, hours: 45 },
  { project: 'Design', revenue: 1800, hours: 30 },
  { project: 'Consulting', revenue: 3000, hours: 50 },
  { project: 'Content', revenue: 1200, hours: 25 },
];

const COLORS = ['#7e12fb', '#b483ff', '#d1b4ff', '#e6d6ff'];

export function FinancialDashboard() {
  const totalIncome = monthlyIncome.reduce((sum, month) => sum + month.amount, 0);
  const averageIncome = totalIncome / monthlyIncome.length;
  const lastMonthIncome = monthlyIncome[monthlyIncome.length - 1].amount;
  const previousMonthIncome = monthlyIncome[monthlyIncome.length - 2].amount;
  const monthlyGrowth = ((lastMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Income</h3>
            <DollarSign className="h-5 w-5 text-primary-500" />
          </div>
          <p className="text-2xl font-bold">${totalIncome.toLocaleString()}</p>
          <p className="text-sm text-primary-600 dark:text-primary-400">Year to date</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Monthly Average</h3>
            <Activity className="h-5 w-5 text-primary-500" />
          </div>
          <p className="text-2xl font-bold">${averageIncome.toFixed(2)}</p>
          <p className="text-sm text-primary-600 dark:text-primary-400">Per month</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Monthly Growth</h3>
            {monthlyGrowth >= 0 ? (
              <TrendingUp className="h-5 w-5 text-green-500" />
            ) : (
              <TrendingDown className="h-5 w-5 text-red-500" />
            )}
          </div>
          <p className="text-2xl font-bold">
            <span className={monthlyGrowth >= 0 ? 'text-green-500' : 'text-red-500'}>
              {monthlyGrowth >= 0 ? '+' : ''}{monthlyGrowth.toFixed(1)}%
            </span>
          </p>
          <p className="text-sm text-primary-600 dark:text-primary-400">From last month</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Latest Income</h3>
            <DollarSign className="h-5 w-5 text-primary-500" />
          </div>
          <p className="text-2xl font-bold">${lastMonthIncome.toLocaleString()}</p>
          <p className="text-sm text-primary-600 dark:text-primary-400">This month</p>
        </div>
      </div>

      {/* Income Trend Chart */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-6">Income Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyIncome}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7e12fb" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#7e12fb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#7e12fb"
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expense Breakdown */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-6">Expense Breakdown</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Revenue */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-6">Project Revenue</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="project" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#7e12fb" />
                <Bar dataKey="hours" fill="#b483ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}