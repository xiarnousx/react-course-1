import React from "react";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";
import Post from "./Post";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((item, idx) => (
            <Post
              key={idx}
              author={item.author}
              body={item.body}
              id={item.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <h2 style={{ textAlign: "center" }}>There are no posts</h2>
      )}
    </>
  );
}

export default PostList;
