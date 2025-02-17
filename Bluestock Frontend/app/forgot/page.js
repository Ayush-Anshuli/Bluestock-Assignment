import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <img src="https://bluestock.in/static/assets/logo/logo.webp" alt="Bluestock Logo" className="mx-auto" style={{ width: "150px", marginBottom: "20px" }} />
          <h2 className="text-lg font-medium text-center text-gray-700 mb-6">Forgot Password?</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Enter your email address to get the password reset link.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input type="email" placeholder="hello@bluestock.in" className="w-full" />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
              Password Reset
            </Button>
          </form>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">Back to login</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
