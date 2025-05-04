
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "../stores/userStore";
import { toast } from "@/hooks/use-toast";

const BuyBPC = () => {
  const navigate = useNavigate();
  const { userData } = useUserStore();
  const [amount, setAmount] = useState("₦6,500");
  const [fullName, setFullName] = useState(userData?.fullName || "");
  const [email, setEmail] = useState(userData?.email || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !fullName || !email) {
      toast({
        variant: "destructive",
        description: "Please fill in all fields",
      });
      return;
    }
    
    navigate("/buy-bpc/processing");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#1a237e] text-white py-5 px-5">
        <h1 className="text-2xl font-bold">Buy BPC Code</h1>
      </header>

      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="text-lg text-gray-600 mb-2 block">Amount</label>
            <Input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg py-6 border-2 border-gray-300 rounded-lg"
              placeholder="₦0.00"
            />
          </div>
          
          <div>
            <label className="text-lg text-gray-600 mb-2 block">Full Name</label>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="text-lg py-6 border-2 border-gray-300 rounded-lg"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="text-lg text-gray-600 mb-2 block">Your Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-lg py-6 border-2 border-gray-300 rounded-lg"
              placeholder="email@example.com"
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-xl py-6"
          >
            Pay
          </Button>
          
          <p className="text-center text-gray-500 text-lg">
            Your BPC code will be displayed on the app once your payment is confirmed.
          </p>
        </form>
      </div>
    </div>
  );
};

export default BuyBPC;
