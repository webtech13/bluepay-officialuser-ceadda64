
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fingerprint, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SetupPin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState<string>("");
  const maxPinLength = 4;

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

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full max-w-md px-4 py-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-gray-900">Enter Your Passcode</h1>
        <p className="text-gray-500 mb-8">Enter the passcode for your wallet</p>

        <div className="flex gap-4 mb-12">
          {Array.from({ length: maxPinLength }).map((_, i) => (
            <div
              key={i}
              className={`w-14 h-14 rounded-full border-2 ${
                i < pin.length ? "border-gray-800 bg-gray-200" : "border-gray-200"
              }`}
            ></div>
          ))}
        </div>

        <div className="w-full border-t border-gray-200 mb-8"></div>

        <div className="grid grid-cols-3 gap-8 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-medium"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleNumberClick(0)}
            className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-medium"
          >
            0
          </button>
          <button className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
            <Fingerprint className="text-white w-6 h-6" />
          </button>
          <button
            onClick={handleDelete}
            className="w-16 h-16 rounded-full bg-black flex items-center justify-center"
          >
            <X className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 space-y-2 text-center">
          <p className="text-gray-500">Forgotten your passcode?</p>
          <Button
            variant="ghost"
            onClick={handleReset}
            className="text-gray-800 hover:text-gray-900"
          >
            Reset passcode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupPin;
