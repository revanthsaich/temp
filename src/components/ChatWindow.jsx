import React, { useState } from 'react';

const ChatWindow = ({ aiType }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simulate AI response (replace this with actual API call in a full-stack app)
    const aiResponses = {
      diagnose: `AI Diagnosis Response: Based on your input "${input}", you might want to consult a doctor.`,
      diet: `AI Diet Response: Based on your input "${input}", consider eating more fruits and vegetables.`,
      fitness: `AI Fitness Response: Based on your input "${input}", try doing cardio exercises regularly.`,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponses[aiType] }]);
    }, 1000); // Simulate network delay
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.aiMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    width: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    padding: '10px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px',
  },
  userMessage: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  aiMessage: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    borderRadius: '5px',
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  inputContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    marginLeft: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatWindow;