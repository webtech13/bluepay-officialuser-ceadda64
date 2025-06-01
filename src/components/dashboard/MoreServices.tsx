
import React from "react";
import { useNavigate } from "react-router-dom";

const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-5">More Services</h3>
      <div className="grid grid-cols-4 gap-4">
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/support")}
        >
          <div className="h-14 w-14 bg-gray-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Support" className="h-8 w-8 object-contain" style={{clipPath: 'inset(50% 75% 0 0)'}} />
          </div>
          <p className="text-xs font-medium text-center">Support</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/platform")}
        >
          <div className="h-14 w-14 bg-blue-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Group" className="h-8 w-8 object-contain" style={{clipPath: 'inset(50% 50% 0 25%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Group</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={() => navigate("/earn-more")}
        >
          <div className="h-14 w-14 bg-yellow-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Earn More" className="h-8 w-8 object-contain" style={{clipPath: 'inset(50% 25% 0 50%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Earn More</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
          onClick={() => navigate("/profile")}
        >
          <div className="h-14 w-14 bg-gray-100 rounded-xl mb-3 flex items-center justify-center shadow-sm">
            <img src="/lovable-uploads/e9f8aa4b-3dab-4942-8b64-834dcc32e358.png" alt="Profile" className="h-8 w-8 object-contain" style={{clipPath: 'inset(50% 0 0 75%)'}} />
          </div>
          <p className="text-xs font-medium text-center">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;
