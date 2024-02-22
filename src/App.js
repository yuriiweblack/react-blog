import React, {useState,useEffect} from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Missing from './Missing';

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

  const [search, setSearch] = useState("");
  const [searchResalt, setSearchResalt] = useState([]);



  return (
    
    <Routes>
      <Route path='/' element={<Layout
       posts={posts}
       search={search}
       setSearch={setSearch}
       />}>
        <Route index element={<Home posts={posts}/>}/>
        <Route path='about' element={<About />}/>
        
      </Route>
    </Routes>

  );
}

export default App;
