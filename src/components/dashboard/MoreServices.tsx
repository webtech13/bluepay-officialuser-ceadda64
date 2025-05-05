
import React from "react";
import { BarChart2, HelpCircle, RefreshCw, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <h3 className="font-medium mb-4">More Services</h3>
      <div className="grid grid-cols-4 gap-6">
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/data")}
        >
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <BarChart2 className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Data</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <HelpCircle className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">About</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/support")}
        >
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <RefreshCw className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Support</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={() => navigate("/profile")}
        >
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <User className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
