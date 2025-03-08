
import React from "react";
import { motion } from "framer-motion";
import { CardContent, TabContent } from "@/components/ui/card-content";
import {
  BarChart3,
  DollarSign,
  PieChart as PieChartIcon,
  ArrowUpDown,
  Download,
  Upload,
  Filter,
  Plus,
  TrendingUp,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";

// Financial data for charts
const monthlyFinanceData = [
  { month: "Jan", income: 3200, expenses: 1800, profit: 1400 },
  { month: "Feb", income: 3800, expenses: 2100, profit: 1700 },
  { month: "Mar", income: 4100, expenses: 1950, profit: 2150 },
  { month: "Apr", income: 4500, expenses: 2300, profit: 2200 },
  { month: "May", income: 4300, expenses: 2100, profit: 2200 },
  { month: "Jun", income: 5200, expenses: 2400, profit: 2800 }
];

const expenseCategories = [
  { name: "Software", value: 1250 },
  { name: "Marketing", value: 850 },
  { name: "Office", value: 650 },
  { name: "Travel", value: 450 },
  { name: "Other", value: 250 }
];

const incomeTrend = [
  { month: "Jan", amount: 3200 },
  { month: "Feb", amount: 3800 },
  { month: "Mar", amount: 4100 },
  { month: "Apr", amount: 4500 },
  { month: "May", amount: 4300 },
  { month: "Jun", amount: 5200 }
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"];

const Financial = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Financial Management</h1>
        <p className="text-muted-foreground">
          Track your income, expenses, and manage your taxes.
        </p>
      </motion.div>

      <div className="flex items-center justify-between">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList>
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CardContent
          title="Total Income"
          icon={<TrendingUp className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">$18,245.50</div>
          <div className="mt-1 text-sm text-green-500">+12.5% from last month</div>
        </CardContent>

        <CardContent
          title="Total Expenses"
          icon={<ArrowUpDown className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">$5,386.27</div>
          <div className="mt-1 text-sm text-red-500">+8.2% from last month</div>
        </CardContent>

        <CardContent
          title="Net Profit"
          icon={<DollarSign className="h-5 w-5" />}
        >
          <div className="mt-2 text-3xl font-bold">$12,859.23</div>
          <div className="mt-1 text-sm text-green-500">+14.3% from last month</div>
        </CardContent>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CardContent
            title="Income & Expenses"
            icon={<BarChart3 className="h-5 w-5" />}
            action={
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            }
            className="h-[400px]"
          >
            <div className="h-[310px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyFinanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, undefined]}
                    contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  />
                  <Legend />
                  <Bar dataKey="income" name="Income" fill="#8884d8" />
                  <Bar dataKey="expenses" name="Expenses" fill="#82ca9d" />
                  <Bar dataKey="profit" name="Profit" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>

        <CardContent
          title="Expense Breakdown"
          icon={<PieChartIcon className="h-5 w-5" />}
          className="h-[400px]"
        >
          <div className="h-[310px] flex flex-col justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${value}`, undefined]}
                  contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>

      <CardContent
        title="Income Trend"
        icon={<TrendingUp className="h-5 w-5" />}
        className="h-[300px]"
      >
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={incomeTrend}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Income"]}
                contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
              />
              <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="url(#colorIncome)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>

      <CardContent
        title="Tax Estimation"
        icon={<Calculator className="h-5 w-5" />}
        action={
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        }
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md border p-4">
            <div className="text-sm text-muted-foreground">Estimated Tax Due</div>
            <div className="mt-1 text-2xl font-bold">$3,658.45</div>
            <div className="mt-2 text-xs text-muted-foreground">Based on current income</div>
          </div>

          <div className="rounded-md border p-4">
            <div className="text-sm text-muted-foreground">Tax Deductions</div>
            <div className="mt-1 text-2xl font-bold">$1,874.22</div>
            <div className="mt-2 text-xs text-muted-foreground">Potential savings found</div>
          </div>

          <div className="rounded-md border p-4">
            <div className="text-sm text-muted-foreground">Next Quarterly Due</div>
            <div className="mt-1 text-2xl font-bold">Apr 15, 2023</div>
            <div className="mt-2 text-xs text-muted-foreground">45 days remaining</div>
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full">Run Detailed Tax Analysis</Button>
        </div>
      </CardContent>

      <CardContent
        title="Recent Transactions"
        icon={<ArrowUpDown className="h-5 w-5" />}
        action={
          <Button variant="outline" size="sm">
            View All
          </Button>
        }
      >
        <div className="space-y-3">
          {[
            {
              type: "income",
              name: "Website Design Project",
              amount: 1200,
              date: "Mar 15, 2023",
            },
            {
              type: "expense",
              name: "Software Subscription",
              amount: 49.99,
              date: "Mar 12, 2023",
            },
            {
              type: "income",
              name: "Logo Design",
              amount: 350,
              date: "Mar 10, 2023",
            },
            {
              type: "expense",
              name: "Office Supplies",
              amount: 85.75,
              date: "Mar 8, 2023",
            },
            {
              type: "income",
              name: "Consulting Fee",
              amount: 800,
              date: "Mar 5, 2023",
            },
          ].map((transaction, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md border p-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full p-2 ${
                    transaction.type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? (
                    <Upload className="h-4 w-4" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{transaction.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.date}
                  </div>
                </div>
              </div>
              <div
                className={`font-medium ${
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}$
                {transaction.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default Financial;
