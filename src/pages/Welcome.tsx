
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useUserStore } from "../stores/userStore";
import TypewriterText from "../components/ui/TypewriterText";
import { X } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const { userData } = useUserStore();
  const [showButtons, setShowButtons] = useState(false);

  const welcomeText = `bluepaycustomerservice25 You Have Been Given 200,000 to withdraw as a welcome sign up bonus . click on close to continue and also join our group`;

  const handleClose = () => {
    navigate("/dashboard");
  };

  const handleJoinGroup = () => {
    // WhatsApp group link - replace with actual group link
    window.open("https://chat.whatsapp.com/your-group-link", "_blank");
  };

  const handleTypewriterComplete = () => {
    setShowButtons(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome</h1>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Registered Email:</p>
            <p className="text-blue-600 font-medium">{userData?.email || "user@example.com"}</p>
          </div>

          <div className="mb-6 text-gray-700 leading-relaxed">
            <TypewriterText 
              text={welcomeText}
              speed={50}
              onComplete={handleTypewriterComplete}
            />
          </div>

          <div className="mb-4">
            <a 
              href="https://chat.whatsapp.com/your-group-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Here
            </a>
          </div>

          {showButtons && (
            <div className="space-y-3 animate-fade-in">
              <Button 
                onClick={handleClose}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium"
              >
                CLOSED
              </Button>
              
              <Button 
                onClick={handleJoinGroup}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                JOIN GROUP
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
