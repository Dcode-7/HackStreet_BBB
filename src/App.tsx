import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Financial from "./pages/Financial";
import Benefits from "./pages/Benefits";
import RateCalculator from "./pages/RateCalculator";
import Clients from "./pages/Clients";
import Networking from "./pages/Networking";
import { ThemeProvider } from "./context/ThemeContext";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import Settings from "./pages/Settings";
import ProductivityTools from "./pages/ProductivityTools";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 overflow-y-auto p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/rate-calculator" element={<RateCalculator />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/networking" element={<Networking />} />
                  <Route path="/productivity" element={<ProductivityTools />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
