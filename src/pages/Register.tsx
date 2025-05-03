
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/setup-pin");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="p-4">
        <button onClick={() => navigate("/")} className="flex items-center text-gray-800">
          <ArrowLeft className="h-5 w-5 mr-2" />
        </button>
        <div className="absolute top-4 right-4">
          <span className="text-gray-500">You Need Help?</span>
        </div>
      </header>

      <div className="flex-1 flex flex-col justify-center p-6">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome!</h1>
          <p className="text-gray-500 mb-6">
            Get your account ready and instantly start buying, selling airtime and data online and start paying all your bills in cheaper price.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="fullName"
              placeholder="Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="rounded-md bg-gray-100 px-4 py-3 text-gray-800"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md bg-gray-100 px-4 py-3 text-gray-800"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-md bg-gray-100 px-4 py-3 text-gray-800"
              required
            />

            <p className="text-sm text-gray-500">
              Any further actions indicates that you agree with our terms & conditions!
            </p>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-3 font-bold rounded-full"
            >
              Create account
            </Button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-gray-500">Already have an account? </span>
            <button 
              onClick={() => navigate("/pin")} 
              className="text-black font-medium"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
