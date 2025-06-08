import { useState } from 'react'
import './App.css'

function App() {
  const [input, Setinput] = useState(' ')
  const [messages, setMessage] = useState([{
    sender: 'bot', text: 'Hi! I am your assistant. How can I help you today?'
  }])

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase()
    if (input.includes('hello') || input.includes('hi'))
      return 'Hello there ❤'
    if (input.includes('how are you') || input.includes('whatsup')) return 'I\'m BOT! I\'m doing good 🤗'
    if (input.includes('your name')) return 'I\'m Rani || What is your name?'
    return 'Sorry! I did not understand that 😑'
  }

  const handleSend = () => {
    const userMessage = { sender: "user", text: input }
    const botReply = { sender: 'bot', text: getResponse(input) }
    setMessage(prev => [...prev, userMessage, botReply])
    Setinput('') // clear input after send
  }

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <h2>🤖ChatBot</h2>
        </div>

        <div className="message-area">
          {
            messages.map((msg, id) => (
              <div key={id} className={`message-box ${msg.sender === 'user' ? 'user' : 'bot'}`}>
                {msg.text}
              </div>
            ))
          }
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder='Type your message'
            onChange={(e) => Setinput(e.target.value)}
            value={input}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App

