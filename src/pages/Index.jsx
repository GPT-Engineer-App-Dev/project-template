import React from 'react';
import { Button } from "@/components/ui/button"

const HelloWorld = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hello, World!</h1>
      <p className="mb-4">Welcome to your new Vite + React + Shadcn project.</p>
      <Button variant="default">Click me!</Button>
    </div>
  );
};

export default HelloWorld;