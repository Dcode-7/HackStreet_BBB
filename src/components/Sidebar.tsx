import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  DollarSign,
  HeartPulse,
  Calculator,
  Users,
  GraduationCap,
  Calendar,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: DollarSign, label: 'Financial Management', path: '/finance' },
  { icon: HeartPulse, label: 'Benefits', path: '/benefits' },
  { icon: Calculator, label: 'Rate Calculator', path: '/calculator' },
  { icon: Users, label: 'Client Management', path: '/clients' },
  { icon: GraduationCap, label: 'Professional Development', path: '/development' },
  { icon: Calendar, label: 'Project Timeline', path: '/timeline' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-primary-900 rounded-lg shadow-md"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-500" />
        ) : (
          <Menu className="h-6 w-6 text-primary-500" />
        )}
      </button>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'fixed left-0 top-0 h-full w-72 bg-white dark:bg-primary-900',
          'border-r border-primary-100 dark:border-primary-800',
          'shadow-xl z-40 flex flex-col'
        )}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary-900 dark:text-primary-100">
            Gig Worker Hub
          </h1>
        </div>

        <nav className="flex-1 px-4">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-lg mb-2',
                'text-primary-900 dark:text-primary-100',
                'hover:bg-primary-50 dark:hover:bg-primary-800 transition-colors'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}