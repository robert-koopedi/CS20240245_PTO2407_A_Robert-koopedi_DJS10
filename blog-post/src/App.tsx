import {useEffect, useState } from 'react'
import './App.css'
// import   from 'blog-post\src\index.css'

type Post = {
  id: number
  title: string
  body: string
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts.')
          
        }
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
      .catch(err => {
        setError(err.message)
      })
      
  }, [])
  
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <>
      <div>
      <h1>Blog Post</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
     </>
  )
}

export default App
