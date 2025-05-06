
import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BuyBPCConfirmation = () => {
  const navigate = useNavigate();
  const bpcCode = "BPC200000";
  
  const handleSupport = () => {
    // This would navigate to support page in a real implementation
    toast({
      description: "Redirecting to support...",
      duration: 2000,
    });
    navigate("/support");
  };

  const handleRecheck = () => {
    toast({
      description: "Checking payment status...",
      duration: 2000,
    });
    // In a real implementation, this would check the payment status
    // For now, we'll just simulate a recheck
    setTimeout(() => {
      toast({
        variant: "destructive",
        description: "Payment still not confirmed",
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#f2f2f2] text-black py-4 px-5 flex justify-between items-center sticky top-0 z-10">
        <div className="text-xl font-medium">Bank Transfer</div>
        <button 
          onClick={() => navigate("/dashboard")} 
          className="text-red-500 font-medium"
        >
          Cancel
        </button>
      </header>

      <div className="flex-1 flex flex-col p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400"></div>
                <div className="absolute inset-2 rounded-full border-2 border-red-500"></div>
                <div className="absolute inset-4 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">NGN 6,200</p>
            <p className="text-gray-600">sundaychinemerem66@gmail.com</p>
          </div>
        </div>
        
        <div className="text-center my-8">
          <p className="text-xl font-medium">
            Proceed to your bank app to complete this Transfer
          </p>
        </div>
        
        <div className="mt-10 space-y-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle size={24} className="text-red-500 mr-2" />
            <p className="text-gray-800 text-lg">
              Payment not confirmed, need help? contact support:
            </p>
          </div>
          
          <button 
            onClick={handleSupport}
            className="text-blue-600 font-medium text-lg hover:underline"
          >
            here
          </button>
          
          <Button 
            onClick={handleRecheck}
            className="w-full max-w-xs bg-green-600 hover:bg-green-700 text-white py-4 text-xl"
          >
            Re-check
          </Button>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Your BPC Code: {bpcCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBPCConfirmation;
