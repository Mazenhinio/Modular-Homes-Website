'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

export function MayaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hi! I'm Maya, your Discovery Homes assistant. How can I help you today?"
    }
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessages = [
      ...messages,
      { type: 'user', content: message },
      { 
        type: 'bot', 
        content: "Thanks for your message! I'm currently in development mode. For immediate assistance, please call 1-800-DISCOVERY or use our contact form."
      }
    ]
    
    setMessages(newMessages)
    setMessage('')
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-white p-4 rounded-full shadow-lg hover:bg-[#B8941F] transition-colors z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#D4AF37] text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Maya - Discovery Homes Assistant</h3>
            <p className="text-sm opacity-90">Ask me about our homes!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-[#D4AF37] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#D4AF37] text-white p-2 rounded-md hover:bg-[#B8941F] transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 