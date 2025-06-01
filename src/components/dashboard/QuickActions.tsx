
import React from "react";
import { MessageCircle, CreditCard, PlayCircle, Phone, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleWatch = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };

  return (
    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-5">Quick Actions</h3>
      <div className="grid grid-cols-5 gap-4">
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/platform")}
        >
          <div className="h-12 w-12 bg-blue-100 rounded-full mb-2 flex items-center justify-center shadow-sm">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-xs font-medium text-center">Platform</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
          onClick={() => navigate("/buy-bpc")}
        >
          <div className="h-12 w-12 bg-green-100 rounded-full mb-2 flex items-center justify-center shadow-sm">
            <CreditCard className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-xs font-medium text-center">Buy BPC</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleWatch}
        >
          <div className="h-12 w-12 bg-purple-100 rounded-full mb-2 flex items-center justify-center shadow-sm">
            <PlayCircle className="h-6 w-6 text-purple-600" />
          </div>
          <p className="text-xs font-medium text-center">Watch</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/airtime")}
        >
          <div className="h-12 w-12 bg-orange-100 rounded-full mb-2 flex items-center justify-center shadow-sm">
            <Phone className="h-6 w-6 text-orange-600" />
          </div>
          <p className="text-xs font-medium text-center">Airtime</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/earn-more")}
        >
          <div className="h-12 w-12 bg-yellow-100 rounded-full mb-2 flex items-center justify-center shadow-sm">
            <TrendingUp className="h-6 w-6 text-yellow-600" />
          </div>
          <p className="text-xs font-medium text-center">Earn More</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
