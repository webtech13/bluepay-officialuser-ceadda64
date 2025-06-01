
import React from "react";
import { ArrowLeft, TrendingUp, DollarSign, Gift, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EarnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-5">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="mr-3 text-white hover:bg-blue-700"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Earn More</h1>
        </div>
      </header>

      <div className="p-5 space-y-6">
        {/* Welcome Section */}
        <Card className="p-6 bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Start Earning Today!</h2>
            <p className="text-green-100">Multiple ways to earn money with BluePay</p>
          </div>
        </Card>

        {/* Earning Options */}
        <div className="space-y-4">
          <Card className="p-5 bg-white shadow-sm">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Referral Program</h3>
                <p className="text-sm text-gray-600">Earn ₦500 for each friend you refer</p>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Start Referring
            </Button>
          </Card>

          <Card className="p-5 bg-white shadow-sm">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Daily Tasks</h3>
                <p className="text-sm text-gray-600">Complete daily tasks and earn rewards</p>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View Tasks
            </Button>
          </Card>

          <Card className="p-5 bg-white shadow-sm">
            <div className="flex items-center mb-3">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Gift className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bonus Rewards</h3>
                <p className="text-sm text-gray-600">Special bonuses and promotions</p>
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Claim Bonus
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EarnMore;
