"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { Bell, MessageSquare, Settings, Users, Search, Crown, Shield, Zap } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ChatPlatform() {
  const { messages: chatMessages, input, handleInputChange, handleSubmit } = useChat()
  const [searchQuery, setSearchQuery] = useState("")

  const members = [
    {
      id: 1,
      name: "Saad Tiwana",
      status: "Online",
      role: "Owner",
      quote: "I alone can't change the world, but I ca...",
    },
    {
      id: 2,
      name: "Aayan Dar",
      status: "Online",
      role: "Admin",
      quote: "....",
    },
    {
      id: 3,
      name: "Asjad Saleh Khokhar",
      status: "Sleeping",
      role: "Admin",
      quote: "Sleeping",
    },
    {
      id: 4,
      name: "Abdul Rahman",
      status: "Online",
      role: "Member",
      quote: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ 💙✨",
    },
    {
      id: 5,
      name: "Abdullah Cutie",
      status: "Available",
      role: "Member",
      quote: "Available",
    },
    {
      id: 6,
      name: "Abdullah PjtP",
      status: "Busy",
      role: "Member",
      quote: "Busy",
    },
    {
      id: 7,
      name: "Abdullah Saudi",
      status: "Online",
      role: "Member",
      quote: "",
    },
    {
      id: 8,
      name: "Ahsan",
      status: "Online",
      role: "Member",
      quote: "Alhamdulillah",
    },
    {
      id: 9,
      name: "Areeb Ahmad",
      status: "Online",
      role: "Member",
      quote: "",
    },
  ]

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Owner":
        return <Crown className="h-4 w-4 text-yellow-400" />
      case "Admin":
        return <Shield className="h-4 w-4 text-cyan-400" />
      default:
        return <Zap className="h-4 w-4 text-blue-400" />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Sidebar */}
      <div className="w-72 bg-black/40 backdrop-blur-xl p-4 flex flex-col border-r border-white/10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            SigmaMales
          </h1>
        </div>

        <nav className="space-y-2 mb-8">
          {["Chat", "Members", "Notifications", "Settings"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="w-full justify-start cyber-button bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-all duration-300"
            >
              {item === "Chat" && <MessageSquare className="mr-2 h-4 w-4" />}
              {item === "Members" && <Users className="mr-2 h-4 w-4" />}
              {item === "Notifications" && <Bell className="mr-2 h-4 w-4" />}
              {item === "Settings" && <Settings className="mr-2 h-4 w-4" />}
              {item} {item === "Members" && `(${members.length})`}
            </Button>
          ))}
        </nav>

        <div className="flex-1">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search members"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 cyber-input text-gray-300"
            />
          </div>
          <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-300px)]">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-transparent group-hover:border-blue-500 transition-all duration-300">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500">
                      {member.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-900 ${
                      member.status === "Online"
                        ? "bg-green-500"
                        : member.status === "Busy"
                          ? "bg-red-500"
                          : member.status === "Available"
                            ? "bg-yellow-500"
                            : "bg-gray-500"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium truncate flex items-center gap-2">
                      {member.name}
                      {getRoleIcon(member.role)}
                    </span>
                    {member.role === "Owner" && <span className="ml-2 text-xs owner-tag font-bold">OWNER</span>}
                    {member.role === "Admin" && <span className="ml-2 text-xs text-cyan-400 font-bold">ADMIN</span>}
                  </div>
                  <div className="text-xs text-gray-400 truncate">{member.quote}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-black/30 backdrop-blur-sm">
        <header className="h-16 border-b border-white/10 flex items-center px-6 bg-black/20">
          <h2 className="text-lg font-semibold text-blue-400">General Chat</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((message) => (
            <Card
              key={message.id}
              className="message-card p-4 bg-black/40 border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <Avatar className="h-10 w-10 border-2 border-blue-500/30">
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500">
                    {message.role === "user" ? "ST" : "AI"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-blue-400">
                      {message.role === "user" ? "Saad Tiwana" : "Assistant"}
                    </span>
                    {message.role === "user" && <span className="text-xs owner-tag font-bold">OWNER</span>}
                    <span className="text-xs text-gray-400">just now</span>
                  </div>
                  <p className="mt-1 text-gray-300">{message.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="h-24 border-t border-white/10 p-4 bg-black/20">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              value={input}
              onChange={handleInputChange}
              type="text"
              placeholder="Type your message..."
              className="flex-1 cyber-input rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
            />
            <Button
              type="submit"
              className="cyber-button bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Send
            </Button>
          </form>
        </footer>
      </div>
    </div>
  )
}

