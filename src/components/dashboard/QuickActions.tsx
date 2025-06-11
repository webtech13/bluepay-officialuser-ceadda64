
import React from "react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleWatch = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };

  const quickActions = [
    {
      id: 'buy-bpc',
      title: 'Buy BPC',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      onClick: () => navigate("/buy-bpc")
    },
    {
      id: 'watch',
      title: 'Watch',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      onClick: handleWatch
    },
    {
      id: 'airtime',
      title: 'Airtime',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      onClick: () => navigate("/airtime")
    },
    {
      id: 'data',
      title: 'Data',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/data")
    }
  ];

  return (
    <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
      <div className="grid grid-cols-4 gap-2">
        {quickActions.map((action) => {
          return (
            <div 
              key={action.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={action.onClick}
            >
              <div className={`h-10 w-10 ${action.bgColor} rounded-lg mb-1 flex items-center justify-center`}>
                <img 
                  src={action.icon} 
                  alt={action.title}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <p className="text-xs font-medium text-center text-gray-800">{action.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
