
import React from "react";
import { motion } from "framer-motion";
import { CardContent, StatCard, TabContent } from "@/components/ui/card-content";
import {
  BarChart3,
  DollarSign,
  Calendar,
  FileText,
  Users,
  ArrowRight,
  Plus,
  TrendingUp,
  CreditCard,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Sample data for charts
const monthlyData = [
  { name: "Jan", income: 3200, expenses: 1800 },
  { name: "Feb", income: 3800, expenses: 2100 },
  { name: "Mar", income: 4100, expenses: 1950 },
  { name: "Apr", income: 4500, expenses: 2300 },
  { name: "May", income: 4300, expenses: 2100 },
  { name: "Jun", income: 5200, expenses: 2400 }
];

const projectData = [
  { name: "Design", value: 35 },
  { name: "Development", value: 40 },
  { name: "Marketing", value: 15 },
  { name: "Consulting", value: 10 }
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"];

const Index = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your gig work.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="This Month Earnings"
          value="$4,256.78"
          icon={<DollarSign className="h-5 w-5" />}
          trend={{ value: 12.5, positive: true }}
        />
        <StatCard
          title="Pending Invoices"
          value="$1,876.22"
          icon={<FileText className="h-5 w-5" />}
          trend={{ value: 2.4, positive: false }}
        />
        <StatCard
          title="Active Projects"
          value="6"
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          title="Upcoming Deadlines"
          value="3"
          icon={<Calendar className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CardContent
            title="Revenue Overview"
            icon={<BarChart3 className="h-5 w-5" />}
            action={
              <Button variant="outline" size="sm">
                View All
              </Button>
            }
            className="h-[350px]"
          >
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, undefined]}
                    contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                  />
                  <Legend />
                  <Bar dataKey="income" name="Income" fill="#8884d8" />
                  <Bar dataKey="expenses" name="Expenses" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>

        <CardContent
          title="Project Distribution"
          icon={<Plus className="h-5 w-5" />}
          className="h-[350px]"
        >
          <div className="h-[260px] flex flex-col justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, undefined]}
                  contentStyle={{ backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TabContent
          tabs={[
            {
              label: "Upcoming Tasks",
              content: (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">
                          Project Milestone {i}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Due in {i} day{i > 1 ? "s" : ""}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              label: "Recent Activity",
              content: (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-md border p-3"
                    >
                      <div>
                        <div className="font-medium">
                          Invoice #{1000 + i} Paid
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {i} hour{i > 1 ? "s" : ""} ago
                        </div>
                      </div>
                      <div className="text-green-500 font-medium">
                        +${i * 500}
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
          ]}
        />

        <TabContent
          tabs={[
            {
              label: "Client Activity",
              content: (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-md border p-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Client {i}</div>
                        <div className="text-sm text-muted-foreground">
                          Viewed proposal {i} hour{i > 1 ? "s" : ""} ago
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              label: "Messages",
              content: (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">No new messages</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When clients message you, they'll appear here
                  </p>
                  <Button className="mt-4">Send a Message</Button>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
