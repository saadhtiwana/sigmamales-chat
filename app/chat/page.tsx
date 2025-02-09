"use client"

import { useState } from "react"
import { Bell, MessageSquare, Settings, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ChatPlatform() {
  const [messages] = useState([
    { id: 1, user: "Alex", content: "Just finished the new project! 🚀", time: "2m ago" },
    { id: 2, user: "Sam", content: "Great work everyone!", time: "1m ago" },
    { id: 3, user: "Jordan", content: "The designs look amazing", time: "just now" },
  ])

  const [users] = useState([
    { id: 1, name: "Alex", status: "Online", role: "Admin" },
    { id: 2, name: "Sam", status: "Online", role: "Moderator" },
    { id: 3, name: "Jordan", status: "Away", role: "Member" },
  ])

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-cyan-400">ChatHub</h1>
        </div>

        <nav className="space-y-2 mb-8">
          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Members
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>

        <div className="flex-1">
          <h2 className="text-sm font-semibold text-gray-400 mb-4">Online Members</h2>
          <div className="space-y-2">
            {users.map((user) => (
              <div key={user.id} className="flex items-center space-x-2">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 h-2 w-2 rounded-full ${
                      user.status === "Online" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-gray-800 flex items-center px-6">
          <h2 className="text-lg font-semibold">General Chat</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className="p-4 bg-gray-800 border-gray-700">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback>{message.user[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{message.user}</span>
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                  <p className="mt-1">{message.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="h-24 border-t border-gray-800 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Button className="bg-cyan-500 hover:bg-cyan-600">Send</Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

