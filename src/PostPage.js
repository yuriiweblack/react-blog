import React from "react";
import { Link, useParams } from "react-router-dom";


const PostPage = ({posts, handleDelete}) => {

 const {id} = useParams()

 const post = posts.find(post => (post.id).toString() === id);
 console.log(post);

 return(
  <main className="postPage">
   {post && 
    <>
    <h2 className="postTitle">{post.title}</h2>
    <p className="postData">
        {post.datetime}
    </p>
    <p className="postBody">
        {post.body}
    </p>
    <button className="post_button" onClick={() => handleDelete(post.id)}>
        Delete Post
    </button>
   </>
    } { !post &&
        <main className="missing" style={{height: "calc(100vh - 214px)"}}>
            <div className="missing__container">
                <h2 className="about__missing">Post Not found!</h2>
                <p className="missing__text">This post doesn't existing!</p>
                <Link className="missing-link" to="/">Visit our page</Link>
            </div>
        </main>
    }
  </main>
 )


}

export default PostPage;