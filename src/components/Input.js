import { useState } from 'react'

const USERNAME = 'brian'

const Input = ({ setPosts }) => {
  const [text, setText] = useState('')

  const addPost = () => {
    const newPost = {
      username: USERNAME,
      text: text
    }
    setPosts(prev => [newPost, ...prev])
    setText('')
  }

  return (
    <div className="inputContainer">
      <input type="text" placeholder="What is happening?" className="postInput" value={text} onChange={(e) => setText(e.target.value)} />
      <button className="postButton" onClick={addPost}>Post</button>
    </div>
  )
}

export default Input
