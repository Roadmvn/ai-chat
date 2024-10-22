import React from 'react';
import { Bot } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
  formatTimestamp: (date: Date) => string;
}

export function ChatMessage({ message, formatTimestamp }: ChatMessageProps) {
  return (
    <div 
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
    >
      <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} max-w-[85%] sm:max-w-[80%]`}>
        <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            message.type === 'user' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {message.type === 'user' ? 'U' : <Bot className="h-4 w-4 sm:h-5 sm:w-5" />}
          </div>
          <div className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl text-sm sm:text-base ${
            message.type === 'user' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {message.content}
          </div>
        </div>
        <span className="text-[10px] sm:text-xs text-gray-400 mt-1 px-2">
          {formatTimestamp(message.timestamp)}
        </span>
      </div>
    </div>
  );
}