
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fingerprint, X, Camera, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SetupPin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const maxPinLength = 4;
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleNumberClick = (num: number) => {
    if (pin.length < maxPinLength) {
      setPin((prev) => prev + num);
    }
    
    // Auto navigate when pin is complete
    if (pin.length === maxPinLength - 1) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleReset = () => {
    setPin("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-bluepay-blue text-white">
      <div className="w-full max-w-md px-4 py-10 flex flex-col items-center">
        <div 
          className="relative w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 cursor-pointer"
          onClick={triggerFileUpload}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload} 
            className="hidden" 
            accept="image/*"
          />
          
          {profileImage ? (
            <Avatar className="w-24 h-24">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
              <AvatarFallback className="bg-white/20">
                <User className="text-white w-8 h-8" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 right-0 bg-white text-bluepay-blue rounded-full p-1">
                <Upload className="w-4 h-4" />
              </div>
            </>
          )}
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-white">Enter Your Passcode</h1>
        <p className="text-gray-200 mb-8">Enter the passcode for your wallet</p>

        <div className="flex gap-4 mb-12">
          {Array.from({ length: maxPinLength }).map((_, i) => (
            <div
              key={i}
              className={`w-14 h-14 rounded-full border-2 ${
                i < pin.length ? "border-white bg-white/20" : "border-white/30"
              }`}
            ></div>
          ))}
        </div>

        <div className="w-full border-t border-white/20 mb-8"></div>

        <div className="grid grid-cols-3 gap-8 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl font-medium text-white"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleNumberClick(0)}
            className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl font-medium text-white"
          >
            0
          </button>
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <Fingerprint className="text-bluepay-blue w-6 h-6" />
          </button>
          <button
            onClick={handleDelete}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
          >
            <X className="text-bluepay-blue w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 space-y-2 text-center">
          <p className="text-gray-200">Forgotten your passcode?</p>
          <Button
            variant="ghost"
            onClick={handleReset}
            className="text-white hover:text-gray-200 hover:bg-white/10"
          >
            Reset passcode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupPin;
