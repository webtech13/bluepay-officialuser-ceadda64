
import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Platform = () => {
  const navigate = useNavigate();
  
  const handleJoinTelegram = () => {
    window.open("https://t.me/officialbluepay2025", "_blank");
  };
  
  const handleJoinWhatsapp = () => {
    window.open("https://chat.whatsapp.com/DrJYdBP5siSA0L96wQsuLX", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Platform Communities</h1>
      </div>

      <div className="space-y-4">
        <Card className="p-5">
          <h2 className="text-xl font-semibold mb-3">Join Our Communities</h2>
          <p className="text-gray-600 mb-4">Connect with other BluePay users and get the latest updates.</p>
          
          <Button 
            className="w-full mb-3 bg-blue-500 hover:bg-blue-600 flex justify-between items-center"
            onClick={handleJoinTelegram}
          >
            <span className="flex-1 text-left">Join Telegram Channel</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
          
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 flex justify-between items-center"
            onClick={handleJoinWhatsapp}
          >
            <span className="flex-1 text-left">Join WhatsApp Group</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Platform;
