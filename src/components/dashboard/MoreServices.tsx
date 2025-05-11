
import React from "react";
import { BarChart2, HelpCircle, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-5">More Services</h3>
      <div className="grid grid-cols-4 gap-6">
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/data")}
        >
          <div className="h-14 w-14 bg-cyan-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
            <BarChart2 className="h-7 w-7 text-cyan-600" />
          </div>
          <p className="text-xs font-medium">Data</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/faq")}
        >
          <div className="h-14 w-14 bg-amber-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
            <HelpCircle className="h-7 w-7 text-amber-600" />
          </div>
          <p className="text-xs font-medium">FAQ</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/support")}
        >
          <div className="h-14 w-14 bg-indigo-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
            <MessageSquare className="h-7 w-7 text-indigo-600" />
          </div>
          <p className="text-xs font-medium">Support</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
          onClick={() => navigate("/profile")}
        >
          <div className="h-14 w-14 bg-rose-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
            <User className="h-7 w-7 text-rose-600" />
          </div>
          <p className="text-xs font-medium">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
