
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-bluepay-blue text-white">
      <div className="flex-1 flex flex-col">
        <header className="p-4">
          <div className="flex items-center">
            <div className="text-3xl font-extrabold relative">
              <span className="text-white" style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: "0.05em"
              }}>
                BLUEPAY
                <span className="text-xl ml-1">2025</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full">
                <div className="h-0.5 bg-white"></div>
                <div className="mt-0.5 h-0.5 bg-white w-3/4 mx-auto"></div>
                <div className="mt-0.5 h-0.5 bg-white w-1/2 mx-auto"></div>
                <div className="relative">
                  <div className="absolute -bottom-4 left-1/4 w-1 h-3 bg-white rounded-b-full"></div>
                  <div className="absolute -bottom-6 left-1/2 w-1 h-5 bg-white rounded-b-full"></div>
                  <div className="absolute -bottom-4 right-1/4 w-1 h-3 bg-white rounded-b-full"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col p-6 justify-center">
          <div className="mt-16">
            <img 
              src="/lovable-uploads/55c3f237-e0a0-487d-8665-b3f3c186b081.png" 
              alt="BLUEPAY2025" 
              className="mx-auto mb-10 max-w-xs"
            />
            <h1 className="text-4xl font-bold mb-4">Get Your Account Ready And Instantly.</h1>
            <p className="text-lg mb-10">
              Get your account ready and instantly start buying, selling airtime and data
              online and start paying all your bills in cheaper price.
            </p>
            <Button 
              className="bg-white hover:bg-gray-100 text-bluepay-blue font-bold py-3 px-8 rounded-full text-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
