
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "../stores/userStore";
import { toast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";

const Withdraw = () => {
  const navigate = useNavigate();
  const { userData, updateBalance, addTransaction } = useUserStore();
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("Access Bank");
  const [amount, setAmount] = useState("");
  const [bpcCode, setBpcCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!accountName || !accountNumber || !amount) {
      toast({
        variant: "destructive",
        description: "Please fill in all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate BPC code
    if (bpcCode !== "200718") {
      toast({
        variant: "destructive",
        description: "Invalid BPC code. Please enter a valid code.",
      });
      setIsSubmitting(false);
      return;
    }

    const amountValue = parseFloat(amount);
    
    // Update balance in userStore
    updateBalance(-amountValue);
    
    // Add to transaction history
    addTransaction({
      id: Date.now(),
      type: "Bank Transfer",
      amount: `-₦${amountValue.toLocaleString()}`,
      date: new Date().toLocaleString(),
      status: "Completed",
      recipient: `${accountName} - ${accountNumber} (${bank})`,
    });
    
    toast({
      description: "Transfer initiated successfully!",
    });
    
    // Navigate to processing page with transaction data
    navigate("/withdraw/processing", {
      state: {
        amount: amountValue,
        accountName,
        accountNumber,
        bank
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white py-5 px-5 text-center">
        <h1 className="text-2xl font-bold">Transfer To Bank</h1>
      </header>

      <div className="p-5">
        <h2 className="text-3xl font-bold mb-6">Bank Details</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full border-2 border-blue-600 rounded-lg p-4 text-lg"
              placeholder="Account Name"
            />
          </div>
          
          <div className="relative">
            <Input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border-2 border-blue-600 rounded-lg p-4 text-lg"
              placeholder="Account Number (10 digits)"
              maxLength={10}
            />
          </div>

          <div className="relative border-2 border-blue-600 rounded-lg">
            <div className="flex items-center justify-between p-4">
              <span className="text-lg">{bank}</span>
              <ChevronDown size={20} />
            </div>
          </div>
          
          <div className="relative">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border-2 border-blue-600 rounded-lg p-4 text-lg"
              placeholder="Amount"
            />
          </div>
          
          <div className="relative">
            <Input
              type="text"
              value={bpcCode}
              onChange={(e) => setBpcCode(e.target.value)}
              className="w-full border-2 border-blue-600 rounded-lg p-4 text-lg"
              placeholder="BPC CODE (Buy BPC)"
            />
          </div>
          
          <div className="text-blue-600 text-lg font-semibold">
            <p>Buy BPC code</p>
          </div>
          
          <div className="mt-8">
            <p className="text-2xl font-bold">Available Balance: ₦200,000</p>
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-xl py-6 mt-4"
          >
            {isSubmitting ? "Processing..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
