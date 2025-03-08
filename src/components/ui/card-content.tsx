
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardContentProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}

export function CardContent({
  title,
  icon,
  children,
  className,
  action,
}: CardContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="hover-scale"
    >
      <Card className={cn("overflow-hidden", className)}>
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary">{icon}</div>}
            <h3 className="font-semibold">{title}</h3>
          </div>
          {action && <div>{action}</div>}
        </div>
        <div className="p-4">{children}</div>
      </Card>
    </motion.div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="hover-scale"
    >
      <Card
        className={cn(
          "flex flex-col justify-between p-6 h-full",
          className
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">{title}</span>
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          {trend && (
            <div
              className={cn(
                "text-sm flex items-center gap-1 mt-1",
                trend.positive ? "text-green-500" : "text-red-500"
              )}
            >
              {trend.positive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

interface TabContentProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export function TabContent({ tabs, className }: TabContentProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="border-b">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-colors relative",
                activeTab === index
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {activeTab === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  layoutId="activeTab"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </Card>
  );
}
