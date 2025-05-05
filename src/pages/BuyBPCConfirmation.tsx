
import React from "react";
import { useNavigate } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const BuyBPCConfirmation = () => {
  const navigate = useNavigate();
  const bpcCode = "200718";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(bpcCode).then(() => {
      toast({
        description: "BPC Code copied to clipboard!",
        duration: 2000,
      });
    });
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#222222] text-white py-4 px-5 flex justify-between items-center sticky top-0 z-10">
        <button className="text-xl">
          <span className="sr-only">Menu</span>
        </button>
        <h1 className="text-2xl font-semibold">BLUEPAY</h1>
        <div className="w-8 h-8">
          <span className="sr-only">Notifications</span>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-24 h-24 mb-8 flex items-center justify-center">
          <Check size={96} className="text-blue-600" strokeWidth={2} />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-center">Payment Confirmed</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Your payment has been received successfully.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg w-full max-w-md mb-8">
          <p className="text-gray-700 mb-2">Your BPC Code:</p>
          <div className="flex items-center justify-between bg-white p-4 rounded border border-blue-200">
            <p className="text-2xl font-bold">{bpcCode}</p>
            <Button 
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-2 border-blue-300"
            >
              <Copy size={16} />
              Copy
            </Button>
          </div>
          <p className="text-sm text-blue-600 mt-2">Use this code for your withdrawals.</p>
        </div>
        
        <Button 
          onClick={handleBackToDashboard}
          className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default BuyBPCConfirmation;
