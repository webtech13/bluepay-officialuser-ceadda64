
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import SetupPin from "./pages/SetupPin";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Withdraw from "./pages/Withdraw";
import WithdrawProcessing from "./pages/WithdrawProcessing";
import BuyBPC from "./pages/BuyBPC";
import BuyBPCProcessing from "./pages/BuyBPCProcessing";
import BuyBPCTransfer from "./pages/BuyBPCTransfer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setup-pin" element={<SetupPin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pin" element={<SetupPin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/withdraw/processing" element={<WithdrawProcessing />} />
          <Route path="/buy-bpc" element={<BuyBPC />} />
          <Route path="/buy-bpc/processing" element={<BuyBPCProcessing />} />
          <Route path="/buy-bpc/transfer" element={<BuyBPCTransfer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
