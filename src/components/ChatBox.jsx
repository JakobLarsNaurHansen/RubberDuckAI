import { useState, useRef, useEffect } from 'react'
import Message from './Message'


const hardcodedReplies = [
    "Hmm... sounds like a you problem.",
    "Sorry, I was having a duck nap. Can you explain it again?",
    "I have an idea, but it would help if you could be more specific.",
    "I don’t quite understand — can you elaborate?",
    "Hmmmm, can you explain in more detail?",
    "Walk me through it step by step, like I’m a very smart duck.",
    "What’s the expected behavior? And what actually happens?",
    "Let’s take it from the top — what’s the first thing that happens?",
    "Why do you think it’s behaving this way?",
    "Did anything change recently in your code?",
    "Try explaining it like you would to a rubber duck (oh wait).",
    "Pretend I know nothing — what are you trying to achieve?",
    "Have you considered logging the intermediate steps?",
    "What would you tell someone else with this exact issue?",
    "What happens if you isolate just that part of the code?",
    "Maybe break it down into smaller pieces — what works and what doesn’t?",
    "Okay, but what’s *really* confusing you here?",
    "What’s the simplest possible version of this problem?",
    "Have you tested your assumptions?",
    "Quack. Try rephrasing that for clarity.",
  ]
  

function ChatBox({setDuckIsThinking}) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
  
    const newMessage = { from: 'user', text: input }
    setMessages((prev) => [...prev, newMessage])
    setInput('')
  
    setDuckIsThinking(true)
  
    setTimeout(() => {
      const duckResponse = {
        from: 'duck',
        text: hardcodedReplies[Math.floor(Math.random() * hardcodedReplies.length)],
      }
      setMessages((prev) => [...prev, duckResponse])
      setDuckIsThinking(false)
    }, 800)
  }
  
  
const bottomRef = useRef(null)
useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
}, [messages])

  const styles = {
    chatContainer: {
      padding: '1rem',
      borderRadius: '12px',
      width: '100%',
      boxSizing: 'border-box',
    },
    messages: {
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      },
    form: {
      display: 'flex',
      gap: '0.5rem',
    },
    input: {
      flexGrow: 1,
      padding: '0.5rem',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      backgroundColor: '#007bff',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    divider: {
        border: 'none',
        borderTop: '1px solid #000',
        margin: '1rem 0',
      }
      
  }

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messages}>
  {messages.map((msg, i) => (
    <div key={i}>
      <Message from={msg.from} text={msg.text} />
      {msg.from === 'duck' && <hr style={styles.divider} />}
    </div>
  ))}
  <div ref={bottomRef} />
</div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk to the duck..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatBox
