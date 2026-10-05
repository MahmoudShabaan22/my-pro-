import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // ملاحظة: في الـ Docker Compose سنغير هذا الـ URL
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.error("Error fetching data:", err))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>DevOps Fullstack Project</h1>
      <p>Status: {data ? data : "Connecting to backend..."}</p>
    </div>
  )
}

export default App