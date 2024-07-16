import React from 'react';
import { Button } from "@/components/ui/button";

const HelloWorld = () => {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Hello, World!</h1>
        <p className="text-lg mb-4">Welcome to your new React page with a red background.</p>
        <Button variant="default" className="bg-red-500 hover:bg-red-600 text-white">
          Click me!
        </Button>
      </div>
    </div>
  );
};

export default HelloWorld;