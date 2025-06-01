
import React, { useState, useEffect } from "react";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const OpayNotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-orange-500 text-white overflow-hidden relative">
      <div 
        className={`flex items-center py-3 px-5 transition-transform duration-1000 ${
          isAnimating ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
        <div className="flex-1 text-sm font-medium">
          <span>Opay Bank Service Down - We're currently experiencing issues with Opay bank transfers. Please use other supported banks for your payments.</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-orange-600 ml-2 h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default OpayNotificationBanner;
