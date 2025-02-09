"use client"

import { useState } from "react"

export default function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", isAdmin: true },
    { id: 2, name: "Bob", isAdmin: false },
    { id: 3, name: "Charlie", isAdmin: false },
  ])

  const toggleAdmin = (userId: number) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user)))
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Admin Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>
                <button
                  onClick={() => toggleAdmin(user.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Toggle Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

