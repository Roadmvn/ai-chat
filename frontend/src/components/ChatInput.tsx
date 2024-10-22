import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  message: string;
  isLoading: boolean;
  onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ message, isLoading, onMessageChange, onSubmit }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-3 sm:p-4 bg-white border-t border-gray-100">
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={onMessageChange}
          placeholder="Type your message..."
          className="flex-grow px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow placeholder-gray-400"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center transition-all duration-200 ${
            isLoading || !message.trim()
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          }`}
        >
          <Send className={`h-4 w-4 sm:h-5 sm:w-5 ${isLoading || !message.trim() ? '' : 'group-hover:translate-x-1 transition-transform'}`} />
        </button>
      </div>
    </form>
  );
}