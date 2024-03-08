import React from "react";


const NewPost =({postTitle,setpostTitle,postBody,setpostBody}) => {
    return(
        <main className="newPost">
            <h2 className="newPost-title">New Post!</h2>
            <form className="newPostForm">
            <label >Title: </label>
            <input
                type="text"
                id="postTitle"
                required
                value={postTitle}
                onChange={e => setpostTitle(e.target.value)}
            />
            <label>Body: </label>
            <textarea
                id="postBody"
                required
                value={postBody}
                onChange={e => setpostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost;