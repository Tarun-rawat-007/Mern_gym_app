import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const generateAnswer = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: question, timestamp: new Date().toLocaleTimeString() },
      { type: "bot", text: "Loading . . .", timestamp: new Date().toLocaleTimeString() }
    ]);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{
                text: `Answer as a fitness coach. Keep it **brief, clear, and in a numbered list** format. Each point should be on a new line.Now, provide a response to: ${question}`
              }]
            }
          ]
        }
      );

      let botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text.trim() || "No response from AI.";
      botResponse = botResponse.replace(/\*\*(.*?)\*\*/g, "$1").replace(/• /g, "");

      setChatHistory((prev) => [
        ...prev.slice(0, -1), // Remove "AI is typing..."
        { type: "bot", text: botResponse, timestamp: new Date().toLocaleTimeString() }
      ]);
    } catch (error) {
      console.error("Error fetching answer:", error);
      setChatHistory((prev) => [...prev, { type: "bot", text: "⚠️ Error: Unable to generate a response.", timestamp: new Date().toLocaleTimeString() }]);
    }

    setQuestion("");
    setLoading(false);
  };

  return (
    <div >
      {/* Floating Chatbot Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ position: "fixed", bottom: "20px", right: "20px", background: "#007bff", color: "#fff", border: "none", padding: "12px 16px", borderRadius: "50%", cursor: "pointer", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",zIndex:"20" }}
      >
        💬
      </button>

      {/* Chatbot Box */}
      {isOpen && (
  <div style={{ 
    position: "fixed", 
    bottom: "80px", 
    right: "20px", 
    width: "380px", 
    height: "500px",  // Increased height
    background: "#fff", 
    borderRadius: "10px", 
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
    padding: "12px", 
    display: "flex", 
    flexDirection: "column",
    zIndex:"20"
  }}>
    <h3 style={{ textAlign: "center", margin: 0, paddingBottom: "10px", fontSize: "16px" }}>FitAssist AI Bot</h3>

    <div style={{ 
      height: "400px",  // Increased chat area height
      overflowY: "auto", 
      borderBottom: "1px solid #ccc", 
      paddingBottom: "10px", 
      marginBottom: "10px", 
      display: "flex", 
      flexDirection: "column"
    }}>
      {chatHistory.map((msg, index) => (
        <div key={index} style={{ 
          backgroundColor: msg.type === "user" ? "#007bff" : "#f1f1f1", 
          color: msg.type === "user" ? "#fff" : "#333", 
          padding: "6px 12px", 
          borderRadius: "12px", 
          marginBottom: "5px", 
          alignSelf: msg.type === "user" ? "flex-end" : "flex-start", 
          maxWidth: "75%", 
          fontSize: "14px", 
          wordBreak: "break-word" 
        }}>
          <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/(\d+\.)/g, "<br/>$1") }} />
          <div style={{ fontSize: "10px", textAlign: "right", opacity: 0.6 }}>{msg.timestamp}</div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>

    {/* Input Field */}
    <div style={{ display: "flex", gap: "6px" }}>
      <input 
        type="text" 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && generateAnswer()} 
        placeholder="Ask me anything about fitness..."
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", width: "100%", fontSize: "14px" }}
      />
      <button 
        onClick={generateAnswer} 
        disabled={loading} 
        style={{ background: "#007bff", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", fontSize: "14px" }}
      >
        {loading ? "⏳" : "Send"}
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Chatbot;
