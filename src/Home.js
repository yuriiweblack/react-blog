import React from "react";
import Feed from "./Feed";

const Home = ({posts}) => {
    console.log(posts)
    return(
        <main className="home">
             {posts.length ? (
                <Feed posts={posts} />
                ) : (
                <p style={{margin: "20px"}}>
                Posts are not found!
                </p>
            )}
        </main>
    )
}

export default Home;