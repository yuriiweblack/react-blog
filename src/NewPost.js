import React from "react";


const NewPost =({postTitle,setpostTitle,postBody,setpostBody, handleSubmit}) => {
    return(
        <main className="newPost">
            <h2 className="newPost-title">New Post!</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle"><strong>Title:</strong></label>
            <input
                type="text"
                id="postTitle"
                required
                value={postTitle}
                onChange={e => setpostTitle(e.target.value)}
            />
            <label htmlFor="postBody"><strong>Body:</strong></label>
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