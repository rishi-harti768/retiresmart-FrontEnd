'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import './page.css'
import Default from '@/components/default/Default'

interface User {
  id: number
  name: string
  age: number
}

const dummyTable: User[] = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
  { id: 4, name: "Alice Williams", age: 28 },
  { id: 5, name: "Charlie Brown", age: 32 },
]

const Dashboard: React.FC = () => {
  const router = useRouter()

  const handleViewAnalysis = (userId: number) => {
    // Navigate to the result page for the clicked user
    router.push(`/result/${userId}`)
  }

  const handleNewAnalysis = () => {
    // Navigate to the retirement calculator form
    router.push('/retirement-calculator')
  }

  return (
    <Default current='Dashboard'>
    <div className="container">
      <div className="dashboard">
        <h1 className="dashboard-title">Retirement Analysis Dashboard</h1>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Analysis</th>
            </tr>
          </thead>
          <tbody>
            {dummyTable.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button 
                    className="button"
                    onClick={() => handleViewAnalysis(user.id)}
                  >
                    View Analysis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="button new-analysis-button" onClick={handleNewAnalysis}>
          Start New Analysis
        </button>
      </div>
    </div>
   </Default>
  )
}

export default Dashboard

