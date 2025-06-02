
import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Play, Smartphone, Wifi } from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleWatch = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };

  const quickActions = [
    {
      id: 'buy-bpc',
      title: 'Buy PAY ID',
      icon: ShoppingCart,
      bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      iconColor: 'text-white',
      onClick: () => navigate("/buy-bpc")
    },
    {
      id: 'watch',
      title: 'Watch',
      icon: Play,
      bgColor: 'bg-gradient-to-br from-blue-500 to-purple-600',
      iconColor: 'text-white',
      onClick: handleWatch
    },
    {
      id: 'airtime',
      title: 'Airtime',
      icon: Smartphone,
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-600',
      iconColor: 'text-white',
      onClick: () => navigate("/airtime")
    },
    {
      id: 'data',
      title: 'Data',
      icon: Wifi,
      bgColor: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      iconColor: 'text-white',
      onClick: () => navigate("/data")
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
      <h3 className="font-bold text-xl mb-6 text-gray-800">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <div 
              key={action.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={action.onClick}
            >
              <div className={`h-16 w-16 ${action.bgColor} rounded-2xl mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ease-out`}>
                <IconComponent className={`h-8 w-8 ${action.iconColor}`} />
              </div>
              <p className="text-sm font-semibold text-center text-gray-700 group-hover:text-gray-900 transition-colors">{action.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
