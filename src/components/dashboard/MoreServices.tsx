
import React from "react";
import { useNavigate } from "react-router-dom";

const MoreServices = () => {
  const navigate = useNavigate();

  const moreServices = [
    {
      id: 'support',
      title: 'Support',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/support")
    },
    {
      id: 'group',
      title: 'Group',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      onClick: () => navigate("/platform")
    },
    {
      id: 'earn',
      title: 'Earn',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      onClick: () => navigate("/earn-more")
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: '/lovable-uploads/daacf416-4ec8-4191-860b-96de0136943e.png',
      iconType: 'image',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600',
      onClick: () => navigate("/profile")
    }
  ];

  return (
    <div className="bg-white rounded-xl p-3 mb-2 shadow-sm">
      <h3 className="font-bold text-base mb-2 text-gray-800">More Services</h3>
      <div className="grid grid-cols-4 gap-2">
        {moreServices.map((service) => {
          return (
            <div 
              key={service.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={service.onClick}
            >
              <div className={`h-10 w-10 ${service.bgColor} rounded-lg mb-1 flex items-center justify-center`}>
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <p className="text-xs font-medium text-center text-gray-800">{service.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreServices;
