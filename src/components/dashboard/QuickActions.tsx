
import React from "react";
import { CreditCard, Tv, Phone, BarChart2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleWatch = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };

  return (
    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-5">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-4">
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
          onClick={() => navigate("/buy-bpc")}
        >
          <div className="h-14 w-14 bg-yellow-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Buy PAY ID" className="h-8 w-8 object-contain" style={{clipPath: 'inset(0 75% 50% 0)'}} />
          </div>
          <p className="text-xs font-medium text-center">Buy PAY ID</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleWatch}
        >
          <div className="h-14 w-14 bg-blue-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Watch" className="h-8 w-8 object-contain" style={{clipPath: 'inset(0 50% 50% 25%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Watch</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/airtime")}
        >
          <div className="h-14 w-14 bg-green-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Airtime" className="h-8 w-8 object-contain" style={{clipPath: 'inset(0 25% 50% 50%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Airtime</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/data")}
        >
          <div className="h-14 w-14 bg-gray-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Data" className="h-8 w-8 object-contain" style={{clipPath: 'inset(0 0 50% 75%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Data</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
