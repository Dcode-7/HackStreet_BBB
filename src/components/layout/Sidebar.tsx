import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  BarChart3,
  Home,
  Heart,
  Calculator,
  Users,
  Network,
  Timer,
  Shield,
  ChevronLeft,
  ChevronRight,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SidebarProps = {
  className?: string;
};

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Financial Management", path: "/financial", icon: BarChart3 },
  { name: "Benefits Navigator", path: "/benefits", icon: Heart },
  { name: "Rate Calculator", path: "/rate-calculator", icon: Calculator },
  { name: "Client Management", path: "/clients", icon: Users },
  { name: "Networking Hub", path: "/networking", icon: Network },
  { name: "Productivity Tools", path: "/productivity", icon: Timer },
  { name: "Settings", path: "/settings", icon: Settings },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative flex flex-col border-r bg-sidebar text-sidebar-foreground transition-all",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl font-semibold text-primary"
          >
            Saksham
          </motion.h2>
        )}
        <button
          onClick={toggleSidebar}
          className="ml-auto rounded-full p-1 hover:bg-sidebar-accent"
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav className="mt-6 flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                collapsed && "justify-center"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium">{item.name}</span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 relative">
        <div
          className="flex items-center gap-3 rounded-md bg-accent/50 p-3 cursor-pointer"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          {!collapsed ? (
            <>
              <div className="h-8 w-8 rounded-full bg-primary" />
              <div>
                <p className="text-sm font-medium">Gig Worker</p>
                <p className="text-xs text-muted-foreground">Free Plan</p>
              </div>
            </>
          ) : (
            <div className="mx-auto h-8 w-8 rounded-full bg-primary" />
          )}
        </div>
        {profileOpen && !collapsed && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-4 w-56 rounded-md bg-sidebar shadow-lg"
          >
            <div className="flex flex-col p-3">
              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-md p-2 text-sm hover:bg-sidebar-accent"
              >
                <User className="h-4 w-4" /> View Profile
              </Link>

              <button className="flex items-center gap-3 rounded-md p-2 text-sm text-red-500 hover:bg-sidebar-accent">
                <LogOut className="h-4 w-4" /> Log Out
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
