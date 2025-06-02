
import React from "react";
import { useNavigate } from "react-router-dom";
import { HelpCircle, Users, TrendingUp, User } from "lucide-react";

const MoreServices = () => {
  const navigate = useNavigate();

  const moreServices = [
    {
      id: 'support',
      title: 'Support',
      icon: HelpCircle,
      bgColor: 'bg-gradient-to-br from-gray-400 to-gray-600',
      iconColor: 'text-white',
      onClick: () => navigate("/support")
    },
    {
      id: 'group',
      title: 'Group',
      icon: Users,
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
      iconColor: 'text-white',
      onClick: () => navigate("/platform")
    },
    {
      id: 'earn-more',
      title: 'Earn More',
      icon: TrendingUp,
      bgColor: 'bg-gradient-to-br from-green-400 to-green-600',
      iconColor: 'text-white',
      onClick: () => navigate("/earn-more")
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600',
      iconColor: 'text-white',
      onClick: () => navigate("/profile")
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
      <h3 className="font-bold text-xl mb-6 text-gray-800">More Services</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {moreServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={service.id}
              className="flex flex-col items-center cursor-pointer group"
              onClick={service.onClick}
            >
              <div className={`h-16 w-16 ${service.bgColor} rounded-2xl mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ease-out`}>
                <IconComponent className={`h-8 w-8 ${service.iconColor}`} />
              </div>
              <p className="text-sm font-semibold text-center text-gray-700 group-hover:text-gray-900 transition-colors">{service.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreServices;
