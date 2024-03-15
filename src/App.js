import React, {useState,useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import './App.css';
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Missing from './Missing';
import PostPage from './PostPage';
import NewPost from './NewPost';

function App() {

  const [posts, setPosts] = useState([
    {
      id : 1,
      title: "My first Post",
      datetime: "July 02, 2023 12:36:25 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
    },
    {
      id : 2,
      title: "My second Post",
      datetime: "July 03, 2023 10:26:24 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
    },
    {
      id : 3,
      title: "My third Post",
      datetime: "July 04, 2023 13:25:25 PM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
    },
    {
      id : 4,
      title: "My fourth Post",
      datetime: "July 08, 2023 13:25:25 PM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
    },
    {
      id : 5,
      title: "My fifth Post",
      datetime: "July 09, 2023 16:25:25 PM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aspernatur culpa explicabo obcaecati in cupiditate"
    }
   

  ]);

  // const [posts, setPosts] = useState([])

  const [search, setSearch] = useState("");
  const [searchResalt, setSearchResalt] = useState([]);
  const [postTitle, setpostTitle] = useState("");
  const [postBody, setpostBody] = useState("");

  const navigate = useNavigate()

  const handleDelete = id => {
    const postList = posts.filter(post => post.id !== id)
    setPosts(postList)
    navigate("/")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(),'MMMM do yyyy, h:mm:ss a');
    // alert(datetime)
    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime
    }

    const allPost = [...posts, newPost]
    setPosts(allPost)
    setpostTitle("")
    setpostBody("")
    navigate("/")

  }

// console.log(posts[posts.length - 1].id + 1)
// let datetime = format(new Date(),'MMMM do yyyy, h:mm:ss a')
// console.log(datetime)

  return (
    
    <Routes>
      <Route path='/' element={<Layout
       posts={posts}
       search={search}
       setSearch={setSearch}
       />}>

      <Route path='post'>
        <Route index element={<NewPost
          postTitle={postTitle}
          setpostTitle={setpostTitle}
          postBody={postBody}
          setpostBody={setpostBody}
          handleSubmit = {handleSubmit}
        />}/>
       <Route path=':id' element={<PostPage 
        posts={posts}
        handleDelete={handleDelete}
        
       />}/>
      </Route>
        <Route index element={<Home posts={posts}/>}/>
        <Route path='about' element={<About />}/>
        <Route path='*' element={<Missing />}/>
        
      </Route>
    </Routes>

  );
}

export default App;
