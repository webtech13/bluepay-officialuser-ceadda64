
import React from "react";
import { Bell, RefreshCw, Wallet, Play, Phone, BarChart2, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <button className="text-xl">☰</button>
        <h1 className="text-2xl font-semibold">Blue Pay Pro</h1>
        <div className="w-5"></div>
      </header>

      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <User className="text-white" />
            </div>
            <h2 className="text-xl font-semibold">Hi, Sunday</h2>
          </div>
          <Bell />
        </div>

        <div className="bg-bluepay-blue text-white rounded-xl p-5 mb-8">
          <p className="text-lg mb-2">Available Balance</p>
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold">₦200,000</h3>
            <Button className="bg-white text-black hover:bg-gray-100 font-semibold">
              Withdraw
            </Button>
          </div>
          <p className="mt-2">Daily spend target: 200,000 naira</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <RefreshCw className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Reset</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <Wallet className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Buy BPC</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <Play className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Watch</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <Phone className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Airtime</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Data</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">About</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <RefreshCw className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Support</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 bg-white rounded-full mb-2 flex items-center justify-center">
              <User className="h-6 w-6 text-bluepay-blue" />
            </div>
            <p className="text-sm">Profile</p>
          </div>
        </div>
      </div>

      <div className="mt-auto h-20 bg-bluepay-blue"></div>
    </div>
  );
};

export default Dashboard;
