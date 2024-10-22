import React from 'react';
import { Bot, RefreshCw } from 'lucide-react';

interface HeaderProps {
  onClear: () => void;
}

export function Header({ onClear }: HeaderProps) {
  return (
    <header className="bg-gray-900 text-white p-4 sm:p-6 flex items-center justify-between">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="p-2 sm:p-3 bg-indigo-600 rounded-lg sm:rounded-xl shadow-lg">
          <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">AI Assistant</h1>
        </div>
      </div>
      <button
        onClick={onClear}
        className="p-2 sm:p-2.5 hover:bg-gray-800/50 rounded-lg transition-all duration-200 group tooltip"
        title="Clear chat"
      >
        <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-180 transition-transform duration-300" />
      </button>
    </header>
  );
}