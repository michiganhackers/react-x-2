import './App.css';
import Input from './components/Input';
import { useState } from 'react'

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.username}</h3>
      <p>{post.text}</p>
    </div>
  )
}

function App() {

  const DEFAULT_POSTS = [
    {
      id: 2,
      username: 'sahilsawant',
      text: 'I failed EECS 281'
    },
    {
      username: 'briantravis',
      text: 'alsdkfjalksdjflakjd!'
    },
    {
      username: 'briantravis',
      text: 'Hello world!'
    },
    {
      username: 'briantravis',
      text: 'Hello world!'
    },
  ]

  // const [count, setCount] = useState(0)
  const [posts, setPosts] = useState(DEFAULT_POSTS)

  return (
    <div className="appContainer">
      <div className="nav">
        <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=ais" />
      </div>
      <Input setPosts={setPosts} />
      <div className="postContainer">
        {posts.map((post) => <Post post={post} />)}
      </div>
      {/* <p>{count}</p>
      <button onClick={() => { setCount(prev => prev + 1) }}>+</button> */}
    </div>
  );
}

export default App;
