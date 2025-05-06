   
import React from "react";
import { Wallet, RefreshCw, Plus, BarChart2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-auto h-16 bg-bluepay-blue fixed bottom-0 w-full flex justify-around items-center px-4">
      <div className="flex flex-col items-center">
        <Wallet size={20} className="text-white" />
        <span className="text-xs text-white">Wallet</span>
      </div>
      <div className="flex flex-col items-center">
        <RefreshCw size={20} className="text-white/60" />
        <span className="text-xs text-white/60">Transactions</span>
      </div>
      <div className="flex flex-col items-center">
        <Button className="rounded-full h-12 w-12 -mt-6 bg-white text-bluepay-blue hover:bg-gray-100">
          <Plus size={24} />
        </Button>
      </div>
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => navigate("/data")}
      >
        <BarChart2 size={20} className="text-white/60" />
        <span className="text-xs text-white/60">Data</span>
      </div>
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => navigate("/profile")}
      >
        <User size={20} className="text-white/60" />
        <span className="text-xs text-white/60">Profile</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
