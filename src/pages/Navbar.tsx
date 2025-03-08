import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "../components/layout/ThemeToggle";
import {
  Home as HomeIcon,
  Users,
  BarChart3,
  Calculator,
  Network,
  Timer,
  Settings,
  Heart,
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Financial", path: "/financial", icon: BarChart3 },
  { name: "Benefits", path: "/benefits", icon: Heart },
  { name: "Calculator", path: "/rate-calculator", icon: Calculator },
  { name: "Clients", path: "/clients", icon: Users },
  { name: "Network", path: "/networking", icon: Network },
  { name: "Productivity", path: "/productivity", icon: Timer },
  { name: "Settings", path: "/settings", icon: Settings },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-background text-foreground shadow-lg fixed w-full z-50 top-0 border-b border-border transition-colors">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-lg font-semibold text-primary">Saksham</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 text-muted-foreground hover:text-primary transition-all duration-300 ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}

          {/* Signup/Login Button */}
          <Link to="/login">
            <motion.button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Signup / Login
            </motion.button>
          </Link>
          {/* Dark Mode Button */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 bg-background border-t border-border py-2 shadow-md">
          <div className="flex flex-col space-y-2 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  } hover:bg-primary hover:text-primary-foreground`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}

            {/* Signup/Login Button (Mobile) */}
            <Link to="/login">
              <motion.button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Signup / Login
              </motion.button>
            </Link>
            {/* Dark Mode Button (Mobile) */}
            <div className="flex justify-center mt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
