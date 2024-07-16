import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HelloWorld = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold mb-4 text-green-500">Todo List</h1>
        <div className="mb-4 flex">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="mr-2"
          />
          <Button onClick={addTodo} className="bg-green-500 hover:bg-green-600 text-white">
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center justify-between bg-green-100 p-2 rounded">
              <span>{todo}</span>
              <Button 
                onClick={() => removeTodo(index)} 
                variant="destructive" 
                size="sm"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HelloWorld;