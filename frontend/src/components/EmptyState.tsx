import React from 'react';
import { Sparkles } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4 p-4">
      <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
        <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 text-indigo-600" />
      </div>
      <p className="text-base sm:text-lg font-medium text-center text-gray-900">Start a conversation with the AI assistant</p>
      <p className="text-xs sm:text-sm text-gray-600 text-center max-w-md">
        Ask questions, get answers, and explore topics with our AI-powered assistant.
      </p>
    </div>
  );
}