
import React from "react";
import { RefreshCw, Wallet, Play, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const QuickActions = () => {
  const navigate = useNavigate();
  
  const handleJoinTelegram = () => {
    window.open("https://t.me/Officialbluepay", "_blank");
  };
  
  const handleJoinWhatsapp = () => {
    window.open("https://chat.whatsapp.com/bluepaygroup", "_blank");
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <h3 className="font-medium mb-4">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Platform</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleJoinTelegram}>
              Join Telegram Channel
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleJoinWhatsapp}>
              Join WhatsApp Group
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={() => navigate("/buy-bpc")}
        >
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <Wallet className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Buy BPC</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <Play className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Watch</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/airtime")}
        >
          <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
            <Phone className="h-6 w-6 text-bluepay-blue" />
          </div>
          <p className="text-xs">Airtime</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
