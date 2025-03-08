import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  DollarSign,
  HeartPulse,
  Calculator,
  Users,
  GraduationCap,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: DollarSign, label: 'Financial Management', path: '/' },
  { icon: HeartPulse, label: 'Benefits', path: '/benefits' },
  { icon: Calculator, label: 'Rate Calculator', path: '/calculator' },
  { icon: Users, label: 'Client Management', path: '/clients' },
  { icon: GraduationCap, label: 'Professional Development', path: '/development' },
  { icon: Calendar, label: 'Project Timeline', path: '/timeline' },
];

export function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={cn(
      "h-screen bg-white dark:bg-lilac-900 border-r border-lilac-100 dark:border-lilac-800",
      "transition-all duration-300 ease-in-out sticky top-0",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <span className="text-2xl font-bold text-lilac-900 dark:text-lilac-100">
            GWH
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-lilac-100 dark:hover:bg-lilac-800 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-lilac-500" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-lilac-500" />
          )}
        </button>
      </div>

      <div className="px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors",
                "hover:bg-lilac-50 dark:hover:bg-lilac-800",
                isActive
                  ? "bg-lilac-100 dark:bg-lilac-800 text-lilac-900 dark:text-lilac-100"
                  : "text-lilac-600 dark:text-lilac-400"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}