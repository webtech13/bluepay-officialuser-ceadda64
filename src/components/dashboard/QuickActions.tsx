
import React from "react";
import { MessageCircle, CreditCard, PlayCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActionsWithGuide = () => {
  const navigate = useNavigate();

  const handleWatch = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions Section */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="font-semibold text-lg mb-5">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-6">
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => navigate("/platform")}
          >
            <div className="h-14 w-14 bg-blue-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
              <MessageCircle className="h-7 w-7 text-blue-600" />
            </div>
            <p className="text-xs font-medium">Platform</p>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => navigate("/buy-bpc")}
          >
            <div className="h-14 w-14 bg-green-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
              <CreditCard className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-xs font-medium">Buy BPC</p>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={handleWatch}
          >
            <div className="h-14 w-14 bg-purple-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
              <PlayCircle className="h-7 w-7 text-purple-600" />
            </div>
            <p className="text-xs font-medium">Watch</p>
          </div>

          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => navigate("/airtime")}
          >
            <div className="h-14 w-14 bg-orange-100 rounded-full mb-3 flex items-center justify-center shadow-sm">
              <Phone className="h-7 w-7 text-orange-600" />
            </div>
            <p className="text-xs font-medium">Airtime</p>
          </div>
        </div>
      </div>

      {/* How to Buy BPC Code Guide */}
      <div className="bg-blue-50 rounded-xl p-6 shadow-md text-blue-900">
        <h2 className="text-xl font-bold mb-4">Important Information</h2>
        <div className="bg-blue-100 rounded-lg p-5">
          <h3 className="text-lg font-semibold mb-3">How to Buy BPC Code</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Click <strong>"Buy BPC"</strong> from the dashboard</li>
            <li>Fill in the details and amount</li>
            <li>Complete payment for the BPC code</li>
            <li>Use the code for airtime & withdrawals</li>
          </ul>
          <p className="mt-4 text-xs text-blue-700 italic">Powered by Bluepay</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsWithGuide;
