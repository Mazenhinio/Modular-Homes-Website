'use client'

import { useEffect, useState } from 'react'

interface VapiWidgetProps {
  mode?: 'voice' | 'chat'
}

export function VapiWidget({ mode }: VapiWidgetProps) {
  const [userChoice, setUserChoice] = useState<'voice' | 'chat' | null>(mode || null)
  const [showChoice, setShowChoice] = useState(false)
  const [showCallout, setShowCallout] = useState(false)

  useEffect(() => {
    if (!userChoice) return

    // Load VAPI script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
    script.async = true
    script.type = 'text/javascript'
    document.head.appendChild(script)

    // Create VAPI widget element
    const vapiWidget = document.createElement('vapi-widget')
    vapiWidget.setAttribute('public-key', '8bb91407-0cab-4af1-a757-84aa8bebf9a0')
    vapiWidget.setAttribute('assistant-id', '5e726eab-ad3f-4a8a-a4d0-1888cfab8cc3')
    vapiWidget.setAttribute('mode', userChoice)
    vapiWidget.setAttribute('theme', 'dark')
    vapiWidget.setAttribute('base-bg-color', '#000000')
    vapiWidget.setAttribute('accent-color', '#000000')
    vapiWidget.setAttribute('cta-button-color', '#D4AF37')
    vapiWidget.setAttribute('cta-button-text-color', '#FFFFFF')
    vapiWidget.setAttribute('border-radius', 'medium')
    vapiWidget.setAttribute('size', 'tiny')
    vapiWidget.setAttribute('position', 'bottom-right')
    vapiWidget.setAttribute('title', userChoice === 'voice' ? 'Speak to Maya!' : 'Chat with Maya!')
    vapiWidget.setAttribute('start-button-text', 'Start')
    vapiWidget.setAttribute('end-button-text', 'End Call')
    vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?')
    vapiWidget.setAttribute('chat-placeholder', 'Type your message...')
    vapiWidget.setAttribute('voice-show-transcript', 'true')
    vapiWidget.setAttribute('consent-required', 'false')

    // Add widget to body
    document.body.appendChild(vapiWidget)

    // Show callout after a short delay
    setTimeout(() => {
      setShowCallout(true)
    }, 1000)

    // Cleanup function
    return () => {
      // Remove script and widget on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      const existingWidget = document.querySelector('vapi-widget')
      if (existingWidget?.parentNode) {
        existingWidget.parentNode.removeChild(existingWidget)
      }
    }
  }, [userChoice])

  const handleShowChoice = () => {
    setShowChoice(true)
  }

  const handleModeSelection = (mode: 'voice' | 'chat') => {
    setUserChoice(mode)
    setShowChoice(false)
  }

  // Show mode selection modal
  if (showChoice) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-black rounded-lg shadow-lg border border-gray-700 p-4 w-64 animate-fade-in">
          <h3 className="text-white font-semibold mb-3 text-center">How would you like to chat with Maya?</h3>
          <div className="space-y-2">
            <button
              onClick={() => handleModeSelection('voice')}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span>Voice Chat</span>
            </button>
            <button
              onClick={() => handleModeSelection('chat')}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Text Chat</span>
            </button>
          </div>
          <button
            onClick={() => setShowChoice(false)}
            className="w-full text-gray-400 hover:text-white text-sm mt-3 transition-colors duration-200"
          >
            Maybe later
          </button>
        </div>
      </div>
    )
  }

  // Show callout when VAPI widget is loaded
  if (userChoice && showCallout) {
    return (
      <div className="fixed bottom-20 right-4 z-50">
        <div className="bg-discovery-gold text-discovery-charcoal px-4 py-2 rounded-lg shadow-lg animate-pulse">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              Click to {userChoice === 'voice' ? 'start voice chat' : 'start text chat'} with Maya!
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Show bouncing button as the main initial state (only when no mode is selected)
  if (!userChoice) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleShowChoice}
          className="bg-gradient-to-r from-discovery-gold to-discovery-gold-dark text-discovery-charcoal p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce"
          title="Chat with Maya"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    )
  }

  // Return null when VAPI widget is active (no custom UI needed)
  return null
} 