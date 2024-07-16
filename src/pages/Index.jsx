import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build on.</p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Sample Counter</h3>
          <p className="mb-2">Count: {count}</p>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Next Steps</h3>
          <ul className="list-disc list-inside">
            <li>Add more components</li>
            <li>Implement routing</li>
            <li>Connect to an API</li>
            <li>Style your app</li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;