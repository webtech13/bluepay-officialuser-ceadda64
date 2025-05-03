
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-1 flex flex-col">
        <header className="p-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Bluepay</div>
          </div>
        </header>

        <main className="flex-1 flex flex-col p-6 justify-between">
          <div className="mt-16">
            <h1 className="text-5xl font-bold mb-4">Get Your Account Ready And Instantly.</h1>
            <p className="text-lg mb-10">
              Get your account ready and instantly start buying, selling airtime and data
              online and start paying all your bills in cheaper price.
            </p>
            <Button 
              className="bg-[#e0d8b0] hover:bg-[#d0c8a0] text-black font-bold py-3 px-8 rounded-full text-lg"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>

          <div className="mt-auto">
            <img 
              src="/lovable-uploads/38375faa-d272-4dc6-b614-787c50a334a6.png" 
              alt="Person using Bluepay app" 
              className="object-contain max-h-[400px]"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
