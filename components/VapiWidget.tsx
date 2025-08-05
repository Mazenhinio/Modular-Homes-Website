'use client'

import { useEffect } from 'react'

export function VapiWidget() {
  useEffect(() => {
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
    vapiWidget.setAttribute('mode', 'voice')
    vapiWidget.setAttribute('theme', 'dark')
    vapiWidget.setAttribute('base-bg-color', '#000000')
    vapiWidget.setAttribute('accent-color', '#14B8A6')
    vapiWidget.setAttribute('cta-button-color', '#000000')
    vapiWidget.setAttribute('cta-button-text-color', '#ffffff')
    vapiWidget.setAttribute('border-radius', 'large')
    vapiWidget.setAttribute('size', 'full')
    vapiWidget.setAttribute('position', 'bottom-left')
    vapiWidget.setAttribute('title', 'TALK WITH Maya')
    vapiWidget.setAttribute('start-button-text', 'Start')
    vapiWidget.setAttribute('end-button-text', 'End Call')
    vapiWidget.setAttribute('chat-first-message', 'Hey, How can I help you today?')
    vapiWidget.setAttribute('chat-placeholder', 'Type your message...')
    vapiWidget.setAttribute('voice-show-transcript', 'true')
    vapiWidget.setAttribute('consent-required', 'true')
    vapiWidget.setAttribute('consent-title', 'Terms and conditions')
    vapiWidget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.')
    vapiWidget.setAttribute('consent-storage-key', 'vapi_widget_consent')

    // Add widget to body
    document.body.appendChild(vapiWidget)

    // Cleanup function
    return () => {
      // Remove script and widget on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (vapiWidget.parentNode) {
        vapiWidget.parentNode.removeChild(vapiWidget)
      }
    }
  }, [])

  return null // This component doesn't render anything visible
} 