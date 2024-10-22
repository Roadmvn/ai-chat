import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Header } from './components/Header';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { EmptyState } from './components/EmptyState';
import { Message } from './types';

function App() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: crypto.randomUUID(),
      type: 'user' as const,
      content: message.trim(),
      timestamp: new Date()
    };

    setError(null);
    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      const result = await axios.post('/api/chat', { message: newMessage.content });
      setChatHistory(prev => [...prev, {
        id: crypto.randomUUID(),
        type: 'bot' as const,
        content: result.data.response,
        timestamp: new Date()
      }]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatHistory([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-2 sm:p-4 text-gray-900">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-white/20">
        <Header onClear={clearChat} />

        <div 
          ref={chatContainerRef}
          className="h-[calc(100vh-11rem)] sm:h-[calc(100vh-16rem)] overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6 bg-gradient-to-b from-gray-50 to-white scroll-smooth"
        >
          {chatHistory.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {chatHistory.map((chat) => (
                <ChatMessage 
                  key={chat.id} 
                  message={chat} 
                  formatTimestamp={formatTimestamp} 
                />
              ))}
            </>
          )}

          {isLoading && (
            <ChatMessage 
              message={{
                id: 'loading',
                type: 'bot',
                content: (
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) as unknown as string,
                timestamp: new Date()
              }}
              formatTimestamp={formatTimestamp}
            />
          )}

          {error && (
            <div className="flex justify-center animate-fade-in">
              <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            </div>
          )}
        </div>

        <ChatInput 
          message={message}
          isLoading={isLoading}
          onMessageChange={(e) => setMessage(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;