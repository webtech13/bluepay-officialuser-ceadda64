
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithdrawProcessing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a processing delay and then redirect
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // Changed to 3 seconds to match BuyBPCProcessing
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#222222] text-white py-4 px-5 flex justify-between items-center sticky top-0 z-10">
        <button className="text-xl">
          <span className="sr-only">Menu</span>
        </button>
        <h1 className="text-2xl font-semibold">BLUEPAY2025</h1>
        <div className="w-8 h-8">
          <span className="sr-only">Notifications</span>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-24 h-24 mb-8">
          <div className="w-full h-full rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-center">Processing your request</h1>
        <p className="text-lg text-gray-500 text-center">
          Please wait while we prepare your payment details...
        </p>
      </div>
    </div>
  );
};

export default WithdrawProcessing;
