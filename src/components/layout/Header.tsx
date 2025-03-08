
import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex h-16 items-center justify-between border-b bg-background/50 backdrop-blur-md px-6",
        className
      )}
    >
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search resources, clients, projects..."
          className="h-9 w-full rounded-md border bg-background pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-md p-1 hover:bg-accent">
          <Bell className="h-5 w-5" />
          <span className="absolute right-0.5 top-0.5 flex h-2 w-2 rounded-full bg-primary"></span>
        </button>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
