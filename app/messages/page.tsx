"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

export default function MessagingSystem() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "John", content: "Hi, I'm interested in your startup idea!", timestamp: new Date() },
    { id: 2, sender: "You", content: "Great! What skills can you bring to the team?", timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage.trim(),
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-[600px] flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ScrollArea className="flex-grow mb-4 p-4 border rounded-md">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <p className="font-semibold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-xs text-gray-500">{message.timestamp.toLocaleTimeString()}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex space-x-2">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

