import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <img src="https://bluestock.in/static/assets/logo/logo.webp" alt="Bluestock Logo" className="mx-auto" style={{ width: "150px", marginBottom: "20px" }} />
          <h2 className="text-lg font-medium text-center text-gray-700 mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <Input type="email" placeholder="johndoe@gmail.com" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Input type="password" placeholder="**********" className="w-full" />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="keep-signed-in" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="keep-signed-in" className="text-sm text-gray-700">Keep me signed in</label>
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
              Login
            </Button>
          </form>
          <div className="my-4 text-center text-gray-500">or sign in with</div>
          <Button type="button" className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
            Continue with Google
          </Button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-indigo-600 hover:underline">Create an account</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
