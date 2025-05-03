
import React from "react";
import { Bell, RefreshCw, Wallet, Play, Phone, BarChart2, HelpCircle, User, Menu, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "../stores/userStore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { userData } = useUserStore();
  const navigate = useNavigate();
  const [transactions] = React.useState([
    { id: 1, type: "Airtime", amount: "₦2,000", date: "Today, 10:42 AM", status: "Completed" },
    { id: 2, type: "Data Bundle", amount: "₦5,000", date: "Yesterday, 2:15 PM", status: "Completed" },
    { id: 3, type: "Electricity Bill", amount: "₦10,000", date: "Mar 28, 8:30 AM", status: "Processing" }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-bluepay-blue text-white py-4 px-5 flex justify-between items-center sticky top-0 z-10">
        <button className="text-xl">
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-semibold">BLUEPAY2025</h1>
        <div className="w-8 h-8">
          <Bell size={24} />
        </div>
      </header>

      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-white">
              {userData?.profileImage ? (
                <AvatarImage src={userData.profileImage} alt="Profile" className="object-cover" />
              ) : (
                <AvatarFallback className="bg-yellow-500">
                  <User className="text-white" />
                </AvatarFallback>
              )}
            </Avatar>
            <h2 className="text-xl font-semibold">Hi, {userData?.fullName || "User"}</h2>
          </div>
          <div className="w-8 h-8 bg-bluepay-blue rounded-full flex items-center justify-center">
            <Bell size={20} className="text-white" />
          </div>
        </div>

        <div className="bg-bluepay-blue text-white rounded-xl p-5 mb-8">
          <p className="text-lg mb-2">Available Balance</p>
          <div className="flex justify-between items-center">
            <h3 className="text-4xl font-bold">₦200,000</h3>
            <Button className="bg-white text-bluepay-blue hover:bg-gray-100 font-semibold">
              Withdraw
            </Button>
          </div>
          <div className="mt-4 bg-white/10 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <p className="text-sm">Daily spend target</p>
              <p className="text-sm font-semibold">₦200,000</p>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full mt-2">
              <div className="bg-white h-2 rounded-full" style={{width: "35%"}}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h3 className="font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Transfer</p>
            </div>
            <div className="flex flex-col items-center">
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
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <Phone className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Airtime</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <h3 className="font-medium mb-4">More Services</h3>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <BarChart2 className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Data</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">About</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-bluepay-blue/10 rounded-full mb-2 flex items-center justify-center cursor-pointer"
                   onClick={() => navigate("/profile")}>
                <User className="h-6 w-6 text-bluepay-blue" />
              </div>
              <p className="text-xs">Profile</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Recent Transactions</h3>
            <Button variant="ghost" className="h-8 px-2 text-bluepay-blue">
              View All <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="space-y-3">
            {transactions.map(transaction => (
              <div key={transaction.id} className="flex justify-between py-2 border-b border-gray-100">
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{transaction.amount}</p>
                  <p className={`text-xs ${transaction.status === "Completed" ? "text-green-500" : "text-orange-500"}`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto h-16 bg-bluepay-blue fixed bottom-0 w-full flex justify-around items-center px-4">
        <div className="flex flex-col items-center">
          <Wallet size={20} className="text-white" />
          <span className="text-xs text-white">Wallet</span>
        </div>
        <div className="flex flex-col items-center">
          <RefreshCw size={20} className="text-white/60" />
          <span className="text-xs text-white/60">Transactions</span>
        </div>
        <div className="flex flex-col items-center">
          <Button className="rounded-full h-12 w-12 -mt-6 bg-white text-bluepay-blue hover:bg-gray-100">
            <Plus size={24} />
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <BarChart2 size={20} className="text-white/60" />
          <span className="text-xs text-white/60">Stats</span>
        </div>
        <div className="flex flex-col items-center" onClick={() => navigate("/profile")}>
          <User size={20} className="text-white/60" />
          <span className="text-xs text-white/60">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
